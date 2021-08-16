<template>
	<div class="new">
		<el-backtop right="200"></el-backtop>
		<home />
		<div class="toggleButton">
			<button :class="{ changeColor: judge1 }">国内新闻</button>
			<button :class="{ changeColor: judge2 }" @click="changePosition">国际新闻</button>
		</div>
		<div class="content">
			<div class="inNationalNews">
				<div class="titleInNation">一、国内新闻</div>
				<div class="icon"></div>
				<div class="inNationalNewsContent">
					<ul>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new1.png" />
								<div class="big">生态环境部：抓紧制定2030年前二氧化碳排放达峰行动方案</div>
								<span class="medium">据生态环境部网站消息，生态环境部日前印发...</span>
								<div class="small">2021-01-13 16:44 来源：中国新闻网</div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new2.png" />
								<div class="big">习近平在中央经济工作会议上发表重要
									讲话：加快建设全国碳交易市场...</div>
								<span class="medium">中央经济工作会议12月16日至18日在北京举...</span>
								<div class="small">2020-12-18 文章来源：新华社</div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new3.png" />
								<div class="big">建筑行业对中国实现“碳中和”至关重要</div>
								<span class="medium">城市化浪潮推动全球建筑业空前增长，对遏制...</span>
								<div class="small">2020-11-30 文章来源:观中国中国日报</div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new4.png" />
								<div class="big">聚焦碳中和：如何发挥可再生能源消纳保障机制</div>
								<span class="medium">2019年5月国家发展改革委、国家能源局联合...</span>
								<div class="small">2020-11-13 来源：能源 易碳家</div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new5.png" />
								<div class="big">专家访谈 | 赵细康：拉开城市空间 实现绿色低碳发展案</div>
								<span class="medium">深入学习贯彻总书记出席深圳经济特区建立40...</span>
								<div class="small">2020-11-13 来源：广州日报 易碳家</div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new6.png" />
								<div class="big">倪江波：2030年碳达峰下建筑用能减排占有重要分量住建部已在行动</div>
								<span class="medium">城市化浪潮推动全球建筑业空前增长，对遏制...</span>
								<div class="small">2020-11-08 08:53 来源:中国房地产报</div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new7.png" />
								<div class="big">生态环境部：已提前完成碳减排目标 努力实现碳中和愿景</div>
								<span class="medium">生态环境部副部长赵英民今日在国新办举行的...</span>
								<div class="small">2020-10-21 新闻来源：中国新闻网</div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new8.png" />
								<div class="big">生态环境部：“十四五”将加快建设全国碳排放权交易市场</div>
								<span class="medium">到今年年底，“十三五”规划纲要确定的生态...</span>
								<div class="small">2020-10-21 新闻来源：一财网</div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new9.png" />
								<div class="big">城市副中心拟打造"无废城市" 推进"近零碳排放</div>
								<span class="medium">北京城市副中心将聚焦大气、水、土壤等关键...</span>
								<div class="small">2020-10-20 新闻来源：中国新闻网</div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new10.png" />
								<div class="big">何建坤：实现碳中和，有几个方向必须加大努力</div>
								<span class="medium">据生态环境部网站消息，生态环境部日前印发...</span>
								<div class="small">2020-09-29 新闻来源：第一财经</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="nationalNews">
				<div class="titleInNation">二、国际新闻</div>
				<div class="icon"></div>
				<div class="inNationalNewsContent">
					<ul>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new11.png" />
								<div class="big">全球碳排放第一！我们与发达国家对比有多大差距?</div>
								<span class="medium">气候变化是人类面临的最重要的问题（古特...</span>
								<div class="small"></div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new12.png" />
								<div class="big">印度议员提交法案要求印度在2050年实现净零排放</div>
								<span class="medium">高大伟：阿尔方戴利先生，可持续发展是你...</span>
								<div class="small"></div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new13.png" />
								<div class="big"> 印度“碳中和”目标被批不切实际</div>
								<span class="medium">近日，印度政府提出，正在考虑制定2050年...</span>
								<div class="small"></div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new14.png" />
								<div class="big">国际能源署：2021年全球碳排放量将进一步上升</div>
								<span class="medium">国际能源署（IEA）3月2日发布《全球能源回...</span>
								<div class="small"></div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new15.png" />
								<div class="big">“净零排放”目标需要全球跟踪和问责机制，避免空头支票</div>
								<span class="medium">国际能源署署长法提赫·比罗尔发表文章，题...</span>
								<div class="small"></div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new16.png" />
								<div class="big">2020年全球碳排放下降7%！零碳排放才是最困难的一步</div>
								<span class="medium">Grist网站发表署名Shannon Osaka的文章，...</span>
								<div class="small"></div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new17.png" />
								<div class="big">预计2020年全球碳排放下降7%，跌幅创二战以来的纪录！</div>
								<span class="medium">根据Carbon Brief报道，由国际科学家组成的...</span>
								<div class="small"></div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new18.png" />
								<div class="big">疫情导致2020年全球碳排放量创纪录下降</div>
								<span class="medium">据CNBC报道，10日发表在《地球系统科学...</span>
								<div class="small"></div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new19.png" />
								<div class="big">疫情致全球碳排放显著下降 COP26紧盯全球刺激计划</div>
								<span class="medium">原定于今年11月在英国格拉斯哥举行的公约...</span>
								<div class="small"></div>
							</div>
						</li>
						<li>
							<div>
								<img src="../../assets/imgs/views/new/new20.png" />
								<div class="big">疫情导致全球碳排放下降：为什么说这是最糟糕的减排方式？</div>
								<span class="medium">著名媒体发表署名Shannon Osaka的文章，...</span>
								<div class="small"></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<bottom />
	</div>
