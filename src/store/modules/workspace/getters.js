export default {
  queuesChat(state) {
    return state.queuesChat;
  },
  queuesVideo(state) {
    return state.queuesVideo;
  },
  queuesCall(state) {
    return state.queuesCall;
  },
  chatMessage: (state) => (sessionId) => {
    if (typeof state.chatMessages[sessionId] !== "undefined") {
      return state.chatMessages[sessionId];
    } else {
      return [];
    }
  },

  queuesBySessionId: (state) => (sessionId) => {
    let found = state.queuesChat.find((x) => x.sessionId === sessionId);
    if (found) {
      return found;
    } else {
      found = state.queuesCall.find((x) => x.sessionId === sessionId);
      if (found) {
        return found;
      } else {
        found = state.queuesVideo.find((x) => x.sessionId === sessionId);
        if (found) {
          return found;
        }
      }
    }
  },

  customerById: (state) => (customerId) => {
    return state.customerData.find((x) => x.id === customerId);
  },
  contactByCustomerId: (state) => (customerId) => {
    const data = state.customerData.find((x) => x.id === customerId);
    return data.contact;
  },
};
