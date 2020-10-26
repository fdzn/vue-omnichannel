<template>
  <div class="content">
    <left-sidebar></left-sidebar>
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
    },
  },
  created() {
    this.$store.commit("workspace/setState", {
      type: "currentSessionId",
      value: null,
    });
  },
  components: { "left-sidebar": LeftSidebar, "the-cwc": TheCwc },
};
</script>
