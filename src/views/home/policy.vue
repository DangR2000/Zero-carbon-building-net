<template>
	<div>
		<el-backtop right="200"></el-backtop>
		<home />
		<div class="toggleButton">
			<button class="firstButton">国内政策方面</button>
			<button @click="changePosition5">国外政策方面</button>
		</div>
		<div class="contentPolicy">
			<div class="inNationalNews">
				<div class="titleInNation">国内政策方面</div>
				<div class="icon"></div>
				<ul>
					<li>
						<img src="../../assets/imgs/views/policy/policy1.png" />
						<div>国家战略</div>
					</li>
					<li>
						<img src="../../assets/imgs/views/policy/policy2.png" />
						<div>国务院各部委</div>
					</li>
					<li>
						<img src="../../assets/imgs/views/policy/policy3.png" />
						<div>各级政府</div>
					</li>
					<li>
						<img src="../../assets/imgs/views/policy/policy4.png" />
						<div>各协会组织</div>
					</li>
				</ul>
				<button class="checkMore">查看详情</button>
			</div>
			<div class="nationalNews">
				<div class="titleInNation">国外政策方面</div>
				<div class="icon"></div>
				<ul>
					<li>
						<img src="../../assets/imgs/views/policy/policy5.png" />
						<div>国际组织</div>
					</li>
					<li>
						<img src="../../assets/imgs/views/policy/policy6.png" />
						<div>美国</div>
					</li>
					<li>
						<img src="../../assets/imgs/views/policy/policy7.png" />
						<div>欧盟</div>
					</li>
					<li>
						<img src="../../assets/imgs/views/policy/policy8.png" />
						<div>其他国家</div>
					</li>
				</ul>
				<button class="checkMore">查看详情</button>
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
	methods: {
		changePosition5(){
			window.scrollTo({
				top: 1200,
				behavior: 'smooth'
			});
		}
	}
};
</script>

<style>
.contentPolicy {
	margin-left: 300px;
	width: 69%;
}
.contentPolicy ul {
	margin-left: 35px;
}
.contentPolicy ul li img{
	width: 95%;
}
.contentPolicy ul li {
	float: left;
	margin-top: 35px;
	width: 50%;
}
.contentPolicy ul li div {
	font-size: 20px;
	color: rgba(0, 0, 0, 0.85);
	margin-top: 20px;
	text-align: center;
}
.contentPolicy .checkMore {
	margin-top: 35px;
}
</style>
