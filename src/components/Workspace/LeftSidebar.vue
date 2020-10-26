<template>
  <div class="sidebar-group">
    <!-- Chats sidebar -->
    <div id="chats" class="sidebar w-300 active">
      <header class="bg-blue">
        <h6 class="header-title">Workspace</h6>
        <div class="form-item custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="switch-aux"
            v-model="isAux"
          />
          <label class="custom-control-label" for="switch-aux">{{
            labelAux
          }}</label>
        </div>
      </header>
      <div class="tab">
        <tab-header
          v-for="tab in tabs"
          :key="tab"
          :tab="tab"
          :queue-count="queues[tab].length"
          :current-tab="currentTab"
          @set-active-tab="setActiveTab"
        />
      </div>
      <keep-alive>
        <component
          :is="currentTabComponent"
          class="tab"
          :queues="queues[currentTab]"
        ></component>
      </keep-alive>
    </div>
    <!-- ./ Chats sidebar -->
  </div>
</template>

<script>
import TabHeader from "./TabHeader";
import QueueChat from "./Queue/Chat/QueueChat";
import QueueCall from "./Queue/Call/QueueCall";
import QueueVideo from "./Queue/Video/QueueVideo";
// import sound from "../../assets/sound/notification-chat.mp3";
export default {
  data() {
    return {
      tabs: ["chat", "call", "video"],
      currentTab: "chat",
    };
  },
  components: {
    "tab-header": TabHeader,
    "queue-chat": QueueChat,
    "queue-call": QueueCall,
    "queue-video": QueueVideo,
  },
  computed: {
    currentTabComponent() {
      return "queue-" + this.currentTab;
    },
    queues() {
      return {
        chat: this.$store.getters["workspace/queuesChat"],
        call: this.$store.getters["workspace/queuesCall"],
        video: this.$store.getters["workspace/queuesVideo"],
      };
    },
    isAux: {
      get: function () {
        return !this.$store.getters["auth/isAux"];
      },
      set: async function () {
        const auxStatus = !this.$store.getters["auth/isAux"];
        await this.$store.dispatch("auth/updateAux", {
          auxStatus,
        });
      },
    },
    labelAux() {
      return this.isAux ? "Play" : "Pause ";
    },
  },
  methods: {
    setActiveTab(tab) {
      this.currentTab = tab;
      this.$store.dispatch("workspace/getQueues", tab);
    },
  },
  mounted() {
    this.setActiveTab("chat");
  },
};
</script>

<style scoped>
.tabcontent {
  margin: 0;
}
</style>
