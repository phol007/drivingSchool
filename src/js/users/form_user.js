import myUpload from 'vue-image-crop-upload'
export default {
  name: 'form-user',
  data () {
    return {
      msg: 'สมัครสมาชิก',
      step: 0,
      show: false,
      avatarUrl: null,
      otherParams: {
        token: '123456798',
        name: 'img'
      },
      headers: {
        smail: '*_~'
      },
      files: null,
      completeStep: 0,
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
  components: {
    'my-upload': myUpload
  },
  methods: {
    toggleShow () {
      let { show } = this;
      this.show = !show;
    },
    cropSuccess (data, field, key) {
      if (field == 'avatar') {
        this.avatarUrl = data;
      }
    },
    cropUploadSuccess (data, field, key) {
      console.log('-------- crop success --------')
      console.log(JSON.stringify(data))
      this.avatarUrl = data.massege.url
      document.getElementById('img_ProFile').value = data.massege.img_name
      console.log('field: ' + field)
      console.log('key: ' + key)
    },
    cropUploadFail (status, field, key) {
      console.log('-------- upload --------')
      console.log(status)
      console.log('field: ' + field)
      console.log('key: ' + key)
      this.avatarUrl = null
      document.getElementById('img_ProFile').value = null
    },
    goTo (page) {
    	this.$router.push(page)
    },
    nextStep () {
    	this.step = 1
    	$('#stepone').addClass('completed ')
    	$('#steptwo').addClass('active')
    },
    backStep () {
    	this.step = 0
    	$('#stepone').addClass('active')
    	$('#steptwo').removeClass('active')
    },
    insertData () {
    	this.completeStep = 1
    	$('#steptwo').addClass('completed ')
    },
    print () {
    	alert('ขั้นตอนสมัครสมาชิก เสร็จสมบูรณ์')
    	this.goTo('/')
    }
  },
  mounted () {
  	this.backStep()
  }
}
