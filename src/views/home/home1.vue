<template>
    <div class="homenavbar">
        <img src="../../assets/imgs/logo.png" class="logo" @click="home"/>
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" style="border: none;" text-color="#000" active-text-color="#77C03A" router>
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/new">新闻动态</el-menu-item>
            <el-menu-item index="/lowCarbon">低碳技术</el-menu-item>
            <el-menu-item index="/zeroCarbon">零碳百科</el-menu-item>
            <el-menu-item index="/policy">相关政策</el-menu-item>
            <el-menu-item index="/computed">计算平台</el-menu-item>
            <el-menu-item @click="tiao()">进入平台</el-menu-item>
            <!--			<el-menu-item index="/"><img src="../assets/imgs/home/homeNavBar-searchButton.png"/>搜索</el-menu-item>-->
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {
            home(){
                this.$router.replace('/new')
            },
            tiao(){
                window.location.href='http://182.92.78.18:9092/calc'
            }
        },
        created() {}
    };
</script>

<style>
    .homenavbar {
        height: 14vh;
    }
    .homenavbar .logo {
        float: left;
        margin-left: 16.5vw;
        margin-top: 4vh;
    }
    .homenavbar .el-menu-demo {
        float: left;
        margin-top: 4.5vh;
        margin-left: 11vw;
    }
    .homenavbar .el-menu-demo .el-menu-item {
        font-size: 16px;
    }
</style>
