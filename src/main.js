import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router.js'
import qs from 'qs'
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
Vue.prototype.$help = new Vue();

new Vue({
	router,
  	el: '#app',
  	render: h => h(App)
})
