<template>
  <div class="layout">
    <the-navigation></the-navigation>
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  name: "Home",
  components: {
    TheNavigation
  }
};
</script>
