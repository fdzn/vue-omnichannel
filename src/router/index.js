import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Workspace from "../views/Workspace.vue";
import store from "../store";
import socketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
    beforeEnter(to, from, next) {
      Vue.use(
        new VueSocketIO({
          debug: true,
          connection: socketIO(
            `${process.env.VUE_APP_URL_SOCKET}?username=${store.getters.username}&level=${store.getters.level}&groupId=${store.getters.groupId}`,
            {
              transports: ["websocket"],
            }
          ),
          vuex: {
            store,
            actionPrefix: "SOCKET_",
          },
        })
      );
      next();
    },
    children: [
      {
        path: "workspace",
        name: "Workspace",
        component: Workspace,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresUnauth: true },
  },
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isLogin) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters.isLogin) {
    next("/");
  } else {
    next();
  }
});

export default router;
