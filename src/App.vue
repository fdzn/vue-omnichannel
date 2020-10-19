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
      return this.$store.getters['auth/isLogin'];
    }
  },
  created() {
    this.$store.dispatch("auth/checkLogin");
  },
  watch: {
    isLogin(curValue) {
      console.log("ISLOGIN",curValue)
      if(curValue){
        this.$router.replace("/");
      }else{
        this.$router.replace("/login");
      }
      // if (curValue && curValue !== oldValue) {
      //   this.$router.replace("/");
      // } else {
      //   this.$router.replace("/login");
      // }
    }
  }
};
</script>

<style>
.list-queue {
  background-color: white !important;
}
.label-name {
  color: black !important;
}
</style>
