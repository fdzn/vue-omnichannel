export default {
  async dashboardAgent(context) {
    const token = context.rootGetters["auth/token"];
    console.log(token);
    if (token) {
      const url = context.rootGetters.URL_GET_DASHBOARD_AGENT;
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
          return;
        } else {
          return responseData;
        }
      }
      return responseData.data;
    } else {
      context.dispatch("auth/resetCookies", null, { root: true });
    }
  },
};
