<template>
  <div class="sidebar-group">
    <!-- Chats sidebar -->
    <div id="chats" class="sidebar w-300 active">
      <header class="bg-blue">
        <h6 class="header-title">Workspace</h6>
      </header>
      <div class="tab">
        <button class="tablinks active" onclick="openCity(event, 'Chat')">
          Chat<span class="badge-1">5</span>
        </button>
        <button class="tablinks" onclick="openCity(event, 'Call')">
          Call<span class="badge-1">3</span>
        </button>
        <button class="tablinks" onclick="openCity(event, 'Video')">
          Video<span class="badge-1">1</span>
        </button>
      </div>

      <div id="Chat" class="tabcontent" style="display:block;">
        <div
          class="sidebar-body"
          tabindex="2"
          style="overflow: hidden; outline: none;"
        >
          <ul class="list-group list-group-flush">
            <li class="list-group-item  open-chat">
              <figure class="avatar">
                <span class="avatar-title bg-pink rounded-circle">NF</span>
              </figure>
              <div class="users-list-body">
                <h6 class="label-name">
                  Nada Fadhilah Fitriyani<i class="star_icon ml-1"></i>
                </h6>
                <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
              </div>

              <h6 class="text-muted small label-date">12.00</h6>
            </li>
            <li class="list-group-item">
              <div>
                <figure class="avatar">
                  <span class="avatar-title bg-blue rounded-circle">NF</span>
                </figure>
              </div>
              <div class="users-list-body">
                <h6 class="label-name">+62 85 - 899 - 125 - 810</h6>
                <p>
                  <span class="text-red">Draft : </span>Lorem ipsum dolor sitsdc
                  sdcsdc sdcsdcs
                </p>
              </div>
              <h6 class="text-muted small label-date">Yesterday</h6>
            </li>

            <li class="list-group-item">
              <div>
                <figure class="avatar">
                  <span class="avatar-title bg-info rounded-circle">NF</span>
                </figure>
              </div>
              <div class="users-list-body">
                <h6 class="label-name">Nada Fadhilah Fitriyani</h6>
                <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
              </div>
              <h6 class="text-muted small label-date">21/09/20</h6>
            </li>
            <li class="list-group-item">
              <div>
                <figure class="avatar">
                  <span class="avatar-title bg-orange rounded-circle">NF</span>
                </figure>
              </div>
              <div class="users-list-body">
                <h6 class="label-name">Nada Fadhilah Fitriyani</h6>
                <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
              </div>
              <h6 class="text-muted small label-date">21/09/20</h6>
            </li>
            <li class="list-group-item">
              <div>
                <figure class="avatar">
                  <span class="avatar-title bg-primary rounded-circle">NF</span>
                </figure>
              </div>
              <div class="users-list-body">
                <h6 class="label-name">Nada Fadhilah Fitriyani</h6>
                <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
              </div>
              <h6 class="text-muted small label-date">21/09/20</h6>
            </li>
          </ul>
        </div>
      </div>

      <div id="Call" class="tabcontent">
        <div
          class="sidebar-body"
          tabindex="3"
          style="overflow: hidden; outline: none;"
        >
          <ul class="list-group list-group-flush">
            <li class="list-group-item  open-chat">
              <figure class="avatar">
                <span class="avatar-title bg-pink rounded-circle">NF</span>
              </figure>
              <div class="users-list-body">
                <h6 class="label-name">Nada Fadhilah Fitriyani</h6>
                <p>Ringing...</p>
              </div>
              <h6 class="text-muted small label-date">12.00</h6>
              <a href="#" class="btn btn-yellow btn-sm position-btn"
                ><i class="call_icon"></i
              ></a>
            </li>
            <li class="list-group-item">
              <figure class="avatar">
                <span class="avatar-title bg-info rounded-circle">NF</span>
              </figure>
              <div class="users-list-body">
                <h6 class="label-name">Nada Fadhilah Fitriyani</h6>
                <p>Ringing...</p>
              </div>
              <h6 class="text-muted small label-date">11.00</h6>
            </li>
            <li class="list-group-item">
              <figure class="avatar">
                <span class="avatar-title bg-info rounded-circle">NF</span>
              </figure>
              <div class="users-list-body">
                <h6 class="label-name">Nada Fadhilah Fitriyani</h6>
                <p>Ringing...</p>
              </div>
              <h6 class="text-muted small label-date">10.30</h6>
            </li>
          </ul>
        </div>
      </div>

      <div id="Video" class="tabcontent">
        <div
          class="sidebar-body"
          tabindex="4"
          style="overflow: hidden; outline: none;"
        >
          <ul class="list-group list-group-flush">
            <li class="list-group-item  open-chat">
              <figure class="avatar">
                <span class="avatar-title bg-pink rounded-circle">NF</span>
              </figure>
              <div class="users-list-body">
                <h6 class="label-name">Nada Fadhilah Fitriyani</h6>
                <p>Incoming Video Call...</p>
              </div>
              <h6 class="text-muted small label-date">12.00</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ./ Chats sidebar -->
  </div>
</template>
