<template>
    <div class="home">
        <!--home-banner板块-开始-->
        <div class="home-banner-search">
            <!--home-banner部分-->
            <div class="home-banner-wrap">
                <div class="home-banner">
                    <img src="/static/images/home/banner1.png">
                </div>
            </div>

            <!--搜索-->
            <div class="home-search clearfix">
                <!--城市选择-->
                <div class="fl select city">
                    <div class="result">
                        <!--<input type="text" value="" placeholder="在哪个城市">-->
                        <!--<i class="icon-updown"></i>-->
                        <el-select v-model="value">
                            <el-option
                                    v-for="item in this.$parent.$data.cities"
                                    :label="item.name"
                                    :value="item.name">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <!--城市选择-结束-->

                <!--做什么-->
                <div class="fl select ml20 dowhat"  id="whatToSearch">
                    <div class="result" v-on:click="whatToSearchInputClick">
                        <input type="text" disabled value="" placeholder="做什么">
                        <i class="el-input__icon el-icon-caret-bottom"></i>
                    </div>
                    <div class="cont dowhat-contlist" v-show="this.$parent.$data.isShowHomeSearchCondition" id="whatToSearchContent">
                        <dl class="clearfix">
                            <dt class="fl">办活动</dt>
                            <dd class="fl">
                                <a href="javascript:;" v-for="(key,value) in this.$parent.$data.searchCondition.space_type">{{key}}</a>
                                <!--<a href="javascript:;">商业发布</a>-->
                            </dd>
                        </dl>
                        <dl class="clearfix">
                            <dt class="fl">要开店</dt>
                            <dd class="fl">
                                <a href="javascript:;" v-for="(key,value) in this.$parent.$data.searchCondition.retail">{{key}}</a>
                                <!--<a href="javascript:;">店中店</a>-->
                            </dd>
                        </dl>
                        <dl class="clearfix">
                            <dt class="fl">IP项目</dt>
                            <dd class="fl">
                                <a href="javascript:;" v-for="(key,value) in this.$parent.$data.searchCondition.project_type">{{value}}</a>
                                <!--<a href="javascript:;">卡通</a>-->
                            </dd>
                        </dl>
                    </div>
                </div>
                <!--做什么-结束-->

                <!--搜索-->
                <input class="fl ml20 searchinput" type="text" placeholder="商圈／地标／机场／火车站／场地名">
                <button class="fl ml20 searchbtn">搜 索</button>

            </div>
        </div>
        <!--home-banner板块-结束-->

        <!--快捷链接块-开始-->
        <ul class="quicklinks clearfix">
            <li>
                <router-link to="/event/hold" class="imgtext">
                    <img src="/static/images/home/links1.png">
                    <p class="text">本月新增场地345加</p>
                    <div class="mask"></div>
                </router-link>
                <!--<a class="imgtext" href="/event/hold">-->
                    <!--<img src="/static/images/home/links1.png">-->
                    <!--<p class="text">本月新增场地345加</p>-->
                    <!--<div class="mask"></div>-->
                <!--</a>-->
                <p class="imgtitle">我要办活动</p>
            </li>
            <li>

                <a class="imgtext" href="javascript:;">
                    <img src="/static/images/home/links1.png">
                    <p class="text">本月新增场地345加</p>
                    <div class="mask"></div>
                </a>
                <p class="imgtitle">我要办活动</p>
            </li>
            <li>
                <a class="imgtext" href="javascript:;">
                    <img src="/static/images/home/links1.png">
                    <p class="text">本月新增场地345加</p>
                    <div class="mask"></div>
                </a>
                <p class="imgtitle">我要办活动</p>
            </li>
        </ul>

        <!--城市精选专题-开始-->
        <div class="section citysubject clearfix">
            <div class="w1200">
                <h3>城市精选专题</h3>
                <div class="cont">
                    <div class="btns">
                        <a class="btn btnleft" href="javascript:;">
                            <span class="icon-arrowleft"></span>
                        </a>
                        <a class="btn btnright" href="javascript:;">
                            <span class="icon-arrowright"></span>
                        </a>
                    </div>
                    <div class="citySelection" style="height: 100%;">
                        <div class="swiper-wrapper swiper-container">
                            <div class="swiper-slide" v-for="item in topicOfCity">
                                <a href="">
                                    <img v-bind:src="item.first_picture.url" alt="">
                                    <p>{{item.title}}</p>
                                </a>
                            </div>
                            <!--<div class="swiper-slide">Slide 2</div>-->
                            <!--<div class="swiper-slide">Slide 3</div>-->
                            <!--<div class="swiper-slide">Slide 4</div>-->

                        </div>
                        <!-- Add Pagination -->
                        <!--<div class="swiper-pagination"></div>-->
                    </div>
                    <ul class="subject-list"></ul>
                </div>
                <a href="javascript:;" class="btnlookmore">查看更多专题</a>
            </div>

        </div>
        <!--城市精选专题-结束-->

        <!--分类精选-开始-->
        <div class="section classifyselected clearfix">
            <h3>分类精选</h3>
            <ul class="cont clearfix">
                <li v-for="item in typeSelected">
                    <a class="imgnumb" href="javascript:;">
                        <img src="/static/images/home/links1.png">
                        <div class="mask"></div>
                    </a>
                    <p class="numb">255</p>
                    <p class="imgtitle">高端会所</p>
                </li>
                <!--<li>-->
                    <!--<a class="imgnumb" href="javascript:;">-->
                        <!--<img src="/static/images/home/links1.png">-->
                        <!--<div class="mask"></div>-->
                    <!--</a>-->
                    <!--<p class="numb">255</p>-->
                    <!--<p class="imgtitle">场馆</p>-->
                <!--</li>-->
            </ul>
        </div>
        <!--分类精选-结束-->

        <!--空间推荐-开始-->
        <div class="section spacerecommend clearfix">
            <h3>空间推荐</h3>
            <ul class="recommend recommend-main clearfix">
                <li v-for="(item,index) in spaceRecommend" v-if="index < 3">
                    <div class="img">
                        <a href="javascript:;">
                            <img v-bind:src="item.img_paths.url">
                        </a>
                        <span class="tags">上海</span>
                    </div>
                    <div class="text">
                        <a class="title" href="javascript:;">{{item.name}}</a>
                        <div class="price">￥{{item.market_price}}/元 天</div>
                        <div class="textinfo">
                            <p><span>场地类型：</span>{{item.space_type}}</p>
                            <p><span>落地区域：</span>{{item.through_three_areas}}</p>
                            <div class="numb clearfix">
                                <p><span>面积：</span>{{item.area}}</p>
                                <p><span>层高：</span>{{item.height}}</p>
                                <p><span>人数：</span>{{item.Max_seating_capacity}}</p>
                            </div>
                            <p><span>地址：</span>{{item.areas}} | {{item.address}}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="recommend recommend-sub clearfix">
                <li v-for="(item,index) in spaceRecommend" v-if=" index >=3">
                    <div class="img">
                        <a href="javascript:;">
                            <img v-bind:src="item.img_paths.url">
                        </a>
                    </div>
                    <div class="text">
                        <a class="title" href="javascript:;">{{item.name}}</a>
                        <div class="price">￥{{item.market_price}}/元 天</div>
                        <div class="city">杭州</div>
                        <div class="textinfo">
                            <p><span>场地类型：</span>{{item.space_type}}</p>
                            <p><span>落地区域：</span>{{item.through_three_areas}}</p>
                            <p><span>地址：</span>{{item.areas}}|{{item.address}}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="recommend-other"></ul>
            <a class="btnlookmore" href="javascript:;">查看更多空间</a>
        </div>
        <!--空间推荐-结束-->

        <!--ip文创项目-开始-->
        <div class="section ipwinchuang clearfix">
            <h3>IP文创项目</h3>
            <ul class="cont clearfix">
                <li class="clearfix" v-for="item in ipProject">
                    <a class="maskbtn" href="javascript:;">
                        <p>合作咨询</p>
                    </a>
                    <div class="img">
                        <img v-bind:src="item.img_paths.url">
                    </div>
                    <div class="textinfo">
                        <div class="title">{{item.title}}</div>
                        <p class="tags">
                            <span v-for="i in item.keywords">{{i}}</span>
                        </p>
                        <div class="group clearfix">
                            <p>类别：{{item.p_type}}</p>
                            <p>来源：{{item.source}}</p>
                        </div>
                        <p>场地面积：{{item.area}}</p>
                        <!--MARK无对应字段-->
                        <p>适用人群：冰川时代影迷</p>
                        <p>预算范围：{{item.budget_amount}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!--ip文创项目-结束-->

        <!--场地配套服务-开始-->
        <!--<div class="section ipwinchuang clearfix">-->
            <!--<h3>场地配套服务</h3>-->
            <!--<div class="cont">-->
                <!--<div class="btns">-->
                    <!--<a class="btn btnleft" href="javascript:;">-->
                        <!--<span class="icon-arrowleft"></span>-->
                    <!--</a>-->
                    <!--<a class="btn btnright" href="javascript:;">-->
                        <!--<span class="icon-arrowright"></span>-->
                    <!--</a>-->
                <!--</div>-->

                <!--<ul class="iplist"></ul>-->
            <!--</div>-->

        <!--</div>-->
        <!--场地配套服务-结束-->

        <!--新发现-开始-->
        <div class="section newfound clearfix">
            <h3>新发现</h3>
            <div class="cont clearfix">
                <!--大图那个-->
                <div class="fl info info-big">
                    <a class="img" href="javascript:;">
                        <img v-bind:src="newFindFirst.first_picture.url">
                    </a>
                    <a class="text display-center" href="javascript:;">
                        {{newFindFirst.title}}
                    </a>
                </div>
                <!--中间4个-->
                <ul class="infolist fl clearfix">
                    <li class="info info-normal" v-for="item in newFindTopFour">
                        <a class="img" href="javascript:;">
                            <img v-bind:src="item.first_picture.url">
                        </a>
                        <a class="text display-center" href="javascript:;">
                            {{item.title}}
                        </a>
                    </li>
                </ul>
                <!--右边列表-->
                <ul class="fr textinfolist clearfix">

                    <li v-for="item in newFindRandom">
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>{{item.title}}</p>
                            </div>
                            <p>{{item.abstract}}</p>
                        </a>
                    </li>

                </ul>
            </div>
            <a class="btnlookmore" href="javascript:;">发现更多精彩</a>
        </div>
        <!--新发现-结束-->

        <!--精选案例-开始-->
        <div class="section caseselected clearfix">
            <h3>精选案例</h3>
            <ul class="cont clearfix">
                <li v-for="item in caseSelected">
                    <a href="javascript:;" class="img">
                        <img v-bind:src="item.first_picture.url">
                    </a>
                    <div class="textinfo">
                        <a class="title" href="javascript:;">{{item.title}}</a>
                        <div class="tags">
                            <span v-for="i in item.keywords">{{i}}</span>
                        </div>
                        <ul class="numbs clearfix">
                            <li class="fl"><i class="icons icon-skimbg"></i>{{item.viewed}}</li>
                            <li class="fr"><i class="icons icon-zanbg"></i>{{item.up_number}}</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <a class="btnlookmore" href="javascript:;">发现更多精彩</a>
        </div>
        <!--精选案例-开始-->

        <!--媒体报道-开始-->
        <div class="section mediacoverage clearfix">
            <h3>媒体报道</h3>
            <div class="cont clearfix">
                <div class="fl imglogo-media">
                    <img src="/static/images/home/imglogo-media.png">
                </div>
                <ul class="fr textinfolist clearfix">
                    <li v-for="item in mediaReport">
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>{{item.abstract}}</p>
                            </div>
                            <div class="time">{{item.i_time}}</div>
                        </a>
                    </li>
                    <!--<li>-->
                        <!--<a href="javascript:;">-->
                            <!--<div class="title">-->
                                <!--<i class="point"></i>-->
                                <!--<p>[网易] 商业地产短租入侵零售领域 云SPACE掀起商业场景革命</p>-->
                            <!--</div>-->
                            <!--<div class="time">2016-08-15</div>-->
                        <!--</a>-->
                    <!--</li>-->

                </ul>
            </div>
        </div>
        <!--媒体报道-开始-->

        <!--媒体报道-开始-->
        <div class="section logofriends clearfix">
            <h3>合作品牌</h3>
            <div class="cont">
                <img src="/static/images/home/imglogo-friends.png">
            </div>
        </div>

    </div>
    </div>


</template>

<script>

    import Lib from 'assets/Lib.js';
    import 'assets/libs/swiper/swiper.js'

    require ('assets/css/component.css');
//    require ('assets/css/home.css');
    export default {
        data(){
            return {
                spacemains: [
                    1, 2, 3
                ],
                spacesubs: [
                    1, 2, 3, 4
                ],
                ipinfos: [
                    1, 2, 3, 4
                ],
                cases: [
                    1, 2, 3, 4, 5, 6
                ],
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                showdowhat: 0,

                ipProject : [],
                topicOfCity : [], // 城市精选专题
                newFindTopFour : [], // 新发现左边
                newFindRandom : [], // 新发现右边
                newFindFirst : {},
                typeSelected : [], //分类精选
                spaceRecommend : [], //空间推荐
                caseSelected : [], //精选案例
                mediaReport : [] //媒体
            }
        },

        components: {},
        mounted () {
            var self = this;

            self.$parent.loading = true; //显示loading 状态

            $.ajax({
                url: window.YUNAPI.home, context: document.body, success: function (data) {
                    console.log(data);

                    self.$parent.loading = false;

                    self.topicOfCity = data.home_city_special;
                    self.newFindTop = data.home_new_find_top;
                    self.newFindRandom = data.home_new_find_random;
                    self.spaceRecommend = data.home_recommend_space;

//                    self.caseSelected = data.home_case_selected;

                    // 关键词 需要按,分割
                    for (var i = 0; i <  data.home_case_selected.length - 1; i++){
                        data.home_case_selected[i].keywords = data.home_case_selected[i].keyword.split(',')
                    }
                    self.caseSelected = data.home_case_selected;

                    //ip项目 关键词
                    for(var i = 0; i <  data.home_project.length - 1; i++){
                        data.home_project[i].keywords = data.home_project[i].keyword.split(',')
                    }
                    self.ipProject = data.home_project;

                    self.typeSelected = data.home_type_selected_by_retail.concat(data.home_type_selected_by_space);


                    self.newFindTopFour = data.home_new_find_top; // 新发现4个
                    self.newFindFirst = self.newFindTopFour.shift(); //新发现第一个

                    self.mediaReport = data.home_media;

//                    console.log(self.spaceRecommend);
//                    console.log(self.newFindRandom);

                    setTimeout(function () {
                        self.init();
                    },300)
                }
            });


        },
        methods: {
            whatToSearchInputClick : function () {
                this.$parent.$data.isShowHomeSearchCondition = !this.$parent.$data.isShowHomeSearchCondition
            },
            init : function () {

                var citySelectionSwiper = new Swiper('.citySelection', {
//                    pagination: '.swiper-pagination',
                    nextButton: '.citysubject .btnright',
                    prevButton: '.citysubject .btnleft',
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 1,
//                    freeMode: true
                });
            }

        }
    }
</script>
<style scoped>
    .citySelection .swiper-slide{
        background-color: #fff;
        /*height: 350px;*/
        margin-right: 1px;
        position: relative;
    }
    .swiper-container{
        overflow: visible;
    }
    .citySelection .swiper-slide a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .citySelection .swiper-slide img{
        display: block;
        width: 100%;
        height: 100%;
        background: #aaa;
    }
    .citySelection .swiper-slide p{
        position: absolute;
        bottom: 0;
        font-size:18px;
        color:#ffffff;
        padding: 0 15px 20px 15px;
        height: 70px;
        box-sizing: border-box;
    }
    /*.citySelection{*/
        /*width: 1200px;*/
    /*}*/

    .btnlookmore {
        display: block;
        width: 398px;
        height: 48px;
        line-height: 48px;
        border: 1px solid #000;
        text-align: center;
        margin: 30px auto 0;
        font-size: 18px;
        color: #000;
        background: #fff;
    }

    .btnlookmore:hover {
        background: #000;
        color: #fff;
    }

    .section {
        width: 1200px;
        margin: 0 auto 50px;
    }

    .section > h3 {
        font-size: 24px;
        margin-bottom: 30px;
    }
    .home-banner-search{
        position: relative;
        min-width: 1200px;
    }
    .home-banner-wrap{
        width: 100%;
        min-width: 1200px;
        height: 400px;
        margin: 0 auto;
        background: #ddd;
        overflow: hidden;
        position: relative;
    }

    .home-banner {
        width: 1920px;
        height: 400px;
        background: #ddd;
        position: absolute;
        left: 50%;
        margin-left: -960px;
        top: 0;
        overflow: hidden;
        z-index: 1;
    }
    .home-banner>img{width: 100%;height: 100%;}

    .home-search {
        width: 1000px;
        padding: 0 100px;
        position: absolute;
        bottom: 100px;
        left: 50%;
        margin-left: -600px;
        z-index: 2;
    }

    .home-search .select {
        position: relative;
    }

    .home-search .select:hover .result .icon-updown {
        transform: rotate(-180deg);
        -ms-transform: rotate(-180deg); /* IE 9 */
        -moz-transform: rotate(-180deg); /* Firefox */
        -webkit-transform: rotate(-180deg); /* Safari 和 Chrome */
        -o-transform: rotate(-180deg); /* Opera */
    }

    .home-search .select .cont {
        position: absolute;
        left: 0;
        top: 52px
    }

    .home-search .result {
        width: 150px;
        height: 50px;
        background: #fff;
        position: relative;
    }

    .home-search .result input {
        width: 100%;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
    }

    .home-search .result .icon-updown {
        display: block;
        width: 0px;
        height: 0px;
        border: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 7px solid #000;
        position: absolute;
        right: 22px;
        top: 21px;
        transition: all linear .2s;
    }
    body .home-search .el-input__inner{
        padding: 3px 20px;
    }
    body .home-search .el-input__icon{right: 19px;top:25px;}
    body .el-select-dropdown__item{
        padding: 8px 20px;
    }
    body .el-select-dropdown{
        margin: 2px 0;
    }
    body .el-select-dropdown__item.selected.hover,
    body .el-select-dropdown__item.selected{
        background: #e92332;
    }

    .citylist {
        width: 150px;
    }

    .citylist li {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }

    .citylist li > a {
        width: 100%;
        height: 100%;
        background: #fff;
        text-indent: 20px;
    }

    .citylist li a:hover {
        background: #e92332;
        color: #fff;
    }
    .dowhat .result{
        padding: 0 20px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .dowhat-contlist {
        width: 800px;
        background: #fff;
    }

    .dowhat-contlist dl {
        border-bottom: 2px solid #ccc;
        padding: 15px 20px;
    }

    .dowhat-contlist dl:last-child {
        border: 0;
    }

    .dowhat-contlist dt {
        width: 9%;
        height: 30px;
        line-height: 30px;
        margin: 5px 0;
    }

    .dowhat-contlist dd {
        width: 91%;
    }

    .dowhat-contlist dd > a {
        height: 30px;
        line-height: 30px;
        padding: 0 12px;
        margin: 5px;
    }

    .dowhat-contlist dd > a:hover {
        background: #e92332;
        color: #fff;
    }

    .searchinput {
        width: 440px;
        height: 50px;
        padding: 0 20px;
    }

    .searchbtn {
        width: 160px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        background: #272335;
        cursor: pointer;
    }

    .searchbtn:hover {
        background: #2e2550;
    }

    /*快捷链接*/
    .quicklinks {
        width: 1000px;
        padding: 0 100px;
        margin: 40px auto;
    }

    .quicklinks li {
        float: left;
        width: 300px;
        height: 235px;
        margin-right: 50px;
    }

    .quicklinks li:last-child {
        margin-right: 0;
    }

    .quicklinks li a {
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
    }

    .quicklinks li .text {
        width: 100%;
        height: 24px;
        line-height: 24px;
        font-size: 24px;
        color: #fff;
        text-align: center;
        position: absolute;
        top: 50%;
        margin-top: -12px;
        z-index: 2;
    }

    li .mask {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;

    }
    .classifyselected li .mask{
        border-radius: 50%;
    }

    li .imgtitle {
        width: 100%;
        height: 24px;
        line-height: 24px;
        text-align: center;
        margin-top: 10px;
        font-size: 24px;
    }

    /*城市精选专题*/

    /*分类精选*/
    .classifyselected li {
        float: left;
        width: 150px;
        height: 185px;
        margin-right: 55px;
        position: relative;
    }

    .classifyselected li:last-child {
        margin-right: 0;
    }

    .classifyselected li a {
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 75px;
        position: relative;
    }

    .classifyselected li .numb {
        width: 60px;
        height: 60px;
        background: #000;
        line-height: 60px;
        border-radius: 30px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        position: absolute;
        top: 45px;
        right: -30px;
        z-index: 2;
    }

    .classifyselected li .numb {
        transition: All 1s;
        -webkit-transition: All 1s;
        -moz-transition: All 1s;
        -o-transition: All 1s;
    }

    /**小圆转一圈效果**/
    /*.classifyselected li:hover .numb {*/
    /*transform-origin: -82px 85px;*/
    /*-webkit-transform-origin: -82px 85px;*/

    /*transform: rotate(360deg);*/
    /*-webkit-transform: rotate(360deg);*/
    /*-moz-transform: rotate(360deg);*/
    /*-o-transform: rotate(360deg);*/
    /*-ms-transform: rotate(360deg);*/
    /*}*/

    .citysubject.section {
        width: 100%;
        min-width: 1200px;
        overflow: hidden
    }

    .citysubject h3 {
        width: 1200px;
        margin: 0 auto;
        font-size: 24px;
        margin-bottom: 30px;
    }

    .citysubject .cont {
        width: 100%;
        height: 235px;
        min-width: 1200px;
        overflow: hidden;
        position: relative;
    }

    /*空间推荐*/
    .recommend-main {
        margin-bottom: 20px;
    }

    .recommend-main li .tags {
        top: 10px;
    }

    .recommend-main .price {
        margin-bottom: 15px;
    }

    /*IP文创项目*/
    .ipwinchuang li {
        float: left;
        background: #fff;
        width: 595px;
        height: 200px;
        margin-right: 10px;
        margin-bottom: 10px;
        overflow: hidden;
        position: relative;
    }

    .ipwinchuang li:nth-child(2n+2) {
        margin-right: 0;
    }

    .ipwinchuang .maskbtn {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, .8);
        position: absolute;
        left: 0;
        bottom: 0;
        opacity: 0;
        filter: alpha(opacity=0);
    }

    .ipwinchuang .maskbtn p {
        background: #272335;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -60px;
        margin-top: -20px;

    }

    .ipwinchuang li:hover .maskbtn {
        opacity: 1;
        filter: alpha(opacity=100);
    }

    .ipwinchuang li .img {
        float: left;
        width: 300px;
        height: 200px;
        background: #ddd;
        overflow: hidden;
    }

    .ipwinchuang .textinfo {
        float: left;
        padding: 0 10px;
    }

    .ipwinchuang .textinfo .title {
        font-size: 18px;
        padding: 18px 0 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ipwinchuang .textinfo .tags {
        margin-bottom: 15px;
    }

    .ipwinchuang .textinfo .tags span {
        margin-right: 20px;
    }

    .ipwinchuang .textinfo p {
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ipwinchuang .textinfo .group p {
        float: left;
        margin-right: 20px;
    }

    /*场地配套服务*/
    .ipwinchuang .cont {
        position: relative;
    }

    /*新发现*/
    .newfound .info {
        background: #fff;
    }

    .newfound .info .img {
        background: #ddd;
        overflow: hidden;
    }

    .newfound .info-big {
        float: left;
        width: 377px;
        height: 419px;
    }

    .newfound .info-big .img {
        width: 378px;
        height: 350px;
    }

    .newfound .info-big .text {
        font-size: 18px;
        padding: 7px 15px;
        display: block;
        height: 50px;
    }

    .newfound .infolist {
        width: 420px;
    }

    .newfound .info-normal {
        float: left;
        width: 200px;
        height: 205px;
        margin: 0 0 10px 10px;
    }

    .newfound .info-normal .img {
        float: left;
        width: 100%;
        height: 133px;
    }

    .newfound .info-normal .text {
        float: left;
        padding: 7px 10px;
        height: 57px;
        overflow: hidden;
    }

    .textinfolist {
        width: 378px;
    }

    .textinfolist li {
        max-height: 88px;
        overflow: hidden;
        border-bottom: 2px solid #979797;
        padding: 8px 0;
    }

    .textinfolist .title {
        font-size: 18px;
        color: #000;
        position: relative;
        margin-bottom: 5px;
    }

    .newfound .textinfolist .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .textinfolist .title .point {
        display: block;
        width: 5px;
        height: 5px;
        background: #000;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 10px;
    }

    .textinfolist li p {
        padding-left: 15px;
        line-height: 1.4;
    }

    /*精选案例*/
    .caseselected .cont > li {
        float: left;
        width: 392px;
        height: 420px;
        background: #fff;
        margin-right: 10px;
        margin-bottom: 10px;
        position: relative;
    }

    .caseselected li:nth-child(3n) {
        margin-right: 0;
    }

    .caseselected .img {
        width: 100%;
        height: 264px;
        background: #ddd;
        overflow: hidden;
    }

    .caseselected .title {
        color: #000;
        font-size: 18px;
        padding-bottom: 5px;
        height: 55px;
        overflow: hidden;
        box-sizing: border-box;
    }

    .caseselected .textinfo {
        padding: 8px 10px 12px;
    }

    .caseselected .tags span {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        padding: 0 25px;
        background: #fff;
        border: 1px solid #000;
        color: #666;
        margin-right: 5px;
        margin-top: 5px;
    }

    .caseselected .numbs {
        position: absolute;
        right: 15px;
        bottom: 15px;
        color: #666;
    }

    .caseselected .numbs li {
        position: relative;
        height: 25px;
        line-height: 25px;
        padding-left: 32px;
        margin-left: 30px;
    }

    .caseselected .numbs i {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
    }

    i.scan {
        background: url("/static/images/home/icon-scan.png") no-repeat center;
    }

    i.zan {
        background: url("/static/images/home/icon-zan.png") no-repeat center;
    }

    /*媒体报道*/
    .mediacoverage .textinfolist li {
        height: 70px;
        padding-top: 7px;
        overflow: hidden;
    }

    .mediacoverage .textinfolist li > a {
        width: 100%;
    }

    .mediacoverage .textinfolist .title {
        height: 48px;
        overflow: hidden;
    }

    .mediacoverage .textinfolist .time {
        text-align: right;
    }

    .imglogo-media {
        width: 795px;
        height: 320px;
        padding: 15px 0;
        overflow: hidden;
        background: #fff;
    }

    /*合作品牌*/
    .logofriends .cont {
        width: 1200px;
        height: 157px;
        background: #fff;
    }

    /*swiper*/
    .citySelection .btns{
        z-index: 99;
    }
</style>




