<template>
	<div>
		<home />
		<div class="toggleButton1">
			<button :class="{ changeColor: judge1 }">平台简介</button>
			<button :class="{ changeColor: judge2 }"  @click="changePosition">平台教程</button>
		</div>
		<div class="computednavbar">
			<div class="intro">
				<div class="Title">操作简单但功能强大的碳排放云计算平台</div>
				<div class="Underline"></div>
				<div class="TitleDetail">
					该云平台可直接通过浏览器进入，无需第三方软件。用户可在桌面和移动设备的浏览器中操作、录入、计算、管理建筑项目及碳排放数据。云计算平台能极大的减少人力计算和运算时间，节约时间成本和人力成本。
				</div>
			</div>
			<el-tabs type="card" class="elTab" v-model="currentComp">
				<el-tab-pane label="符合国标的碳排放计算方法" name="first"></el-tab-pane>
				<el-tab-pane label="国内最大的建筑碳排放因子数据库" name="second"></el-tab-pane>
				<el-tab-pane label="基于大量实际案例建立基准线进行碳减排核算" name="third"></el-tab-pane>
				<el-tab-pane label="智能识别错误" name="fourth"></el-tab-pane>
				<el-tab-pane label="可视化数据结果及自动输出计算报告" name="fifth"></el-tab-pane>
			</el-tabs>
			<div :is="currentComp" keep-alive></div>
		</div>
	</div>
</template>

<script>
import home from '../../components/home.vue';
import bottom from '../../components/bottom.vue';
import first from '../computed/first.vue';
import second from '../computed/second.vue';
import third from '../computed/third.vue';
import fourth from '../computed/fourth.vue';
import fifth from '../computed/fifth.vue';
import teach from './teach';
export default {
	data() {
		return {
			first: 'first',
			second: 'second',
			third: 'third',
			fourth: 'fourth',
			fifth: 'fifth',
			currentComp: 'first',
			activeComp: 'first',
			judge1: true,
			judge2: false
		};
	},
	components: {
		home,
		bottom,
		first,
		second,
		third,
		fourth,
		fifth,
		teach
	},
	methods: {
		changePosition() {
			this.$router.replace('/teach');
		}
	}
};
</script>

<style>
	.toggleButton1{
		position: absolute;
		left: 50%;
		margin-left: -141px;
	}
	.toggleButton1 button {
		width: 140px;
		height: 36px;
		border: 1px solid #77c03a;
		font-size: 18px;
	}
.intro {
	width: 708px;
	position: absolute;
	left: 50%;
	margin-left: -354px;
	margin-top: 30px;
}
.Title {
	font-size: 30px;
	line-height: 51px;
	color: rgba(0, 0, 0, 0.85);
	margin-left: 80px;
}
.Underline {
	width: 708px;
	height: 2px;
	background: #77c03a;
}
.TitleDetail {
	width: 708px;
	height: 75px;
	font-size: 16px;
	font-family: Source Han Sans CN;
	font-weight: 400;
	line-height: 26px;
	color: rgba(0, 0, 0, 0.65);
	opacity: 1;
}
.elTab {
	position: absolute;
	left: 50%;
	top: 40%;
	margin-left: -34%;
}
.el-tabs__item {
	font-size: 16px !important;
	background-color: #77c03a;
}
.el-tabs__item.is-active {
	color: #fff !important;
	background-color: grey;
}
	.computednavbar{
		margin-top: 50px;
	}
</style>
