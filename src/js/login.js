export default {
  name: 'login',
  data() {
    return {
      users: [{ id: '00001', username: 'administrator', role: 1 },
        { id: '00002', username: 'owner', role: 2 },
        { id: '00003', username: 'employee', role: 3 },
        { id: '00004', username: 'teacher', role: 4 },
        { id: '00005', username: 'customer', role: 5 },
        { id: '00006', username: 'nathaphol_008@windowslive.com', role: 5 }
      ],
      Roles: [{ id: 0, Role_id: 1, Role_name: 'administrator' },
        { id: 1, Role_id: 2, Role_name: 'ผู้จัดการ' },
        { id: 2, Role_id: 3, Role_name: 'พนักงาน' },
        { id: 3, Role_id: 4, Role_name: 'ครู/อาจารย์' },
        { id: 4, Role_id: 5, Role_name: 'นักเรียน' }
      ],
      menu_lists: [{ id: 1, text: 'manege user', image: require('../assets/user.png'), link: 'mn_user' }, { id: 2, text: 'manege position', image: require('../assets/permission.png'), link: 'mn_permission' }, { id: 2, text: 'manege menu', image: require('../assets/menu.png'), link: 'mn_menu' }],
      Username: "",
      password: "",
      nodePage: 0
    }
  },
  methods: {
    login(user, pwd) {
      var result = 0;
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].username == user) {
          result = 1
          localStorage.id = this.users[i].id
          localStorage.username = this.users[i].username
          for (var r = 0; r < this.Roles.length; r++) {
            if (this.Roles[r].Role_id == this.users[i].role) {
              localStorage.role = this.Roles[r].Role_name
            }
          }
        }
        document.getElementById('user_id').innerHTML = localStorage.id
        document.getElementById('username').innerHTML = localStorage.username
        document.getElementById('role_name').innerHTML = localStorage.role
      }
      if (result == 1) {
        this.goTo('/main_menu')
      } else {
        alert("Useranem or password invalid!!")
      }
      //console.log(this.$router.user_id)
    },
    goTo(path) {
      this.$router.push(path)
    }
  }
}
