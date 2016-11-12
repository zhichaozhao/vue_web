<template>
    <div>
        <form action="" id="submit-demand">
            <div class="evformbox">
                <h2>我要办活动</h2>
                <div class="mainbox">
                    <ul class="inputbox">
                        <li class="inputwrap clearfix">
                            <div class="text"><span class="red">*</span>您的称呼：</div>
                            <input class="fminput" v-model="demand.contact" name="username" data-rule-required="true" data-msg-required="请输入您的真实姓名!" placeholder="请输入您的真实姓名!">
                        </li>
                        <li class="inputwrap clearfix">
                            <div class="text"><span class="red">*</span>您的联系方式：</div>
                            <input class="fminput" v-model="demand.phone" name="phone" type="text" data-msg-required="请输入您的联系方式!" placeholder="请输入11位手机号" />
                        </li>
                        <li class="inputwrap clearfix">
                            <div class="text"><span class="red">*</span>短信验证码：</div>
                            <input v-model="demand.auth_code" class="fminput" type="text" placeholder="请输入6位数验证码" data-rule-required="true" data-msg-required="请输入验证码!"/>
                            <button type="button" id="sendCode" class="sendcode" @click="sendPhoneCode">发送验证码</button>
                        </li>
                        <li class="inputwrap clearfix">
                            <div class="text"><span class="red">*</span>选择城市：</div>
                            <!--<input class="fminput" type="text" placeholder="请输入项目计划落地城市" />-->
                            <div class="result fminput">
                                <el-select v-model="demand.order_city" placeholder='请选择城市'>
                                    <el-option
                                            v-for="item in searchCondition.cities"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <!--<input style="visibility: hidden" name="city" v-model="demand.city" type="text" data-rule-required="true" data-msg-required="请选择城市!">-->
                        </li>
                        <li class="inputwrap clearfix">
                            <div class="text"><span class="red">*</span>活动人数：</div>
                            <!--<input class="fminput" type="text" placeholder="请输入项目计划落地城市" />-->
                            <div class="result fminput">
                                <el-select v-model="demand.number_of_activities" placeholder='请选择活动人数'>
                                    <el-option
                                            v-for="(value,key) in searchCondition.activity_people"
                                            :label="value"
                                            :value="key">
                                    </el-option>
                                </el-select>
                            </div>
                        </li>
                        <li class="inputwrap clearfix">
                            <div class="text"><span class="red">*</span>活动时间：</div>
                            <div class="fl time timedate">
                                <el-date-picker
                                        v-model="demand.time"
                                        type="daterange"
                                        placeholder="选择日期范围"
                                        format="yyyy年MM月dd"
                                        style="width: 300px">
                                </el-date-picker>
                            </div>
                            <!--<p class="fl zhi">至</p>-->
                            <!--<div class="fl time">-->
                                <!--<i class="icons icon-time"></i>-->
                                <!--<input class="timeinput" type="text" placeholder="结束日期" />-->
                            <!--</div>-->
                        </li>
                        <li class="inputwrap clearfix">
                            <div class="text"><span class="red">*</span>活动类型：</div>
                            <!--<input class="fminput" type="text" placeholder="请输入项目计划落地城市" />-->
                            <div class="result fminput">
                                <el-select v-model="demand.activity_type" placeholder='请选择活动类型'>
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
                            <textarea v-model="demand.activities_required" rows="8" placeholder="请填写更多的详细信息，帮助您快速找到适合的场地。"></textarea>
                        </li>
                    </ul>
                    <button class="evform-btn" type="button" @click="submitHoldEvent">提交</button>
                    <div class="caption">
                        <p>一键提交你的活动需求</p>
                        <p>我们将在30分钟内您提供多份精准场地报价</p>
                    </div>
                </div><!--表单mainbox-end-->
            </div>
        </form>


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
                            <div class="warning"><i class="icons icon-warningbg"></i>请输入正确的11位手机号码</div>
                        </li>
                        <li class="inputwrap">
                            <div class="text"><span class="red">*</span>短信验证码：</div>
                            <input class="fminput" type="text" placeholder="请输入6位数验证码" />
                            <button class="sendcode" @click="sendPhoneCode">发送验证码</button>
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
                showcooper:0,
                demand : {
                    phone : '',
                    contact : '',
                    order_city : 1,
                    number_of_activities : "50",
                    time : ['',''],
                    user_id : 1,
                    activity_type : 0,
                    auth_code : '',
                    activities_required : '',
                    code_token : '',
                    s_time:'',
                    e_time:'',
                    ip_city:'上海'
                }
            }
        },
        computed : {
            searchCondition (){
                return this.$store.state.searchCondition
            },
            personalData (){
                return this.$store.state.personalData
            }
        },
        mounted () {

            this.$root.loading = false;
            this.$parent.loading = false;

            $(function() {

                window.submitDemand = $("#submit-demand").validate({
                    debug: false,
                    errorElement: "div",
                    errorPlacement: function(error, element) {
                        error.addClass('warning').appendTo(element.parent("li"));
                        error.parent('li').addClass('war')
                    },
                    success : function (e) {
                        e.parents('li').removeClass('war');
                        e.parents('li').find('.warning').remove();
                    },
                    rules : {
                        phone : {
                            required : true,
//                            minlength : 11,
                            // 自定义方法：校验手机号在数据库中是否存在
                            // checkPhoneExist : true,
                            isMobile : true
                        },
                    }
                })
            })
            if(typeof this.$route.query.activity_type != 'undefined'){
                this.demand.activity_type = this.$route.query.activity_type * 1
            }
            if(typeof this.$route.query.number_of_activities != 'undefined'){
                this.demand.number_of_activities = this.$route.query.number_of_activities
            }
        },
        methods: {
            //获取活动人数、类型
            submitHoldEvent : function () {
                var self = this;

                if(!this.personalData.uid){ // 本地验证是否登陆
                    this.$parent.showForm.login = true
                    return
                }

                var isValid = $("#submit-demand").valid();

                var sd = new Date(self.demand.time[0]);
                var ed = new Date(self.demand.time[1]);
                self.demand.s_time = sd.getFullYear() + '-' + (sd.getMonth() + 1) + '-' + sd.getDate() ;
                self.demand.e_time = ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate() ;

                //验证是否登陆
                self.demand.uid = this.personalData.uid
                self.demand['access-token'] = this.personalData.access_token
                self.demand.client= this.personalData.client

                if(isValid){
                    self.$parent.loading = true;
                    $.post({
                        url: window.YUNAPI.submitHoldEvent,
                        data : self.demand,
                        success: function (data) {

                            self.$parent.loading = false;
                            if (data.status == 1){
                                self.$message({
                                    message: data.message,
                                    type: 'success'
                                });
//                                for( var key in self.demand){ // 提交成功清空数据
//                                    self.demand[key] = ''
//                                }
                                router.push('/personal/order')

                            }else{
                                self.$message({
                                    message: data.message,
                                    type: 'error'
                                });
                            }

                        },
                        error : function () {

                        }
                    });
                }
            },
            sendPhoneCode : function () {
                var self = this;
                var success = function (data) {
                    if (data.status == 1){
                        self.demand.code_token = data.data;
                    }
                };
                GlobleFun.sendPhoneCode(self.demand.phone,success,'#sendCode');
            },
        }

    }
</script>
