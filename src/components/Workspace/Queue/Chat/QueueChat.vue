<template>
  <div id="Chat" class="tabcontent" style="display: block">
    <div
      class="sidebar-body"
      tabindex="2"
      style="overflow: hidden; outline: none"
    >
      <ul class="list-group list-group-flush">
        <list-chat
          v-for="queue in queues"
          :key="queue.sessionId"
          :sessionId="queue.sessionId"
          :name="queue.name"
          :isPriority="queue.isPriority"
          :lastMessage="queue.lastMessage"
          :lastMessageTime="queue.lastMessageTime"
        ></list-chat>
      </ul>
    </div>
  </div>
</template>

<script>
import ListChat from "./ListChat";
export default {
  props: {
    queues: {
      type: Array,
    },
  },
  components: { "list-chat": ListChat },
};
</script>
