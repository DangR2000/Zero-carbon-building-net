import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
import './assets/css/bootstrap/css/bootstrap.min.css'
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
