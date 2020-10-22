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
            <h6 class="text-black font12 ml-2">023232022</h6>
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
              value="Nada Fadhilah Fitriyani"
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
              value="Priority"
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
              value="Jl. Gotong Royong"
            />
            <i class="pencil_2_icon pencil_input"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Email</h6>
          </div>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control no-border font12"
              value="nadaff@gmail.com"
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
              value="-"
            />
            <i class="pencil_2_icon pencil_input"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">HP</h6>
          </div>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control no-border font12"
              value="(+62) 85 899 125 810"
            />
            <i class="pencil_2_icon pencil_input"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Phone</h6>
          </div>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control no-border font12"
              value="(021) 847484"
            />
            <i class="pencil_2_icon pencil_input"></i>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>
