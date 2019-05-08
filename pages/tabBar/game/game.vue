<template>
	<view>
		<!-- <uni-grid :options="params" column-num="2" type="square" @click="goTo"></uni-grid> -->
		<button @click="goTo">连接</button>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import store from "@/components/uni-app-chat/store.js"
	import socket from "@/components/uni-app-chat/socket.js"
	
	export default {
		data() {
			return {
				params:[
					{image:'https://img-cdn-qiniu.dcloud.net.cn/img/shu.png',text:'圣诞树'},
					{image:'https://img-cdn-qiniu.dcloud.net.cn/img/lindang.png',text:'铃铛'},
					{image:'https://img-cdn-qiniu.dcloud.net.cn/img/laoren.png',text:'圣诞老人'},
					{image:'https://img-cdn-qiniu.dcloud.net.cn/img/liwu.png',text:'礼物'}
				]
			}
		},
		components:{
			uniGrid,
			store,
			socket
		},
		methods: {
			goTo(data_) {
				console.log(data_.index);
				uni.setStorageSync('userToken', 'oiWGP4vo8erpTtL6U5s581A7M-eE');
				
				// ws://47.99.99.79:8083/shop//websocket/socketServer.do
				// ws://192.168.0.126:9080/flighty/websocket/socketServer.do?SESSION_USERNAME=15170688099
				
				uni.connectSocket({
					url: 'ws://192.168.0.126:9080/flighty/websocket/20',
					success(e) {
						console.log("返回的数据-->"+JSON.stringify(e));
					},
					fail(e) {
						console.log("返回的数据-->"+JSON.stringify(e));
					}
				});
				uni.onSocketOpen(function (res) {
					console.log('WebSocket连接已打开！');
				});
				uni.onSocketError(function (res) {
					console.log('WebSocket连接打开失败，请检查！');
				});
			}
		}
	}
</script>

<style>

</style>
