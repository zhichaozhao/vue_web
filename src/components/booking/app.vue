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
        <form action="" id="bookingForm">
            <div class="fr booking-right ">
                <h2>基本信息</h2>
                <div class="evformbox">
                    <div class="mainbox">
                        <ul class="inputbox">
                            <li class="inputwrap clearfix">
                                <div class="text"><span class="red">*</span>您的称呼：</div>
                                <input class="fminput" v-model="inquiryData.contact" name="username" data-rule-required="true" data-msg-required="请输入您的真实姓名!" placeholder="请输入您的真实姓名!">
                            </li>
                            <li class="inputwrap clearfix">
                                <div class="text"><span class="red">*</span>您的联系方式：</div>
                                <input class="fminput" v-model="inquiryData.phone" name="phone" type="text" data-msg-required="请输入您的联系方式!" placeholder="请输入11位手机号" />
                            </li>
                            <li class="inputwrap clearfix">
                                <div class="text"><span class="red">*</span>短信验证码：</div>
                                <input v-model="inquiryData.auth_code" class="fminput" type="text" placeholder="请输入6位数验证码" data-rule-required="true" data-msg-required="请输入验证码!"/>
                                <button type="button" id="inquirySendCode" class="sendcode" @click="sendPhoneCode">发送验证码</button>
                            </li>
                        </ul>
                    </div>
                    <div  class="mainbox">
                        <ul class="inputbox">

                            <li class="inputwrap clearfix">
                                <div class="text"><span class="red">*</span>活动时间：</div>
                                <div class="fl time timedate">
                                    <el-date-picker
                                            v-model="inquiryData.time"
                                            type="daterange"
                                            placeholder="选择日期范围"
                                            format="yyyy年MM月dd"
                                            style="width: 300px">
                                    </el-date-picker>
                                </div>
                            </li>

                            <li class="inputwrap inputsex clearfix">
                                <div class="text"><span class="red"></span>可改期：</div>
                                <div class="man sexwrap">
                                    <el-radio class="radio" v-model="inquiryData.change_time" label="1">是</el-radio>
                                </div>
                                <div class="woman sexwrap">
                                    <el-radio class="radio" v-model="inquiryData.change_time" label="0">否</el-radio>
                                </div>

                            </li>

                            <li class="inputwrap clearfix">
                                <div class="text">活动人数：</div>
                                <!--<input class="fminput" type="text" placeholder="请输入项目计划落地城市" />-->
                                <div class="result fminput">
                                    <el-select v-model="inquiryData.number_of_activities" placeholder='请选择活动人数'>
                                        <el-option
                                                v-for="(value,key) in searchCondition.activity_people"
                                                :label="value"
                                                :value="key">
                                        </el-option>
                                    </el-select>
                                </div>
                            </li>

                            <li class="inputwrap clearfix">
                                <div class="text">活动预算：</div>
                                <!--<input class="fminput" type="text" placeholder="请输入项目计划落地城市" />-->
                                <div class="result fminput">
                                    <el-select v-model="inquiryData.budget_amount" placeholder='请选择您的预算范围'>
                                        <el-option
                                                v-for="(value,key) in searchCondition.activity_people"
                                                :label="value"
                                                :value="key">
                                        </el-option>
                                    </el-select>
                                </div>
                            </li>

                            <li class="inputwrap clearfix">
                                <div class="text">活动类型：</div>
                                <!--<input class="fminput" type="text" placeholder="请输入项目计划落地城市" />-->
                                <div class="result fminput">
                                    <el-select v-model="inquiryData.activity_type" placeholder='请选择活动类型'>
                                        <el-option
                                                v-for="(value,key) in searchCondition.activity_type"
                                                :label="value"
                                                :value="key">
                                        </el-option>
                                    </el-select>
                                </div>
                                <!--<input style="visibility: hidden" name="city" v-model="demand.city" type="text" data-rule-required="true" data-msg-required="请选择城市!">-->
                            </li>

                            <li class="inputwrap trea clearfix">
                                <div class="text">其他要求：</div>
                                <textarea v-model="inquiryData.activities_required" rows="8" placeholder="请填写更多的详细信息，帮助您快速找到适合的场地。"></textarea>
                            </li>
                        </ul>
                        <button class="evform-btn" type="button" @click="submitInquiry">提交</button>
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
        </form>
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
                showbugdets:0,
                inquiryData : {
                    contact : '',
                    auth_code : '',
                    company : '',
                    phone : '',
                    s_time : '',
                    e_time : '',
                    ip_city : '' ,
                    number_of_activities : "50",
                    budget_amount : '',
                    activity_type : 0,
                    source : '',
                    activities_required : '',
                    time : ['',''],
                    change_time : '1'
                },
            }
        },
        components: {

        },
        mounted () {
            var self = this;
            setTimeout(function () {
                self.$parent.loading = false;
            },300)
            setTimeout(function () {
                GlobleFun.validate("#bookingForm");
            },300)
        },
        computed : {
            searchCondition (){
                return this.$store.state.searchCondition
            },
            inquiryCount () {
                return this.$store.state.inquiryCount
            },
            inquiryList () {
                return this.$store.state.inquiryList
            },
//            inquiryListChange : {
//                get: function () {
//                    var e = {}
//                    for( var i in this.inquiryList){
//                        e[i] = true
//                    }
//                    return e
//                },
//                // setter
//                set: function (newValue) {
//                    console.log(newValue)
//                }
//            },
            selectInquiryIds () {
                var e = []
                for (var i in this.inquiryListChange){
                    if(this.inquiryListChange[i]){
                        e.push(i)
                    }
                }
                return e;
            },
            personalData (){
                return this.$store.state.personalData
            }
        },
        methods: {
            sendPhoneCode : function (e) {
                var self = this;
                var success = function (data) {
                    self.inquiryData.code_token = data.data;
                };
                GlobleFun.sendPhoneCode(this.inquiryData.phone,success,'#inquirySendCode');
                return false
            },
            submitInquiry : function () {
                if(!this.personalData.uid){
                    this.$parent.showForm.login = true
                    return
                }

                var self = this;
                var isValid = $("#bookingForm").valid();

                if(!isValid) return

                self.$store.commit('loading',true);

                if(!this.inquiryData.time[0]){
                    this.$message({
                        message: "请选择日期",
                        type: "error"
                    });
                    return
                }
                //询价必须数据
                this.inquiryData.space_ids = [self.$route.params.id]
                this.inquiryData.uid = this.personalData.uid
                this.inquiryData['access-token'] = this.personalData.access_token
                this.inquiryData.client= this.personalData.client

                var sd = new Date(this.inquiryData.time[0]);
                var ed = new Date(this.inquiryData.time[1]);
                this.inquiryData.s_time = sd.getFullYear() + '-' + (sd.getMonth() + 1) + '-' + sd.getDate() ;
                this.inquiryData.e_time = ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate() ;

                console.log(self.inquiryData);

                $.post({
                    url: window.YUNAPI.createBooking,
                    data : self.inquiryData,
                    success : function (data) {
                        console.log(data);

                        if(data.status == 1){

                        }

                        GlobleFun.httpMessage(data);

                        self.$store.commit('loading',false);
                    }
                });

            }
        },

        //记住密码
        rememberPassword(){}
    }

</script>






