<template>
  <div id="app">
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggleLeftSidenav" style="padding:0;" v-show="this.$route.path!='/'">          
          <i class="material-icons" style="font-size:40px">reorder</i>
        </md-button>
        <h1 class="md-title" style="margin-left:35%; font-size:40px; padding-top:0.5%; font-family:RSU;"><img src="./assets/logo.png" height="40" width="40"> โรงเรียนสอนขับรถ</h1>
      </md-toolbar>

      <div>        
        <router-view></router-view>
      </div>

      <md-sidenav class="md-left" ref="leftSidenav">
        <md-toolbar class="md-medium">
          <div class="md-toolbar-container">
          <div class="phone-viewport">
            <md-list class="md-triple-line" style="background:none; ">
              <md-list-item style="margin-top:10%; cursor:pointer;">
                <md-avatar class="md-large">
                  <img src="https://placeimg.com/40/40/people/1" alt="People">
                </md-avatar>

                <div class="md-list-text-container">
                  <span style="color:#fff; font-size:18px; margin-bottom:3%;">00001 : Administrator</span>
                  <span style="color:#fff; font-size:14px;">Administrator System</span>
                </div>
              </md-list-item>
            </md-list>
          </div>
          </div>
        </md-toolbar>

        <div class="phone-viewport">
          <md-list>
            <md-list-item class="menu_link" v-for="tool in tools" v-bind:id="tool.active" :key="tool.text" @click="acti(tool.id)">
              <md-icon>{{ tool.icon }}</md-icon> <span>{{ tool.text }}</span>
            </md-list-item>
          </md-list>
        </div>
      </md-sidenav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      tools: [{id: 1, text: 'All User', icon: 'account_box', page: '/', active: 'active'}, {id: 2, text: 'Menu Food', icon: 'view_list', page: 'mainFood', active: ''}, {id: 3, text: 'Income', icon: 'monetization_on', page: 'mainIncome', active: ''}, {id: 4, text: 'Report & Dashboard', icon: 'dashboard', page: 'Dashboard', active: ''}, {id: 5, text: 'LogOut', icon: 'power_settings_new', page: '/', active: ''}],
      page: '',
      user_id: 1
    }
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
    },
    close (ref) {
    },
    acti (id) {
      for (var i = 0; i < this.tools.length; i++) {
        if (this.tools[i].id === id) {
          this.tools[i].active = 'active'
          this.page = this.tools[i].page
        } else {
          this.tools[i].active = ''
        }
      }
      this.toggleLeftSidenav()
      this.goTopage(this.page)
    },
    logOut () {
      localStorage.clear()
      this.goTopage('/')
    },
    goTopage (page) {
      this.$router.push(page)
    }
  },
  mounted () {
    if (this.user_id === 0) {
      this.tools = [{id: 1, text: 'All User', icon: 'account_box', page: '/', active: 'active'}, {id: 2, text: 'Menu Food', icon: 'view_list', page: 'mainFood', active: ''}, {id: 3, text: 'Income', icon: 'monetization_on', page: 'mainIncome', active: ''}, {id: 4, text: 'Report & Dashboard', icon: 'dashboard', page: 'Dashboard', active: ''}]
    }
    this.logOut()
    var user = localStorage.username
    if (user) {
      console.log(localStorage.username)
      console.log(localStorage.role)
    }
  }
}
</script>
