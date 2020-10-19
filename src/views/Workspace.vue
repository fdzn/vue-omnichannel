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
        chat: this.$store.getters["workspace/queuesChat"],
        video: this.$store.getters["workspace/queuesVideo"],
        call: this.$store.getters["workspace/queuesCall"],
      },
    };
  },
  mounted() {
    this.$store.dispatch("workspace/getQueues", "whatsapp");
  },
  computed: {
    queuesChatComputed() {
      return this.$store.getters["workspace/queuesChat"];
    },
    queuesVideoComputed() {
      return this.$store.getters["workspace/queuesVideo"];
    },
    queuesCallComputed() {
      return this.$store.getters["workspace/queuesCall"];
    },
  },
  watch: {
    queuesChatComputed(curValue) {
      this.queues.chat = curValue;
    },
    queuesVideoComputed(curValue) {
      this.queues.video = curValue;
    },
    queuesCallComputed(curValue) {
      this.queues.call = curValue;
    },
  },
  methods: {
    setActiveTab(tab) {
      this.currentTab = tab;
    },
    setSessionId(sessionId) {
      this.currentSessionId = sessionId;
      // this.$emit("set-session-id", sessionId);
    },
  },
  components: { "left-sidebar": LeftSidebar, "the-cwc": TheCwc },
};
</script>
