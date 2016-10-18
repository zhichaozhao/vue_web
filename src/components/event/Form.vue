<template>
    <div>
        <div class="evformbox">
            <h2>我要办活动</h2>
            <div class="mainbox">
                <ul class="inputbox">
                    <li class="inputwrap">
                        <div class="text"><span class="red">*</span>您的称呼：</div>
                        <input class="fminput" type="text" placeholder="请输入您的真实姓名" />
                    </li>
                    <li class="inputwrap war">
                        <div class="text"><span class="red">*</span>您的联系方式：</div>
                        <input class="fminput" type="text" placeholder="请输入11位手机号" />
                        <div class="warning"><i class="icons icon-warning"></i>请输入正确的11位手机号码</div>
                    </li>
                    <li class="inputwrap">
                        <div class="text"><span class="red">*</span>短信验证码：</div>
                        <input class="fminput" type="text" placeholder="请输入6位数验证码" />
                        <button class="sendcode">发送验证码</button>
                    </li>
                    <li class="inputwrap">
                        <div class="wrap" @click="showcitys=!showcitys">
                            <i class="icon-triangedown triange-bg"></i>
                            <div class="text">活动城市：</div>
                            <p class="selected">上海</p>
                        </div>
                        <ul class="checkbox-wrap" v-show="showcitys">
                            <li>
                                <input class="ckbox" type="checkbox" name="city" id="beijing" value="北京">
                                <label for="beijing">北京</label>
                            </li>
                            <li>
                                <input class="ckbox" type="checkbox" name="city" id="shagnhai" value="上海">
                                <label for="shagnhai">上海</label>
                            </li>
                            <li>
                                <input class="ckbox" type="checkbox" name="city" id="guangzhou" value="广州">
                                <label for="guangzhou">广州</label>
                            </li>
                            <li>
                                <input class="ckbox" type="checkbox" name="city" id="shenzhen" value="深圳">
                                <label for="shenzhen">深圳</label>
                            </li>
                        </ul>
                    </li>
                    <li class="inputwrap">
                        <div class="swrap" @click="shownumbs=!shownumbs">
                            <i class="icon-triangedown triange-bg"></i>
                            <div class="text">活动人数：</div>
                            <p class="selected">60人</p>
                        </div>
                        <ul class="selectlist" v-show="shownumbs">
                            <li v-for="peoplenumb in peoplenumbs">
                                {{peoplenumb}}
                            </li>
                        </ul>
                    </li>
                    <li class="inputwrap clearfix">
                        <div class="text"><span class="red">*</span>活动时间：</div>
                        <div class="fl time">
                            <i class="icons icon-time"></i>
                            <input class="timeinput" type="text" placeholder="开始日期" />
                        </div>
                        <p class="fl zhi">至</p>
                        <div class="fl time">
                            <i class="icons icon-time"></i>
                            <input class="timeinput" type="text" placeholder="结束日期" />
                        </div>
                    </li>
                    <li class="inputwrap">
                        <div class="swrap" @click="showtype=!showtype">
                            <i class="icon-triangedown triange-bg"></i>
                            <div class="text">活动类型：</div>
                            <p class="selected">秀场展馆</p>
                        </div>
                        <ul class="selectlist" v-show="showtype">
                            <li>活动类型</li>
                        </ul>
                    </li>

                    <li class="inputwrap trea">
                        <div class="text">其他要求：</div>
                        <textarea rows="8" placeholder="请填写更多的详细信息，帮助您快速找到适合的场地。"></textarea>
                    </li>
                </ul>
                <button class="evform-btn" type="button" @click="showstate=!showstate">提交</button>
                <div class="caption">
                    <p>一键提交你的活动需求</p>
                    <p>我们将在30分钟内您提供多份精准场地报价</p>
                </div>
            </div><!--表单mainbox-end-->
        </div>

        <!--状态弹窗-->
        <div class="formstate-wp" v-show="showstate">
            <div class="mask-bg" @click="showstate=!showstate"></div>
            <div class="formstate">
                <h2>提交成功</h2>
                <p>我们将在30分钟内为您提供多份精准场地报价</p>
            </div>
        </div>

        <!--合作咨询-->
        <button @click="showcooper=!showcooper" style="display: block;margin: 0 auto 100px">合作咨询弹窗暂时放这里，点击出现</button>

        <div class="formcooper-wp" v-show="showcooper">
            <div class="mask-bg" @click="showcooper=!showcooper"></div>
            <div class="evformbox">
                <a href="javascript:;" @click="showcooper=!showcooper" class="icons icon-close btnclose"></a>
                <h2>合作咨询</h2>
                <div class="title">合作项目：冰川时代主题快闪店</div>
                <div class="mainbox">
                    <ul class="inputbox">
                        <li class="inputwrap">
                            <div class="text"><span class="red">*</span>选择城市：</div>
                            <input class="fminput" type="text" placeholder="请输入项目计划落地城市" />
                        </li>
                        <li class="inputwrap">
                            <div class="text"><span class="red">*</span>您的称呼：</div>
                            <input class="fminput" type="text" placeholder="请输入您的真实姓名" />
                        </li>
                        <li class="inputwrap war">
                            <div class="text"><span class="red">*</span>您的联系方式：</div>
                            <input class="fminput" type="text" placeholder="请输入11位手机号" />
                            <div class="warning"><i class="icons icon-warning"></i>请输入正确的11位手机号码</div>
                        </li>
                        <li class="inputwrap">
                            <div class="text"><span class="red">*</span>短信验证码：</div>
                            <input class="fminput" type="text" placeholder="请输入6位数验证码" />
                            <button class="sendcode">发送验证码</button>
                        </li>
                        <li class="inputwrap trea">
                            <div class="text"><span class="red">*</span>您想咨询的内容：</div>
                            <textarea rows="7" placeholder="您想咨询的内容，300字以内"></textarea>
                        </li>
                    </ul>
                    <button class="evform-btn" type="button">提交</button>
                </div><!--表单mainbox-end-->
            </div>
        </div>
    </div>
</template>

<script>

    import Lib from 'assets/Lib.js'
    import Owl from 'assets/owl.js'

    import 'assets/css/component.css';
    import 'assets/css/hold-event.css';
    //  import holder from 'http://cdn.bootcss.com/holder/2.9.4/holder.js';

    import moduleHeader from 'components/module-header';
    import moduleFooter from 'components/module-footer';

    export default{
        data(){
            return {
                loginerror: '',
                //是否记住密码
                remember_paw: 1,
                login_height: 500,
                peoplenumbs: [
                    111,222
                ],
                subjects:[
                    1,2,3
                ],
                shownumbs: 0,
                showtype: 0,
                showcitys: 0,
                showstate: 0,
                showcooper:0
            }
        },
        components: {
            moduleHeader, moduleFooter
        },
        ready(){
            $("#owl-demo").owlCarousel({
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true
                // "singleItem:true" is a shortcut for:
                // items : 1,
                // itemsDesktop : false,
                // itemsDesktopSmall : false,
                // itemsTablet: false,
                // itemsMobile : false
            });
        },
        methods: {
            //获取活动人数、类型
        }

    }
</script>
