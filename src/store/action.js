export default {
  SOCKET_newInteractionWhatsapp(context, message) {
    console.log("SOCKET_newInteractionWhatsapp");
    console.log("state", context);
    console.log("message", message);
    context.commit("workspace/addChatMessage", message);
  },
  SOCKET_countQueue(context, message) {
    console.log("SOCKET_countQueue");
    console.log("state", context);
    console.log("message", message);
  },

  SOCKET_newQueue(context, message) {
    console.log("SOCKET_newQueue");
    console.log("state", context);
    console.log("message", message);

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
