<template>
    <div>
        <el-dialog v-model="cdVisible" @close="close" @open="open">
            <div class="formcooper-wp">
                <div class="evformbox">
                    <!--<a href="javascript:;" class="icons icon-close btnclose"></a>-->
                    <h2>合作咨询</h2>
                    <div class="title">合作项目：冰川时代主题快闪店</div>
                    <div class="mainbox" >
                        <form class="validate-form" action="" id="submit-consult">
                            <ul class="inputbox">
                                <li class="inputwrap clearfix">
                                    <div class="text"><span class="red">*</span>选择城市：</div>
                                    <!--<input class="fminput" type="text" placeholder="请输入项目计划落地城市" />-->
                                    <div class="result fminput">
                                        <el-select v-model="consult.city_id" placeholder='请选择城市'>
                                            <el-option
                                                    v-for="item in cities"
                                                    :label="item.name"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </li>
                                <li class="inputwrap clearfix">
                                    <div class="text"><span class="red">*</span>您的称呼：</div>
                                    <input class="fminput" v-model="consult.the_contact" name="username" data-rule-required="true" data-msg-required="请输入您的称呼!" placeholder="请输入您的称呼!">
                                </li>
                                <li class="inputwrap clearfix">
                                    <div class="text"><span class="red">*</span>您的联系方式：</div>
                                    <input class="fminput" v-model="consult.phone" name="phone" type="text" data-msg-required="请输入您的联系方式!" placeholder="请输入11位手机号" />
                                </li>
                                <li class="inputwrap clearfix">
                                    <div class="text"><span class="red">*</span>短信验证码：</div>
                                    <input class="fminput" v-model="consult.auth_code" data-rule-required="true" data-msg-required="请输入验证码!" type="text" placeholder="请输入6位数验证码" />
                                    <button type="button" class="sendcode" @click="sendPhoneCode">发送验证码</button>
                                </li>
                                <li class="inputwrap trea clearfix">
                                    <div class="text"><span class="red">*</span>您想咨询的内容：</div>
                                    <textarea v-model="consult.consulting_content" name="consult-content" data-rule-required="true" data-msg-required="请输入咨询内容!"  rows="7" placeholder="您想咨询的内容，300字以内"></textarea>
                                </li>
                            </ul>
                            <button class="evform-btn" type="button" @click="submitConsult">提交</button>
                        </form>
                    </div><!--表单mainbox-end-->

                </div>
            </div>
        </el-dialog>
    </div>
</template>


<script>

    require ('assets/css/ip.css')

    export default {
        data(){
            return {
                consult : {
                    the_contact : '',
                    phone : '',
                    consulting_content : '',
                    project_id : '',
                    city_id : 1,
                    code_token : '',
                    auth_code : ''
                },
                cdVisible : false
            }
        },
        computed: {
            cities (){
                return this.$store.state.cities
            }
        },
        mounted () {

        },
        methods: {
            submitConsult : function () {
                var self = this;
                var isValid = $("#submit-consult").valid();
                if(!isValid) return
                console.log(self.consult);
                $.post({
                    url: window.YUNAPI.submitConsult,
                    data : self.consult,
                    success: function (data) {
                        var status = data.status == 1 ? 'success' : 'error';
                        APP.$message({
                            message: data.message,
                            type: status
                        });
                        if(data.status == 1){
                            self.cdVisible = false
                        }
                    },
                    error : function () {

                    }
                });
            },
            sendPhoneCode : function () {
                var self = this;
                var success = function (data) {
                    self.consult.code_token = data.data;
                };
                GlobleFun.sendPhoneCode(this.consult.phone,success,'.sendcode')
            },
            open : function () {

                setTimeout(function () {
                    $("#submit-consult").validate({
                        debug: true,
                        errorElement: "div",
//                    errorClass : 'warning',
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
                },300)

            },
            close : function () {
//                store.state.cdVisible = false
            }
        }
    }
</script>