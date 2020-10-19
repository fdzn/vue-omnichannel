<template>
  <div class="d-flex flex-row" v-if="actionType == 'in'">
    <div>
      <figure class="avatar">
        <span class="avatar-title bg-pink rounded-circle">{{
          avatarName(name)
        }}</span>
      </figure>
    </div>
    <div class="ml-2">
      <div class="message-item">
        <div class="message-content">
          {{ message }}
          <div class="message-action">{{ messageDate }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="message-item outgoing-message" v-else>
    <div class="message-content">
      {{ message }}
      <div class="message-action text-white">{{ messageDate }}</div>
    </div>
  </div>

  <!-- <div class="d-flex flex-row mt-1">
          <div>
            <figure class="avatar">
              <span class="avatar-title bg-pink rounded-circle">NF</span>
            </figure>
          </div>
          <div class="ml-2">
            <div class="message-item" style="max-width: 100%">
              <div class="message-content message-file">
                <div class="file-icon">
                  <i class="file_bg_icon"></i>
                </div>
                <div>
                  <div>style.zip</div>
                  <h6 style="font-size: 14px; font-weight: 600">41.36 Mb</h6>
                  <div class="message-action">20/09/2020 11:30</div>
                </div>
                <div class="file-icon">
                  <i class="download_icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div> -->
</template>

<script>
export default {
  name: "BubbleChat",
  props: {
    name: {
      required: true,
      type: String,
    },
    message: {
      required: true,
      type: String,
    },
    media: {
      type: Object,
    },
    actionType: {
      required: true,
      type: String,
    },
    messageDate: {
      required: true,
      type: String,
    },
    isMedia: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    avatarName(name) {
      const str = name;
      const matches = str.match(/\b(\w)/g); // ['J','S','O','N']
      if (matches) {
        return matches.join("");
      } else {
        return "-";
      }
    },
  },
};
</script>