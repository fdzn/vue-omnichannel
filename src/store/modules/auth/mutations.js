export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.username = payload.username;
    state.tokenExpiration = payload.tokenExpiration;
    state.isLogin = true;
  },

  setLogoutState(state) {
    state.token = null;
    state.username = null;
    state.tokenExpiration = null;
    state.isLogin = false;
  },
};
