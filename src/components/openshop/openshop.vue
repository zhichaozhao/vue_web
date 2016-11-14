<script src="../../assets/libs/jquery/jquery-3.1.1.min.js"></script>
<template>
<div class="openshop-box">
    <!--banner板块-开始-->
    <div class="banner-search">
        <h1>我要开店</h1>
        <a class="btnopenshop" href="javascript:;">立即提交需求</a>
        <!--搜索-->
        <div class="search">
            <h2>找到适合你的商业短租场地</h2>
            <div class="inputbox clearfix">
                <input class="searchInputVal" v-model="homeSearchCondition.q.keyword_cont" @keyup.enter="goSpaceSearch" type="text" placeholder="商圈／地标／机场／火车站／场地名">
                <button class="searchbtn" @click="goSpaceSearch">搜&nbsp;索</button>
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
    <!--banner板块-结束-->

    <!--主题部分-开始-->
    <div class="w1200 mt30">
        <div class="optitle clearfix">
            <h3>我要开店</h3>
            <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
        </div>
        <ul class="openshop clearfix">
            <li class="dob">
                <a href="javascript:;">Pop Up Store<span><br/>（快闪店/体验店/游击店）</span></a>
            </li>
            <li>
                <a href="javascript:;">店中店</a>
            </li>
            <li>
                <a href="javascript:;">市集/展</a>
            </li>
            <li class="dob">
                <a href="javascript:;">DP点<span><br/>（售卖机／展示点）</span></a>
            </li>
            <li>
                <a href="javascript:;">集合点</a>
            </li>
        </ul>
    </div>

    <!--合作流程-->
    <div class="w1200 mt30">
        <div class="optitle clearfix">
            <h3>合作流程</h3>
            <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
        </div>
        <ul class="cont opprocess clearfix">
            <li>
                <div class="ibox">
                    <span class="img"></span>
                    <p>提交需求</p>
                </div>
                <span class="iconright"></span>
            </li>
            <li>
                <div class="ibox">
                    <span class="img"></span>
                    <p>匹配场地&场景</p>
                </div>
                <span class="iconright"></span>
            </li>
            <li>
                <div class="ibox">
                    <span class="img"></span>
                    <p>确定合作方式</p>
                </div>
                <span class="iconright"></span>
            </li>
            <li>
                <div class="ibox">
                    <span class="img"></span>
                    <p>品牌／内容落地</p>
                </div>
                <span class="iconright"></span>
            </li>
            <li>
                <div class="ibox">
                    <span class="img"></span>
                    <p>申请加入V+品牌库</p>
                </div>
                <span class="iconright"></span>
            </li>
            <li>
                <div class="ibox">
                    <span class="img"></span>
                    <p>平台战略推广与支持</p>
                </div>
            </li>
        </ul>
    </div><!--合作流程-end-->

    <!--专题-->
    <div class="w1200 mt30">
        <div class="optitle clearfix">
            <h3>专题</h3>
            <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
        </div>
        <ul class="cont opsubject clearfix">
            <li v-for="special in specials">
                <a class="img" target="_blank" :href="'/article/'+special.id"><img :src="special.first_picture.url"></a>
                <div class="text">
                    <a class="title" target="_blank" :href="'/article/'+special.id">{{special.title}}</a>
                    <p>{{special.abstract}}</p>
                </div>
            </li>
        </ul>
    </div><!--专题-end-->

    <!--空间分类-->
    <div class="w1200 mt30 clearfix">
        <div class="optitle clearfix">
            <h3>空间分类</h3>
            <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
        </div>
        <div class="fl cont classfiylist clearfix">
            <a class="art">
                <i class="icons"></i>
                <p>艺术画廊</p>
            </a>
            <a class="show">
                <i class="icons"></i>
                <p>秀场展馆</p>
            </a>
            <a class="business">
                <i class="icons"></i>
                <p>商业广场</p>
            </a>
            <a class="starbusiness">
                <i class="icons"></i>
                <p>星级酒店</p>
            </a>
            <a class="art">
                <i class="icons"></i>
                <p>艺术画廊</p>
            </a>
            <a class="show">
                <i class="icons"></i>
                <p>秀场展馆</p>
            </a>
            <a class="business">
                <i class="icons"></i>
                <p>商业广场</p>
            </a>
            <a class="starbusiness">
                <i class="icons"></i>
                <p>星级酒店</p>
            </a>
        </div>
        <a class="fr classfiymore">
            <i class="icons"></i>
            <p>更多分类</p>
        </a>
    </div><!--空间分类-end-->

    <!--TOP榜单-->
    <div class="w1200 mt30">
        <div class="optitle clearfix">
            <h3>TOP榜单</h3>
            <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
        </div>
        <ul class="cont optoplist clearfix">
            <li v-for="topList in topLists">
                <a target="_blank" :href="'/article/'+topList.id">
                    <img :src="topList.first_picture.url">
                    <p>{{topList.title}}</p>
                </a>
            </li>
        </ul>
    </div><!--TOP榜单-end-->

    <!--推荐空间-开始-->
    <div class="w1200 mt30">
        <div class="optitle clearfix">
            <h3>推荐空间</h3>
            <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
        </div>
        <ul class="cont opvenues-recommend clearfix">
            <li v-for="space in recommendSpace">
                <div class="img">
                    <img :src="space.img_paths">
                    <div class="collect-mask">
                        <div class="collect icons icon-collectbgmore-hv"></div>
                        <div class="mask"></div>
                    </div>
                    <div class="price">￥{{space.market_price}}/元 天</div>
                </div>
                <div class="text">
                    <a class="title" target="_blank" :href="'/space/'+space.id">{{space.site_name}}</a>
                    <p>{{space.introduced}}</p>
                    <p>{{space.city_name}}&nbsp;{{space.areas}}<br>{{space.address}}</p>
                </div>
                <div class="icons icondou"></div>
            </li>
        </ul>
    </div><!--推荐空间-结束-->

    <!--精选案例-开始-->
    <div class="w1200">
        <div class="optitle clearfix">
            <h3>精选案例</h3>
            <a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>
        </div>
        <ul class="cont selectedcases clearfix">
            <li v-for="item in selectedCase">
                <div class="textinfo">
                    <a class="title" target="_blank" :href="'/article/'+item.id">{{item.title}}</a>
                    <p>{{item.abstract}}</p>
                </div>
                <a class="btnlook" target="_blank" :href="'/article/'+item.id">查看<i class="icon icon-arrowright"></i></a>
                <a class="img" target="_blank" :href="'/article/'+item.id"><img :src="item.first_picture.url"></a>
            </li>
        </ul>
    </div><!--精选案例-结束-->

    <!--合作伙伴-开始-->
    <div class="w1200 mt30">
        <div class="optitle clearfix">
            <h3>合作伙伴</h3>
        </div>
        <div class="cont partners clearfix">
            <div id="Slide1" class="zy-Slide">
                <section class="icon-arrowleft"></section>
                <section class="icon-arrowright"></section>
                <ul>
                    <li><img src="/static/images/openshop/1.png" /></li>
                    <li><img src="/static/images/openshop/2.png" /></li>
                    <li><img src="/static/images/openshop/3.png" /></li>
                    <li><img src="/static/images/openshop/4.png" /></li>
                    <li><img src="/static/images/openshop/1.png" /></li>
                    <li><img src="/static/images/openshop/2.png" /></li>
                    <li><img src="/static/images/openshop/3.png" /></li>
                </ul>
            </div>
            <div class="abouttext">
                <p>TASTE is hidden deep in Shanghai’s Tianzifang area</p>
                <h5>A Matter of TASTE</h5>
            </div>
        </div>
    </div><!--合作伙伴-结束-->

