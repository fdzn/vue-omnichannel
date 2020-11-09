<template>
  <div class="col-sm-4">
    <h6 class="label-day">
      {{ title }}
      <span class="label-title ml-2">{{ date }}</span>
    </h6>
    <div class="d-flex flex-row" style="margin: 5px 0px">
      <div class="bg-blue1 card-agent-1">
        <div class="d-flex flex-row">
          <div class="pt-17"><img src="../../assets/img/svg/Done_9.svg" /></div>
          <div class="ml-3">
            <h6 class="label-1">{{ avgResponseTime }}</h6>
            <h6 class="label-art">Average Response Time</h6>
          </div>
        </div>
      </div>
      <div class="bg-blue1 card-agent-1 ml-1">
        <div class="d-flex flex-row">
          <div class="pt-17"><img src="../../assets/img/svg/Done_9.svg" /></div>
          <div class="ml-3">
            <h6 class="label-1">{{ avgInteractionTime }}</h6>
            <h6 class="label-art">Average Interaction Time</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row" style="margin: 5px 0px">
      <div class="bg-green2 card-agent-1" style="padding: 17px 15px">
        <div class="d-flex flex-row">
          <div class="pt-17"><img src="../../assets/img/svg/Done_9.svg" /></div>
          <div class="ml-3">
            <h6 class="label-1">{{ callRate }}</h6>
            <h6 class="label-art">Success Call Rate</h6>
          </div>
        </div>
      </div>
      <div class="bg-yellow card-agent-1 ml-1" style="padding: 17px 15px">
        <div class="d-flex flex-row">
          <div class="pt-17"><img src="../../assets/img/svg/Done_9.svg" /></div>
          <div class="ml-3">
            <h6 class="label-1 text-blue-1">{{ callOffered }}</h6>
            <h6 class="label-art text-grey1">Call Offered</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    avgResponseTime: {
      type: String,
      required: true,
    },
    avgInteractionTime: {
      type: String,
      required: true,
    },
    callRate: {
      type: String,
      required: true,
    },
    callOffered: {
      type: String,
      required: true,
    },
  },
  computed: {
    title() {
      return this.toTitleCase(this.type.replace("_", " "));
    },
    date() {
      if (this.type == "yesterday") {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        return d.toDateString();
      } else if (this.type == "today") {
        return new Date().toDateString();
      } else if (this.type == "this_month") {
        const date = new Date();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${month} ${year}`;
      } else {
        return "Undefined Type";
      }
    },
  },
  methods: {
    toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
  },
};
</script>