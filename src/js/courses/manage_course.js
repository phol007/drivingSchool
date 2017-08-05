import moment from 'moment'
import numeral from 'numeral'

export default {
  name: 'manage_course',
  data () {
    return {
      msg: 'จัดการข้อมูลคอร์สเรียน',
      course_types: [
        {id: 0, name: 'เกียร์ธรรมดา'},
        {id: 1, name: 'เกียร์ออโต้'},
        {id: 2, name: 'เกียร์ ธรรมดา + ออโต้'}
      ],
      course_lists: [
        { no: 1, course_name: 'หลักสูตรเรียน 8 ชั่วโมง', price: 1600, course_type: 0, date_start: new Date()},
        { no: 2, course_name: 'หลักสูตรเรียน 12 ชั่วโมง', price: 2300, course_type: 0, date_start: new Date()},
        { no: 3, course_name: 'หลักสูตรเรียน 14 ชั่วโมง', price: 2600, course_type: 0, date_start: new Date()},
        { no: 4, course_name: 'หลักสูตรเรียน 8 ชั่วโมง', price: 2300, course_type: 1, date_start: new Date()},
        { no: 5, course_name: 'หลักสูตรเรียน 10 ชั่วโมง', price: 2800, course_type: 1, date_start: new Date()},
        { no: 6, course_name: 'หลักสูตรเรียน 8 ชั่วโมง , ออโต้ 2 ชั่วโมง', price: 2200, course_type: 2, date_start: new Date()},
        { no: 7, course_name: 'หลักสูตรเรียน 8 ชั่วโมง , ออโต้ 4 ชั่วโมง', price: 2800, course_type: 2, date_start: new Date()}
      ]
    }
  },
  methods: {
  	goTo (path) {
  	  this.$router.push(path)
  	},
    getTypeCourse (id){
      var typeName = ''
      for(var i = 0; i < this.course_types.length; i++){
        if(this.course_types[i].id == id){
          typeName = this.course_types[i].name
        }
      }
      return typeName
    },
    getDate (date) {
      return moment(date).format('DD/MM/YYYY') 
    },
    getMoneyFormat (int) {
      return numeral(int).format('0,0.00')
    },
    getData(data){
      alert(JSON.stringify(data))
    }
  }
}