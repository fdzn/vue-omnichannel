<template>
  <button
    @click="setActiveTab"
    :class="['tablinks', 'tab-button', { active: currentTab === tab }]"
  >
    {{ tabUppercase }}
    <span class="badge-1">{{ queueCount }}</span>
  </button>
</template>

<script>
export default {
  props: {
    tab: {
      type: String,
      required: true
    },
    queueCount: {
      type: Number,
      required: true
    },
    currentTab: {
      type: String,
      required: true
    }
  },
  computed: {
    tabUppercase() {
      return this.tab.toLocaleUpperCase();
    },
    isActive() {
      return this.activeTab === this.tab ? "active" : "";
    }
  },
  methods: {
    setActiveTab() {
      this.$emit("set-active-tab", this.tab);
    }
  }
};
</script>

<style scoped>
.tab-button {
  padding: 0;
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>
