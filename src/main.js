import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// CSS
// <!-- Soho css -->
import "./assets/dist/css/soho.min.css";
import "./assets/dist/css/app.css";
import "./assets/dist/css/custom.css";
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
// import '../public/vendor/jquery.nicescroll.min';
// import '../public/vendor/soho.min';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
