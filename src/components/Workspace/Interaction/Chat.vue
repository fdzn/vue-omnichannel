<template>
  <div class="chat" id="middle">
    <div class="chat-header">
      <div class="d-flex flex-row">
        <div>
          <div class="chat-header-user">
            <h6 class="text-chat-header">{{ queueData.name }}</h6>
          </div>
        </div>
        <div class="ml-3 pt-2">
          <button v-if="queueData.isPriority" class="btn btn-yellow-outline">
            <div class="d-flex flex-row pt-1">
              <div>
                <i class="star_icon mr-2"></i>
              </div>
              <div>
                <h6 class="font-yellow-prio">Priority</h6>
              </div>
            </div>
          </button>
          <button v-else class="btn btn-green-outline">
            <div class="d-flex flex-row pt-1">
              <!-- <div>
                <i class="star_icon mr-2"></i>
              </div> -->
              <div>
                <h6 class="font-green-regular">Regular</h6>
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
    <div class="chat-body" tabindex="1" style="outline: none">
      <div class="box-detail-date">
        <h6 class="text-detail-date">Today</h6>
      </div>
      <the-messages
        :chatMessages="chatMessages"
        :sessionId="sessionId"
      ></the-messages>
      <!-- <div class="messages">
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
      </div> -->
    </div>
    <div class="chat-footer">
      <form @submit.prevent="sendMessage">
        <!-- <button class="btn btn-light btn-floating" type="button"> -->
        <i class="paperclip_icon"></i>
        <!-- </button> -->
        <input
          type="text"
          class="form-control"
          placeholder="Type your message here......"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          v-model.trim="message"
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
// import BubbleChat from "./BubbleChat";
import TheMessages from "./TheMessages";
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
      message: "",
      type: "chat",
    };
  },
  mounted() {
    this.$store.dispatch("workspace/getData", this);
    this.$store.commit("workspace/setState", {
      type: "currentSessionId",
      value: this.sessionId,
    });
  },
  computed: {
    chatMessages() {
      return this.$store.getters["workspace/chatMessage"](this.sessionId);
    },
    queueData() {
      return this.$store.getters["workspace/getQueueBySession"](
        this.sessionId,
        "chat"
      )[0];
    },
  },
  methods: {
    async sendMessage() {
      if (this.message == "") {
        return "ERROR";
      }
      if (this.channelId == "whatsapp") {
        let { convId, from, fromName } = this.chatMessages[
          this.chatMessages.length - 1
        ];
        const data = {
          sessionId: this.sessionId,
          from: from,
          fromName: fromName,
          convId: convId,
          message: this.message,
          media: null,
        };

        const result = await this.$store.dispatch(
          "workspace/sendMessageWhatsapp",
          data
        );

        if (result.isError) {
          console.error(result.data);
        } else {
          this.message = "";
        }
      }
    },
  },
  components: {
    // "bubble-chat": BubbleChat,
    "the-messages": TheMessages,
  },
};
</script>

<style scoped>
.btn-green-outline {
  background-color: #fff;
  border: 2px solid #5cbc81;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 0px 15px !important;
}
.font-green-regular {
  font-size: 10px;
  color: #5cbc81;
  font-weight: 600;
}
</style>
