<template>
    <div class="space-dtl-wrap">
        <div class="w1200 topback">
            <a class="back" href="javascript:;"><i class="icon-arrowleft"></i> 返回搜索</a>
        </div>

        <div class="w1200">
            <div class="events-container clearfix">
                <div class="fl left">
                    <div class="banner-cont bgwhite">
                        <div class="title">
                            <h2>03 - 大会议室</h2>
                            <p class="addr">区域位置 : 上海市闸北区大场、大华沪太支路538号飞马旅5i</p>
                            <a href="javascript:;" class="collect fr">
                                <i class="icon-collect"></i>
                                <span>收藏</span>
                            </a>
                        </div>
                        <div class="banner">
                            <div class="swiper-container banner-swiper">
                                <div class="swiper-wrapper">

                                    <div class="swiper-slide">
                                        <img class="imgload" src="http://placehold.it/790x526" alt="首页banner图片01">
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="imgload" src="http://placehold.it/790x526" alt="首页banner图片02">
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="imgload" src="http://placehold.it/790x526" alt="首页banner图片02">
                                    </div>
                                </div>
                                <!-- 如果需要分页器 -->
                                <div class="swiper-pagination"></div>

                                <!-- 如果需要导航按钮 -->
                                <div class="swiper-button-prev "></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                    <div class="space-dtl bgwhite">
                        <ul class="dtl-tap-top clearfix ">
                            <li v-on:click="tapClick" :class="'空间详情' == activeTab ? 'current' : ''" href="javascript:;">空间详情</li>
                            <li v-on:click="tapClick" :class="'空间配套' == activeTab ? 'current' : ''" href="javascript:;">空间配套</li>
                            <li v-on:click="tapClick" :class="'场地介绍' == activeTab ? 'current' : ''" href="javascript:;">场地介绍</li>
                        </ul>
                        <div>
                            <div class="dtl-content" v-if="activeTab=='空间详情'">

                                <div class="tap-content">

                                    <div class="clearfix">
                                        <div class="p3">
                                            <div class="clearfix"><p>最大容量 : </p><p>30人</p></div>
                                            <div class="clearfix"><p>空间承重 : </p><p>4m</p></div>
                                        </div>
                                        <div class="p3">
                                            <div class="clearfix"><p>空间面积 : </p><p>50m</p></div>
                                            <div class="clearfix"><p>活动类型 : </p><p>文体娱乐｜会议会务｜培训演讲｜新闻发布</p></div>
                                        </div>
                                        <div class="p3">
                                            <div class="clearfix"><p>空间层高 : </p><p>30人</p></div>
                                        </div>
                                    </div>

                                    <div class="price-dtl">
                                        <div class="clearfix">
                                            <div class="price-num fl">
                                                <p>周一至周四</p>
                                                <p>¥ 8888元／天 起</p>
                                                <p>¥ 9888元／天 起</p>
                                            </div>
                                            <div class="price-op fr">
                                                <button class="btn-dark btn-now">立即预定</button>
                                                <button class="btn-schedule btn-dark">档期日历 <i class="icon-arrowbottom"></i></button>
                                                <button class="btn-add btn-dark">加入批量询价</button>
                                            </div>
                                        </div>
                                        <h6>套餐信息</h6>
                                        <p>是继Playze与Tony合作有机农庄之后的第二个项目。多利有机屋旨在向上海市民展示他们的农庄产品及推广有机生活方式，为城市生活居民引入自然生活理念。像素化的方木箱出现在建筑的每一层，
                                            成为空间关联的主线。采用立体化的可移动模块将中央楼梯打造成一个灵活的居善地，这里可以适应演讲，展览，接待，非正式回应等多种活动。
                                        </p>
                                        <h6>预订须知</h6>
                                        <p>是继Playze与Tony合作有机农庄之后的第二个项目。多利有机屋旨在向上海市民展示他们的农庄产品及推广有机生活方式，为城市生活居民引入自然生活理念。像素化的方木箱出现在建筑的每一层，
                                            成为空间关联的主线。采用立体化的可移动模块将中央楼梯打造成一个灵活的居善地，这里可以适应演讲，展览，接待，非正式回应等多种活动。
                                        </p>
                                    </div>
                                    <div class="price-dtl">
                                        <div class="clearfix">
                                            <div class="price-num fl">
                                                <p>周一至周四</p>
                                                <p>¥ 8888元／天 起</p>
                                                <p>¥ 9888元／天 起</p>
                                            </div>
                                            <div class="price-op fr">
                                                <button class="btn-dark btn-now">立即预定</button>
                                                <button class="btn-schedule btn-dark">档期日历 <i class="icon-arrowbottom"></i></button>
                                                <button class="btn-add btn-dark">加入批量询价</button>
                                            </div>
                                        </div>
                                        <h6>套餐信息</h6>
                                        <p>是继Playze与Tony合作有机农庄之后的第二个项目。多利有机屋旨在向上海市民展示他们的农庄产品及推广有机生活方式，为城市生活居民引入自然生活理念。像素化的方木箱出现在建筑的每一层，
                                            成为空间关联的主线。采用立体化的可移动模块将中央楼梯打造成一个灵活的居善地，这里可以适应演讲，展览，接待，非正式回应等多种活动。
                                        </p>
                                        <h6>预订须知</h6>
                                        <p>是继Playze与Tony合作有机农庄之后的第二个项目。多利有机屋旨在向上海市民展示他们的农庄产品及推广有机生活方式，为城市生活居民引入自然生活理念。像素化的方木箱出现在建筑的每一层，
                                            成为空间关联的主线。采用立体化的可移动模块将中央楼梯打造成一个灵活的居善地，这里可以适应演讲，展览，接待，非正式回应等多种活动。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <h5>相关专题</h5>
                    <div class="relative-topic">
                        <div class="swiper-container relative-topic-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide topic-pic">
                                    <img src="http://placehold.it/390x260" alt="">
                                </div>
                                <div class="swiper-slide topic-pic">
                                    <img src="http://placehold.it/390x260" alt="">
                                </div>
                                <div class="swiper-slide topic-pic">
                                    <img src="http://placehold.it/390x260" alt="">
                                </div>
                            </div>
                            <!-- Add Pagination -->
                            <!--<div class="swiper-pagination"></div>-->
                            <!-- Add Arrows -->
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                    <h5>同类空间推荐</h5>
                    <div class="topic-same-kind">
                        <ul class="recommend recommend-sub topic-list-piece clearfix">
                            <li v-for="spacesub in spacesubs">
                                <div class="img">
                                    <a href="/space/dtl" target="_blank">
                                        <img src="/static/images/home/imgmain1.png">
                                    </a>
                                </div>
                                <div class="text">
                                    <a class="title" href="javascript:;">上海电影场-五号棚</a>
                                    <div class="price">￥50000/元 天</div>
                                    <div class="textinfo">
                                        <p><span>场地类型：</span>高端场所 | 主题派对</p>
                                        <p><span>落地区域：</span>主题餐厅</p>
                                        <p><span>地址：</span>上海市 黄浦区|南京东路789号</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--侧边栏-->
                <div class="fr right">
                    <div class="evdtllist bgwhite">
                        <div class="title clearfix">
                            <img src="http://placehold.it/120x120" alt="">
                            <div class="title-dtl">
                                <h2>上海蒲公英会议中心－北中环</h2>
                                <dl><dt>场地类型 : </dt><dd>洗手间</dd></dl>
                                <dl><dt>区域位置 : </dt><dd>上海市浦东新区世纪公园长柳路58号</dd></dl>
                            </div>
                        </div>
                        <div class="cont clearfix">
                            <dl><i class="icons icon-pnumbs"></i>
                                <dt>最大容纳 : </dt>
                                <dd>800人</dd>
                            </dl>
                            <dl><i class="icons icon-assort"></i>
                                <dt>场地配套 : </dt>
                                <dd><span>洗手间</span>｜
                                    <span>化妆间</span>｜
                                    <span>空调暖气</span>｜
                                    <span>网络WIFI</span> ｜
                                    <span>货运电梯</span>｜
                                    <span>灯光音响</span>｜
                                    <span>投影LED</span>
                                </dd>
                            </dl>
                            <dl><i class="icons icon-busintype"></i>
                                <dt>行业类型 : </dt>
                                <dd><span>通用</span> ｜
                                    <span>IT类</span>｜
                                    <span>公益事业</span>｜
                                    <span>教育</span>｜
                                    <span>通讯</span></dd>
                            </dl>
                            <dl><i class="icons icon-evtype"></i>
                                <dt>活动类型 : </dt>
                                <dd><span>文体娱乐</span>｜
                                    <span>会议会务</span>｜
                                    <span>培训演讲</span></dd>
                            </dl>
                            <button class="btn-dark understand-btn">了解场地</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Lib from 'assets/Lib.js';

    require ('assets/css/component.css')
    require ('assets/css/hold-event.css')

    import 'assets/libs/swiper/swiper.js'


    export default {
        data() {
            return {
                phone: '',
                password: '',
                username: '',
                activeTab:'空间详情',
                spacesubs: [
                    1, 2, 3, 4
                ],
            }
        },

        components: {},
        mounted () {
            var swiper = new Swiper('.banner-swiper', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                pagination: '.swiper-pagination',
                paginationType: 'fraction'
            });

            var swiper2 = new Swiper('.relative-topic-swiper', {
//                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 10,
                paginationHide:true
            });
        },
        methods: {
            tapClick(event){
                this.activeTab = event.target.innerHTML;
            },
        },

    }

</script>
<style>
    body .swiper-button-next{
        right: 0;
        left: auto;
        padding: 20px 5px;
        background-color: rgba(255,255,255,.5);
    }
</style>






