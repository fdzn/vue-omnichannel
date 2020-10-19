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
};
