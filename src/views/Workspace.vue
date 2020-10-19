<template>
  <div class="content">
    <left-sidebar
      :tabs="tabs"
      :currentTab="currentTab"
      :queues="queues"
      :currentSessionId="currentSessionId"
      @set-active-tab="setActiveTab"
      @set-session-id="setSessionId"
    ></left-sidebar>
    <router-view :key="$route.path" />
    <the-cwc v-if="currentSessionId"></the-cwc>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSidebar from "@/components/Workspace/LeftSidebar.vue";
import TheCwc from "@/components/TheCwc.vue";

export default {
  data() {
    return {
      tabs: ["chat", "call", "video"],
      currentTab: "chat",
      currentSessionId: null,
      queues: {
        chat: [
          {
            sessionId: "123",
            name: "Dimas Apriliansyah",
            isPriority: true,
            lastMessageTime: "12:00",
            lastMessage:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          },
          {
            sessionId: "456",
            name: "Elsa Maitsa",
            isPriority: false,
            lastMessageTime: "12:09",
            lastMessage:
              "Perspiciatis enim error dolor nam quia alias tenetur omnis"
          },
          {
            sessionId: "789",
            name: "Akhmad Faudzan",
            isPriority: true,
            lastMessageTime: "13:10",
            lastMessage:
              "Perspiciatis enim error dolor nam quia alias tenetur omnis"
          }
        ],
        call: [],
        video: []
      }
    };
  },
  methods: {
    setActiveTab(tab) {
      this.currentTab = tab;
    },
    setSessionId(sessionId) {
      this.currentSessionId = sessionId;
      // this.$emit("set-session-id", sessionId);
    }
  },
  components: { "left-sidebar": LeftSidebar, "the-cwc": TheCwc }
};
</script>
