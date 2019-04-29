<template name="graceSwiper">
	<view>
		<swiper
			class="grace-swiper"
			:autoplay="true"
			:indicator-dots="indicatorDots"
			indicator-color="#ccc"
			indicator-active-color="#2c9ef0"
			:style="{ height: swiperHeight + 'rpx' }"
			:interval="interval"
			circular="true"
		>
			<swiper-item class="grace-rows" v-for="(itemArray, outerIndex) in items" :key="outerIndex" >
				<view class="vc-swiper-item" v-for="innerItem in itemArray" :key="innerItem.imgUrl" @tap="onCellTaped(innerItem)">
					<image mode="aspectFit" class="uni-images" :src="innerItem.imgUrl"/>
				</view>
			</swiper-item>
			
		</swiper>
	</view>
</template>
<script>
export default {
	name: 'graceSwiper',
	props: {
		swiperId: {
			type: String,
			default: ''
		},
		items: {
			type: Array,
			default: function() {
				return [];
			}
		},
		indicatorDots: {
			type: Boolean,
			default: true
		},
		interval: {
			type: Number,
			default: 5000
		}
	},
	data() {
		return {
			runCount: 0,
			swiperHeight: 180
		};
	},
	methods: {
		onCellTaped(val) {
			this.$emit('cellTaped', val)
		},
		imgLoad: function(e) {
			if (this.runCount > 0) {
				return;
			}
			this.runCount = 1;
			var id = '#' + this.swiperId + '-item-1';
			var query = uni.createSelectorQuery();
			var _self = this;
			query
				.select(id)
				.fields(
					{
						id: true,
						size: true
					},
					function(res) {
						_self.swiperHeight = res.height;
					}
				)
				.exec();
		}
	}
};
</script>
<style>
.grace-swiper {
	width: 100%;
	/* height: 200upx; */
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
.uni-images{
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
}

.vc-swiper-item {
	height: 120rpx;
	width: 160rpx;
	height: 100%;
	margin-left: 10upx;
}

.vc-swiper-item:first-child{
	margin-left: 0;
}
</style>
