<template>

    <div>
        <div class="loginreg-box" id="loginreg" >

            <!--loginbox登录-开始-->
            <div class="loginbox">
                <h2>登录</h2>
                <div class="mainbox">
                    <ul class="inputbox">
                        <li class="logregwrap war">
                            <input class="logreginput" v-model="phone" type="text" placeholder="手机号" />
                            <div class="warning"><i class="icon-warning"></i>请输入正确的11位手机号码</div>
                        </li>
                        <li class="logregwrap">
                            <input class="logreginput" v-model="password" type="password" placeholder="密码" />
                            <i class="icon passwordshow"></i>
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
                    <a class="fl" href="javascript:;">创建账号</a>
                    <a class="fr" href="javascript:;">验证码登录</a>
                </div>

                <div class="log-thirdparty">
                    <div class="title">
                        <div class="line"></div>
                        <h5>或通过以下方式快速登录</h5>
                    </div>
                    <ul class="thirdparty">
                        <li><a class="wechat" href="javascript:;"></a> </li>
                        <li><a class="sina" href="javascript:;"></a></li>
                        <li><a class="qq" href="javascript:;"></a></li>
                    </ul>
                </div>
            </div><!--loginbox登录-结束-->

            <!--verificationbox验证码登录-开始-->
            <div class="verificationbox hide">
                <h2>验证码登录</h2>
                <div class="mainbox">
                    <ul class="inputbox">
                        <li class="logregwrap">
                            <input class="logreginput" v-model="phone" type="text" placeholder="手机号" />
                        </li>
                        <li class="logregwrap">
                            <input class="logreginput" v-model="verificode" type="text" placeholder="验证码" />
                            <button class="sendcode">发送验证码</button>
                        </li>
                    </ul>

                    <div class="rememberbox clearfix">
                        <div class="fl remember clearfix">
                            <label>
                                <input class="fl checkbox" v-model="checked" type="checkbox" value="记住手机号码">
                                <p class="fr">记住手机号码</p>
                            </label>
                        </div>
                    </div>

                    <button class="logreg-btn" type="button">登录</button>
                </div>
                <div class="hreftext clearfix">
                    <a class="fl" href="javascript:;">创建账号</a>
                    <a class="fr" href="javascript:;">验证码登录</a>
                </div>

                <div class="log-thirdparty">
                    <div class="title">
                        <div class="line"></div>
                        <h5>或通过以下方式快速登录</h5>
                    </div>
                    <ul class="thirdparty">
                        <li><a class="wechat" href="javascript:;"></a> </li>
                        <li><a class="sina" href="javascript:;"></a></li>
                        <li><a class="qq" href="javascript:;"></a></li>
                    </ul>
                </div>
            </div><!--verificationbox验证码登录-结束-->

            <!--找回密码-开始-->
            <div class="repasswordbox hide">
                <h2>找回密码</h2>
                <div class="mainbox">
                    <ul class="inputbox">
                        <li class="logregwrap">
                            <input class="logreginput" type="text" placeholder="手机号" />
                        </li>
                        <li class="logregwrap">
                            <input class="logreginput" type="text" placeholder="验证码" />
                            <button class="sendcode">发送验证码</button>
                        </li>
                    </ul>

                    <button class="logreg-btn" type="button">下一步</button>
                </div>
                <a class="back" href="javascript:;"><span class="icon-arrowleft"></span>返回</a>
            </div><!--找回密码-结束-->

            <!--重置密码repasswordbox-开始-->
            <div class="repasswordbox hide">
                <h2>重置密码</h2>
                <div class="mainbox">
                    <ul class="inputbox">
                        <li class="logregwrap">
                            <input class="logreginput" type="text" placeholder="新密码" />
                            <i class="icon passwordshow"></i>
                        </li>
                        <li class="logregwrap">
                            <input class="logreginput" type="text" placeholder="确认密码" />
                            <i class="icon passwordshow"></i>
                        </li>
                    </ul>

                    <button class="logreg-btn" type="button">立即重置</button>
                </div>
                <a class="back" href="javascript:;"><span class="icon-arrowleft"></span>返回</a>
            </div><!--重置密码repasswordbox-结束-->

            <!--regbox注册-开始-->
            <div class="regbox hide">
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
                            <i class="icon passwordshow"></i>
                        </li>
                        <li class="logregwrap">
                            <span class="text">确认密码</span>
                            <input class="logreginput" type="password" placeholder="" />
                        </li>
                    </ul>
                    <button class="logreg-btn" type="button">立即注册</button>
                </div>
            </div><!--regbox注册-结束-->

            <!--请绑定手机号bindphonebox-开始-->
            <div class="bindphonebox hide">
                <h2>请绑定手机号</h2>
                <div class="mainbox">
                    <ul class="inputbox">
                        <li class="logregwrap">
                            <input class="logreginput" type="text" placeholder="手机号" />
                        </li>
                        <li class="logregwrap">
                            <input class="logreginput" type="text" placeholder="验证码" />
                            <button class="sendcode">发送验证码</button>
                        </li>
                    </ul>

                    <button class="logreg-btn" type="button">确定</button>
                </div>
            </div><!--请绑定手机号bindphonebox-结束-->
            <!--请绑定手机号-您的称呼bindphone-namebox-开始-->
            <div class="bindphone-namebox hide">
                <h2>您的称呼</h2>
                <div class="mainbox">
                    <ul class="inputbox">
                        <li class="logregwrap">
                            <input class="logreginput" type="text" placeholder="姓" />
                        </li>
                        <li class="logregwrap">
                            <input class="logreginput" type="text" placeholder="名" />
                        </li>
                    </ul>

                    <button class="logreg-btn" type="button">确定</button>
                </div>
            </div><!--请绑定手机号-您的称呼bindphone-namebox-结束-->

        </div>
        <div class="mask-bg"></div>
    </div>
