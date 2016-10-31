<template>
    <div class="home">
        <!--banner板块-开始-->
        <div class="banner-search">
            <!--banner部分-->
            <div class="banner-wrap">
                <div class="banner">
                    <img src="/static/images/home/banner1.png">
                </div>
            </div>

            <!--搜索-->
            <div class="search clearfix">
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
                                <a href="javascript:;" v-for="(key,value) in searchCondition.space_type">{{key}}</a>
                                <!--<a href="javascript:;">商业发布</a>-->
                            </dd>
                        </dl>
                        <dl class="clearfix">
                            <dt class="fl">要开店</dt>
                            <dd class="fl">
                                <a href="javascript:;" v-for="(key,value) in searchCondition.retail">{{key}}</a>
                                <!--<a href="javascript:;">店中店</a>-->
                            </dd>
                        </dl>
                        <dl class="clearfix">
                            <dt class="fl">IP项目</dt>
                            <dd class="fl">
                                <a href="javascript:;" v-for="(key,value) in searchCondition.project_type">{{key}}</a>
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
        <!--banner板块-结束-->

        <!--快捷链接块-开始-->
        <ul class="quicklinks clearfix">
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
                                <img src="" alt="">
                                <p>{{item.title}}</p>
                            </div>
                            <!--<div class="swiper-slide">Slide 2</div>-->
                            <!--<div class="swiper-slide">Slide 3</div>-->
                            <!--<div class="swiper-slide">Slide 4</div>-->

                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
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
                <li>
                    <a class="imgnumb" href="javascript:;">
                        <img src="/static/images/home/links1.png">
                        <div class="mask"></div>
                    </a>
                    <p class="numb">255</p>
                    <p class="imgtitle">高端会所</p>
                </li>
                <li>
                    <a class="imgnumb" href="javascript:;">
                        <img src="/static/images/home/links1.png">
                        <div class="mask"></div>
                    </a>
                    <p class="numb">255</p>
                    <p class="imgtitle">场馆</p>
                </li>
                <li>
                    <a class="imgnumb" href="javascript:;">
                        <img src="/static/images/home/links1.png">
                        <div class="mask"></div>
                    </a>
                    <p class="numb">255</p>
                    <p class="imgtitle">会务中心</p>
                </li>
                <li>
                    <a class="imgnumb" href="javascript:;">
                        <img src="/static/images/home/links1.png">
                        <div class="mask"></div>
                    </a>
                    <p class="numb">255</p>
                    <p class="imgtitle">餐厅酒吧</p>
                </li>
                <li>
                    <a class="imgnumb" href="javascript:;">
                        <img src="/static/images/home/links1.png">
                        <div class="mask"></div>
                    </a>
                    <p class="numb">255</p>
                    <p class="imgtitle">艺术馆画廊</p>
                </li>
                <li>
                    <a class="imgnumb" href="javascript:;">
                        <img src="/static/images/home/links1.png">
                        <div class="mask"></div>
                    </a>
                    <p class="numb">255</p>
                    <p class="imgtitle">星级酒店</p>
                </li>
            </ul>
        </div>
        <!--分类精选-结束-->

        <!--空间推荐-开始-->
        <!--<div class="section spacerecommend clearfix">-->
            <!--<h3>空间推荐</h3>-->
            <!--<ul class="recommend recommend-main clearfix">-->
                <!--<li v-for="n in 3">-->
                    <!--<div class="img">-->
                        <!--<a href="javascript:;">-->
                            <!--<img src="/static/images/home/imgmain1.png">-->
                        <!--</a>-->
                        <!--<span class="tags">上海</span>-->
                    <!--</div>-->
                    <!--<div class="text">-->
                        <!--<a class="title" href="javascript:;">{{spaceRecommend[n-1].name}}</a>-->
                        <!--<div class="price">￥{{spaceRecommend[n-1].market_price}}/元 天</div>-->
                        <!--<div class="textinfo">-->
                            <!--<p><span>场地类型：</span>{{spaceRecommend[n-1].space_type}}</p>-->
                            <!--<p><span>落地区域：</span>{{spaceRecommend[n-1].through_three_areas}}</p>-->
                            <!--<div class="numb clearfix">-->
                                <!--<p><span>面积：</span>{{spaceRecommend[n-1].area}}</p>-->
                                <!--<p><span>层高：</span>{{spaceRecommend[n-1].height}}</p>-->
                                <!--<p><span>人数：</span>{{spaceRecommend[n-1].Max_seating_capacity}}</p>-->
                            <!--</div>-->
                            <!--<p><span>地址：</span>{{spaceRecommend[n-1].areas}} | {{spaceRecommend[n-1].address}}</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<ul class="recommend recommend-sub clearfix">-->
                <!--<li v-for="n in (spaceRecommend.length - 3)">-->
                    <!--<div class="img">-->
                        <!--<a href="javascript:;">-->
                            <!--<img src="/static/images/home/imgmain1.png">-->
                        <!--</a>-->
                    <!--</div>-->
                    <!--<div class="text">-->
                        <!--<a class="title" href="javascript:;">{{spaceRecommend[n+2].name}}</a>-->
                        <!--<div class="price">￥{{spaceRecommend[n+2].market_price}}/元 天</div>-->
                        <!--<div class="city">杭州</div>-->
                        <!--<div class="textinfo">-->
                            <!--<p><span>场地类型：</span>{{spaceRecommend[n+2].space_type}}</p>-->
                            <!--<p><span>落地区域：</span>{{spaceRecommend[n+2].through_three_areas}}</p>-->
                            <!--<p><span>地址：</span>{{spaceRecommend[n+2].areas}}|{{spaceRecommend[n+2].address}}</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<ul class="recommend-other"></ul>-->
            <!--<a class="btnlookmore" href="javascript:;">查看更多空间</a>-->
        <!--</div>-->
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
                        <img src="">
                    </div>
                    <div class="textinfo">
                        <div class="title">{{item.name}}</div>
                        <p class="tags">
                            <span>ICE AGE</span>
                            <span>大电影</span>
                        </p>
                        <div class="group">
                            <p>类别：影视</p>
                            <p>来源：{{item.source}}</p>
                        </div>
                        <p>场地面积：100-500㎡</p>
                        <p>适用人群：冰川时代影迷</p>
                        <p>预算范围：面议</p>
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
                        <img src="">
                    </a>
                    <a class="text" href="javascript:;">
                        {{newFindFirst.title}}
                    </a>
                </div>
                <!--中间4个-->
                <ul class="infolist fl clearfix">
                    <li class="info info-normal" v-for="item in newFindTopFour">
                        <a class="img" href="javascript:;">
                            <img src="">
                        </a>
                        <a class="text" href="javascript:;">
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
                        <img src="">
                    </a>
                    <div class="textinfo">
                        <a class="title" href="javascript:;">{{item.title}}</a>
                        <div class="tags">
                            <span v-for="i in item.keywords">{{i}}</span>
                        </div>
                        <ul class="numbs clearfix">
                            <li class="fl"><i class="icons icon-skimbg"></i>{{item.viewed}}</li>
                            <li class="fr"><i class="icons icon-zanbg"></i>54</li>
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
                    <li>
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>[网易] 商业地产短租入侵零售领域 云SPACE掀起商业场景革命</p>
                            </div>
                            <div class="time">2016-08-15</div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>[网易] 商业地产短租入侵零售领域 云SPACE掀起商业场景革命</p>
                            </div>
                            <div class="time">2016-08-15</div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>[网易] 商业地产短租入侵零售领域 云SPACE掀起商业场景革命</p>
                            </div>
                            <div class="time">2016-08-15</div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>[网易] 商业地产短租入侵零售领域 云SPACE掀起商业场景革命</p>
                            </div>
                            <div class="time">2016-08-15</div>
                        </a>
                    </li>
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
    require ('assets/css/home.css');
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

                searchCondition : {}, //搜索条件

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
            $.ajax({
                url: window.YUNAPI.home, context: document.body, success: function (data) {
                    console.log(data);

                    self.topicOfCity = data.home_city_special;
                    self.newFindTop = data.home_new_find_top;
                    self.newFindRandom = data.home_new_find_random;
                    self.spaceRecommend = data.home_recommend_space;
                    self.ipProject = data.home_project;
//                    self.caseSelected = data.home_case_selected;

                    for (var i = 0; i <  data.home_case_selected.length - 1; i++){ // 关键词 需要按,分割
                        data.home_case_selected[i].keywords = data.home_case_selected[i].keyword.split(',')
                        console.log(data.home_case_selected[i].keywords)
                    }

                    self.caseSelected = data.home_case_selected;

                    self.newFindTopFour = data.home_new_find_top; // 新发现4个
                    self.newFindFirst = self.newFindTopFour.shift(); //新发现第一个

//                    console.log(self.spaceRecommend);
//                    console.log(self.newFindRandom);
                    setTimeout(function () {
                        self.init()
                    },500)
                }
            });

            $.ajax({
                url: window.YUNAPI.homeSearch, context: document.body, success: function (data) {
                    console.log(data);
                    self.searchCondition = data
                }
            });

        },
        methods: {
            whatToSearchInputClick : function () {
                this.$parent.$data.isShowHomeSearchCondition = !this.$parent.$data.isShowHomeSearchCondition
            },
            init : function () {
                var citySelectionSwiper = new Swiper('.citySelection', {
                    pagination: '.swiper-pagination',
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
</style>




