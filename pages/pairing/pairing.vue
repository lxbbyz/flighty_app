<template>
	<view>
		<!-- <view class="uni-padding-wrap uni-common-mt">
			<view class="animation-element-wrapper">
				<view class="animation-element" :animation="animationData"></view>
				<view class="animation-element1" :animation="animationData1"></view>
				<view class="animation-element2" :animation="animationData2"></view>
				<view class="animation-element3" :animation="animationData3"></view>
				<view class="animation-element4" :animation="animationData4"></view>
				<view class="animation-element5" :animation="animationData5"></view>
				<view class="animation-element6" :animation="animationData6"></view>
				<view class="animation-element7" :animation="animationData7"></view>
			</view>
			<scroll-view class="animation-buttons" scroll-y="true">
				<button class="animation-button" @tap="rotate">旋转</button>
			</scroll-view>
		</view> -->
		<view style="display: flex;justify-content: center;flex-direction: row;">
			<button :disabled="symbolDis" @click="operation(symbol1)" class="buttonClass">A</button>
			<button v-if="numberClick1===''" class="buttonClass" disabled="true"></button>
			<button v-else :disabled="numberDis" @click="operation(numberClick1,'numberClick1')" class="buttonClass">{{numberClick1}}</button>
			<button :disabled="symbolDis" @click="operation(symbol2)" class="buttonClass">C</button>
		</view>
		<view style="display: flex;justify-content: center;flex-direction: row;">
			<button v-if="numberClick2===''" class="buttonClass" disabled="true"></button>
			<button v-else :disabled="numberDis" @click="operation(numberClick2,'numberClick2')" class="buttonClass">{{numberClick2}}</button>
			<button style="width: 150upx;height: 150upx;border: thin solid #00C777;margin: 30upx;border-radius: 30upx;"></button>
			<button v-if="numberClick3===''" class="buttonClass" disabled="true"></button>
			<button v-else :disabled="numberDis" @click="operation(numberClick3,'numberClick3')" class="buttonClass">{{numberClick3}}</button>
		</view>
		<view style="display: flex;justify-content: center;flex-direction: row;">
			<button :disabled="symbolDis" @click="operation(symbol3)" class="buttonClass">F</button>
			<button v-if="numberClick4===''" class="buttonClass" disabled="true"></button>
			<button v-else :disabled="numberDis" @click="operation(numberClick4,'numberClick4')" class="buttonClass">{{numberClick4}}</button>
			<button :disabled="symbolDis" @click="operation(symbol4)" class="buttonClass">H</button>
		</view>
		
		<text style="margin-top: 400upx;">{{formula}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				numberDis:false,
				symbolDis:true,
				symbol1:'+',
				symbol2:'-',
				symbol3:'*',
				symbol4:'/',
				symbolClick:false,
				number1:1,
				numberClick1:'1',
				number2:2,
				numberClick2:'2',
				number3:3,
				numberClick3:'3',
				number4:4,
				numberClick4:'4',
				numberClickHistory:'',
				formula:'',	//算式
				animationData: '',
				animationData1:'',
				animationData2:'',
				animationData3:'',
				animationData4:'',
				animationData5:'',
				animationData6:'',
				animationData7:''
			}
		},
		onLoad() {
			this.animation = uni.createAnimation({
				duration: 3000,
				timingFunction: 'ease',
			});
			this.animation1 = uni.createAnimation({
				duration: 3000,
				timingFunction: 'ease',
			});
			this.animation2 = uni.createAnimation({
				duration: 3000,
				timingFunction: 'ease',
			});
			this.animation3 = uni.createAnimation({
				duration: 3000,
				timingFunction: 'ease',
			});
			this.animation4 = uni.createAnimation({
				duration: 3000,
				timingFunction: 'ease',
			});
			this.animation5 = uni.createAnimation({
				duration: 3000,
				timingFunction: 'ease',
			});
			this.animation6 = uni.createAnimation({
				duration: 3000,
				timingFunction: 'ease',
			});
			this.animation7 = uni.createAnimation({
				duration: 3000,
				timingFunction: 'ease',
			});
		},
		onShow: function(){
			
		},
		methods: {
			operation(str,numberClick){
				console.log(numberClick);
				if(numberClick !== undefined){
					if(this.symbolClick){	//当公式为空或者已经没有完整算式
						this.numberDis = true;
						this.symbolDis = false;
						this.formula = this.formula + str;
						
						if(this.numberClickHistory === 'numberClick1'){
							this.numberClick1 = '';
						}else if(this.numberClickHistory === 'numberClick2'){
							this.numberClick2 = '';
						}else if(this.numberClickHistory === 'numberClick3'){
							this.numberClick3 = '';
						}else if(this.numberClickHistory === 'numberClick4'){
							this.numberClick4 = '';
						}
						
						if(numberClick === 'numberClick1'){
							this.numberClick1 = "("+this.formula+")";
						}else if(numberClick === 'numberClick2'){
							this.numberClick2 = "("+this.formula+")";
						}else if(numberClick === 'numberClick3'){
							this.numberClick3 = "("+this.formula+")";
						}else if(numberClick === 'numberClick4'){
							this.numberClick4 = "("+this.formula+")";
						}
						
						this.formula = this.formula + "=" + eval(this.formula) +"\r\n";
						this.numberDis = false;
						this.symbolDis = true;
					}else{
						this.numberDis = true;
						this.symbolDis = false;
						this.formula = this.formula + str;
						this.numberClickHistory = numberClick;
					}
				}else{
					this.numberDis = false;
					this.symbolDis = true;
					this.formula = this.formula + str;
					this.symbolClick = true;
				}
			},
			
			rotate: function () {
				// this.animation.rotate3d(1,100,0,3600).step()
				
				this.animation.rotate(3600).step().translateX(100).step();
				this.animationData = this.animation.export()
				
				this.animation1.rotate(3600).step().translateY(100).step();
				this.animationData1 = this.animation1.export()
				
				this.animation2.rotate(3600).step().translateX(-100).step();
				this.animationData2 = this.animation2.export()
				
				this.animation3.rotate(3600).step().translateY(-100).step();
				this.animationData3 = this.animation3.export()
				
				this.animation4.rotate(3600).step().translate3d(70,70,70).step();
				this.animationData4 = this.animation4.export()
				
				this.animation5.rotate(3600).step().translate3d(-70,70,70).step();
				this.animationData5 = this.animation5.export()
				
				this.animation6.rotate(3600).step().translate3d(70,-70,70).step();
				this.animationData6 = this.animation6.export()
				
				this.animation7.rotate(3600).step().translate3d(-70,-70,-70).step();
				this.animationData7 = this.animation7.export()
				
			}
		}
	}
