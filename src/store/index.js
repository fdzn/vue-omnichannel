import Vue from "vue";
import Vuex from "vuex";

import actionRoot from "./action";
import gettersRoot from "./getter";
import mutationsRoot from "./mutation";
import authModule from "./modules/auth/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: actionRoot,
  getters: gettersRoot,
  mutations: mutationsRoot,
  modules: {
    auth: authModule,
  },
});
