import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      username: null,
      name: null,
      isAux: true,
      level: null,
      unitId: null,
      groupId: null,
      token: null,
      tokenExpiration: null,
      isLogin: false,
    };
  },
  mutations,
  actions,
  getters,
};
