<template>
    <div>
        <!--第一部分banner等-开始-->
        <div class="w1200 mt20 clearfix">
            <div class="lphone">
                <img src="/static/images/holdEvent/lphone.png" alt="">
            </div>

            <!--<div class="event-banner">-->
                <!--<div id="owl-demo" class="owl-carousel">-->
                    <!--<div class="item">-->
                        <!--<img src="http://placehold.it/590x320" alt="The Last of us">-->
                        <!--<div class="owlitem-title">-->
                            <!--<h5>年会必备</h5>-->
                            <!--<p>2016企业年会 云SPACE推荐空间精选</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="item">-->
                        <!--<img src="http://placehold.it/590x320" alt="GTA V">-->
                        <!--<div class="owlitem-title">-->
                            <!--<h5>年会必备</h5>-->
                            <!--<p>2016企业年会 云SPACE推荐空间精选</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="item">-->
                        <!--<img src="http://placehold.it/590x320" alt="Mirror Edge">-->
                        <!--<div class="owlitem-title">-->
                            <!--<h5>年会必备</h5>-->
                            <!--<p>2016企业年会 云SPACE推荐空间精选</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <div class="event-banner">
                <div class="swiper-container event-swiper">
                    <div class="swiper-wrapper owl-carousel">

                        <div class="swiper-slide item">
                            <img class="imgload" src="http://www.atool.org/placeholder.png?size=590x320&text=图片&&bg=836&fg=fff" alt="首页banner图片01">
                            <div class="owlitem-title">
                                <h5>年会必备</h5>
                                <p>2016企业年会 云SPACE推荐空间精选</p>
                            </div>
                        </div>
                        <div class="swiper-slide item">
                            <img class="imgload" src="http://www.atool.org/placeholder.png?size=590x320&text=图片&&bg=836&fg=fff" alt="首页banner图片01">
                            <div class="owlitem-title">
                                <h5>年会必备</h5>
                                <p>2016企业年会 云SPACE推荐空间精选</p>
                            </div>
                        </div>
                        <div class="swiper-slide item">
                            <img class="imgload" src="http://www.atool.org/placeholder.png?size=590x320&text=图片&&bg=836&fg=fff" alt="首页banner图片01">
                            <div class="owlitem-title">
                                <h5>年会必备</h5>
                                <p>2016企业年会 云SPACE推荐空间精选</p>
                            </div>
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>

                    <!--&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
                    <!--<div class="yun-swiper-prev">-->
                        <!--<span class="icon-arrowleft"></span>-->
                    <!--</div>-->
                    <!--<div class="yun-swiper-next">-->
                        <!--<span class="icon-arrowright"></span>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="form-holdenent">
                <div class="title">我要办活动</div>
                <ul class="inputbox">
                    <li class="selectwrap">
                        <div class="select">
                            <p>您的活动人数</p>
                            <i class="icon icon-arrowbottom"></i>
                        </div>
                        <ul class="selectlist">
                            <li v-for="peoplenumb in peoplenumbs">
                                {{peoplenumb}}
                            </li>
                        </ul>
                    </li>
                    <li class="selectwrap">
                        <div class="select">
                            <p>您的活动类型？</p>
                            <i class="icon icon-arrowbottom"></i>
                        </div>
                        <ul class="selectlist">
                            <li>活动类型</li>
                        </ul>
                    </li>
                    <li class="text">省时，省心，找你所想...</li>
                    <li>
                        <button class="holdeventbtn">下一步</button>
                    </li>
                </ul>
            </div>
        </div>
        <!--第一部分banner等-结束-->

        <!--搜索部分-开始-->
        <div class="w1200 mt20 section-search">
            <div class="mask"></div>
            <div class="search">
                <h2>找到适合你的活动空间</h2>
                <div class="inputbox clearfix">
                    <input type="text" placeholder="商圈／地标／机场／火车站／场地名">
                    <button class="searchbtn">搜&nbsp;索</button>
                </div>
                <div class="hot clearfix">
                    <p>热点：</p>
                    <div class="hotlist">
                        <a href="javascript:;">奢居会</a>
                        <a href="javascript:;">广州塔</a>
                        <a href="javascript:;">外滩天安教堂</a>
                        <a href="javascript:;">西湖博览会</a>
                        <a href="javascript:;">梦之园展厅</a>
                    </div>
                </div>
            </div>
        </div>
        <!--搜索部分-结束-->

        <!--主题部分-开始-->
        <div class="w1200 mt20 eventsbox clearfix">
            <!--左边-开始-->
            <div class="fl left">
                <!--专题-->
                <div class="subject mb20">
                    <div class="evtitle clearfix">
                        <h3>专题</h3>
                        <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
                    </div>
                    <ul class="cont clearfix">
                        <li v-for="subject in subjects">
                            <a href="javascript:;">
                                <div class="img">
                                    <img :src="subject.first_picture.url">
                                </div>
                                <div class="text">
                                    <h5 v-text="subject.title">LK+RIGI Design Office</h5>
                                    <p v-text="subject.abstract">他用建筑世界发问，他以文人意气造房子，追溯山水意境，园林情趣。</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!--分类-->
                <div class="classfiy mb20">
                    <div class="evtitle">
                        <h3>分类</h3>
                    </div>
                    <ul class="cont classfiylist clearfix">
                        <li class="art">
                            <i class="icons"></i>
                            <p>艺术画廊</p>
                        </li>
                        <li class="show">
                            <i class="icons"></i>
                            <p>秀场展馆</p>
                        </li>
                        <li class="business">
                            <i class="icons"></i>
                            <p>商业广场</p>
                        </li>
                        <li class="starbusiness">
                            <i class="icons"></i>
                            <p>星级酒店</p>
                        </li>
                        <li class="more">
                            <i class="icons"></i>
                            <p>查看更多</p>
                        </li>
                    </ul>
                </div>
                <!--分类-结束-->

                <!--场馆推荐-开始-->
                <div class="recommend venues-recommend mb20">
                    <div class="evtitle clearfix">
                        <h3>场馆推荐</h3>
                        <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
                    </div>
                    <ul class="cont clearfix">
                        <li v-for="venue in venues">
                            <div class="img">
                                <img :src="venue.img_paths.url">
                                <div class="collect-mask">
                                    <div class="collect icons icon-collectbg-hv"></div>
                                    <div class="mask"></div>
                                </div>
                            </div>
                            <div class="text">
                                <a class="title" href="javascript:;" v-text="venue.site_name">上海电影场-五号棚</a>
                                <div class="price">￥{{venue.market_price}}/元 {{venue.units}}</div>
                                <div class="textinfo">
                                    <p><span>场地类型：</span>{{venue.site_type}}</p>
                                    <div class="numb clearfix">
                                        <p><span>面积：</span>{{venue.area}}㎡</p>
                                        <p><span>层高：</span>{{venue.height}}m</p>
                                        <p><span>人数：</span>{{venue.site_max_people}}人</p>
                                    </div>
                                    <p><span>地址：</span>{{venue.city_name}}&nbsp;{{venue.areas}} | {{venue.address}}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--场馆推荐-结束-->

                <!--限时优惠-开始-->
                <div class="recommend timediscount mb20">
                    <div class="evtitle clearfix">
                        <h3>限时优惠</h3>
                        <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
                    </div>
                    <ul class="cont clearfix">
                        <li v-for="discount in discounts">
                            <div class="img">
                                <img src="/static/images/home/imgmain1.png">
                                <div class="disrate">9.5折</div>
                            </div>
                            <div class="text">
                                <a class="title" href="javascript:;" v-text="discount.title">上海电影场-五号棚</a>
                                <div class="price">￥{{discount.market_price}}/元 {{discount.units}}</div>
                                <div class="price disprice">￥{{discount.the_price}}/元 {{discount.units}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--限时优惠-结束-->

                <!--活动案例-开始-->
                <div class="recommend evcases mb20">
                    <div class="evtitle clearfix">
                        <h3>活动案例</h3>
                        <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
                    </div>
                    <ul class="cont clearfix">
                        <li v-for="eventcase in eventcases">
                            <div class="img">
                                <img :src="eventcase.first_picture.url">
                            </div>
                            <div class="text">
                                <a class="title" href="javascript:;" v-text="eventcase.title">Hisham Akira Bharoocha</a>
                                <p v-text="eventcase.abstract"></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--活动案例-结束-->
            </div>
            <!--左边-结束-->

            <!--右边-开始-->
            <div class="fr right">
                <!--TOP榜-->
                <div class="toplist mb20">
                    <div class="evtitle clearfix">
                        <h3>TOP榜</h3>
                        <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
                    </div>
                    <ul class="cont">
                        <li v-for="toplist in toplists">
                            <a href="javascript:;">
                                <img :src="toplist.first_picture.url">
                                <div class="title" v-text="toplist.title">
                                    文青必去的上海五大剧院
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!--您可能会喜欢-->
                <div class="maylike mb20">
                    <div class="evtitle clearfix">
                        <h3>您可能会喜欢</h3>
                        <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
                    </div>
                    <ul class="cont">
                        <li>
                            <a class="img" href="javascript:;">
                                <img src="/static/images/holdEvent/topimg1.png">
                            </a>
                            <div class="text">
                                <a class="title" href="javascript:;">Giardino Mountain</a>
                                <div class="price">￥50000/元 天</div>
                            </div>
                        </li>
                        <li>
                            <a class="img" href="javascript:;">
                                <img src="/static/images/holdEvent/topimg1.png">
                            </a>
                            <div class="text">
                                <a class="title" href="javascript:;">Giardino Mountain</a>
                                <div class="price">￥50000/元 天</div>
                            </div>
                        </li>
                        <li>
                            <a class="img" href="javascript:;">
                                <img src="/static/images/holdEvent/topimg1.png">
                            </a>
                            <div class="text">
                                <a class="title" href="javascript:;">Giardino Mountain</a>
                                <div class="price">￥50000/元 天</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--右边-结束-->
        </div>
        <!--主题部分-结束-->
    </div>


</template>

<script>

    import Lib from 'assets/Lib.js'
    import 'assets/libs/swiper/swiper.js'

    import 'assets/css/component.css';
    import 'assets/css/hold-event.css';

    export default{
        data(){
            return {
                peoplenumbs: [
                    111, 222
                ],
                subjects: [ ],
                venues: [ ],
                discounts: [ ],
                eventcases: [ ],
                toplists: [ ]

            }
        },
        components: {},
        mounted () {
            var swiper = new Swiper('.event-swiper', {
                nextButton: '.yun-swiper-next',
                prevButton: '.yun-swiper-prev',
                pagination: '.swiper-pagination',
                paginationClickable :true,
//                paginationType: 'fraction',
//                paginationHide:true
            });

            var self=this;
            $.ajax({
                url: window.YUNAPI.active,
                success : function (data) {
                    //console.log(data,111);
                    //专题
                    self.subjects=data.activity_topic;

                    //场馆推荐
                    self.venues=data.space_recommend;

                    //限时优惠
                    self.discounts=data.space_calendar;

                    //活动案例
                    self.eventcases=data.space_case;

                    //TOP榜
                    self.toplists=data.activity_top;
                }
            });




            self.$parent.loading = false;
        },
        methods: {
            //获取活动人数、类型

        }
    }
</script>

<style scoped>

</style>