</template>

<script>
    import Lib from 'assets/Lib.js';

    export default {
        data() {
            return {
                phone:'',
                password:'',
                username:''
            }
        },
        components: {},
        ready(){},
        methods: {},

        //记住密码
        rememberPassword(){}
    }

</script>

<style scoped>
    /*placeholder样式*/
    input::-webkit-input-placeholder { color:#999;font-size: 12px; }
    input ::-moz-placeholder { color:#999;font-size: 12px; } /* firefox 19+ */
    input:-ms-input-placeholder { color:#999;font-size: 12px; } /* ie */
    input:-moz-placeholder { color:#999;font-size: 12px; }

    .loginreg-box{
        width: 360px;
        padding: 30px 48px;
        background: #fff;
        position: absolute;
        top: 120px;
        left: 50%;
        margin-left: -228px;
        z-index: 10;
    }
    .loginreg-box h2{
        font-size: 24px;
        text-align: center;
        margin-bottom: 40px;
    }
    .logregwrap{
        width: 358px;
        height: 48px;
        margin-bottom: 30px;
        background: #f2f2f2;
        border: 1px solid #f2f2f2;
        position: relative;
    }
    .logreginput{
        width: 318px;
        height: 22px;
        line-height: 22px;
        padding: 13px 20px;
        font-size: 18px;
        background: none;
    }
    .logregwrap .icon{
        display: inline-block;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .icon.passwordshow{
        background: url("/static/images/logreg/icon-eyeshow.png") no-repeat center;
    }
    .icon.passwordhide{
        background: url("/static/images/logreg/icon-eyehide.png") no-repeat center;
    }
    .rememberbox{margin-bottom: 20px;}
    .remember .checkbox{
        width: 18px;
        height: 18px;
        border: 1px solid #ccc;
        margin-right: 10px;
        background: url("/static/images/logreg/icon-checkbox.png") no-repeat center;
    }
    .remember .checkbox.selected{
        background: url("/static/images/logreg/icon-checkbox.png") no-repeat center;
    }
    .remember p{
        color: #666;
    }
    .logreg-btn{
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 18px;
        background:#00adff;
        margin: 10px 0;
        cursor: pointer;
    }
    .logreg-btn:hover{
        background: #018acb;
    }
    .hreftext{margin-top: 20px}
    .hreftext a:hover{
        color: #000;
    }

    .log-thirdparty{
        margin-top: 50px;
    }
    .log-thirdparty .title{
        margin-bottom: 40px;
        position: relative;
    }
    .log-thirdparty .title .line{
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #eee;
    }
    .log-thirdparty .title h5{
        display: inline-block;
        width: 200px;
        height: 20px;
        line-height: 20px;
        background: #fff;
        text-align: center;
        position: absolute;
        left: 80px;
        top: -10px;
    }
    .thirdparty li{
        float: left;
        width: 60px;
        height: 60px;
        margin-right: 90px;
    }
    .thirdparty li:last-child{
        margin-right: 0;
    }
    .thirdparty li>a{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .thirdparty .wechat{
        background: url("/static/images/logreg/img-wechat.png") no-repeat;
    }
    .thirdparty .sina{
        background: url("/static/images/logreg/img-sina.png") no-repeat;
    }
    .thirdparty .qq{
        background: url("/static/images/logreg/img-qq.png") no-repeat;
    }

    .regbox .logregwrap .text{
        display: inline-block;
        width: 70px;
        height: 50px;
        line-height: 48px;
        padding-left: 20px;
        text-align: left;
        position: absolute;
        left: 0;
        top: 0;
    }
    .regbox .logreginput{
        width: 230px;
        margin-left: 70px;
    }
    .sendcode{
        display: block;
        width: 110px;
        height: 50px;
        line-height: 48px;
        text-align: center;
        background:#00adff;
        color: #fff;
        position: absolute;
        right: 0;
        top: -1px;
    }

    .repasswordbox .inputbox{margin-bottom: 35px;}
    .repasswordbox .back{
        display: block;
        width: 100px;
        height: 20px;
        line-height: 20px;
        margin: 20px auto 0;
        text-align: center;
    }
    .repasswordbox .back:hover{
        color: #000;
    }
    .repasswordbox .icon-arrowleft{
        width: 8px;
        height: 8px;
        margin-right: 5px;
        border-color: #000;
    }

    .logregwrap .warning{
        width: 360px;
        height: 24px;
        line-height: 24px;
        background: #ff0000;
        font-size: 12px;
        color: #fff;
        text-indent: 36px;
        position: relative;
        top: -2px;
        left: -1px;
    }
    .logregwrap.war{
        border-color: #ff0000;
    }
    .logregwrap .warning .icon-warning{
        width: 12px;
        height: 12px;
        display: block;
        position: absolute;
        top: 6px;
        left: 20px;
    }

</style>





