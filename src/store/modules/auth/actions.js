import Cookies from "js-cookie";

export default {
  async login(context, payload) {
    const url = `${process.env.VUE_APP_URL_BACKEND}/auth/login`;
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

    if (process.env.VUE_APP_HTTPS_STATUS == "1") {
      Cookies.set("token", data.accessToken, { secure: true });
    } else {
      Cookies.set("token", data.accessToken);
    }

    // localStorage.setItem("token", data.access_token);

    context.commit("setUser", {
      token: data.access_token,
      username: data.detailUser.username,
    });
  },

  async logout(context) {
    const token = Cookies.get("token");
    const url = `${process.env.VUE_APP_URL_BACKEND}/auth/logout`;
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
        console.log(responseData);
        return responseData;
      }
    }

    context.dispatch("resetCookies");
  },

  resetCookies(context) {
    Cookies.remove("token");
    context.commit("setLogoutState");
  },

  async checkLogin(context) {
    const token = Cookies.get("token");
    if (token) {
      const url = `${process.env.VUE_APP_URL_BACKEND}/auth/isLogin`;
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
          console.log(responseData);
          return responseData;
        }
      }

      const { data } = responseData;

      context.commit("setUser", {
        token: token,
        username: data.username,
      });
    } else {
      context.dispatch("resetCookies");
    }
  },
};
