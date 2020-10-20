export default {
  setUser(state, payload) {
    state.username = payload.username;
    state.isAux = payload.isAux;
    state.level = payload.level;
    state.unitId = payload.unitId;
    state.groupId = payload.groupId;
    state.token = payload.token;
    state.exp = payload.exp;
    state.iat = payload.iat;
    state.isLogin = true;
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
