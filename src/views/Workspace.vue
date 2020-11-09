<template>
  <div class="content">
    <left-sidebar></left-sidebar>
    <div class="chat" id="middle" v-if="currentSessionId == null">
      <div class="chat-header br-bottom-0"></div>
      <div class="chat-body2">
        <div class="mg-no-conversation">
          <i class="no_message_icon"></i>
          <h6 class="mt-3 font-cnv">No Conversation</h6>
          <p class="font-small">You didn't made any conversation yet</p>
        </div>
      </div>
    </div>
    <router-view :key="$route.path" />
    <the-cwc v-if="currentSessionId" :sessionId="currentSessionId"></the-cwc>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSidebar from "@/components/Workspace/LeftSidebar.vue";
import TheCwc from "@/components/TheCwc/TheCwc.vue";

export default {
  computed: {
    currentSessionId() {
      return this.$store.getters["workspace/getState"]("currentSessionId");
    }
  },
  created() {
    this.$store.commit("workspace/setState", {
      type: "currentSessionId",
      value: null
    });
  },
  components: { "left-sidebar": LeftSidebar, "the-cwc": TheCwc }
};
</script>
