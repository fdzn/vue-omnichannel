export default {
  setUser(state, payload) {
    if (payload.isAux === "true") {
      payload.isAux = true;
    }
    if (payload.isAux === "false") {
      payload.isAux = false;
    }
    state.username = payload.username;
    state.name = payload.name;
    state.isAux = payload.isAux;
    state.level = payload.level;
    state.unitId = payload.unitId;
    state.groupId = payload.groupId;
    state.token = payload.token;
    state.exp = payload.exp;
    state.iat = payload.iat;
    state.isLogin = true;
  },

  updateAux(state, payload) {
    state.isAux = payload;
  },

  resetState(state) {
    state.username = null;
    state.isAux = null;
    state.level = null;
    state.unitId = null;
    state.groupId = null;
    state.token = null;
    state.exp = null;
    state.iat = null;
    state.isLogin = false;
  },
};
