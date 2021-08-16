<template>
	<div class="zero">
		<el-backtop right="200"></el-backtop>
		<home />
		<div class="zeroContent">
			<div class="zeroToggleButton">
				<button class="firstButton">零碳建筑</button>
				<button @click="changePosition1">实现零碳排放途径</button>
				<button @click="changePosition2">零碳建筑技术</button>
				<button @click="changePosition3">建筑碳排放</button>
				<button @click="changePosition4">零碳生活技巧</button>
			</div>
			<div class="one">
				<div class="titleInNation">一、零碳建筑</div>
				<div class="icon"></div>
				<div class="left">
					<div class="define">1. 零碳建筑定义</div>
					<div class="defineContent">
						零碳建筑，也称碳中和建筑，是指在建筑的生命周期内，综合碳排放（建筑向外界环境排放的温室气体量相对值)为零的建筑。
						<br />
						实践中在尽可能做到减排后，可以通过建筑自身利用可再生能源并将多余的能量输入电网, 或者通过“碳税”“碳中和”等措施来补偿生命周期内的排放,
						从而在全社会层面实现零碳。
					</div>
					<div class="target">
						<span class="targetTitle">零碳建筑的目标：</span>
						<span class="targetContent1">在生命周期内，建筑的碳排放为零。零碳建筑的物理边界划分上将以单栋建筑作为研究对象，该单栋建筑红线作为其物理边界。</span>
					</div>
					<div class="purpose">
						<span class="targetTitle">零碳建筑的目的：</span>
						<span class="targetContent">减少建筑领域的碳排放，更好应对全球气候变化，实现人类社会的可持续发展。</span>
					</div>
				</div>
				<img src="../../assets/imgs/views/zeroCarbon/zero1.png" />
				<div class="underline"></div>
				<div class="oneBottom">
					<div class="everyCountry">各国零碳建筑定义</div>
					<div class="everyDefine">
						<ul>
							<li>
								<div class="association">◆ 世界碳排放交易协会</div>
								<div class="assoDetails">
									世界碳排放交易协会（World GBC）对零碳建筑的定义为∶高效节能的建筑，所有剩余的能耗都由现场或者场地外的可再生能源提供补偿，以实现每年的净零碳排放。
								</div>
							</li>
							<li>
								<div class="association">◆ 澳大利亚</div>
								<div class="assoDetails">
									澳大利亚可持续建设环境委员会（ASBEC）提出的零碳建筑“标准定义”是∶零碳建筑即为在运行阶段中产生的年度净碳排放量为零的建筑，包括直接碳排放和因用电、采暖等产生的间接碳排放。
								</div>
							</li>
							<li class="last">
								<div class="association">◆ 挪威零排放建筑研究中心</div>
								<div class="assoDetails">
									挪威零排放建筑研究中心(ZEB)提出要基于决心水平、计算依据、系统边界、碳排放因素、能源质量、产需比例、最低能效要求、室内环境要求以及使用中验证等九个要点建立新的零排放建筑定义，并提出四个零碳级别：
									<br />
									1、除了设备(家电)的能源消耗之外，所有其他能源消耗所产生的碳排放为零。
									<br />
									2、包括设备(家电)在内的所有能源消耗所产生的碳排为零。
									<br />
									3、包括设备(家电)在内的所有能源消耗、加上建材和设备所内含的碳排放之和应为零。
									<br />
									4、在层次3的基础上，将建筑建造过程产生的碳排放也计算在内。
									<br />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="two">
			<div class="access2">二、实现零碳排放途径</div>
			<div class="icon"></div>
			<ul>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero2.png" />
					<div>减排</div>
				</li>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero3.png" />
					<div>可再生</div>
				</li>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero4.png" />
					<div>补偿</div>
				</li>
			</ul>
			<button class="checkMore">查看详情</button>
		</div>
		<div class="three">
			<div class="access">三、零碳建筑技术</div>
			<div class="icon"></div>
			<ul>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero5.png" />
					<div>被动式技术</div>
				</li>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero6.png" />
					<div>主动技术</div>
				</li>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero7.png" />
					<div>可再生能源</div>
				</li>
			</ul>
			<button class="checkMore">查看详情</button>
		</div>
		<div class="four">
			<div class="access1">四、建筑碳排放</div>
			<div class="icon"></div>
			<ul>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero8.png" />
					<div>
						建筑物在与其有关的建材生产及运输、建造及拆除、运行阶段产生的温室气体排放的总和，以二氧化碳当量表示。
						注：二氧化碳当量(kgCO2e)指与一定质量的某种温室气体具有相同温室效应的CO2的质量，是可用于比较不同温室气体对温室效应影响的度量单位。
					</div>
					<span class="borderRightTop">定义</span>
				</li>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero9.png" />
					<div>
						碳汇是指在划定的建筑物项目范围内绿化、植被从空气中吸收并存储的二氧化碳量。
						碳汇主要来源于绿色植物固碳、混凝土吸收以及利用废弃材料和再生能源等活动产生的碳汇。
					</div>
					<span class="borderRightTop">碳汇</span>
				</li>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero10.png" />
					<div class="higher">
						碳源是指（在划定的建筑物项目范围内）向大气中排放温室气体或者有排放温室气体前兆的过程或活动。<br>
						建筑中碳源主要来自建筑材料生产、建造、日常使用维护和更新及拆除这几个阶段。<br>
						建筑材料生产阶段：建筑材料的生产过程中消耗的煤、石油、电等能源所产生的碳排放和建筑材料从工厂运输至施工现场时运输工具消耗能源产生的碳排放。<br>
						建造阶段：施工过程中施工机械耗能、施工照明耗能和运输建筑垃圾耗能产生的碳排放。<br>
						日常使用、维护和更新阶段：为满足正常生活的设备系统(制冷、采暖、通风和照明等)在运行时消耗能源产生的碳排放、<br>日常生活用水产生的碳排放、建筑维修和更新改造过程中施工机械的耗能和建筑材料开采、生产、运输过程的耗能产生的碳足迹。<br>
						拆除阶段：建筑拆除过程施工机械耗能、建筑废弃物运输过程中运输工具耗能和建筑废弃物处置过程耗能产生的碳排放。
					</div>
					<span class="borderRightTop">碳源</span>
				</li>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero11.png" />
					<div class="higher">
						1.生命周期评估法（LCA）<br>
						所谓建筑生命周期 (Life Cycle, 简称 LC) 就是建筑物从出生到灭亡的时间。而建筑的生命周期评估 (Life Cycle Assessment, 简称 LCA), 就是建材生产、营建、运输到建筑物拆除、废弃物处理等过程对环境影响的评估,亦即从建筑物的摇篮到坟场进行全面性系统性的环境影响评估。<br>
						2.投入产出法（I-O法）<br>
						I-O法主要采用的是“自下而上”的计算模型，通过利用投入产出表计算，并使用平衡方程式反映生产活动与经济主体之间的关系。<br>
						3.通过所使用的能源矿物燃烧排放量计算（IPCC法）<br>
						IPCC法指的是联合国政府间气候变化专门委员会编写的国家温室气体清单指南，常用的方法是：碳排放量=活动数据x排放因子。而根据生产工艺、地域分布和技术水平的不同，各国的排放因子不同。
					</div>
					<span class="borderRightTop">碳排量计算方法</span>
				</li>
			</ul>
		</div>
		<div class="five">
			<div class="access">五、零碳生活技巧</div>
			<div class="icon"></div>
			<ul>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero12.png" />
					<div>生活</div>
				</li>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero13.png" />
					<div>饮食</div>
				</li>
				<li>
					<img src="../../assets/imgs/views/zeroCarbon/zero14.png" />
					<div>出行</div>
				</li>
			</ul>
			<button class="checkMore">查看详情</button>
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
	methods: {
		changePosition1(){
			window.scrollTo({
				top: 900,
				behavior: 'smooth'
			});
		},
		changePosition2(){
			window.scrollTo({
				top: 1550,
				behavior: 'smooth'
			});
		},
		changePosition3(){
			window.scrollTo({
				top: 2200,
				behavior: 'smooth'
			});
		},
		changePosition4(){
			window.scrollTo({
				top: 3500,
				behavior: 'smooth'
			});
		}
	}
};
</script>

