<template>
  <div class="sidebar-group">
    <!-- Chats sidebar -->
    <div id="chats" class="sidebar w-300 active">
      <header class="bg-blue">
        <h6 class="header-title">Workspace</h6>
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
        <!-- <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tablinks', { active: currentTab === tab }]"
          @click="setActiveTab(tab)"
        >
          {{ tab.toUpperCase()
          }}<span class="badge-1">{{ queues[currentTab].length }}</span>
        </button> -->
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

export default {
  data() {
    return {
      tabs: ["chat", "call", "video"],
      currentTab: "chat",
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
  components: {
    "tab-header": TabHeader,
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
    setActiveTab(tab) {
      this.currentTab = tab;
    }
  }
};
</script>

<style scoped>
.tabcontent {
  margin: 0;
}
</style>
