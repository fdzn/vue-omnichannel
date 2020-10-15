export default {
  setUser(state, payload) {
    state.username = payload.username;
    state.level = payload.level;
    state.unitId = payload.unitId;
    state.groupId = payload.groupId;
    state.token = payload.token;
    state.exp = payload.exp;
    state.iat = payload.iat;
    state.isLogin = true;
  },

  setLogoutState(state) {
    state.token = null;
    state.username = null;
    state.tokenExpiration = null;
    state.isLogin = false;
  },
};
