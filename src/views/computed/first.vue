<template>
	<div>
		<div class="content123">
			计算平台基于《建筑碳排放计算标准》GB/T51366-2019与《民用建筑绿色性能计算标准》JGJ/T449-2018，满足只需输入项目基本信息、土建工程、机械台班、能源消耗及可再生能源等数据，平台将自动计算出基于国标的建筑生命周期各阶段的碳排放量，为建筑设计方案的对比与优化提供参考依据。
		</div>
		<img src="../../assets/imgs/views/computed/first.png" class="img2"/>
		<bottom />
	</div>
</template>

<script>
import bottom from '../../components/bottom.vue';
export default {
	data() {
		return {};
	},
	components: {
		bottom
	},
	methods: {}
};
</script>

<style>
.content123{
	position: absolute;
	margin-left: 300px;
	width: 69%;
	text-align: center;
	margin-top: 270px;
	font-size: 16px;
	line-height: 26px;
	color: rgba(0, 0, 0, 0.65);
}
.img2 {
	margin-top: 350px;
	margin-left: 300px;
	width: 69%;
}
</style>
