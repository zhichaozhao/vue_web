<template>

    <div class="w1200 ip-page">
        <div class="top-banner">
            <img src="/static/images/ip/banner.jpg" alt="">
        </div>
        <div class="module-header">
            <span>品牌推荐</span>
        </div>
        <div class="yun-swiper-wrap2 brand-swiper">
            <div class="swiper-container relative-topic-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide topic-pic">
                        <img src="http://www.atool.org/placeholder.png?size=390x260&text=图片&&bg=836&fg=fff" alt="">
                    </div>
                    <div class="swiper-slide topic-pic">
                        <img src="http://www.atool.org/placeholder.png?size=390x260&text=图片&&bg=836&fg=fff" alt="">
                    </div>
                    <div class="swiper-slide topic-pic">
                        <img src="http://www.atool.org/placeholder.png?size=390x260&text=图片&&bg=836&fg=fff" alt="">
                    </div>
                    <div class="swiper-slide topic-pic">
                        <img src="http://www.atool.org/placeholder.png?size=390x260&text=图片&&bg=836&fg=fff" alt="">
                    </div>
                </div>
                <!-- Add Pagination -->
                <!--<div class="swiper-pagination"></div>-->
                <!-- Add Arrows -->
                <div class="yun-swiper-prev">
                    <span class="icon-arrowleft black"></span>
                </div>
                <div class="yun-swiper-next ">
                    <span class="icon-arrowright black"></span>
                </div>
            </div>
        </div>
        <div class="module-header">
            <span>IP类别</span>
        </div>
        <div class="ip-category clearfix">
            <a href="">全部</a>
            <a href="" v-for="(key,value,index) in ipType" v-if="index < 7">{{value}}</a>
            <a href="">更多</a>
            <!--<a href="">动漫</a>-->
            <!--<a href="">卡通</a>-->
            <!--<a href="">影视</a>-->
            <!--<a href="">游戏</a>-->
            <!--<a href="">市集</a>-->
            <!--<a href="">市集</a>-->
            <!--<a href="">市集</a>-->
            <!--<a href="">市集</a>-->
        </div>
        <div class="module-header">
            <span>精选推荐</span>
            <a href="" class="more">
                查看更多
                <i class="icon icon-arrowright"></i>
            </a>
        </div>
        <div class="concentration clearfix">
            <ul>
                <li v-for="item in ipProject">
                    <a href=""><img src="http://placehold.it/590x400" alt=""></a>
                    <div class="rec-dtl">
                        <!--<button class="op-coop" @click.native="dialogVisible = true">合作咨询</button>-->
                        <el-button class="op-coop" type="text" @click  @click.native="consultClick(item.id)">合作咨询</el-button>
                        <!--<el-button type="text" >点击打开 Dialog</el-button>-->
                        <p class="title">冰川时代主题快闪店</p>
                        <p class="tag">ICE AGE 大电影</p>
                        <div class="dl-wrap clearfix">
                            <dl><dt>类别 : </dt><dd>影视</dd></dl>
                            <dl><dt>来源 :</dt><dd>国际</dd></dl>
                            <dl><dt>场地面积 :</dt><dd>100-500m</dd></dl>
                        </div>
                        <div class="">
                            <dl><dt>适用人群 :</dt><dd>冰川时代影迷</dd></dl>
                            <dl><dt>场地面积 :</dt><dd>面议</dd></dl>
                        </div>
                        <p class="des">是继Playze与Tony合作有机农庄之后的第二个项目。
                            多利有机屋旨在向上海市民展示他们的农庄产品及推广有机生活方式，为城市生活居民引入自然生活理念。
                            像素化的方木箱出现在建筑的每一层， 成为空间关联的主线。
                            采用立体化的可移动模块将中央楼梯打造成一个灵活的居善地，这里可以适应演讲，展览，接待，非正式回应等多种活动。</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="module-header">
            <span>精选案例</span>
            <a href="" class="more">
                查看更多
                <i class="icon icon-arrowright"></i>
            </a>
        </div>
        <div class="case-list">
            <ul class="clearfix">
                <li v-for="item in ipCase">
                    <a href="">
                        <img :src="item.first_picture.url" alt="">
                        <p class="case-des">{{item.title}}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="module-header">
            <span>平台优势</span>
        </div>
        <div class="platform-super">
            <ul class="clearfix">
                <li>
                    <span class="super-icon"><img src="/static/images/ip/pt1.png" alt=""></span>
                    <p>全面整合文创资源</p>
                    <p>（已有合作版权近50家）</p>
                </li>
                <li>
                    <span class="super-icon"><img src="/static/images/ip/pt2.png" alt=""></span>
                    <p>全面整合文创资源</p>
                    <p>（已有合作版权近50家）</p>
                </li>
                <li>
                    <span class="super-icon"><img src="/static/images/ip/pt3.png" alt=""></span>
                    <p>全面整合文创资源</p>
                    <p>（已有合作版权近50家）</p>
                </li>
                <li>
                    <span class="super-icon"><img src="/static/images/ip/pt4.png" alt=""></span>
                    <p>全面整合文创资源</p>
                    <p>（已有合作版权近50家）</p>
                </li>
                <li>
                    <span class="super-icon"><img src="/static/images/ip/pt5.png" alt=""></span>
                    <p>全面整合文创资源</p>
                    <p>（已有合作版权近50家）</p>
                </li>
            </ul>
        </div>
        <div class="module-header">
            <span>团队优势</span>
        </div>
        <div class="team-super">
            <ul class="clearfix">
                <li>
                    <span class="super-icon"><img src="/static/images/ip/td1.png" alt=""></span>
                    <p>全面整合文创资源</p>
                </li>
                <li>
                    <span class="super-icon"><img src="/static/images/ip/td2.png" alt=""></span>
                    <p>全面整合文创资源</p>
                </li>
                <li>
                    <span class="super-icon"><img src="/static/images/ip/td3.png" alt=""></span>
                    <p>全面整合文创资源</p>
                </li>
            </ul>
        </div>
        <consult-form ref="consult"></consult-form>
    </div>

