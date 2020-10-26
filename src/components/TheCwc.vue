<template>
  <div class="sidebar-group">
    <!-- Chats sidebar -->
    <div
      class="sidebar active w-300"
      style="border-radius: 0px; margin-left: 1px"
    >
      <header class="bg-white">
        <h6 class="header-title">Customer Information</h6>
      </header>

      <div class="wrapper center-block">
        <div
          class="panel-group"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
              <h4 class="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  class="collapsed"
                >
                  <div class="d-flex flex-row mg-73">
                    <div><i class="user_icon mr-2"></i></div>
                    <div class="mt-05 font12">Customer Profile</div>
                  </div>
                </a>
              </h4>
            </div>
            <div
              id="collapseOne"
              class="panel-collapse in collapse"
              role="tabpanel"
              aria-labelledby="headingOne"
              style=""
            >
              <div class="panel-body">
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="text-grey font12 font-normal">Cust ID</h6>
                  </div>
                  <div class="col-sm-8">
                    <h6 class="text-black font12 ml-2">
                      {{ detailQueue.customerId }}
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
                <div
                  class="row"
                  :key="contact.id"
                  v-for="contact in formContact"
                >
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
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
              <h4 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div class="d-flex flex-row mg-73">
                    <div><i class="clipboard_outline_icon mr-2"></i></div>
                    <div class="mt-1 font12">Summary Interaction</div>
                  </div>
                </a>
              </h4>
            </div>
            <div
              id="collapseTwo"
              class="panel-collapse in collapse"
              role="tabpanel"
              aria-labelledby="headingTwo"
              style=""
            >
              <div class="panel-body">
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="text-grey font12 font-normal pt-2">Category</h6>
                  </div>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control no-border font12"
                      value=""
                    />
                    <a
                      href="#"
                      class="pencil_input text-blue-1 font-weight-bold"
                      style="margin-left: 11.5em"
                      >Select</a
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="text-grey font12 font-normal pt-2">
                      Sub Category
                    </h6>
                  </div>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control no-border font12"
                      value=""
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="text-grey font12 font-normal pt-2">Remark</h6>
                  </div>
                  <div class="col-sm-8">
                    <textarea
                      class="form-control no-border font12"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="text-grey font12 font-normal pt-2">Feedback</h6>
                  </div>
                  <div class="col-sm-8">
                    <textarea
                      class="form-control no-border font12"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div class="row mt-1">
                  <div class="col-sm-4">
                    <h6 class="text-grey font12 font-normal pt-2">Sentimen</h6>
                  </div>
                  <div class="col-sm-8">
                    <div class="d-flex flex-row">
                      <div><i class="emoji_smile_icon"></i></div>
                      <div><i class="emoji_flat_icon"></i></div>
                      <div><i class="emoji_sad_icon"></i></div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-block btn-yellow btn-md mt-3"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingThree">
              <h4 class="panel-title">
                <a
                  class=""
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div class="d-flex flex-row mg-73">
                    <div><i class="journey_icon mr-2"></i></div>
                    <div class="mt-1 font12">Journey Customer</div>
                  </div>
                </a>
              </h4>
            </div>
            <div
              id="collapseThree"
              class="panel-collapse in collapse"
              role="tabpanel"
              aria-labelledby="headingThree"
              style=""
            >
              <div class="panel-body">
                <div class="list-wrapper">
                  <div class="red-line"></div>
                  <div
                    class="list-item-wrapper"
                    style="margin-top: 0px !important"
                  >
                    <div class="list-bullet pd-5">
                      <i class="small_chat_icon"></i>
                    </div>
                    <div class="list-item">
                      <div class="list-title">
                        Lorem ipsum dolor sit amet,conse
                      </div>
                      <div class="list-text">Thursday, 1 Oct 2020</div>
                    </div>
                  </div>

                  <div class="list-item-wrapper">
                    <div class="list-bullet pd-5">
                      <i class="small_vcall_icon"></i>
                    </div>
                    <div class="list-item">
                      <div class="list-title">
                        Lorem ipsum dolor sit amet,conse
                      </div>
                      <div class="list-text">Thursday, 1 Oct 2020</div>
                    </div>
                  </div>

                  <div class="list-item-wrapper">
                    <div class="list-bullet pd-5">
                      <i class="phone_call_icon"></i>
                    </div>
                    <div class="list-item">
                      <div class="list-title">
                        Lorem ipsum dolor sit amet,conse
                      </div>
                      <div class="list-text">Thursday, 1 Oct 2020</div>
                    </div>
                    <div class="white-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Feed Activity -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentSessionId: {
      type: String,
    },
  },
  computed: {
    formCustomer() {
      const data = this.$store.getters["workspace/queuesBySessionId"](
        this.currentSessionId
      );
      return this.$store.getters["workspace/customerById"](data.customerId);
    },
    formContact() {
      const data = this.$store.getters["workspace/queuesBySessionId"](
        this.currentSessionId
      );
      return this.$store.getters["workspace/contactByCustomerId"](
        data.customerId
      );
    },
    detailQueue() {
      return this.$store.getters["workspace/queuesBySessionId"](
        this.currentSessionId
      );
    },
  },
  methods: {
    editCustomer(e) {
      const key = e.target.name;
      const value = e.target.value;
      const oldValue = this.formCustomer[key];
      if (oldValue !== value) {
        const payload = {
          customerId: this.detailQueue.customerId,
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
          customerId: this.detailQueue.customerId,
          idContact: idContact,
          value: value,
        };
        this.$store.dispatch("workspace/updateContact", payload);
      }
    },
  },
};
</script>
