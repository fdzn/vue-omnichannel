<template>
  <div class="messages" id="messagechat">
    <bubble-chat
      v-for="chatMessage in chatMessages"
      :key="`${sessionId}:${chatMessage.id}`"
      :id="`${sessionId}:${chatMessage.id}`"
      :name="chatMessage.name"
      :message="chatMessage.message"
      :media="chatMessage.media"
      :actionType="chatMessage.actionType"
      :messageDate="chatMessage.messageDate"
      :isMedia="chatMessage.isMedia"
    />
  </div>
</template>

<script>
import BubbleChat from "./BubbleChat";

export default {
  props: {
    chatMessages: {
      type: Array
    },
    sessionId: {
      type: String,
      required: true
    }
  },
  components: {
    "bubble-chat": BubbleChat
  }
};
</script>
