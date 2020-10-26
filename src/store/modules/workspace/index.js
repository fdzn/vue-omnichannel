import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      jumQueue: {
        chat: 0,
        call: 0,
        video: 0,
      },
      queuesChat: [],
      queuesVideo: [],
      queuesCall: [],
      chatMessages: {},
      customerData: [],
      cwc: [],
    };
  },
  mutations,
  actions,
  getters,
};
