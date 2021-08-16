import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import home1 from "../views/home/home1.vue";
import computed from "../views/home/computed.vue";
import enter from "../views/home/enter.vue";
import lowCarbon from "../views/home/lowCarbon.vue";
import New from "../views/home/new.vue";
import policy from "../views/home/policy.vue";
import zeroCarbon from "../views/home/zeroCarbon.vue";
import index from "../views/home/index.vue";
import teach from "../views/home/teach.vue";

const routes = [{
        path: "/",
        component: index,
    },{
		path: "/computed",
		component: computed,
	},
	{
		path: "/enter",
		component: enter,
	},
	{
		path: "/lowCarbon",
		component: lowCarbon,
	},
	{
		path: "/new",
		component: New,
	},
	{
		path: "/policy",
		component: policy,
	},
	{
		path: "/zeroCarbon",
		component: zeroCarbon,
	},
	{
		path: "/index",
		component: index,
	},
	{
		path: "/teach",
		component: teach,
	},
	{
		path:'/home1',
		component:home1
	}
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
});

export default router;