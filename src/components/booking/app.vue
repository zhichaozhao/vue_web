<template>
  <div>


    <ul class="w1200 process clearfix">
        <li class="current clearfix">
            <p><i class="icons"></i>填写订单</p>
            <div class="line"></div>
        </li>
        <li class="clearfix">
            <p><i class="icons"></i>等待确认</p>
            <div class="line"></div>
        </li>
        <li class="clearfix">
            <p><i class="icons"></i>活动执行</p>
            <div class="line"></div>
        </li>
        <li class="clearfix">
            <p><i class="icons"></i>订单完成</p>
        </li>
    </ul>

    <div class="w1200 booking-container clearfix">
        <!--预定订单详情-->
        <div class="fl booking-left">
            <h2>03－大会议室</h2>
            <p>空间类型：特色空间</p>
            <p>区域位置：上海市闸北区大场、大华沪太支路538号飞马旅5i</p>
            <div class="img">
                <img src="">
            </div>
            <div class="pgroup clearfix">
                <p>最大容纳：30 人</p>
                <p>空间面积：50 ㎡</p>
                <p>空间层高：4 m</p>
                <p>空间承重：4 m</p>
            </div>

            <h3>周一至周四</h3>
            <div class="price">
                <p class="currentprice red">￥8888元 / 天 起</p>
                <p class="costprice">¥ 9888元／天 起</p>
            </div>
            <div class="text">
                <h6>套餐信息</h6>
                <p>
                    是继Playze与Tony合作有机农庄之后的第二个项目。多利有机屋旨在向上海市民展示他们的农庄产品及推广有机生活方式，为城市生活居民引入自然生活理念。像素化的方木箱出现在建筑的每一层，成为空间关联的主线。采用立体化的可移动模块将中央楼梯打造成一个灵活的居善地，这里可以适应演讲，展览，接待，非正式回应等多种活动。
                </p>
                <h6>预定须知</h6>
                <p>100人以内，12小时以内。超出100人，每人加收500元，最多允许超出150人。</p>
            </div>
        </div>

        <!--预定信息填写-->
        <div class="fr booking-right">
            <h2>预订信息填写</h2>
            <div class="evformbox">
                <div class="mainbox">
                    <ul class="inputbox">
                        <li class="inputwrap">
                            <div class="text"><span class="red">*</span>您的称呼：</div>
                            <input class="fminput" type="text" placeholder="请输入您的真实姓名" />
                        </li>
                        <li class="inputwrap war">
                            <div class="text"><span class="red">*</span>您的联系方式：</div>
                            <input class="fminput" type="text" placeholder="请输入11位手机号" />
                            <div class="warning hide"><i class="icons icon-warning"></i>请输入正确的11位手机号码</div>
                        </li>
                        <li class="inputwrap">
                            <div class="text"><span class="red">*</span>手机验证码：</div>
                            <input class="fminput" type="text" placeholder="请输入6位数验证码" />
                            <button class="sendcode">获取验证码</button>
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
                        <li class="inputwrap inputsex clearfix">
                            <div class="text"><span class="red"></span>可改期：</div>
                            <div class="man sexwrap">
                                <input type="radio" name="sex" id="man" value="男">
                                <label for="man">男</label>
                            </div>
                            <div class="woman sexwrap">
                                <input type="radio" name="sex" id="woman" value="女">
                                <label for="woman">女</label>
                            </div>
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
                        <li class="inputwrap">
                            <div class="swrap">
                                <i class="icon-triangedown triange-bg"></i>
                                <div class="text">活动预算：</div>
                                <p class="selected">￥60000~￥100000</p>
                            </div>
                            <ul class="selectlist" v-show="showbugdets">
                                <li v-for="bugdet in bugdets">
                                    {{bugdet}}
                                </li>
                            </ul>
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
                    <button class="evform-btn" type="button" @click="showstate=!showstate">预定</button>
                </div><!--表单mainbox-end-->
            </div>

            <!--状态弹窗-->
            <div class="formstate-wp" v-show="showstate && !showmask">
                <div class="mask-bg" @click="showstate=!showstate"></div>
                <div class="formstate">
                    <h2>提交成功</h2>
                    <p>我们将在30分钟内和您取得联系<br>
                        请注意接听来电</p>
                </div>
            </div>

        </div><!--right-end-->
    </div>
  </div>
</template>

<script>
    import Lib from 'assets/Lib.js';
    //import Jquery from 'assets/jquery-3.1.0.min.js'

    import 'assets/css/component.css';
    import 'assets/css/hold-event.css';

    import moduleHeader from 'components/module-header';
    import moduleFooter from 'components/module-footer';

    export default {
        data() {
            return {
                phone:'',
                password:'',
                username:'',
                peoplenumbs: [
                    111,222
                ],
                subjects:[
                    1,2,3
                ],
                shownumbs: 0,
                showtype: 0,
                showcitys: 0,
                showstate:0,
                bugdets:[1,2,3],
                showbugdets:0
            }
        },
        components: {

        },
        methods: {},

        //记住密码
        rememberPassword(){}
    }

</script>






