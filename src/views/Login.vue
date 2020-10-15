<template>
  <div style="height: 100vh" class="form-membership background-clouds">
    <div class="form-wrapper">
      <!-- logo -->
      <div class="logo background-yellow">
        <i class="logo_chat_icon" style="width:70px !important"></i>
      </div>
      <!-- ./ logo -->

      <h4 class="font-weight-bold mb-3">Sign in</h4>
      <h6 class="text-center text-grey mb-4 font-14">
        Please enter your username and password
      </h6>
      <!-- form -->
      <form>
        <div class="input-group">
          <div class="input-group-prepend h-42">
            <span class="input-group-text" id="inputGroupPrepend"
              ><i class="user2_icon"></i
            ></span>
          </div>
          <input
            type="text"
            class="form-control h-form"
            id="validationCustomUsername"
            placeholder="Username or Email"
            aria-describedby="inputGroupPrepend"
            required
          />
          <div class="invalid-feedback">
            Please choose a username.
          </div>
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
            id="validationCustomUsername"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
          />
          <span class="hide_position"><i class="hide_pass_icon"></i></span>
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
        <div class="form-group d-flex justify-content-between">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              checked=""
              id="customCheck1"
            />
            <label class="custom-control-label" for="customCheck1"
              >Remember me</label
            >
          </div>
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
      password: ""
    };
  },
  methods: {
    async login() {
      const actionPayload = {
        username: this.username,
        password: this.password
      };

      await this.$store.dispatch("login", actionPayload);
    }
    // getData(){
    //   this.$store.dispatch("checkLogin");
    // }
  }
};
</script>

<style scoped>
/* .form-membership .background-clouds {
  height: 100vh !important;
} */
</style>
