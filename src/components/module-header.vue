<template>

    <header id="header">
        <nav class="clearfix">
            <div class="fl">
                <div class="fl logo">
                    <a href="javascript:;">云SPACE</a>
                </div>
                <div class="fl nav-location dorpdown">
                    <!--<p>全国</p>-->
                    <!--<i class="icon-down"></i>-->
                    <template>
                        <el-select v-model="value">
                            <el-option
                                    v-for="item in options"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </div>
                <ul class="fl navbar clearfix">
                    <li class="current">
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/event">办活动</router-link>
                    </li>
                    <li><a target="_blank" href="javascript:;">要开店</a></li>
                    <li><a target="_blank" href="javascript:;">找IP</a></li>
                    <li><a target="_blank" href="javascript:;">新发现</a></li>
                </ul>
            </div>

            <div class="fr">
                <ul class="fl tools clearfix">
                    <li class="">
                        <a href="javascript:;">城市运营商</a>
                    </li>
                    <li class="spacer"></li>
                    <li class="">
                        <a href="javascript:;">APP下载</a>
                    </li>
                    <li class="spacer"></li>
                    <li class="tel">
                        <i class="icon-tel"></i>
                        <p>400-056-0599</p>
                    </li>
                </ul>
                <ul class="fr btns clearfix">
                    <li class="log-reg">
                        <a href="javascript:;">注册/登录</a>
                    </li>
                    <li class="inquiry">
                        <a href="javascript:;">一键询价<span class="red">(2)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>

    </header>

</template>

<script>

    import Lib from 'assets/Lib.js'

    module.exports = {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        props: {
            "title": {
                type: String,
                default: "标题"
            }
        }
    }
</script>

<style scoped>

    /****公共导航****/
    #header {
        width: 100%;
        height: 60px;
        background-color: #272335;
        min-width: 1200px;
        overflow: hidden;
    }

    nav {
        width: 1200px;
        height: 100%;
        line-height: 60px;
        color: #fff;
        margin: 0 auto;
    }

    /*左侧logo+导航*/
    .logo {
        display: block;
        width: 120px;
        height: 60px;
        background: url("/static/images/logo.png") no-repeat 0 center;
        text-indent: -20000px;
        margin-right: 15px;
    }

    .logo a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .nav-location {
        cursor: pointer;
        width: 80px;
        height: 60px;
        position: relative;
    }

    .nav-location > p {
        padding: 0 15px;
    }

    .nav-location .icon-down {
        position: absolute;
        right: 18px;
        top: 25px;
        width: 10px;
        height: 10px;
        background: url("/static/images/icon-select-down.png") no-repeat center;
    }

    .navbar li {
        float: left;
        width: 80px;
        height: 100%;
        text-align: center;
    }

    .navbar li a {
        display: block;
        color: #fff;
        width: 100%;
        height: 100%;
    }

    .navbar li a:hover,
    .navbar li.current a {
        background-color: #fff;
        color: #000;
    }

    /*左侧工具条+按钮*/
    .tools li {
        float: left;
        color: #fff;
        padding: 0 10px;
    }

    .tools li.spacer {
        width: 1px;
        height: 16px;
        margin-top: 22px;
        padding: 0;
        background: #fff;
        overflow: hidden;
    }

    .tools li a {
        display: block;
        color: #fff;
        width: 100%;
        height: 100%;
    }

    .tools li.tel {
        position: relative;
        padding-left: 32px;
    }

    .tools li.tel .icon-tel {
        width: 20px;
        height: 16px;
        position: absolute;
        left: 10px;
        top: 22px;
        background: url("/static/images/icon-tel.jpg") no-repeat center;
    }

    nav .btns {
    }

    nav .btns li {
        float: left;
        width: 98px;
        height: 28px;
        border: 1px solid #fff;
        text-align: center;
        line-height: 28px;
        margin-top: 15px;
    }

    nav .btns li a {
        display: block;
        width: 100%;
        height: 100%;
    }

    nav .btns li a .red {
        font-size: 12px;
        color: #e92332;
        margin-left: 2px;
    }

    nav .btns li.log-reg a {
        background: rgba(0, 0, 0, 0.40);
        color: #fff;
    }

    nav .btns li.log-reg a:hover {
        background: #fff;
        color: #000;
    }

    nav .btns li.inquiry {
        margin-left: 20px;
    }

    nav .btns li.inquiry a {
        background: #fff;
        color: #000;
    }

    nav .btns li.inquiry a:hover {
        background: rgba(0, 0, 0, 0.40);
        color: #fff;
    }

</style>
