import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
