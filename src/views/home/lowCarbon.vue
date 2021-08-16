<template>
	<div>
		<el-backtop right="200"></el-backtop>
		<home />
		<div class="content">
<!--			<div class="zeroToggleButton">-->
<!--				<button class="firstButton">未来目标</button>-->
<!--				<button @click="changePosition1">当前现状</button>-->
<!--				<button @click="changePosition2">发展需求</button>-->
<!--				<button @click="changePosition3">低碳挑战</button>-->
<!--			</div>-->
				<div class="zeroOne">
					<div class="titleTarget">一、未来目标</div>
					<div class="icon"></div>
					<div class="zeroOneTop">
						<img src="../../assets/imgs/views/search/1.png" />
						<div class="zeroOneTopTitle">1、“3060”碳目标</div>
						<div class="zeroOneTopDetail">
							中国国家主席习近平在第七十五届联合国大会一般性辩论上发表重要讲话强调，中国将提高国家自主贡献力度，采取更加有力的政策和措施，二氧化碳排放力争于2030年前达到峰值，努力争取2060年前实现碳中和。这是中国在《巴黎协定》承诺的基础上，对碳排放达峰时间和长期碳中和问题设立的更高目标,同时中国也是全球主要排放国里首个设定碳中和限期的发展中国家。
						</div>
					</div>
					<div class="zeroOneBottom">
						<img src="../../assets/imgs/views/search/2.png" />
						<div class="zeroOneTopTitle">2、“十四五”规划和二〇三五远景目标</div>
						<div class="zeroOneTopDetail">
							2020年11月3日，《中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议》提出推动绿色发展，促进人与自然和谐共生，广泛形成绿色生产生活方式，碳排放达峰后稳中有降，生态环境根本好转，美丽中国建设目标基本实现，并提出“十四五”时期经济社会发展主要目标:生态文明建设实现新进步；国土空间开发保护格局得到优化；生产生活方式绿色转型成效显著；能源资源配置更加合理、利用效率大幅提高；主要污染物排放总量持续减少；生态环境持续改善，生态安全屏障更加牢固；城乡人居环境明显改善。
						</div>
					</div>
				</div>
			<div class="zeroTwo">
				<div class="titleTarget">二、当前现状</div>
				<div class="icon"></div>
				<div class="zeroTwoUl">
					<ul>
						<li>
							<img src="../../assets/imgs/views/search/3.png">
							<div>能耗和碳排放所占比重大</div>
						</li>
						<li class="specail3">
							<img src="../../assets/imgs/views/search/4.png">
							<div>建筑面积存量大</div>
						</li>
						<li>
							<img src="../../assets/imgs/views/search/5.png">
							<div>建筑运行阶段碳排放总量大</div>
						</li>
					</ul>
				</div>
				<button class="button">查看详情</button>
			</div>
			<div class="zeroTwo">
				<div class="titleTarget">三、发展需求</div>
				<div class="icon"></div>
				<div class="zeroTwoUl">
					<ul>
						<li>
							<img src="../../assets/imgs/views/search/3.png">
							<div>人居环境需求</div>
						</li>
						<li class="specail3">
							<img src="../../assets/imgs/views/search/4.png">
							<div>气候变化需求</div>
						</li>
						<li>
							<img src="../../assets/imgs/views/search/5.png">
							<div> 能源变革需求</div>
						</li>
					</ul>
				</div>
				<button class="button">查看详情</button>
			</div>
			<div class="zeroTwo">
				<div class="titleTarget">四、低碳挑战</div>
				<div class="icon"></div>
				<div class="zeroTwoUl">
					<ul>
						<li>
							<img src="../../assets/imgs/views/search/3.png">
							<div>气候变化形式严峻</div>
						</li>
						<li class="specail3">
							<img src="../../assets/imgs/views/search/4.png">
							<div>低碳相关标准落后</div>
						</li>
						<li>
							<img src="../../assets/imgs/views/search/5.png">
							<div>传统建筑技术难以应对</div>
						</li>
					</ul>
				</div>
				<button class="button">查看详情</button>
			</div>

		</div>
		<bottom/>
	</div>
</template>

<script>
import home from '../../components/home.vue';
import bottom from '../../components/bottom.vue';
export default {
	data() {
		return {};
	},
	components: {
		home,
		bottom
	},
	methods: {}
};
</script>

<style>
	.titleTarget{
		letter-spacing: 0.2vw;
		font-size: 1.8vw;
		color: rgba(0, 0, 0, 0.85);
		text-align: center;
	}
	.zeroOne{
		width: 100%;
		overflow: hidden;
	}
	.zeroOneTop{
		margin-top: 5vh;
		overflow: hidden;
	}
	.zeroOneTop img{
		float: left;
		width: 32%;
	}
	.zeroOneTopTitle{
		font-size: 1.1vw;
		margin-left: 2%;
		float: left;
	}
	.zeroOneTopDetail{
		float: left;
		color: rgba(0, 0, 0, 0.45);
		line-height: 3vh;
		font-size: 0.8vw;
		width: 65%;
		margin-top: 2%;
		margin-left: 2%;
	}
	.zeroOneBottom{
		margin-top: 2vh;
		overflow: hidden;
	}
	.zeroOneBottom img{
		float: left;
		width: 32%;
	}
	.zeroTwo{
		width: 100%;
		overflow: hidden;
		margin-top: 5vh;
	}
	.zeroTwoUl ul{
		margin-top: 5vh;
	}
	.zeroTwoUl ul li{
		float: left;
	}
	.specail3{
		padding: 0 2.93vw;
	}
	.zeroTwoUl ul li div{
		text-align: center;
		color: rgba(0, 0, 0, 0.85);
		font-size: 1vw;
		margin-top: 1vh;
	}
	.button{
		margin-left: 30vw;
		width: 8vw;
		height: 4vh;
		border-radius: 6px;
		border: 1px solid #77c03a;
		color: #77c03a;
		margin-top: 2vh;
	}
</style>
