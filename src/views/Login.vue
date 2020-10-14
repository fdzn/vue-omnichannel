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
            <span class="input-group-text" id="inputGroupPrepend"
              ><i class="user2_icon"></i
            ></span>
          </div>
          <input
            type="text"
            class="form-control h-form"
            placeholder="Username or Email"
            aria-describedby="inputGroupPrepend"
            v-model="username"
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>

        <div class="input-group">
          <div class="input-group-prepend h-42">
            <span class="input-group-text" id="inputGroupPrepend"
              ><i class="lock2_icon"></i
            ></span>
          </div>
          <input
            type="password"
            class="form-control h-form"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            v-model="password"
          />
          <span class="hide_position"><i class="hide_pass_icon"></i></span>
          <div class="invalid-feedback">Please choose a username.</div>
        </div>

        <button class="btn btn-blue btn-lg btn-block">Sign in</button>
        <hr />
      </form>
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
      const url = `${process.env.VUE_APP_URL_BACKEND}/auth/login`;
      const postData = {
        username: this.username,
        password: this.password,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      // console.log(response);
      const responseData = await response.json();
      console.log(responseData);
    },
  },
};
</script>