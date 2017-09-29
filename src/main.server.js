import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router.js'
import qs from 'qs'
import Message from 'element-ui'
Vue.prototype.$message = Message
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
Vue.prototype.$help = new Vue();

export default context => {
	return Promise.resolve(
		new Vue({
			router,
		  	el: '#app',
		  	render: h => h(App)
		})
	)
}