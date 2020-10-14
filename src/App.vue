<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
@import "./assets/dist/css/soho.min.css";
@import "./assets/dist/css/app.css";
@import "./assets/dist/css/custom.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://emoji-css.afeld.me/emoji.css");
</style>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  created() {
    this.$store.dispatch("checkLogin");
  },
  watch: {
    isLogin(curValue) {
      if (curValue) {
        this.$router.replace("/");
      } else {
        this.$router.replace("/login");
      }
      // if (curValue && curValue !== oldValue) {
      //   this.$router.replace("/coaches");
      // }
    },
  },
};
</script>
