<template>
  <div class="sidebar-group">
    <!-- Chats sidebar -->
    <div id="chats" class="sidebar w-300 active">
      <header class="bg-blue">
        <h6 class="header-title">Workspace</h6>
      </header>
      <div class="tab">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tablinks', { active: currentTab === tab }]"
          @click="setActiveTab(tab)"
        >
          {{ tab.toUpperCase() }}<span class="badge-1">5</span>
        </button>
      </div>
      <component :is="currentTabComponent" class="tab"></component>

      <!-- <queue-chat v-if="activeTab === 'chat'"></queue-chat>

      <queue-call v-else-if="activeTab === 'call'"></queue-call>

      <queue-video v-else-if="activeTab === 'video'"></queue-video> -->
    </div>
    <!-- ./ Chats sidebar -->
  </div>
</template>

<script>
import QueueChat from "./QueueChat.vue";
import QueueCall from "./QueueCall.vue";
import QueueVideo from "./QueueVideo.vue";

export default {
  data() {
    return {
      tabs: ["chat", "call", "video"],
      currentTab: "call"
    };
  },
  components: {
    "queue-chat": QueueChat,
    "queue-call": QueueCall,
    "queue-video": QueueVideo
  },
  computed: {
    currentTabComponent() {
      return "queue-" + this.currentTab;
    }
  },
  methods: {
    setActiveTab(channel) {
      this.currentTab = channel;
    }
  }
};
</script>

<style scoped>
.tabcontent {
  margin: 0;
}
</style>
