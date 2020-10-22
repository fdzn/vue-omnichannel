import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import socketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import { BootstrapVue } from 'bootstrap-vue'

// Component
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Workspace from "../views/Workspace.vue";
import InteractionChat from "../components/Workspace/Interaction/Chat.vue";

Vue.use(VueRouter);

// Install BootstrapVue
Vue.use(BootstrapVue)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
    beforeEnter(to, from, next) {
      if (!Vue.prototype.$socket) {
        Vue.use(
          new VueSocketIO({
            debug: true,
            connection: socketIO(
              `${process.env.VUE_APP_URL_SOCKET}?username=${store.getters["auth/username"]}&level=${store.getters["auth/level"]}&groupId=${store.getters["auth/groupId"]}`,
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
      }

      next();
    },
    children: [
      {
        path: "workspace",
        name: "Workspace",
        component: Workspace,
        meta: { requiresAuth: true },
        children: [
          {
            path: "chat/:channelId/:sessionId",
            name: "InteractionChat",
            component: InteractionChat,
            meta: { requiresAuth: true },
            props: true,
          },
        ],
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

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters["auth/isLogin"]) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters["auth/isLogin"]) {
    next();
  } else {
    next();
  }
});

export default router;
