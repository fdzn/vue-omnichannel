<template>
  <div class="layout">
    <the-navigation></the-navigation>
    <router-view />
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
