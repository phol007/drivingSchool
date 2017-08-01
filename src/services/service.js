import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

export default {
  test (params, success, error) {
    Vue.http.put('http://localhost/resturant_project/api/userProfile', params).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  }
}
