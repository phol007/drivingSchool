export default {
  name: 'manage_customer',
  data() {
    return {
      msg: 'จัดการสิทธิสมาชิก',
      user_lists: [
        { no: 1, id: '001', username: 'manee', fname: 'สุทิน', lname: 'ผาสุข', ch: 1, cs: 0 },
        { no: 2, id: '002', username: 'painai', fname: 'ปฏิทิน', lname: 'ผาดอย', ch: 2, cs: 2},
        { no: 3, id: '003', username: 'mala', fname: 'มานะ', lname: 'ผาหนาม', ch: 2, cs: 1 }
      ],
      MDuser: '',
      RoleUser: ''
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    }
  }
}
