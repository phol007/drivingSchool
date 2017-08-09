export default {
  name: 'main_menu',
  data() {
    return {
      msg: 'เมนูหลัก',
      menu_lists: [{ id: 1, text: 'จัดการข้อมูลผู้ใช้งาน', image: require('../assets/user.png'), link: 'mn_user' },
        { id: 2, text: 'คอร์สเรียน', image: require('../assets/cors.png'), link: 'mn_cors' },
        { id: 3, text: 'ตารางเรียน', image: require('../assets/table_tranning.png'), link: 'mn_schedule' },
        { id: 4, text: 'สถิติ', image: require('../assets/statistic.png'), link: 'mn_statistic' },
        { id: 5, text: 'พัสดุ', image: require('../assets/package.png'), link: 'mn_package' }
      ]
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    }
  }
}
