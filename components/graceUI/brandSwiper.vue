<template>
	<view>
		<swiper class="grace-swiper" :autoplay="true" :indicator-dots="true" indicator-color="#ccc" indicator-active-color="#2c9ef0" 
		 :style="{ height: swiperHeight + 'rpx' }" :interval="interval">
			<swiper-item class="grace-rows" v-for="j in four" :key="j">
				<view class="uni-brand-Traveling">
					<view class="uni-brand-images" v-if="logoList && logoList.length > 0">
						<view v-for="(i,index2) in three" :key="i">
							<view class="uni-images-one uni-images-padding" @click="agencyDetail(logoList[i + 3*j].url)">
								<image :src="fileHost + logoList[i + 3*j].lg_logo" class="logoimg"></image>
							</view>
						</view>
					</view>
					<view class="uni-brand-images uni-brand-fonts" v-if="textList && textList.length > 0">
						<view class="uni-fonts-one" v-for="(i,index3) in four" :key="i" v-html="textList[i + 4*j].brand_name" @click="agencyDetail(textList[i + 4*j].url)"></view>
					</view>
				</view>
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
		height: 240upx !important;
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
</style>
