export default {
  async getQueues(context) {
    const token = context.rootGetters["auth/token"];
    if (token) {
      const url = context.rootGetters.URL_GET_WORK_ORDER;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.statusCode == 401) {
          context.dispatch("auth/resetCookies", null, { root: true });
        } else {
          console.error(response);
        }
      }

      const { data } = responseData;
      context.commit("initialQueues", data);
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },

  async getInteraction(context, payload) {
    const token = context.rootGetters["auth/token"];
    if (token) {
      const url = context.rootGetters.URL_GET_INTERACTION(payload);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.statusCode == 401) {
          context.dispatch("auth/resetCookies", null, { root: true });
        } else {
          console.error(response);
        }
      }

      const { data } = responseData;
      context.commit("initialChatMessage", data);
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },

  async sendMessageWhatsapp(context, payload) {
    const token = context.rootGetters["auth/token"];
    if (token) {
      const url = context.rootGetters.URL_OUTGOING_WHATSAPP;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      if (!response.ok) {
        if (responseData.statusCode == 401) {
          context.dispatch("auth/resetCookies", null, { root: true });
        } else {
          console.error(responseData);
          return responseData;
        }
      }

      return responseData;
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },
};
