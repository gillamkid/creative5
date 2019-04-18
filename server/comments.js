const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");
const users = require("./users.js");
const User = users.model;
const photos = require("./photos.js");
const Photo = photos.model;

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  photo: {
    type: mongoose.Schema.ObjectId,
    ref: 'Photo'
  },
  msg: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Comment = mongoose.model('Comment', commentSchema);

// upload comment
router.post("/", auth.verifyToken, User.verify, async (req, res) => {
  const comment = new Comment({
    user: req.body.user,
    msg: req.body.msg,
    photo: req.body.photo,
  });
  try {
    await comment.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get comments by pic_id
router.get("/:photo_id", async (req, res) => {
  try {
    let comments = await Comment.find({
      photo: req.params.photo_id
    }).populate('user'); 
    return res.send(comments);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  model: Comment,
  routes: router,
}
