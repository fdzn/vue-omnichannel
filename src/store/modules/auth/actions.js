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

    localStorage.setItem("token", data.access_token);
    
    context.commit("setUser", {
      token: data.access_token,
      username: data.detailUser.username,
    });
  },
};
