<template>
    <div id="app2" v-on:click="bodyClick">
        <module-header cities = "cities" v-on:toggleLoginForm ="toggleLoginForm"></module-header>

        <!--<router-view></router-view>-->
        <div v-loading="loading" class="el-loading-yun"></div>


        <router-view  class="child-view"></router-view>

        <module-footer ref="test" v-if="!loading"></module-footer>

        <el-dialog v-model="showRegForm" top="20px">
            <!--regbox注册-开始-->
            <div class="loginreg-box">
                <div class="regbox">
                    <h2>注册</h2>
                    <div class="mainbox">
                        <ul class="inputbox">
                            <li class="logregwrap">
                                <span class="text">姓</span>
                                <input class="logreginput" type="text" placeholder="请输入您的姓氏" />
                            </li>
                            <li class="logregwrap">
                                <span class="text">名</span>
                                <input class="logreginput" type="text" placeholder="请输入您的名称" />
                            </li>
                            <li class="logregwrap">
                                <span class="text">手机号</span>
                                <input class="logreginput" type="text" placeholder="请输入正确的11位手机号码" />
                            </li>
                            <li class="logregwrap">
                                <span class="text">验证码</span>
                                <input class="logreginput" type="text" placeholder="" />
                                <button class="sendcode">发送验证码</button>
                            </li>
                            <li class="logregwrap">
                                <span class="text">设置密码</span>
                                <input class="logreginput" type="text" placeholder="密码长度不能少于6位，不能包含空格" />
                                <i class="icons icon-passwordhide"></i>
                            </li>
                            <li class="logregwrap">
                                <span class="text">确认密码</span>
                                <input class="logreginput" type="password" placeholder="" />
                            </li>
                        </ul>
                        <button class="logreg-btn" type="button">立即注册</button>
                    </div>
                </div><!--regbox注册-结束-->
            </div>

        </el-dialog>
        <el-dialog v-model="showLoginForm">
            <!--regbox注册-开始-->
            <div class="loginreg-box">
                <!--loginbox登录-开始-->
                <div class="loginbox">
                    <h2>登录</h2>
                    <div class="mainbox">
                        <ul class="inputbox">
                            <li class="logregwrap war">
                                <input class="logreginput" type="text" placeholder="手机号" />
                                <div class="warning"><i class="icons icon-warning"></i>请输入正确的11位手机号码</div>
                            </li>
                            <li class="logregwrap">
                                <input class="logreginput" type="password" placeholder="密码" />
                                <i class="icons icon-passwordshow"></i>
                            </li>
                        </ul>

                        <div class="rememberbox clearfix">
                            <div class="fl remember clearfix">
                                <label>
                                    <input class="fl checkbox" type="checkbox" value="记住手机号码">
                                    <p class="fr">记住手机号码</p>
                                </label>
                            </div>
                            <a class="fr forget" href="javascript:;">忘记密码？</a>
                        </div>

                        <button class="logreg-btn" type="button">登录</button>
                    </div>
                    <div class="hreftext clearfix">
                        <a class="fl" href="javascript:;" @click="showRegForm = true">创建账号</a>
                        <a class="fr" href="javascript:;">验证码登录</a>
                    </div>

                    <div class="log-thirdparty">
                        <div class="title">
                            <div class="line"></div>
                            <h5>或通过以下方式快速登录</h5>
                        </div>
                        <ul class="thirdparty clearfix">
                            <li><a class="wechat" href="javascript:;"></a> </li>
                            <li><a class="sina" href="javascript:;"></a></li>
                            <li><a class="qq" href="javascript:;"></a></li>
                        </ul>
                    </div>
                </div><!--loginbox登录-结束-->
            </div>

        </el-dialog>

    </div>
</template>

<script>
    import Hello from './components/Hello'
    import ModuleFooter from './components/module-footer.vue'
    import ModuleHeader from './components/module-header.vue'
    const host = "http://172.16.1.225:3000/";
    import 'assets/css/logreg.css';

    window.YUNAPI = {
        cities : host + 'api/cities',
        homeIpProject : host + 'api/projects/get_home_list',
        home : host + 'api/index',
        homeSearch : host + 'api/tags/get_home_search',
        article : host + 'api/informations',
        articleTags : host + 'api/tags/get_information_tags',
        articleHot : host + 'api/informations/get_hot_recommend',
        findIp : host + 'api/projects/ip_project',
        ipList : host + 'api/projects',
        active : host + 'api/activities',
        submitConsult : host + 'api/consults',
        submitHoldEvent : host + 'api/orders',
        sendPhoneCode : host + 'api/auth_codes/send_code',
        openShop : host + 'api/informations/get_retail',
        SpaceList: host + 'api/spaces',
        SpaceDtl: host + 'api/spaces',
        placeDtl : host + 'api/sites',
        feedBack: host + 'api/feedback',
        inquiry: host + 'api/orders/create_inquiry',
        collection: host + 'api/collections'
    };

    export default {
        name: 'app',
        data(){
            return {
                cities:[],
                activityType : [],
                searchCondition : [],
                isShowHomeSearchCondition : false,
                loading: true,
                showLoginForm : false,
                showRegForm : false,
                peopleNumberCondition : [
                    {
                        key : '50人以下',
                        value : '50'
                    },
                    {
                        key : '50-100人',
                        value : '100'
                    },
                    {
                        key : '100-300人',
                        value : '300'
                    },
                    {
                        key : '300-500人',
                        value : '500'
                    },
                    {
                        key : '500人以上',
                        value : '500+'
                    },

                ]
            }

        },
        components: {
            Hello, ModuleFooter, ModuleHeader
        },
        mounted () {
            var self = this;
//            console.log(window.YUNAPI);
            $.ajax({
                url: window.YUNAPI.cities, context: document.body, success: function (data) {
                    self.cities = data.cities;
                }
            });

            $.ajax({
                url: window.YUNAPI.homeSearch, context: document.body, success: function (data) {
                    console.log(data);
                    self.searchCondition = data;
                    self.activityType = data.activity_type;
                }
            });
        },
        methods: {
            //获取活动人数、类型
            bodyClick : function (event) {

                //搜索 : 做什么  点击其他地方隐藏
                var e = event || window.event;
                var elem = e.srcElement||e.target;
                while(elem){
                    if(elem.id == "whatToSearch"){
                        return
                    }
                    elem = elem.parentNode;
                }
                this.isShowHomeSearchCondition = false
            },
            toggleLoginForm : function () {
                this.showLoginForm = !showLoginForm
            }
        }

    }
</script>
