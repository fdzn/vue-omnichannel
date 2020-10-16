<template>
  <div id="Chat" class="tabcontent" style="display:block;">
    <div
      class="sidebar-body"
      tabindex="2"
      style="overflow: hidden; outline: none;"
    >
      <ul class="list-group list-group-flush">
        <li
          v-for="queue in queues"
          class="list-group-item open-chat"
          :key="queue.sessionId"
        >
          <figure class="avatar">
            <span :class="['avatar-title', avatarColor(), 'rounded-circle']">{{
              fullName(queue.name)
            }}</span>
          </figure>
          <div class="users-list-body">
            <h6 class="label-name">
              {{ queue.name }}<i class="star_icon ml-1"></i>
            </h6>
            <p>{{ queue.lastMessage }}</p>
          </div>

          <h6 class="text-muted small label-date">
            {{ queue.lastMessageTime }}
          </h6>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queues: [
        {
          sessionId: "123",
          name: "Dimas Apriliansyah",
          isPriority: true,
          lastMessageTime: "12:00",
          lastMessage:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        },
        {
          sessionId: "456",
          name: "Elsa Maitsa",
          isPriority: true,
          lastMessageTime: "11:45",
          lastMessage:
            "Perspiciatis enim error dolor nam quia alias tenetur omnis"
        }
      ]
    };
  },
  computed: {},
  methods: {
    fullName: function(name) {
      return name;
    },
    avatarColor() {
      const colorsets = [
        "bg-pink",
        "bg-blue",
        "bg-info",
        "bg-orange",
        "bg-primary"
      ];
      const randomColor = Math.floor(Math.random() * 5); // 0-4
      console.log("randomColor", randomColor);
      const color = colorsets[randomColor];
      console.log("color", color);
      return color;
    }
  }
};
</script>
