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
		<view class="overTime">
			<view style="">时间：</view>
			<view style="font-size: 40upx;" :style="{color:timeColor}">{{computeTime}}</view>
		</view>
		<view style="display: flex;justify-content: center;flex-direction: row;margin-top: 70upx;">
			<button :disabled="symbolDis" @click="operation(symbol1)" class="buttonClass">{{symbol1}}</button>
			<button v-if="numberClick1===''" class="buttonClass" disabled="true"></button>
			<button v-else :disabled="numberDis" @click="operation(numberClick1,'numberClick1')" class="buttonClass">{{numberClick1}}</button>
			<button :disabled="symbolDis" @click="operation(symbol2)" class="buttonClass">{{symbol2}}</button>
		</view>
		<view style="display: flex;justify-content: center;flex-direction: row;">
			<button v-if="numberClick2===''" class="buttonClass" disabled="true"></button>
			<button v-else :disabled="numberDis" @click="operation(numberClick2,'numberClick2')" class="buttonClass">{{numberClick2}}</button>
			<button class="buttonReplaceClass" @click="replaceAll()">
				<image src="../../static/tab/replace.png" style="width: 100upx;height: 100upx;margin-top: 40upx;"></image>
			</button>
			<button v-if="numberClick3===''" class="buttonClass" disabled="true"></button>
			<button v-else :disabled="numberDis" @click="operation(numberClick3,'numberClick3')" class="buttonClass">{{numberClick3}}</button>
		</view>
		<view style="display: flex;justify-content: center;flex-direction: row;">
			<button :disabled="symbolDis" @click="operation(symbol3)" class="buttonClass">{{symbol3}}</button>
			<button v-if="numberClick4===''" class="buttonClass" disabled="true"></button>
			<button v-else :disabled="numberDis" @click="operation(numberClick4,'numberClick4')" class="buttonClass">{{numberClick4}}</button>
			<button :disabled="symbolDis" @click="operation(symbol4)" class="buttonClass">{{symbol4}}</button>
		</view>
		
		<text style="margin-top: 400upx;letter-spacing:10upx;font-size: 40upx;font-weight: bold;line-height: 60upx;">{{formulaHistory}}</text>
		<br/>
		<text style="letter-spacing:10upx;font-size: 40upx;font-weight: bold;">{{formula}}</text>
	</view>
</template>

<script>
	import rpn from '../../common/index.js'
	export default {
		data() {
			return {
				timeColor:'red',
				numberDis:false,		//数字点击控制display
				symbolDis:true,			//运算符点击控制display
				symbol1:'+',
				symbol2:'-',
				symbol3:'*',
				symbol4:'/',
				symbolClick:false,		//公式判断
				number1:1,
				numberClick1:'1',
				number2:2,
				numberClick2:'2',
				number3:3,
				numberClick3:'3',
				number4:4,
				numberClick4:'4',
				numberClickHistory:'',	//点击数字历史
				formulaOther:'',		//单条算式记录
				formulaHistory:'',		//算式总记录
				formula:'',				//算式运算
				formulaNum:0,			//算式数量
				formulaResult:0,		//算式结果
				computeTime:30,
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
			let that = this;
			let reamainTime = 30;
			
			let timer = setInterval(function() {
				if (reamainTime === 0) {
					console.log("时间到");
					clearInterval(timer);
				} else {
					that.computeTime = reamainTime;
					that.timeColor = '#'+Math.floor(Math.random()*0xffffff).toString(16);
					reamainTime--;
				}
			}, 1000);
		},
		methods: {
			//重置数据
			replaceAll(){
				this.numberClick1 = this.number1;
				this.numberClick2 = this.number2;
				this.numberClick3 = this.number3;
				this.numberClick4 = this.number4;
				this.numberClickHistory = '';
				this.formulaOther = '';
				this.formulaHistory = '';
				this.formula = '';
				this.symbolClick = false;
				this.numberDis = false;
				this.symbolDis = true;
			},
			//运算数据
			operation(str,numberClick){
				console.log("点击附带数据-->"+numberClick);
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
							
							let result = new rpn("0+"+this.formula).calculate();
							this.numberClick1 = result;
							this.formulaResult = result;
							
						}else if(numberClick === 'numberClick2'){
							
							let result = new rpn("0+"+this.formula).calculate();
							this.numberClick2 = result;
							this.formulaResult = result;
							
						}else if(numberClick === 'numberClick3'){
							
							let result = new rpn("0+"+this.formula).calculate();
							this.numberClick3 = result;
							this.formulaResult = result;
							
						}else if(numberClick === 'numberClick4'){
							
							let result = new rpn("0+"+this.formula).calculate();
							this.numberClick4 = result;
							this.formulaResult = result;
							
						}
						
						this.formulaOther = "("+this.formula+")";
						
						let fm = this.formula + "=" + new rpn("0+"+this.formula).calculate();
						
						this.formulaHistory = this.formulaHistory + fm +"\r\n";
						this.formulaNum = this.formulaNum + 1;
						this.formula = '';
						this.numberDis = false;
						this.symbolDis = true;
						this.symbolClick = false;
						if(this.formulaNum===3){
							let that = this;
							console.log("计算完毕，计算结果-->"+this.formulaResult);
							if(this.formulaResult!==24){
								uni.showModal({
									title: '提示',
									content: '计算错误，是否重置？',
									success: function (res) {
										if (res.confirm) {
											console.log('用户点击确定');
											that.replaceAll();
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								});
							}
						}
					}else{
						this.numberDis = true;
						this.symbolDis = false;
						if(this.formulaOther){
							this.formula = this.formula + this.formulaOther;
						}else{
							this.formula = this.formula + str;
						}
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
	.overTime{
		display: flex;
		flex-direction: row;
		font-size: 35upx;
		font-weight: bold;
		letter-spacing:10upx;
		width: 200upx;
		position: absolute;
		right: 0;
		margin-right: 30upx;
		margin-top: -40upx;
	}
	
	.buttonReplaceClass{
		width: 180upx;
		height: 180upx;
		border-radius: 30upx;
		margin: 30upx;
	}
	
	.buttonClass{
		width: 180upx;
		height: 180upx;
		margin: 30upx;
		border-radius: 30upx;
		line-height: 180upx;
		font-size: 40upx;
		font-weight: bold;
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