</div>
</template>

<script>

    import Lib from 'assets/Lib.js';
    import zyslide from 'assets/libs/jquery/zySlide/jquery.zySlide.js';
    require ('assets/css/component.css');
    require ('assets/css/openshop.css');
    require ('assets/css/jquery.zySlide.css');
    export default {
        data(){
            return {
                specials:[ ],
                topLists:[ ],
                recommendSpace:[ ],
                selectedCase:[ ],
                searchInputVal:[ ],
                homeSearchCondition : {
                    city : 1,
                    project_type : '',
                    doWhat : '',
                    q : {
                        site_site_type_eq : '',
                        keyword_cont : ''
                    }
                }
            }

        },
        components: {},
        mounted () {
            $.noConflict();
            jQuery('.zy-Slide').zySlide({ speed: 500 }).css('border', '0px solid blue');

            var self = this;

            self.$store.commit('loading',true);

            $.ajax({
                url: window.YUNAPI.openShop,
                success: function (data) {
                    console.log(data);
                    self.specials=data.retail_special;
                    self.topLists=data.retail_top_list;
                    self.recommendSpace=data.retail_recommend_space;
                    self.selectedCase=data.retail_selected_case;

                    self.$store.commit('loading',false);
                }
            });

        },
        methods: {
            //搜索点击跳转到空间列表页
            getSearchVal:function () {
                this.searchInputVal=$('.searchInputVal').val();
                console.log(this.searchInputVal);
                window.location.href ='/spacelist/:'+this.searchInputVal;
            },
            goSpaceSearch :function () {
                this.$store.commit('spaceSearchCondition', this.homeSearchCondition);
                router.push('/spaces');
            }
        },

    }
</script>





