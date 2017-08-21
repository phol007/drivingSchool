export default {
  name: 'manage_em_tec',
  data() {
    return {
      msg: 'จัดการสิทธิพนักงานและครู',
      Roles: [
        { id: 0, Role_id: 2, Role_name: 'ผู้จัดการ' },
        { id: 1, Role_id: 3, Role_name: 'พนักงาน' },
        { id: 2, Role_id: 4, Role_name: 'ครู/อาจารย์' }
      ],
      user_lists: [
        { no: 1, id: '001', username: 'suthin', fname: 'สุทิน', lname: 'ผาสุข', Roleuser: 4 },
        { no: 2, id: '002', username: 'patithin', fname: 'ปฏิทิน', lname: 'ผาดอย', Roleuser:  2},
        { no: 3, id: '003', username: 'mana', fname: 'มานะ', lname: 'ผาหนาม', Roleuser: 3 }
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
