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
      context.commit("setQueues", data);
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },

  async getData(context, payload) {
    await context.dispatch("getInteraction", payload);

    const dataQueue = await context.getters.queuesBySessionId(
      payload.sessionId
    );
    await context.dispatch("getCustomerData", dataQueue.customerId);
  },

  async getInteraction(context, payload) {
    console.log("getInteraction");
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
      context.commit("setChatMessage", data);
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },

  async getCustomerData(context, customerId) {
    console.log("getCustomerData");
    const token = context.rootGetters["auth/token"];
    if (token) {
      const url = context.rootGetters.URL_GET_CUSTOMER_DATA(customerId);
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
      context.commit("setCustomerData", data);
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

  async updateContact(context, payload) {
    const token = context.rootGetters["auth/token"];
    if (token) {
      const url = context.rootGetters.URL_UPDATE_CONTACT;
      const response = await fetch(url, {
        method: "PUT",
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

      context.commit("updateContactData", payload);
      return responseData;
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },

  async updateCustomer(context, payload) {
    const token = context.rootGetters["auth/token"];
    if (token) {
      const url = context.rootGetters.URL_UPDATE_CUSTOMER;
      const response = await fetch(url, {
        method: "PUT",
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

      context.commit("updateCustomerData", payload);
      return responseData;
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },
};
