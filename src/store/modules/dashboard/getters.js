export default {
  getState: (state) => (type) => {
    return state[type];
  },
};
