import Vue from 'vue'
import App from './App'

import store from './store'

import graceAlert from './components/graceUI/graceAlert.vue'

Vue.config.productionTip = false;

Vue.prototype.$store = store;

Vue.component('message', graceAlert)// 注册全局组件

App.mpType = 'app';

const app = new Vue({
	store,
	...App
});
app.$mount();