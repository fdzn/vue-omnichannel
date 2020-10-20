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
    };
  },
  computed: {
    queues() {
      return {
        chat: this.$store.getters["workspace/queuesChat"],
        call: this.$store.getters["workspace/queuesCall"],
        video: this.$store.getters["workspace/queuesVideo"],
      };
    },
  },
  methods: {
    setActiveTab(tab) {
      this.currentTab = tab;
      this.$store.dispatch("workspace/getQueues", tab);
    },
    setSessionId(sessionId) {
      this.currentSessionId = sessionId;
    },
  },
  mounted() {
    this.setActiveTab("chat");
  },
  components: { "left-sidebar": LeftSidebar, "the-cwc": TheCwc },
};
</script>
