<template>
  <div class="sidebar-group">
    <div
      class="sidebar active w-300"
      style="border-radius: 0px; margin-left: 1px"
    >
      <header class="bg-white">
        <h6 class="header-title">Customer Information</h6>
      </header>
      <div class="wrapper center-block">
        <div class="accordion panel-group" role="tablist">
          <customer-profile
            :customerId="this.detailQueue.customerId"
          ></customer-profile>
          <summary-interaction></summary-interaction>
          <journey-customer></journey-customer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerProfile from "./CustomerProfile";
import SummaryInteraction from "./SummaryInteraction";
import JourneyCustomer from "./JourneyCustomer";
export default {
  props: {
    currentSessionId: {
      type: String,
    },
  },
  computed: {
    detailQueue() {
      return this.$store.getters["workspace/queuesBySessionId"](
        this.currentSessionId
      );
    },
  },
  components: {
    "customer-profile": CustomerProfile,
    "summary-interaction": SummaryInteraction,
    "journey-customer": JourneyCustomer,
  },
};
</script>
