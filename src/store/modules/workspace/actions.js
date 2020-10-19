export default {
  getQueues(context, channelId) {
    const token = context.rootGetters["auth/token"];
    if (token) {
      const url = `${process.env.VUE_APP_URL_BACKEND}/interaction/loadWorkOrder/${channelId}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            if (res.status == 401) {
              context.dispatch("auth/resetCookies", null, { root: true });
              return;
            }
          }

          res
            .json()
            .then((resData) => {
              const { data } = resData;
              context.commit("initialQueuesChat", data);
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          //   console.error(err);
          console.error(err);
        });
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },
  getInteraction(context, payload) {
    const token = context.rootGetters["auth/token"];
    if (token) {
      const url = `${process.env.VUE_APP_URL_BACKEND}/interaction/getInteraction/${payload.channelId}/interaction/${payload.sessionId}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            if (res.status == 401) {
              context.dispatch("auth/resetCookies", null, { root: true });
              return;
            }
          }

          res
            .json()
            .then((resData) => {
              const { data } = resData;
              context.commit("initialChatMessage", data);
              // context.commit("initialQueuesChat", data);
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          //   console.error(err);
          console.error(err);
        });
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },

  async sendMessageWhatsapp(context, payload) {
    console.log("sendMessageWhatsapp");
    const token = context.rootGetters["auth/token"];
    if (token) {
      const url = `${process.env.VUE_APP_URL_BACKEND}/outgoing/whatsapp`;
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
          console.log(responseData);
          return responseData;
        }
      }

      return responseData;
      
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },
};
