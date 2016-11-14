<template>
    <div class="info-form" >
        <div class="clearfix">
            <div class="head-img-big">
                <img src="/static/images/personal/head.png" alt="">
                <a href="" class="change-info">修改资料</a>
            </div>
        </div>
        <div class="info-from-piece">
            <span>称 呼</span>
            <input class="w270" type="text" value="王丽丽">
            <input class="w270 ml15" type="text" value="王丽丽">
        </div>
        <div class="info-from-piece">
            <span>手机号</span>
            <input type="text" value="15012345678">
        </div>
        <div class="info-from-piece">
            <span>公司名称</span>
            <input type="text" value="上海星期网络科技有限公司">
        </div>
        <div class="info-from-piece">
            <span>第三方绑定</span>
            <div class="third-party-info">
                <img src="/static/images/personal/weixin.png" alt="">
                <p>lihb</p>
            </div>
            <div class="third-party-info">
                <img src="/static/images/personal/xinlang.png" alt="">
                <p>lihb</p>
            </div>
            <div class="third-party-info">
                <img src="/static/images/personal/weixin.png" alt="">
                <p>lihb</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}

        },
        components: {},
        computed: {
            personalData (){
                return this.$store.state.personalData
            }
        },
        mounted(){
            this.$store.commit('loading',false);
        },
        methods: {

        }
    }
</script>