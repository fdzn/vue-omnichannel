<template>
  <nav class="navigation">
    <div class="nav-group">
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }">
            <i class="logo_chat_icon"></i>
          </router-link>
        </li>
        <li>
          <a data-navigation-target="#" href="#">
            <i class="signal_1_icon"></i>
          </a>
        </li>
        <li>
          <router-link :to="{ name: 'Workspace' }">
            <i class="conversation_icon"></i>
          </router-link>
        </li>
        <li>
          <a data-navigation-target="chat_agent" href="javascript:nav_agent()"
            ><i class="material-icons text-white" style="font-size: 24px"
              >group</i
            ></a
          >
        </li>
        <li style="margin-top: 37.5em">
          <a href="javascript:void(0)" @click="logout">
            <i class="ti-power-off text-white"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style scoped>
nav.navigation {
  /* background: #fff */
  background: #3a7094;
}

nav.navigation .nav-group {
  width: 70px;
}

nav.navigation ul {
  height: 100vh;
  height: -webkit-calc(var(--vh, 1vh) * 100);
  height: -moz-calc(var(--vh, 1vh) * 100);
  height: calc(var(--vh, 1vh) * 100);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

nav.navigation ul li {
  list-style: none;
}

nav.navigation ul li a {
  display: block;
  text-align: center;
  padding: 6px 0;
  color: #828282;
  position: relative;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

nav.navigation ul li a.notifiy_badge:before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: #ff7373;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
}

nav.navigation ul li a.active {
  /* color: #3db16b */
  color: #fbce0a;
  border-left: 3px solid #fbce0a;
}

nav.navigation ul li a.logo {
  margin-bottom: 1rem;
  background-color: #fbce0a;
}

nav.navigation ul li a.logo svg path {
  fill: rgba(255, 255, 255, 0.7);
}

nav.navigation ul li a.logo svg circle {
  fill: rgba(255, 255, 255, 0.7);
}

nav.navigation ul li a.logo i {
  font-size: 26px;
}

nav.navigation ul li a.logo:focus,
nav.navigation ul li a.logo:hover {
  background-color: #fff;
}

nav.navigation ul li a:focus,
nav.navigation ul li a:hover {
  color: #040505;
}

nav.navigation ul li a i {
  font-size: 19px;
}

nav.navigation ul li.brackets {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>
