<template>
  <div class="home">
    <img src="/img/{{this.$route.params.id}}">
    <div>This is the Photo page
    </div>
  </div>
</template>

<template>
<div>
  <div class="image">
    <img :src="photo.path" />   
    <p class="photoTitle">{{photo.title}}</p>
    <p class="photoDate">
      <span v-if="user.name">{{user.name}}, </span>
      {{formatDate(photo.created)}}
    </p>
    <p>{{photo.description}}</p>
    <div v-if="user">
      <p v-if="error" class="error">{{error}}</p>
      <form @submit.prevent="addComment">
        <textarea v-model="msg" placeholder="write a new comment here"></textarea>
        <p></p>
        <button type="submit" class="pure-button">Add Comment</button>
      </form>
    </div>
    <br>
    <h3>Comments</h3>
    <div v-for="comment in comments">
      <hr>
      <p>Written: {{formatDate(comment.created)}}</p>
      <p>By: {{comment.user.name}}</p>
      <p>"{{comment.msg}}"</p>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Photo',
  data() {
    return {
      msg: '',
      photo: '',
      comments: [],
    }
  },
  async created() {
    await this.$store.dispatch("getUser");
    this.photo = await this.$store.dispatch("getPhoto", this.$route.params.id);
    this.comments = await this.$store.dispatch("getComments", this.photo._id);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    },
    async addComment() {
      try {
        let response = await this.$store.dispatch("addComment", {
          'photo': this.photo,
          'msg': this.msg,
          'user': this.user});
        if (response == 'success') {
          this.msg = '';
          this.comments = await this.$store.dispatch("getComments", this.photo._id);
	  console.log('look at comment');
        }
        else {
          alert('error: ' + response);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
