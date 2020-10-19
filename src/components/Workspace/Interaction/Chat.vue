<template>
  <div class="chat" id="middle">
    <div class="chat-header">
      <div class="d-flex flex-row">
        <div>
          <div class="chat-header-user">
            <h6 class="text-chat-header">Nada Fadhilah Fitriyani</h6>
          </div>
        </div>
        <div class="ml-3 pt-2">
          <button class="btn btn-yellow-outline">
            <div class="d-flex flex-row pt-1">
              <div>
                <i class="star_icon mr-2"></i>
              </div>
              <div>
                <h6 class="font-yellow-prio">Priority</h6>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div class="chat-header-action">
        <ul class="list-inline">
          <li class="list-inline-item" style="margin-top: 4px !important">
            <a
              href="#"
              class="btn btn-sm btn-red font11"
              style="border-radius: 20px; padding: 5px 20px"
            >
              End Chat
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="chat-body" tabindex="1" style="overflow: hidden; outline: none">
      <div class="box-detail-date">
        <h6 class="text-detail-date">Today</h6>
      </div>
      <div class="messages">
        <bubble-chat
          v-for="chatMessage in chatMessages"
          :key="`${sessionId}:${chatMessage.id}`"
          :name="chatMessage.name"
          :message="chatMessage.message"
          :media="chatMessage.media"
          :actionType="chatMessage.actionType"
          :messageDate="chatMessage.messageDate"
          :isMedia="chatMessage.isMedia"
        />
      </div>
    </div>
    <div class="chat-footer">
      <form action="">
        <!-- <button class="btn btn-light btn-floating" type="button"> -->
        <i class="paperclip_icon"></i>
        <!-- </button> -->
        <input
          type="text"
          class="form-control"
          placeholder="Type your message here......"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="form-buttons">
          <button class="btn btn-primary btn-floating" type="submit">
            <i class="fa fa-send"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BubbleChat from "./BubbleChat";
export default {
  props: {
    sessionId: {
      type: String,
      required: true,
    },
    channelId: {
      type: String,
      required: true,
      default: "whatsapp",
    },
  },
  data() {
    return {
      chatMessages: this.$store.getters["workspace/chatMessage"](
        this.sessionId
      ),
    };
  },
  mounted() {
    console.log("MOUNT");
    this.$store.dispatch("workspace/getInteraction", this);
  },
  computed: {
    chatMessagesComputed() {
      console.log(
        "Computed",
        this.$store.getters["workspace/chatMessage"](this.sessionId)
      );
      return this.$store.getters["workspace/chatMessage"](this.sessionId);
    },
  },
  watch: {
    chatMessagesComputed(curValue) {
      this.chatMessages = curValue;
    },
  },
  components: {
    "bubble-chat": BubbleChat,
  },
};
</script>
