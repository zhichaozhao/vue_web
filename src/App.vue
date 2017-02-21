<template>
    <div id="app2" v-on:click="bodyClick">
        <module-header cities = "cities" v-on:toggleLoginForm ="toggleLoginForm"></module-header>

        <!--<router-view></router-view>-->
        <div v-loading="loading" class="el-loading-yun"></div>
        <div v-if="loading" class="loading-bg"></div>

        <router-view  class="child-view"></router-view>

        <module-footer ref="test" v-if="!loading"></module-footer>

        <div v-if="httpError">
            请求错误
            <button>刷新页面</button>
        </div>

        <el-dialog v-model="showForm.reg" @open="regOpen">
            <!--regbox注册-开始-->
            <div class="loginreg-box">
                <div class="regbox">
                    <h2>注册</h2>
                    <form action="" id="regForm">
                        <div class="mainbox">
                            <ul class="inputbox">
                                <li class="logregwrap">
                                    <span class="text">姓</span>
                                    <!--<input class="logreginput" type="text" placeholder="请输入您的姓氏" />-->
                                    <input class="logreginput" v-model="regData.surname" name="surname" data-rule-required="true" data-msg-required="请输入您的姓氏!" placeholder="请输入您的姓氏">
                                </li>
                                <li class="logregwrap">
                                    <span class="text">名</span>
                                    <!--<input class="logreginput" type="text" placeholder="请输入您的名称" />-->
                                    <input class="logreginput" v-model="regData.name" name="name" data-rule-required="true" data-msg-required="请输入您的名称!" placeholder="请输入您的名称">
                                </li>
                                <li class="logregwrap">
                                    <span class="text">手机号</span>
                                    <input class="logreginput" v-model="regData.mobile" name="phone" type="text" data-msg-required="请输入您的联系方式!" placeholder="请输入正确的11位手机号码" />
                                </li>
                                <li class="logregwrap">
                                    <span class="text">验证码</span>
                                    <!--<input class="logreginput" type="text" placeholder="" />-->
                                    <input class="logreginput" v-model="regData.auth_code" name="auth_code" data-rule-required="true" data-msg-required="请输入验证码!" placeholder="请输入验证码">
                                    <button class="sendcode" type="button" @click="sendPhoneCode">发送验证码</button>
                                </li>
                                <li class="logregwrap">
                                    <span class="text">设置密码</span>
                                    <!--<input class="logreginput" type="text" placeholder="密码长度不能少于6位，不能包含空格" />-->
                                    <input class="logreginput" v-model="regData.password" name="password" data-rule-required="true" data-msg-required="请输入密码!" placeholder="密码长度不能少于6位，不能包含空格">
                                    <i class="icons icon-passwordhide"></i>
                                </li>
                                <li class="logregwrap">
                                    <span class="text">确认密码</span>
                                    <input class="logreginput" v-model="regData.password_confirmation" name="password_confirmation" data-rule-required="true" data-msg-required="请输入确认密码!" placeholder="请输入确认密码">
                                    <!--<input class="logreginput" type="password" placeholder="" />-->
                                </li>
                            </ul>
                            <button class="logreg-btn" type="button" @click="submitReg">立即注册</button>
                        </div>
                    </form>
                </div><!--regbox注册-结束-->
            </div>

        </el-dialog>
        <el-dialog v-model="showForm.login" @open="loginFormOpen">
            <!--regbox注册-开始-->
            <div class="loginreg-box">
                <form action="" id="loginForm">
                    <!--loginbox登录-开始-->
                    <div class="loginbox">
                        <h2>登录</h2>
                        <div class="mainbox">
                            <ul class="inputbox">
                                <li class="logregwrap">
                                    <input class="logreginput" v-model="loginData.mobile" name="phone" type="text" data-msg-required="请输入您的联系方式!" placeholder="请输入11位手机号" />
                                    <!--<div class="warning"><i class="icons icon-warning"></i>请输入正确的11位手机号码</div>-->
                                </li>
                                <li class="logregwrap">
                                    <input class="logreginput" v-model="loginData.password" name="password" data-rule-required="true" data-msg-required="请输入密码!" placeholder="请输入密码!">
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

                            <button class="logreg-btn" type="button" @click="login">登录</button>
                        </div>
                        <div class="hreftext clearfix">
                            <a class="fl" href="javascript:;" @click="showForm.reg = true">创建账号</a>
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
                </form>
            </div>

        </el-dialog>

    </div>
