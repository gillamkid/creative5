const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

// Configure multer so that it will upload to '/public/images'
let project_path = '/var/www/byujokes.com/dist'
let image_path = '/img/'

const users = require("./users.js");
const User = users.model;

const itemSchema = new mongoose.Schema({
    username: String,
    jokeID: Number,
    favorite: Boolean,
}).index({ username: 1, jokeID: 1 }, { unique: true });

const Item = mongoose.model('Item', itemSchema);

router.post('/', async (req, res) => {
    console.log("what is going on? post /items");
    const item = new Item({
        username: req.body.username,
        jokeID: req.body.jokeID,
        favorite: req.body.favorite,
    });
    try {
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    console.log("what is going on? put /items/:id");
    try {
        let item = await Item.findOne({
            _id: req.params.id
        });
        item.favorite = req.body.favorite;
        await item.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    console.log("what is going on? delete /items/:id");
    try {
        await Item.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all of the items in the museum.
router.get('/', auth.verifyToken, User.verify, async (req, res) => {
    console.log("what is going on? get /items");
    try {
        let items = await Item.find({
          username: req.user.username
        });
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


module.exports = {
  model: Item,
  routes: router,
}
