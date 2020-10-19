
// import Vue from "vue";

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
  initialChatMessage(state, payload) {
    const data = payload.map((row) => {
      return {
        id: row.id,
        name: row.fromName ? row.fromName : row.from,
        from: row.from,
        convId: row.convId,
        message: row.message,
        media: row.media,
        actionType: row.actionType,
        messageDate: Date(row.sendDate),
        isMedia: row.media ? true : false,
      };
    });

    const sessionId = payload[0].sessionId;
    let newObject = {}
    newObject[sessionId] = data
    // Vue.set(state.chatMessages, sessionId, data)
    state.chatMessages = { ...state.chatMessages, ...newObject };
  },
  addChatMessage(state, payload) {
    const data = {
      id: payload.id,
      name: payload.fromName ? payload.fromName : payload.from,
      from: payload.from,
      convId: payload.convId,
      message: payload.message,
      media: payload.media,
      actionType: payload.actionType,
      messageDate: Date(payload.sendDate),
      isMedia: payload.media ? true : false,
    };
    state.chatMessages[payload.sessionId].push(data);
  },
  resetState(state) {
    state.queuesChat = [];
    state.queuesVideo = [];
    state.queuesCall = [];
    state.chatMessages = {};
  },
};
