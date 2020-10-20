import Cookies from "js-cookie";

export default {
  async login(context, payload) {
    const url = context.rootGetters.URL_LOGIN;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: payload.username,
        password: payload.password,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return responseData;
    }

    const { data } = responseData;

    await context.dispatch("setCookies", data);
  },

  async logout(context) {
    const token = context.state.token;
    if (token) {
      const url = context.rootGetters.URL_LOGOUT;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        if (responseData.statusCode == 401) {
          context.dispatch("resetCookies");
          return;
        } else {
          return responseData;
        }
      }
      context.dispatch("resetCookies");
    } else {
      context.dispatch("resetCookies");
    }
  },

  async setCookies(context, token) {
    const url = context.rootGetters.URL_GET_DATA_LOGIN;
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
        context.dispatch("resetCookies");
        return;
      } else {
        return responseData;
      }
    }

    let { data } = responseData;
    data.token = token;
    context.commit("setUser", data);
    for (const property in data) {
      if (process.env.VUE_APP_HTTPS_STATUS == "1") {
        Cookies.set(property, data[property], {
          expires: data.exp,
          secure: true,
        });
      } else {
        Cookies.set(property, data[property], {
          expires: data.exp,
        });
      }
    }
  },

  resetCookies(context) {
    const data = Cookies.get();

    for (const [key] of Object.entries(data)) {
      Cookies.remove(key);
    }

    context.commit("workspace/resetState", null, { root: true });
    context.commit("resetState");
  },

  checkLogin(context) {
    const cookiesData = Cookies.get();
    if (cookiesData.token) {
      context.commit("setUser", cookiesData);
    } else {
      context.dispatch("resetCookies");
    }
  },
};
