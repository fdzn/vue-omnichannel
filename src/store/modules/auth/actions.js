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

    await context.dispatch("setCookies", data);
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

  async setCookies(context, token) {
    const url = `${process.env.VUE_APP_URL_BACKEND}/auth/getDataLogin`;
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
    Cookies.remove();
    context.commit("setLogoutState");
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