</template>

<script>

    import Lib from 'assets/Lib.js';
    import 'assets/css/hold-event.css';
    require ('assets/css/component.css')
    require ('assets/css/ip.css')
    import 'assets/libs/swiper/swiper.js'
    import 'assets/Libs/jquery.validate.js';
    import consultForm from './consultForm.vue';

    export default {
        data(){
            return {

                ipCase : [],
                ipRecommend : [],
                ipProject : [],
                ipType : [],
                ipTypeValues : [],
                cdVisible : true,
                username : '',
                comment :'',
                consult : {
                    username : '',
                    phone : '',
                    content : '',
                    project_id : '',
                    consultCity : '上海'
                }
            }

        },
        mounted () {
            var self = this;
            self.$parent.loading = true;
            $.ajax({

                url: window.YUNAPI.findIp,
                success: function (data) {
                    self.ipCase = data.ip_case
                    self.ipProject = data.ip_project
                    self.ipRecommend = data.ip_recommend
                    self.ipType = data.ip_type

//                    for (var i in data.ip_type){
//                        var k = {
//                            ke : i,
//                            v : data.ip_type[i]
//                        }
//
//                        self.ipType.push(k)
//                    }
                    setTimeout(function () {
                        self.init();
                    },300)
                },
                error : function () {

                }
            });

            $(function() {

                $("#login").validate();

                $.validator.methods.equal = function(value, element, param) {
                    return value == param;
                };
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
            })
        },
        components: {
            consultForm
        },

        methods: {
            init : function () {
//                this.$parent.loading = false;
                var swiper2 = new Swiper('.relative-topic-swiper', {
                    pagination: '.swiper-pagination',
                    nextButton: '.yun-swiper-next',
                    prevButton: '.yun-swiper-prev',
                    slidesPerView: 3,
                    centeredSlides: false,
                    spaceBetween: 10,
                    paginationHide:true
                });
            },
//            submitConsult : function () {
//                var self = this;
//                //console.log(self.consult);
//                $.post({
//                    url: window.YUNAPI.submitConsult,
//                    data : self.consult,
//                    success: function (data) {
//                        console.log(data);
//                        self.$message({
//                            message: '恭喜你，这是一条成功消息',
//                            type: 'success'
//                        });
//                    },
//                    error : function () {
//
//                    }
//                });
//            },
            consultClick : function (id) {
                this.$refs.consult.consult.project_id = id;
                this.$refs.consult.cdVisible = true;
            }
        }
    }
</script>





