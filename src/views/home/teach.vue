<template>
    <div>
        <home1/>
        <div class="toggleButton1">
            <button :class="{ changeColor: judge1 }" @click="changePosition">平台简介</button>
            <button :class="{ changeColor: judge2 }">平台教程</button>
        </div>
        <div class="teach">
            <div><span class="green">登录：</span>打开网址：https://www.cnzeb.com/calc，出现登录页面，如下图</div>
            <img src="../../assets/imgs/views/computed/1.png">
            <div>
                输入已有账号密码，即可登录系统。初始使用点注册，如下图
            </div>
            <img src="../../assets/imgs/views/computed/2.png">
            <img src="../../assets/imgs/views/computed/3.png">
            <div>
                注册结束后，根据已有账号去登录。为使您后期使用中方便找回丢失账号及密码，及时完善个人信息，如下图
            </div>
            <img src="../../assets/imgs/views/computed/4.png">
            <div>
                若您使用中丢失账号或忘记密码，请使用绑定手机号码或绑定邮箱的方法及时找回并修改密码，如下图
            </div>
            <img src="../../assets/imgs/views/computed/5.png">
            <img src="../../assets/imgs/views/computed/6.png">
            <img src="../../assets/imgs/views/computed/7.png">
            <img src="../../assets/imgs/views/computed/8.png">
            <img src="../../assets/imgs/views/computed/9.png">
            <img src="../../assets/imgs/views/computed/10.png">
            <div><span class="green">
                  项目信息输入：
                </span>登入之后，点击"新建项目"，开始进行项目信息、技术经济指标的填写，如下图
            </div>
            <img src="../../assets/imgs/views/computed/11.png">
            <img src="../../assets/imgs/views/computed/12.png">
            <div class="bottom1">
                最后点击“保存”，完成项目的信息初始录入，如需要对已录入信息的修改，点击上图中的“返回项目列表”按钮，返回上一页，选中需要修改的项目，再点击“详情”按钮，进行修改。如果需要删除已录入项目，点击“删除”按钮即可
            </div>
            <div><span class="green">
                  建筑信息输入：
                </span>
                点击上图“保存数据”，自动跳转到建筑列表，进行建筑信息、技术经济指标信息的填写。点击新建建筑可以无限增加新的建筑信息列表，如下图
            </div>
            <img src="../../assets/imgs/views/computed/13.png">
            <div class="bottom1">
                点击“保存数据”，完成建筑的信息初始录入，如需要对已录入信息的修改，选中需要修改的项目，进行修改。如果需要删除已录入项目，点击“删除建筑”按钮即可。如果出现两栋单体建筑的信息一致时，选中已有项目，直接点击“复制”，就可以得到新一栋的单体建筑信息。
            </div>
            <div>
<span class="green">
    建筑各阶段数据输入：</span>
                在上述项目信息和单体建筑信息录入后，可以进行单体建筑具体数据的录入。点击“数据输入”按钮，跳转到建筑建材生产及运输阶段的数据输入界面，输入具体数据，如下图。
            </div>
            <img src="../../assets/imgs/views/computed/14.png">
            <div>
                点击“保存数据”，出现建筑建造阶段数据输入界面。填完建筑信息后点击“保存数据”，进入下一界面。输入信息过程中，可以对每一条建筑材料信息进行修改或删除，如若需要返回项目列表点击界面右上角“返回项目详情”
            </div>
            <img src="../../assets/imgs/views/computed/15.png">
            <div>

                建筑建造阶段数据输入完成后，点击“保存数据”，出现建筑运行阶段数据输入界面，如下图。填完建筑信息后点击“保存数据”，进入下一界面
            </div>
            <img src="../../assets/imgs/views/computed/16.png">
            <div>

                建筑建造阶段数据输入完成后，点击“保存数据”，出现建筑拆除阶段数据输入界面，如下图。填完建筑信息后点击“保存数据”，建筑各阶段数据输入完成

            </div>
            <img src="../../assets/imgs/views/computed/17.png">
            <div>
                <span class="green">计算结果查询</span>经过以上输入步骤，并保存了输入数据之后，就可以进行建筑碳排放相关计算，并生成计算报告，如下图
            </div>
            <img src="../../assets/imgs/views/computed/18.png">
        </div>
        <bottom/>
    </div>
</template>

<script>
    import home1 from '../../components/home.vue';
    import bottom from '../../components/bottom.vue';

    export default {
        name: "teach",
        data() {
            return {
                judge1: false,
                judge2: true
            }
        },
        components: {
            home1,
            bottom,
        },
        methods: {
            changePosition() {
                this.$router.replace('/computed')
            }
        }
    }
</script>

<style scoped>
    .teach {
        width: 69%;
        margin-left: 16%;
        margin-top: 5%;
        font-size: 17px;
    }

    .green {
        color: #77C03A;
    }

    .teach img {
        margin-left: 10vw;
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
    .bottom1{
        margin-bottom: 5vh;
    }
</style>