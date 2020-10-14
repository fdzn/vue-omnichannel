import Vue from 'vue'
import App from './App.vue'
import router from './router'

// CSS
// <!-- Soho css -->
import "./assets/dist/css/soho.min.css";
import "./assets/dist/css/app.css";
import "./assets/dist/css/custom.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
