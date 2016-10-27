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
                            <div class="warning"><i class="icons icon-warning"></i>请输入正确的11位手机号码</div>
                        </li>
                        <li class="logregwrap">
                            <input class="logreginput" v-model="password" type="password" placeholder="密码" />
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
                            <i class="icons icon-passwordshow"></i>
                        </li>
                        <li class="logregwrap">
                            <input class="logreginput" type="text" placeholder="确认密码" />
                            <i class="icons icon-passwordshow"></i>
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
    import 'assets/css/logreg.css';

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





