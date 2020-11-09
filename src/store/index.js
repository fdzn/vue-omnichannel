import Vue from "vue";
import Vuex from "vuex";

import actionRoot from "./action";
import gettersRoot from "./getter";
import mutationsRoot from "./mutation";
import createPersistedState from "vuex-persistedstate";

import authModule from "./modules/auth/index.js";
import workspaceModule from "./modules/workspace/index.js";
import dashboardModule from "./modules/dashboard/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  actions: actionRoot,
  getters: gettersRoot,
  mutations: mutationsRoot,
  modules: {
    auth: authModule,
    workspace: workspaceModule,
    dashboard: dashboardModule,
  },
});