<style>
.zeroToggleButton {position: absolute;
	left: 36%;
	top: 15%;
}
.zeroToggleButton button {
	height: 36px;
	border: 1px solid #77c03a;
	font-size: 18px;
	padding: 0 10px;
}
.firstButton {
	color: #fff;
	background-color: #77c03a;
}
.zeroContent {
	margin-left: 300px;
	width: 69%;
	overflow: hidden;
}
.one .icon {
	width: 182px;
	margin-left: 565px;
}
.define {
	font-size: 22px;
	color: rgba(0, 0, 0, 0.85);
}
.defineContent,
.targetContent {
	width: 730px;
	height: 75px;
	font-size: 15px;
	line-height: 30px;
	color: rgba(0, 0, 0, 0.65);
	margin-top: 10px;
}
.target {
	margin-top: 60px;
}
.targetTitle {
	font-size: 18px;
	line-height: 55px;
	color: #77c03a;
}
.access1{
	margin-left: 540px;
	margin-top: 25px;
	font-size: 28px;
	color: rgba(0, 0, 0, 0.85);
	letter-spacing: 3px;
}
.targetContent {
	display: inline-block;
	width: 580px;
}
.targetContent1 {
	position: absolute;
	width: 585px;
	height: 95px;
	font-size: 15px;
	line-height: 20px;
	color: rgba(0, 0, 0, 0.65);
	margin-top: 10px;
}
.one img {
	float: right;
	margin-top: 30px;
}
.left {
	display: inline-block;
	margin-top: 30px;
}
.zeroContent .underline {
	height: 0px;
	border: 1px solid rgba(0, 0, 0, 0.45098039215686275);
}
.everyCountry {
	font-size: 22px;
	color: rgba(0, 0, 0, 0.85);
	margin-top: 20px;
}
.everyDefine ul li {
	float: left;
	width: 350px;
}
.association {
	font-size: 18px;
	color: #77c03a;
	margin-top: 10px;
}
.assoDetails {
	margin-top: 10px;
	width: 260px;
	font-size: 14px;
	line-height: 26px;
	color: rgba(0, 0, 0, 0.65);
}
.last .assoDetails {
	width: 550px;
}
.access {
	margin-top: 25px;
	font-size: 28px;
	color: rgba(0, 0, 0, 0.85);
	letter-spacing: 3px;
	margin-left: 530px;
}
.two,
.three,
.four,
.five {
	margin-left: 16%;
	width: 69%;
	overflow: hidden;
	margin-top: 3%;
}
.two .icon {
	width: 305px;
	margin-left: 500px;
}
.two ul {
	width: 100%;
}
.two ul li {
	float: left;
	margin-top: 35px;
	width: 33%;
}
.two ul li div {
	font-size: 20px;
	color: rgba(0, 0, 0, 0.85);
	margin-top: 20px;
	text-align: center;
}
.two .checkMore {
	margin-top: 35px;
}
.two .icon {
	margin-left: 490px;
}
.access2{
	margin-left: 490px;
	margin-top: 25px;
	font-size: 28px;
	color: rgba(0, 0, 0, 0.85);
	letter-spacing: 3px;
}
.three .icon {
	width: 245px;
	margin-left: 530px;
}
.three ul {
}
.three ul li {
	float: left;
	margin-top: 35px;
	width: 33%;
}
.three ul li div {
	font-size: 20px;
	color: rgba(0, 0, 0, 0.85);
	margin-top: 20px;
	text-align: center;
}
.three .checkMore {
	margin-top: 35px;
}
.four .icon {
	width: 210px;
	margin-left: 540px;
}
.four ul{
	margin-top: 35px;
}
.four ul li{
	position: relative;
	float: left;
	width: 650px;
}
.four ul li div{
	font-size: 14px;
	height: 100px;
	width: 600px;
	margin-left: 20px;
	line-height: 26px;
	color: rgba(0, 0, 0, 0.65);
	margin-top: 20px;
}
.four ul li .higher{
	height: 330px;
}
.borderRightTop{
	position: absolute;
	left: 0;
	top: 315px;
	height: 45px;
	background: #77C03A;
	border-radius: 0px 28px 0px 0px;
	font-size: 16px;
	line-height: 45px;
	padding: 0 20px;
	color: #FFFFFF;
}
.five .icon {
	width: 245px;
	margin-left: 530px;
}
.five ul{
	display: flex;
}
.five ul li {
	float: left;
	margin-top: 35px;
	flex: 1;
}
.five ul li div {
	font-size: 20px;
	color: rgba(0, 0, 0, 0.85);
	margin-top: 20px;
	text-align: center;
}
.five .checkMore {
	margin-top: 35px;
}
.one{
	margin-top: 8%;
}
</style>
