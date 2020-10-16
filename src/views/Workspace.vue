<template>
  <div class="content">
    <left-sidebar></left-sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSidebar from "@/components/Workspace/LeftSidebar.vue";

export default {
  components: { "left-sidebar": LeftSidebar }
};
</script>
