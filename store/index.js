import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		host: 'http://127.0.0.1:9080',// 后端服务
		onlineHost:'http://91lz.com',// 用于微信授权回调
		fileHost:'https://files.91lz.com/uploads'// oss文件域名
	},
	mutations: {
		// 相当于setter
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false;
			state.openid = null;
		},
		setOpenid(state, openid) {
			state.openid = openid
		}
	},
	getters: {
		host: state => {
			return state.host;
		},
		fileHost: state => {
			return state.fileHost;
		},
		onlineHost: state => {
			return state.onlineHost;
		}
	},
	actions: {
		// lazy loading openid
		getUserOpenId: async function({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function() { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		},
		getHost: async function({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.host) {
					resolve(state.host)
				} else {
					let err = {
						message: "host not set!"
					}
					reject(err);
				}
			})
		}
	}
});

export default store
