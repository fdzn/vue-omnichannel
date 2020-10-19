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
          console.log(context);
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
};
