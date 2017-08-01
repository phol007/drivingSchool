export default {
  name: 'login',
  data() {
    return {
      users: [{ id: 1, username: 'administrator', role: 1 },
        { id: 2, username: 'owner', role: 2 },
        { id: 3, username: 'employee', role: 3 },
        { id: 4, username: 'teacher', role: 4 },
        { id: 5, username: 'customer', role: 5 }
      ],
      menu_lists: [{ id: 1, text: 'manege user', image: require('../assets/user.png'), link: 'mn_user' }, { id: 2, text: 'manege position', image: require('../assets/permission.png'), link: 'mn_permission' }, { id: 2, text: 'manege menu', image: require('../assets/menu.png'), link: 'mn_menu' }],
      Username: "",
      password: ""
    }
  },
  methods: {
    login(user, pwd) {
      var result = 0;
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].username == user) {
          result = 1
          localStorage.username = this.users[i].username
          localStorage.role = this.users[i].role
        }
      }
      if (result == 1) {
        this.goTo('/main_menu')
      } else {
        alert("Useranem or password invalid!!")
      }
    },
    goTo(path) {
      this.$router.push(path)
    }
  }
}
