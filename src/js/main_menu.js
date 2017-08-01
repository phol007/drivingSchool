export default {
  name: 'main_menu',
  data () {
    return {
      msg: 'เมนูหลัก',
      menu_lists: [{ id: 1, text: 'จัดการข้อมูลผู้ใช้งาน', image: require('../assets/user.png'), link: 'mn_user' }, 
                  { id: 2, text: 'คอร์สเรียน', image: require('../assets/cors.png'), link: 'mn_cors' }, 
                  { id: 3, text: 'ตารางเรียน', image: require('../assets/menu.png'), link: 'mn_schedule' },
                  { id: 4, text: 'พิมพ์เอกสารต่าง ๆ', image: require('../assets/print.png'), link: 'mn_doc' },
                  { id: 5, text: 'ข้อมูลการเงิน', image: require('../assets/money.png'), link: 'mn_money' }]
    }
  },
  methods: {
  	goTo (path) {
  	  this.$router.push(path)
  	}
  }
}