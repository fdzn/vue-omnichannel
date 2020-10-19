export default {
  initialQueuesChat(state, payload) {
    const data = payload.map((row) => {
      return {
        sessionId: row.sessionId,
        name: row.fromName ? row.fromName : row.from,
        isPriority: Boolean(row.priority),
        lastMessageTime: row.lastChat.sendDate,
        lastMessage: row.lastChat.message,
      };
    });
    state.queuesChat = data;
  },
  addQueuesChat(state, payload) {
    const data = {
      sessionId: payload.sessionId,
      name: payload.fromName ? payload.fromName : payload.from,
      isPriority: Boolean(payload.priority),
      lastMessageTime: payload.lastChat.sendDate,
      lastMessage: payload.lastChat.message,
    };
    state.queuesChat.push(data);
  },
  addQueuesVideo(state, payload) {
    state.queuesVideo.push(payload);
  },
  addQueuesCall(state, payload) {
    state.queuesCall.push(payload);
  },
  resetState(state) {
    state.queuesChat = [];
    state.queuesVideo = [];
    state.queuesCall = [];
  },
};