</script>

<style>
	.buttonClass{
		width: 150upx;
		height: 150upx;
		border: thin solid #00C777;
		margin: 30upx;
		border-radius: 30upx;
		line-height: 150upx;
	}
	
	.animation-element-wrapper {
		display: flex;
		width: 100%;
		padding-top: 300upx;
		padding-bottom: 300upx;
		justify-content: center;
		overflow: hidden;
		background-color: #ffffff;
	}
	.animation-element {
		width: 100upx;
		height: 100upx;
		background-color: #1AAD19;
		position: absolute;
	}
	.animation-element1 {
		width: 100upx;
		height: 100upx;
		background-color: red;
		position: absolute;
	}
	
	.animation-element2{
		width: 100upx;
		height: 100upx;
		background-color: blue;
		position: absolute;
	}
	
	.animation-element3{
		width: 100upx;
		height: 100upx;
		background-color: yellow;
		position: absolute;
	}
	
	.animation-element4{
		width: 100upx;
		height: 100upx;
		background-color: #576B95;
		position: absolute;
	}
	
	.animation-element5{
		width: 100upx;
		height: 100upx;
		background-color: #66AAFF;
		position: absolute;
	}
	
	.animation-element6{
		width: 100upx;
		height: 100upx;
		background-color: #E96900;
		position: absolute;
	}
	
	.animation-element7{
		width: 100upx;
		height: 100upx;
		background-color: #4CD964;
		position: absolute;
	}
</style>
