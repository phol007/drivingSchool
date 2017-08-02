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
        <md-toolbar class="md-medium" style="overflow-x: hidden; overflow-y: hidden;">
          <div class="md-toolbar-container">
          <div class="phone-viewport">
            <md-list class="md-triple-line" style="background:none; ">
              <md-list-item style="margin-top:10%; cursor:pointer;">
                <md-avatar class="md-large">
                  <img src="https://placeimg.com/40/40/people/1" alt="People">
                </md-avatar>
                <div class="md-list-text-container" style="overflow-wrap: break-word; width:200px;">
                  <span style="color:#fff; font-size:18px;">รหัส <span id="user_id"></span> </span>
                  <span style="color:#fff; font-size:16px;"> <span id="username"></span> </span>
                  <hr style="width:95%;">
                  <span style="color:#fff; font-size:12px;">ตำแหน่ง <span id="role_name"></span> </span>
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
      tools: [{id: 1, text: 'แก้ไขข้อมูลส่วนตัว', icon: 'account_box', page: 'main_menu', active: ''},
                    {id: 2, text: 'เมนูหลัก', icon: 'menu', page: 'main_menu', active: 'active'},
                    {id: 3, text: 'จัดการข้อมูลผู้ใช้งาน', icon: 'rate_review', page: 'mn_user', active: ''},
                    {id: 4, text: 'คอร์สเรียน', icon: 'spellcheck', page: 'mainIncome', active: ''},
                    {id: 5, text: 'ตารางเรียน', icon: 'perm_contact_calendar', page: 'Dashboard', active: ''},
                    {id: 6, text: 'พิมพ์เอกสารต่าง ๆ', icon: 'print', page: 'Dashboard', active: ''},
                    {id: 7, text: 'ข้อมูลการเงิน', icon: 'monetization_on', page: 'Dashboard', active: ''},
                    {id: 8, text: 'ออกจากระบบ', icon: 'power_settings_new', page: '/', active: ''}],
      page: ''
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
      this.tools = [{id: 1, text: 'แก้ไขข้อมูลส่วนตัว', icon: 'account_box', page: '/main_menu', active: ''},
                    {id: 2, text: 'เมนูหลัก', icon: 'account_box', page: '/main_menu', active: 'active'},
                    {id: 3, text: 'จัดการข้อมูลผู้ใช้งาน', icon: 'view_list', page: 'mainFood', active: ''},
                    {id: 4, text: 'คอร์สเรียน', icon: 'monetization_on', page: 'mainIncome', active: ''},
                    {id: 5, text: 'ตารางเรียน', icon: 'dashboard', page: 'Dashboard', active: ''},
                    {id: 6, text: 'พิมพ์เอกสารต่าง ๆ', icon: 'dashboard', page: 'Dashboard', active: ''},
                    {id: 7, text: 'ข้อมูลการเงิน', icon: 'dashboard', page: 'Dashboard', active: ''},
                    {id: 8, text: 'ออกจากระบบ', icon: 'power_settings_new', page: '/', active: ''}]
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
