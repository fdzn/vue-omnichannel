<template>
  <b-card no-body class="panel panel-default">
    <b-card-header header-tag="header" class="panel-heading" role="tab">
      <h4 class="panel-title">
        <a v-b-toggle.accordion-3 role="button" class="collapsed">
          <div class="d-flex flex-row mg-73">
            <div><i class="journey_icon mr-2"></i></div>
            <div class="mt-1 font12">Journey Customer</div>
          </div>
        </a>
      </h4>
    </b-card-header>
    <b-collapse
      id="accordion-3"
      visible
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <div class="list-wrapper">
          <div class="red-line"></div>
          <div class="list-item-wrapper" style="margin-top: 0px !important;">
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
      </b-card-body>
    </b-collapse>
  </b-card>
</template>