</template>

<script>
import home from '../../components/home.vue';
import bottom from '../../components/bottom.vue';
export default {
	data() {
		return {
			judge1: true,
			judge2: false
		};
	},
	components: {
		home,
		bottom
	},
	methods: {
		changePosition() {
			window.scrollTo({
				top: 2000,
				behavior: 'smooth'
			});
		}
	}
};
</script>

<style>
.toggleButton {
	position: absolute;
	left: 50%;
	margin-left: -140px;
	margin-top: 40px;
}
.toggleButton button {
	width: 140px;
	height: 36px;
	border: 1px solid #77c03a;
	font-size: 18px;
}
.toggleButton .firstButton {
	color: #fff;
	background-color: #77c03a;
}
.titleInNation {
	margin-top: 25px;
	font-size: 28px;
	color: rgba(0, 0, 0, 0.85);
	margin-left: 565px;
	letter-spacing: 3px;
}
.inNationalNews {
	margin-top: 120px;
	overflow: hidden;
	background-color: #f5f5f5;
}
.inNationalNews .icon {
	width: 182px;
	margin-left: 565px;
}
.inNationalNewsContent {
	margin-top: 50px;
}
.inNationalNewsContent ul li {
	float: left;
	margin: 0px 16px;
	margin-bottom: 50px;
	height: 365px;
	background: #ffffff;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
	opacity: 1;
	border-radius: 4px;
}
.inNationalNewsContent ul li span {
	display: inline-block;
	font-size: 15px;
	color: rgba(0, 0, 0, 0.65);
	margin-left: 38px;
	padding-top: 10px;
}
.inNationalNewsContent img {
	border-radius: 4px;
}
.big {
	width: 343px;
	font-size: 18px;
	color: rgba(0, 0, 0, 0.85);
	margin-left: 38px;
	margin-top: 20px;
}
.small {
	width: 330px;
	height: 16px;
	line-height: 16px;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.45);
	margin-left: 38px;
	margin-top: 10px;
	background-image: url(../../assets/imgs/views/new/new21.png);
	background-repeat: no-repeat;
	background-position: right;
}
.nationalNews {
	overflow: hidden;
	background-color: #f5f5f5;
	margin-top: 5%;
}
.nationalNews .icon {
	width: 182px;
	margin-left: 565px;
}
.changeColor {
	background-color: #77c03a;
	color: #fff;
}
</style>
