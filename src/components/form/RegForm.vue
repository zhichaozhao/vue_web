<template>
    <div>
        <el-dialog v-model="showRegForm" top="20px" @open="regOpen">
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
                                    <button class="sendcode">发送验证码</button>
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
    </div>
</template>
<script>

    export default {

        data(){
            return {
                regData : {
                    mobile : '',
                    password : '',
                    password_confirmation : '',
                    auth_code : '',
                    code_token : '',
                    familyName : '',
                    name : '',
                    surname : ''
                }
            }
        },
        computed: {
            showRegForm (){
                return store.state.elDialog.regForm
            }
        },
        methods :{
            regOpen : function () {
                GlobleFun.validate("#regForm");
//            this.showLoginForm = false;
            },
            submitReg : function () {

            }
        },

        
    }

</script>