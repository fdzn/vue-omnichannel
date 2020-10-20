// import Vue from "vue";

export default {
  initialQueues(state, payload) {
    let arrayChat = [];
    let arrayCall = [];
    let arrayVideo = [];
    for (let index = 0; index < payload.length; index++) {
      const row = payload[index];
      switch (row.channelId) {
        case "whatsapp":
          arrayChat.push({
            sessionId: row.sessionId,
            name: row.fromName ? row.fromName : row.from,
            isPriority: Boolean(row.priority),
            lastMessageTime: row.lastChat.sendDate,
            lastMessage: row.lastChat.message,
          });
          break;

        default:
          break;
      }
      state.queuesChat = arrayChat;
      state.queuesVideo = arrayCall;
      state.queuesCall = arrayVideo;
    }
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
  addQueues(state, payload) {
    switch (payload.channelId) {
      case "whatsapp":
        state.queuesChat.push({
          sessionId: payload.sessionId,
          name: payload.fromName ? payload.fromName : payload.from,
          isPriority: Boolean(payload.priority),
          lastMessageTime: payload.lastChat.sendDate,
          lastMessage: payload.lastChat.message,
        });
        break;

      default:
        break;
    }
  },

  updateQueuesByLastMessage(state, payload) {
    const { sessionId } = payload;
    const index = state.queuesChat.findIndex((x) => x.sessionId === sessionId);
    const lastMessage = payload.message
      ? payload.message
      : state.queuesChat[index].lastMessage;
    const lastMessageTime = payload.sendDate
      ? payload.sendDate
      : state.queuesChat[index].lastMessageTime;
    state.queuesChat[index].lastMessage = lastMessage;
    state.queuesChat[index].lastMessageTime = lastMessageTime;
  },
  setJumQueue(state, payload) {
    let data = {
      chat: 0,
      call: 0,
      video: 0,
    };
    for (const [key] of Object.entries(payload)) {
      switch (key) {
        case "whatsapp":
          data.chat += Number(payload[key]);
          break;
        default:
          break;
      }
    }
    state.jumQueue = data;
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
        sendStatus: Boolean(row.sendStatus),
        messageDate: Date(row.sendDate),
        systemMessage: row.systemMessage,
        isMedia: row.media ? true : false,
      };
    });

    const sessionId = payload[0].sessionId;
    let newObject = {};
    newObject[sessionId] = data;
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
      sendStatus: Boolean(payload.sendStatus),
      messageDate: Date(payload.sendDate),
      systemMessage: payload.systemMessage,
      isMedia: payload.media ? true : false,
    };
    state.chatMessages[payload.sessionId].push(data);
  },

  updateChatMessage(state, payload) {
    const { sessionId, id } = payload;
    const index = state.chatMessages[sessionId].findIndex((x) => x.id === id);
    state.chatMessages[sessionId][index].sendDate = payload.sendDate;
    state.chatMessages[sessionId][index].sendStatus = payload.sendStatus;
    state.chatMessages[sessionId][index].systemMessage = payload.systemMessage;
  },
  resetState(state) {
    state.jumQueue.chat = 0;
    state.jumQueue.call = 0;
    state.jumQueue.video = 0;
    state.queuesChat = [];
    state.queuesVideo = [];
    state.queuesCall = [];
    state.chatMessages = {};
  },
};
