export default {
  SOCKET_newInteractionWhatsapp(context, message) {
    console.log("SOCKET_newInteractionWhatsapp", message);
    context.commit("workspace/addChatMessage", message);
    context.commit("workspace/updateQueuesByLastMessage", message);
  },
  SOCKET_updateStatusMessage(context, message) {
    console.log("SOCKET_updateStatusMessage", message);
    context.commit("workspace/updateChatMessage", message);
    context.commit("workspace/updateQueuesByLastMessage", message);
  },
  SOCKET_countQueue(context, message) {
    console.log("SOCKET_countQueue", message);
    context.commit("workspace/setJumQueue", message);
  },
  SOCKET_newQueue(context, message) {
    console.log("SOCKET_newQueue", message);
    context.commit("workspace/addQueues", message);
  },
};
