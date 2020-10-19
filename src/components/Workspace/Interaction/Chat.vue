<template>
  <div class="chat" id="middle">
    <div class="chat-header">
      <div class="d-flex flex-row">
        <div>
          <div class="chat-header-user">
            <h6 class="text-chat-header">Nada Fadhilah Fitriyani</h6>
          </div>
        </div>
        <div class="ml-3 pt-2">
          <button class="btn btn-yellow-outline">
            <div class="d-flex flex-row pt-1">
              <div>
                <i class="star_icon mr-2"></i>
              </div>
              <div>
                <h6 class="font-yellow-prio">Priority</h6>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div class="chat-header-action">
        <ul class="list-inline">
          <li class="list-inline-item" style="margin-top:4px !important;">
            <a
              href="#"
              class="btn btn-sm btn-red font11"
              style="border-radius: 20px; padding: 5px 20px;"
            >
              End Chat
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="chat-body"
      tabindex="1"
      style="overflow: hidden; outline: none;"
    >
      <div class="box-detail-date">
        <h6 class="text-detail-date">Today</h6>
      </div>
      <div class="messages">
        <div class="d-flex flex-row">
          <div>
            <figure class="avatar">
              <span class="avatar-title bg-pink rounded-circle">NF</span>
            </figure>
          </div>
          <div class="ml-2">
            <div class="message-item">
              <div class="message-content">
                Selamat pagi min, saya ingin bertanya perihal pengembalian
                barang itu bisa kapan ya?
                <div class="message-action">
                  20/09/2020 11:30
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-row mt-1">
          <div>
            <figure class="avatar">
              <span class="avatar-title bg-pink rounded-circle">NF</span>
            </figure>
          </div>
          <div class="ml-2">
            <div class="message-item">
              <div class="message-content">
                Refund nya juga min bagaimana?
                <div class="message-action">
                  20/09/2020 11:30
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="message-item outgoing-message">
          <div class="message-content">
            Selamat pagi bu
            <div class="message-action text-white">
              20/09/2020 11:30
            </div>
          </div>
        </div>
        <div class="d-flex flex-row mt-1">
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
                  <h6 style="font-size:14px; font-weight:600;">41.36 Mb</h6>
                  <div class="message-action">
                    20/09/2020 11:30
                  </div>
                </div>
                <div class="file-icon">
                  <i class="download_icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="message-item outgoing-message">
          <div class="message-content">
            Terimakasih telah menghubungi kami
            <div class="message-action text-white">
              20/09/2020 11:30
            </div>
          </div>
        </div>
        <div class="message-item ">
          <div class="message-content">Lorem ipsum dolor sit amet.</div>
          <div class="message-action">PM 14:25</div>
        </div>
      </div>
    </div>
    <div class="chat-footer">
      <form action="">
        <!-- <button class="btn btn-light btn-floating" type="button"> -->
        <i class="paperclip_icon"></i>
        <!-- </button> -->
        <input
          type="text"
          class="form-control"
          placeholder="Type your message here......"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="form-buttons">
          <button class="btn btn-primary btn-floating" type="submit">
            <i class="fa fa-send"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sessionId: {
      type: String,
      required: true
    }
  }
};
</script>
