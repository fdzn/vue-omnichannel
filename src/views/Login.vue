<template>
  <div class="form-membership background-clouds">
    <div class="form-wrapper">
      <!-- logo -->
      <div class="logo background-yellow">
        <i class="logo_chat_icon" style="width: 70px !important"></i>
      </div>
      <!-- ./ logo -->

      <h4 class="font-weight-bold mb-3">Sign in</h4>
      <h6 class="text-center text-grey mb-4 font-14">
        Please enter your username and password
      </h6>
      <!-- form -->
      <form @submit.prevent="login">
        <div class="input-group">
          <div class="input-group-prepend h-42">
            <span class="input-group-text"><i class="user2_icon"></i></span>
          </div>
          <input
            type="text"
            class="form-control h-form"
            placeholder="Username or Email"
            v-model.trim="username"
          />
          <!-- <div class="invalid-feedback">Please choose a username.</div> -->
        </div>

        <div class="input-group">
          <div class="input-group-prepend h-42">
            <span class="input-group-text"><i class="lock2_icon"></i></span>
          </div>
          <input
            type="password"
            class="form-control h-form"
            placeholder="Password"
            v-model.trim="password"
          />
          <span class="hide_position"><i class="hide_pass_icon"></i></span>
          <div class="invalid-feedback">Please choose a username.</div>
        </div>

        <button class="btn btn-blue btn-lg btn-block">Sign in</button>
        <hr />
      </form>
        <!-- <button class="btn btn-blue btn-lg btn-block" @click="getData">GETDATA</button> -->
      <!-- ./ form -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const actionPayload = {
        username: this.username,
        password: this.password,
      };

      await this.$store.dispatch("login", actionPayload);
    },
    // getData(){
    //   this.$store.dispatch("checkLogin");
    // }
  },
};
</script>