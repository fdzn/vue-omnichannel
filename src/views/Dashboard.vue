<template>
  <div class="content2">
    <div class="header_agent">
      <h6 class="text-blue-1 header_text">
        Hello, {{ username }}. Have a good day! :)
      </h6>
    </div>
    <div class="d-flex flex-row mt-5">
      <div class="card-agent-2 text-center">
        <img src="../assets/img/svg/Welcome_1.svg" />
        <h6 class="label-name">{{ name }}</h6>
      </div>
      <div class="card-agent-2 text-center">
        <h6 class="text-card">Your Daily Handled</h6>
        <canvas id="doughnut-chart1"></canvas>
      </div>
      <div class="card-agent-2 text-center">
        <h6 class="text-card">Your Achievement</h6>
      </div>
      <div class="card-agent-2"></div>
    </div>
    <div class="card_agent mt-5">
      <h6 class="text-blue-1 header_text mt-5 mb-20">Agent Performance</h6>
      <div class="row mt-5">
        <agent-performance
          type="yesterday"
          :avgResponseTime="avgResponseTimeYesterday"
          :avgInteractionTime="avgInteractionTimeYesterday"
          :callRate="callRateYesterday"
          :callOffered="callOfferedYesterday"
        ></agent-performance>
        <agent-performance
          type="today"
          :avgResponseTime="avgResponseTimeToday"
          :avgInteractionTime="avgInteractionTimeToday"
          :callRate="callRateToday"
          :callOffered="callOfferedToday"
        ></agent-performance>
        <agent-performance
          type="this_month"
          :avgResponseTime="avgResponseTimeThisMonth"
          :avgInteractionTime="avgInteractionTimeThisMonth"
          :callRate="callRateThisMonth"
          :callOffered="callOfferedThisMonth"
        ></agent-performance>
      </div>
    </div>
  </div>
</template>

<script>
import AgentPerformance from "../components/Dashboard/AgentPerformance";
export default {
  components: {
    "agent-performance": AgentPerformance,
  },
  data() {
    return {
      avgResponseTimeYesterday: "00:00:00",
      avgInteractionTimeYesterday: "00:00:00",
      callRateYesterday: "100%",
      callOfferedYesterday: "0",
      avgResponseTimeToday: "00:00:00",
      avgInteractionTimeToday: "00:00:00",
      callRateToday: "100%",
      callOfferedToday: "0",
      avgResponseTimeThisMonth: "00:00:00",
      avgInteractionTimeThisMonth: "00:00:00",
      callRateThisMonth: "100%",
      callOfferedThisMonth: "0",
    };
  },
  computed: {
    username() {
      return this.$store.getters["auth/getState"]("username");
    },
    name() {
      return this.$store.getters["auth/getState"]("name");
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await this.$store.dispatch("dashboard/dashboardAgent");
      const yesterday = data.filter((data) => data.type === "yesterday")[0];
      const this_month = data.filter((data) => data.type === "this_month")[0];
      const today = data.filter((data) => data.type === "today")[0];

      this.avgResponseTimeYesterday = yesterday.avgResponseTime;
      this.avgInteractionTimeYesterday = yesterday.avgInteractionTime;
      // this.callRateYesterday = yesterday.avgInteractionTime;
      this.callOfferedYesterday = yesterday.callOffered;

      this.avgResponseTimeToday = today.avgResponseTime;
      this.avgInteractionTimeToday = today.avgInteractionTime;
      // this.callRateToday = today.avgResponseTime;
      this.callOfferedToday = today.callOffered;

      this.avgResponseTimeThisMonth = this_month.avgResponseTime;
      this.avgInteractionTimeThisMonth = this_month.avgInteractionTime;
      // this.callRateThisMonth = this_month.avgResponseTime;
      this.callOfferedThisMonth = this_month.callOffered;
    },
  },
};
</script>
