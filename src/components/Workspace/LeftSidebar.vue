<template>
  <div class="sidebar-group">
    <!-- Chats sidebar -->
    <div id="chats" class="sidebar w-300 active">
      <header class="bg-blue">
        
        <h6 class="header-title">Workspace</h6>
        <button :class="['btn', isAux ? 'btn-primary':'btn-success']" @click="toggleAux">{{ isAux ? "Pause" : "Play" }}</button>
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
          :currentSessionId="currentSessionId"
          @set-session-id="setSessionId"
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

export default {
  props: {
    tabs: {
      type: Array
    },
    currentTab: {
      type: String
    },
    queues: {
      type: Object
    },
    currentSessionId: {
      type: String
    }
  },
  components: {
    "tab-header": TabHeader,
    "queue-chat": QueueChat,
    "queue-call": QueueCall,
    "queue-video": QueueVideo
  },
  computed: {
    currentTabComponent() {
      return "queue-" + this.currentTab;
    },
    isAux() {
      return this.$store.getters["auth/isAux"];
    },
  },
  methods: {
    setActiveTab(tab) {
      // this.currentTab = tab;
      this.$emit("set-active-tab", tab);
    },
    setSessionId(sessionId) {
      // this.currentSessionId = sessionId;
      this.$emit("set-session-id", sessionId);
    },
    async toggleAux() {
      const auxStatus = !this.$store.getters["auth/isAux"];
      await this.$store.dispatch("auth/updateAux", {
        auxStatus
      });
    }
  }
};
</script>

<style scoped>
.tabcontent {
  margin: 0;
}
</style>
