export default {
  name: 'manage_user',
  data () {
    return {
      msg: 'จัดการระบบผู้ใช้งาน',
      menu_lists: [{ id: 1, text: 'ข้อมูลผู้จัดการ', image: require('../assets/admin.png'), link: 'mn_user_owner' }, 
                  { id: 2, text: 'ข้อมูลพนักงานและครู', image: require('../assets/employee.png'), link: 'mn_user_Employ' }, 
                  { id: 3, text: 'ข้อมูลสมาชิก', image: require('../assets/customer.png'), link: 'mn_user_custo' }]
    }
  },
  methods: {
  	goTo (path) {
  	  this.$router.push(path)
  	}
  }
}