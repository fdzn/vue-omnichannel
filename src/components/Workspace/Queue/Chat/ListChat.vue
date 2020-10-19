<template>
  <router-link
    :to="{
      name: 'InteractionChat',
      params: { sessionId: sessionId },
    }"
  >
    <li
      :class="[
        'list-group-item',
        'list-queue',
        {
          'open-chat': sessionId === currentSessionId,
        },
      ]"
      @click="setSessionId"
    >
      <figure class="avatar">
        <span :class="avatarColor" class="avatar-title rounded-circle">{{
          avatarName(name)
        }}</span>
      </figure>
      <div class="users-list-body">
        <h6 class="label-name">
          {{ name }}
          <i v-if="isPriority" class="star_icon ml-1"></i>
          <strong v-if="isPriority"
            ><p class="text-warning">Priority</p></strong
          >
          <strong v-else><p class="text-primary">Regular</p></strong>
        </h6>
        <p>{{ lastMessage }}</p>
      </div>

      <h6 class="text-muted small label-date">
        {{ lastMessageTime }}
      </h6>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    currentSessionId: {
      type: String,
    },
    sessionId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastMessage: {
      type: String,
      required: true,
    },
    lastMessageTime: {
      type: String,
      required: true,
    },
    isPriority: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    avatarColor() {
      console.log("hai");
      const colorsets = [
        "bg-pink",
        "bg-blue",
        "bg-info",
        "bg-orange",
        "bg-primary",
      ];
      const randomColor = Math.floor(Math.random() * 5); // 0-4
      const color = colorsets[randomColor];
      // return color;
      return {
        [color]: true,
      };
    },
    activeListClass() {
      return {
        "open-chat": true,
      };
    },
  },
  methods: {
    avatarName(name) {
      const str = name;
      console.log("str", str);
      const matches = str.match(/\b(\w)/g); // ['J','S','O','N']
      if (matches) {
        return matches.join("");
      } else {
        return "-";
      }
    },
    setSessionId() {
      this.$emit("set-session-id", this.sessionId);
    },
  },
};
</script>
