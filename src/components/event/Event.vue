<template>
    <div>
        <!--第一部分banner等-开始-->
        <div class="w1200 mt20 clearfix">
            <div class="lphone">
                <img src="/static/images/holdEvent/lphone.png" alt="">
            </div>

            <div class="event-banner">
                <div id="owl-demo" class="owl-carousel">
                    <div class="item">
                        <img src="http://placehold.it/590x320" alt="The Last of us">
                        <div class="owlitem-title">
                            <h5>年会必备</h5>
                            <p>2016企业年会 云SPACE推荐空间精选</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="http://placehold.it/590x320" alt="GTA V">
                        <div class="owlitem-title">
                            <h5>年会必备</h5>
                            <p>2016企业年会 云SPACE推荐空间精选</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="http://placehold.it/590x320" alt="Mirror Edge">
                        <div class="owlitem-title">
                            <h5>年会必备</h5>
                            <p>2016企业年会 云SPACE推荐空间精选</p>
                        </div>
                    </div>
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
            <div class="search">
                <div class="mask"></div>
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
                                    <img src="/static/images/holdEvent/imgsubject1.png">
                                </div>
                                <div class="text">
                                    <h5>LK+RIGI Design Office</h5>
                                    <p>他用建筑世界发问，他以文人意气造房子，追溯山水意境，园林情趣。</p>
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
                                <img src="/static/images/home/imgmain1.png">
                                <div class="collect-mask">
                                    <div class="collect icons"></div>
                                    <div class="mask"></div>
                                </div>
                            </div>
                            <div class="text">
                                <a class="title" href="javascript:;">上海电影场-五号棚</a>
                                <div class="price">￥50000/元 天</div>
                                <div class="textinfo">
                                    <p><span>场地类型：</span>高端场所 | 主题派对 | 年会晚会 | 颁奖晚会</p>
                                    <div class="numb clearfix">
                                        <p><span>面积：</span>450㎡</p>
                                        <p><span>层高：</span>4m</p>
                                        <p><span>人数：</span>200人</p>
                                    </div>
                                    <p><span>地址：</span>上海市 黄浦区 | 南京东路789号</p>
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
                                <a class="title" href="javascript:;">上海电影场-五号棚</a>
                                <div class="price">￥50000/元 天</div>
                                <div class="price disprice">￥48000/元 天</div>
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
                                <img src="/static/images/home/imgmain1.png">
                            </div>
                            <div class="text">
                                <a class="title" href="javascript:;">Hisham Akira Bharoocha</a>
                                <p>他们最新的创意作品——《Hair Highway》意在向中国，这个世界上最大的热带硬木 进口国和头发的出口国。</p>
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
                        <li>
                            <a href="javascript:;">
                                <img src="/static/images/holdEvent/topimg1.png">
                                <div class="title">
                                    文青必去的上海五大剧院
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="/static/images/holdEvent/topimg1.png">
                                <div class="title">
                                    文青必去的上海五大剧院
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="/static/images/holdEvent/topimg1.png">
                                <div class="title">
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
    import Owl from 'assets/owl.js'

    import 'assets/css/component.css';
    import 'assets/css/hold-event.css';

    export default{
        data(){
            return {
                peoplenumbs: [
                    111, 222
                ],
                subjects: [
                    1, 2, 3
                ],
                venues: [
                    1, 2, 3, 4
                ],
                discounts: [
                    1, 2, 3, 4, 5, 6
                ],
                eventcases: [
                    1, 2, 3, 4
                ]

            }
        },
        components: {},
        mounted(){
            var owl = $("#owl-demo").owlCarousel({
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

<style scoped>

</style>





