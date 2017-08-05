
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