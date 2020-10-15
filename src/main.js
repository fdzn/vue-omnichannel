import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import socketio from "socket.io";
import VueSocketIO from "vue-socket.io";

// CSS
// <!-- Soho css -->
import "./assets/dist/css/soho.min.css";
import "./assets/dist/css/app.css";
import "./assets/dist/css/custom.css";
Vue.config.productionTip = false;

//SOCKET
Vue.use(new VueSocketIO({
    debug: true,
    connection: process.env.VUE_APP_URL_SOCKET,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}))

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
