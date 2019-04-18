<template>
<div>
  <div v-if="user">
    <div class="header">
      <div>
        <h1>{{user.name}}</h1>
      </div>
      <div>
        <div>
          <a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i></a>
        </div>
      </div>
    </div>
    <p>Go to the <a href="/findjokes">Find Jokes</a> page to save your favorite jokes!</p>
    <escape-event @escape="escape"></escape-event>
    <uploader :show="show" @escape="escape" @uploadFinished="uploadFinished" />
    <image-gallery :photos="photos" />
  </div>
  <div v-else>
    <p>If you would like to save jokes, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import EscapeEvent from '@/components/EscapeEvent.vue'

export default {
  name: 'mypage',
  components: {
    EscapeEvent,
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  async created() {
    await this.$store.dispatch("getUser");
  },
  methods: {
    escape() {
      this.show = false;
    },
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.header {
  display: flex;
}

.header a {
  padding-left: 50px;
  color: #222;
  font-size: 2em;
}

.header svg {
  margin-top: 12px;
}
</style>
