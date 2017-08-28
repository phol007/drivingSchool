export default {
  name: 'manage_adm_own',
  data () {
    return {
      msg: 'จัดการระบบสิทธิผู้จัดการ',
      Roles: [
        { id: 0, Role_id: 1, Role_name: 'administrator' },
        { id: 1, Role_id: 2, Role_name: 'ผู้จัดการ' },
        { id: 2, Role_id: 3, Role_name: 'พนักงาน' },
        { id: 3, Role_id: 4, Role_name: 'ครู/อาจารย์' }
      ],
      user_lists: [
        { no: 1, id: '001', username: 'administrator', fname: 'สุทิน', lname: 'ผาสุข', Roleuser: 1 },
        { no: 2, id: '002', username: 'own001', fname: 'ปฏิทิน', lname: 'ผาดอย', Roleuser: 2 },
        { no: 3, id: '003', username: 'em003', fname: 'มานะ', lname: 'ผาหนาม', Roleuser: 2 }
      ],
      MDuser: '',
      Role: ''
    }
  },
  methods: {
    goTo (path) {
      this.$router.push(path)
    },
    changeRole (id, data) {
      // alert(id+", "+data)
      for(var i = 1; i <= this.user_lists.length; i++){
        if(i==(id-1)){
          this.user_lists.Roleuser = data
        }
      }
     // console.log(JSON.stringify(this.user_lists))
    }
  }
}
