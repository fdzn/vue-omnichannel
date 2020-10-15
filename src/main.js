import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'

// CSS
// <!-- Soho css -->
import "./assets/dist/css/soho.min.css";
import "./assets/dist/css/app.css";
import "./assets/dist/css/custom.css";

// import store from "./store/index.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
