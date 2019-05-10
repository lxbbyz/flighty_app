<template>
	<view>
		<!-- <uni-grid :options="params" column-num="2" type="square" @click="goTo"></uni-grid> -->
		
		<button @click="goTo(10)">连接1</button>
		内容：<input style="border: thin solid #00C777;" type="text" v-model="textOne" />
		<button @click="sendMessage(10,20,textOne)" style="width: 200upx;height: 100upx;line-height: 100upx;left: 0;position: absolute;">发送</button>
		<view v-for="(item, index1) in contentList1" :key="index1" style="margin-top: 110upx;">
			<!-- 自己 -->
			<text style="display: flex;justify-content: flex-end;" v-if="item.formUserSid===10">{{item.formUserSid}}:{{item.content}}</text>
			<!-- 他人 -->
			<text v-else>{{item.formUserSid}}:{{item.content}}</text>
		</view>
		
		<button @click="goTo(20)" style="margin-top: 400upx;">连接2</button>
		内容：<input style="border: thin solid #00C777;" type="text" v-model="textTwo" />
		<button @click="sendMessage(20,10,textTwo)" style="width: 200upx;height: 100upx;line-height: 100upx;left: 0;position: absolute;">发送</button>
		<view v-for="(item, index2) in contentList2" :key="index2" style="margin-top: 110upx;">
			<!-- 自己 -->
			<text style="display: flex;justify-content: flex-end;" v-if="item.formUserSid===20">{{item.formUserSid}}:{{item.content}}</text>
			<!-- 他人 -->
			<text v-else>{{item.formUserSid}}:{{item.content}}</text>
		</view>
		
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	// import store from "@/components/uni-app-chat/store.js"
	// import socket from "@/components/uni-app-chat/socket.js"
	
	export default {
		data() {
			return {
				params:[
					{image:'https://img-cdn-qiniu.dcloud.net.cn/img/shu.png',text:'圣诞树'},
					{image:'https://img-cdn-qiniu.dcloud.net.cn/img/lindang.png',text:'铃铛'},
					{image:'https://img-cdn-qiniu.dcloud.net.cn/img/laoren.png',text:'圣诞老人'},
					{image:'https://img-cdn-qiniu.dcloud.net.cn/img/liwu.png',text:'礼物'}
				],
				textOne:'',
				textTwo:'',
				userOne:'20',
				userTwo:'10',
				contentList1:[],
				contentList2:[]
			}
		},
		components:{
			uniGrid
		},
		methods: {
			//发送消息
			sendMessage(formUserSid,toUserSid,content){
				let message = {
					formUserSid:formUserSid,
					toUserSid:toUserSid,
					content:content
				}
				if(formUserSid===10){
					this.contentList1.push(message);
				}else{
					this.contentList2.push(message);
				}
				console.log("消息-->"+JSON.stringify(message));
				this.sendSocketMessage(JSON.stringify(message));
				// uni.navigateTo({
				// 	url:"../../pairing/pairing"
				// })
			},
			//连接webscoket
			goTo(data_) {
				let that = this;
				console.log(data_.index);
				// uni.setStorageSync('userToken', 'oiWGP4vo8erpTtL6U5s581A7M-eE');
				
				uni.connectSocket({
					url: 'ws://192.168.0.126:9080/flighty/websocket/'+data_
				});
				uni.onSocketOpen(function (res) {
					console.log('WebSocket连接已打开！');
				});
				uni.onSocketError(function (res) {
					console.log('WebSocket连接打开失败，请检查！');
				});
				uni.onSocketMessage(function (res) {
					console.log('收到服务器内容：' + res.data);
					console.log(JSON.parse(res.data).toUserSid);
					let message = {
						formUserSid:JSON.parse(res.data).formUserSid,
						toUserSid:JSON.parse(res.data).toUserSid,
						content:JSON.parse(res.data).content
					}
					if(JSON.parse(res.data).toUserSid===10){
						that.contentList1.push(message);
					}else{
						that.contentList2.push(message);
					}
				});
			},
			sendSocketMessage(msg) {
				uni.sendSocketMessage({
					data: msg
				});
			}
		}
	}
</script>

<style>

</style>
