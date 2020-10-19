export default {
  SOCKET_newInteractionWhatsapp(context, message) {
    console.log("SOCKET_newInteractionWhatsapp", message);
    context.commit("workspace/addChatMessage", message);
  },
  SOCKET_updateStatusMessage(context, message) {
    console.log("SOCKET_updateStatusMessage", message);
  },
  SOCKET_countQueue(context, message) {
    console.log("SOCKET_countQueue", message);
  },

  SOCKET_newQueue(context, message) {
    console.log("SOCKET_newQueue", message);

    const data = {
      sessionId: message.sessionId,
      name: message.fromName ? message.fromName : message.from,
      isPriority: message.priority,
      lastMessageTime: message.lastChat.sendDate,
      lastMessage: message.lastChat.message,
    };

    switch (message.channelId) {
      case "whatsapp":
        context.commit("workspace/addQueuesChat", data);
        break;

      default:
        break;
    }
  },
};