</template>

<script>
    import Hello from './components/Hello'
    import ModuleFooter from './components/module-footer.vue'
    import ModuleHeader from './components/module-header.vue'
    import 'assets/css/logreg.css';

//    const host = "http://106.14.38.81/";
    const host = "http://localhost:3000/";

    window.YUNAPI = {
        host: host,
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
        collection: host + 'api/collections',
        login : host + 'api/auth/sign_in',
        register : host + 'api/auth',
        tags : host + 'api/tags/all_tags',
        createInquiry : host + 'api/orders/create_inquiry',
        createBooking : host + 'api/orders/create_booking',
        inquiryContent : host + 'api/demands/'
    };
    export default {
        name: 'app',
        data(){
            return {
//                cities:[],
                activityType : [],
                searchCondition : [],
                isShowHomeSearchCondition : false,
                loading: true,
                httpError:false,
                cdVisible : false,  // 合作咨询的弹出框 是否显示
                showRegForm : false,
                showForm : {
                    reg : false,
                    login : false
                },
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

                ],
                loginData : {
                    mobile : '',
                    password : ''
                },
                regData : {
                    mobile : '',
                    password : '',
                    password_confirmation : '',
                    auth_code : '',
                    code_token : '',
                    familyName : '',
                    name : '',
                    surname : ''
                },
//                cities : window.store.state.cities
            }

        },
        computed: {
            cities (){
                return this.$store.state.cities
            },
            personalData (){
                return this.$store.state.personalData
            },
            loading(){
                return this.$store.state.loading
            }
        },
        components: {
            Hello, ModuleFooter, ModuleHeader
        },
        mounted () {
            var self = this;
//            console.log(window.YUNAPI);

            $.ajax({
                url: window.YUNAPI.tags, context: document.body, success: function (data) {
                    console.log(data);
//                    self.searchCondition = data;
                    self.$store.state.searchCondition = data;
                    self.$store.state.cities = data.cities;
//                    self.$store.commit('searchCondition', data)
//                    self.activityType = data.activity_type;
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
                this.showForm.login = !this.showForm.login
            },
            loginFormOpen : function () {
                GlobleFun.validate("#loginForm");
                self.showRegForm = false;
            },
            login : function () {
                var self = this;
                var valid =  $("#loginForm").valid();
                if(!valid) return;
                $.post({
                    url: window.YUNAPI.login,
                    data : self.loginData,
                    success: function (data ,status, xhr) {
                        console.log(data);
                        var status = data.status == 1 ? 'success' : 'error';
                        APP.$message({
                            message: data.message,
                            type: status
                        });
                        if(data.status == 1){
                            data.data.access_token = xhr.getResponseHeader('access-token');
                            data.data.client = xhr.getResponseHeader('client');
                            self.$store.commit('personalDataChange',data.data);//保存个人信息

                            self.showForm.login = false;
                            router.replace(self.$route.path);  // 刷新页面
                        }
                    },
                    error : function () {

                    }
                });
            },
            regOpen : function () {
                GlobleFun.validate("#regForm");
                this.showForm.login = false;
            },
            submitReg : function () {
                var self = this;
                var valid =  $("#regForm").valid();
                if(!valid) return;
                $.post({
                    url: window.YUNAPI.register,
                    data : self.regData,
                    success: function (data ,status, xhr) {

                        console.log(data)

                        var status = data.status == 1 ? 'success' : 'error';
                        APP.$message({
                            message: data.message,
                            type: status
                        });
                        if(data.status == 1){

                            data.data.access_token = xhr.getResponseHeader('access-token');
                            data.data.client = xhr.getResponseHeader('client');
                            self.$store.commit('personalDataChange',data.data);//保存个人信息

                            self.showForm.reg = false
                        }
                    },
                    error : function () {
                    }
                });
            },
            sendPhoneCode : function () {
                var self = this;
                var success = function (data) {
                    self.regData.code_token = data.data;
                };
                GlobleFun.sendPhoneCode(this.regData.mobile,success,'.sendcode')
                return false
            },
        }

    }
</script>
