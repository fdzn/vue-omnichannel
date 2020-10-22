<template>
  <b-card no-body class="panel panel-default">
    <b-card-header header-tag="header" class="panel-heading" role="tab">
      <h4 class="panel-title">
        <a v-b-toggle.accordion-2 role="button" class="collapsed">
          <div class="d-flex flex-row mg-73">
            <div><i class="clipboard_outline_icon mr-2"></i></div>
            <div class="mt-1 font12">Summary Interaction</div>
          </div>
        </a>
      </h4>
    </b-card-header>
    <b-collapse
      id="accordion-2"
      visible
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Category</h6>
          </div>
          <div class="col-sm-8">
            <input type="text" class="form-control no-border font12" value="" />
            <a
              href="#"
              class="pencil_input text-blue-1 font-weight-bold"
              style="margin-left: 11.5em;"
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
            <input type="text" class="form-control no-border font12" value="" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Remark</h6>
          </div>
          <div class="col-sm-8">
            <textarea class="form-control no-border font12" rows="2"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Feedback</h6>
          </div>
          <div class="col-sm-8">
            <textarea class="form-control no-border font12" rows="2"></textarea>
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
        <button type="button" class="btn btn-block btn-yellow btn-md mt-3">
          Save
        </button>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>
