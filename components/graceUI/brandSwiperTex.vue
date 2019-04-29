<template>
	<view>
		<swiper class="grace-swiper" :autoplay="true " :indicator-dots="true" indicator-color="#ccc" indicator-active-color="#2c9ef0" 
		 :style="{ height: swiperHeight + 'rpx' }" :interval="interval">
			<swiper-item class="grace-rows" v-for="j in four" :key="j">
				<!-- <view > -->
					<view class="lzm-hot-goods">
						<view class="lzm-hot-list">
							<view class="lzm-list-one"><image src="../../static/default.png" class="lzm-list-one-img"></image></view>
							<view class="lzm-list-two">张明</view>
							<view class="lzm-list-there">
								<text class="lzm-list-threr-title">3年业龄</text>
								<text class="lzm-list-threr-title">标签</text>
							</view>
							<view class="lzm-list-four">销售经理</view>
							<view class="lzm-list-five">189222200</view>
						</view>
						<view class="lzm-hot-list">
							<view class="lzm-list-one"><image src="../../static/default.png" class="lzm-list-one-img"></image></view>
							<view class="lzm-list-two">张明</view>
							<view class="lzm-list-there">
								<text class="lzm-list-threr-title">3年业龄</text>
								<text class="lzm-list-threr-title">标签</text>
							</view>
							<view class="lzm-list-four">销售经理</view>
							<view class="lzm-list-five">189222200</view>
						</view>
						
					</view>
				<!-- </view> -->
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	export default {
		props: ['logoList', 'textList', 'fileHost'],
		data() {
			return {
				swiperHeight: 180,
				interval: 5000,
				three:[0,1,2],
				four:[0,1,2,3]
			};
		},
		methods: {
			agencyDetail(url) {
				uni.navigateTo({
					url: '../officeList/agencyDetail?url=' + url
				});
			},
		}
	};
</script>
<style>
	.grace-swiper {
		width: 100%;
		height: 480upx !important;
		position: relative;
	}

	.grace-swiper swiper-item {
		width: 100%;
		font-size: 0;
		line-height: 0;
	
	}

	.grace-swiper swiper-item image {
		width: 100%;
	}

	.uni-images {
		height: 120rpx;
		width: 160rpx;
	}

	.grace-swiper swiper-item navigator {
		width: 100%;
		
	}

	.grace-swiper swiper-item navigator image {
		width: 100%;
	}
	
	/* 列 */
	.grace-columns {
		display: flex;
		flex-direction: column !important;
	}

	/* 行 */
	.grace-rows {
		display: flex;
		flex-direction: row;
		height: 100%;
	}

	.vc-swiper-item {
		height: 120rpx;
		width: 160rpx;
		height: 100%;
		margin-left: 10upx;
	}

	.vc-swiper-item:first-child {
		margin-left: 0;
	}

	.uni-brand-Traveling {
		width: 100%;
		/* background: #ff0; */
		padding: 5upx;
	}

	.uni-images-padding {
		padding: 12upx 10upx;
		box-shadow: 0 0 1px 1px rgba(0, 0, 0, .1);
		border-radius: 4upx;
	}

	.uni-brand-images {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 20upx;
	}

	.logoimg {
		width: 200upx !important;
		height: 80upx;
		/* border: 1px solid #dddddd; */
		border-radius: 4upx;
	}

	.uni-fonts-one {
		width: 160upx;
		height: 68upx;
		line-height: 68upx;
		/* display: flex;
		justify-content: center;
		align-items: center; */
		color: #6a6a6a;
		box-shadow: 0 0 1px 1px rgba(0, 0, 0, .1);
		font-size: 28upx;
		letter-spacing: 4upx;
		word-wrap: normal;
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
		text-align: center;
	}

	.uni-brand-fonts {
		margin-top: 10upx;
	}
	.lzm-hot-goods{
		width: 100%;
		padding-top: 20upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.lzm-hot-list{
		height: 340upx;
		width: 340upx;
		background: #fff;
		border-radius: 6upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 28upx 0 30upx 0;
		letter-spacing: 2upx;
		margin-bottom: 30upx;
		border: 1px solid #f3f3f3;
		box-shadow: 0 0 1px rgba(0, 0, 0, .1);
	}
	.lzm-list-one{
		width: 138upx;
		height: 138upx;
		
	}
	.lzm-list-one-img{
		width: 138upx;
		height: 138upx;
	}
	.lzm-list-two{
		font-size: 44upx;
		color: #333;
		margin-top: 36upx;
	}
	.lzm-list-there{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 40upx;
	}
	.lzm-list-threr-title{
		padding: 0 5px;
		display: flex;
		align-items: center;
		height: 40upx;
		color: #57a3ef;
		background-color: #f1f5f8;
		border: 1px solid #53abf3;
		font-size: 24upx;
		border-radius: 32upx;
		margin-right: 15upx;
	}
	.lzm-list-four{
		font-size: 32upx;
		color: #999;
		margin-top: 30upx;
	}
	.lzm-list-five{
		font-size: 32upx;
		color: #999;
		margin-top: 44upx;
	}
</style>
