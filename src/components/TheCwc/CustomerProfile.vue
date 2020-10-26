<template>
  <b-card no-body class="panel panel-default">
    <b-card-header header-tag="header" class="panel-heading" role="tab">
      <h4 class="panel-title">
        <a v-b-toggle.accordion-1 role="button" class="collapsed">
          <div class="d-flex flex-row mg-73">
            <div><i class="user_icon mr-2"></i></div>
            <div class="mt-05 font12">Customer Profile</div>
          </div>
        </a>
      </h4>
    </b-card-header>
    <b-collapse
      id="accordion-1"
      visible
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal">Cust ID</h6>
          </div>
          <div class="col-sm-8">
            <h6 class="text-black font12 ml-2">
              {{ customerId }}
            </h6>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Cust Name</h6>
          </div>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control no-border font12"
              :value="formCustomer.name"
              name="name"
              @keyup.enter="editCustomer"
            />
            <i class="pencil_2_icon pencil_input"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Priority</h6>
          </div>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control no-border font12"
              :value="formCustomer.isPriority"
              @keyup.enter="editCustomer"
            />
            <i class="pencil_2_icon pencil_input"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Address</h6>
          </div>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control no-border font12"
              :value="formCustomer.address"
              @keyup.enter="editCustomer"
            />
            <i class="pencil_2_icon pencil_input"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Company</h6>
          </div>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control no-border font12"
              :value="formCustomer.company"
              @keyup.enter="editCustomer"
            />
            <i class="pencil_2_icon pencil_input"></i>
          </div>
        </div>
        <div class="row" :key="contact.id" v-for="contact in formContact">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">
              {{ contact.type }}
            </h6>
          </div>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control no-border font12"
              :value="contact.value"
              :data-id="contact.id"
              @keyup.enter="editContact"
            />
            <i class="pencil_2_icon pencil_input"></i>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>


<script>
export default {
  props: {
    customerId: {
      type: Number,
    },
  },
  computed: {
    formCustomer() {
      return this.$store.getters["workspace/customerById"](this.customerId);
    },
    formContact() {
      return this.$store.getters["workspace/contactByCustomerId"](
        this.customerId
      );
    }
  },
  methods: {
    editCustomer(e) {
      const key = e.target.name;
      const value = e.target.value;
      const oldValue = this.formCustomer[key];
      if (oldValue !== value) {
        const payload = {
          customerId: this.customerId,
          key: key,
          value: value,
        };
        this.$store.dispatch("workspace/updateCustomer", payload);
      }
    },
    editContact(e) {
      const idContact = Number(e.target.dataset.id);
      const value = e.target.value;

      const oldData = this.formContact.find((x) => x.id === idContact);
      if (oldData.value !== value) {
        const payload = {
          customerId: this.customerId,
          idContact: idContact,
          value: value,
        };
        this.$store.dispatch("workspace/updateContact", payload);
      }
    },
  },
};
</script>
