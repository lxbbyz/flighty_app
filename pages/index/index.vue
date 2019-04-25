<template>
	<view class="content">
		<!-- <view class="startView" @click="getUserMain()">开始</view> -->
		<button class="startView" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">开始</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			async onGotUserInfo(e) {
				
				console.log("用户信息-->"+JSON.stringify(e));
				
				if(!e.detail.userInfo){
					console.log("用户未授权")
				}else{
					console.log("用户授权")
					console.log("用户头像-->"+e.detail.userInfo.avatarUrl);
					console.log("用户名字-->"+e.detail.userInfo.nickName);
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		align-items: center;
		height: 1000upx;
	}
	.startView {
		width: 250upx;
		height: 90upx;
		background-color: #1AA034;
		border-radius: 30upx;
		line-height: 90upx;
		color: white;
		text-align: center;
		margin: auto auto;
	}
</style>
