<template>
  <router-view />
</template>

<style>
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
