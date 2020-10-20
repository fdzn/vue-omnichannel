const baseUrl = process.env.VUE_APP_URL_BACKEND;

export default {
  URL_LOGIN() {
    return `${baseUrl}/auth/login`;
  },
  URL_LOGOUT() {
    return `${baseUrl}/auth/logout`;
  },
  URL_GET_DATA_LOGIN() {
    return `${baseUrl}/auth/getDataLogin`;
  },
  URL_GET_WORK_ORDER() {
    return `${baseUrl}/interaction/getWorkOrder`;
  },
  URL_GET_INTERACTION: () => (payload) => {
    return `${baseUrl}/interaction/getInteraction/${payload.channelId}/interaction/${payload.sessionId}`;
  },
  URL_OUTGOING_WHATSAPP() {
    return `${baseUrl}/outgoing/whatsapp`;
  },
  URL_UPDATE_AUX() {
    return `${baseUrl}/autoin/updateAux`;
  },
};
