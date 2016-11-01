<template>
    <div class="w1200 newfound clearfix">
        <!--左边文章列表-开始-->
        <div class="fl left clearfix">
            <div class="s-wrap clearfix">
                <ul class="fl selectlist clearfix">
                    <li>全部</li>
                    <li>
                        <!--资讯-->
                        <el-select v-model="newsType" v-on:change = 'condTypeChange(this)'>
                            <el-option
                                    v-for="(value,key) in articleType['资讯']"
                                    :label="key"
                                    :value="value">
                            </el-option>
                        </el-select>
                    </li>

                    <li>
                        <!--攻略-->
                        <el-select v-model="guideType">
                            <el-option
                                    v-for="(value,key) in articleType['攻略']"
                                    :label="key"
                                    :value="value">
                            </el-option>
                        </el-select>
                    </li>

                    <li>
                        <!--案例-->
                        <el-select v-model="caseType">
                            <el-option
                                    v-for="(value,key) in articleType['案例']"
                                    :label="key"
                                    :value="value">
                            </el-option>
                        </el-select>
                    </li>
                </ul>
                <!--selectlist-end-->
                <div class="fl search-warp clearfix">
                    <input class="fl" type="text" placeholder="输入关键字">
                    <button class="fr searchbtn">搜索</button>
                </div>
            </div>

            <div class="article-wrap">
                <ul>
                    <li class="clearfix" v-for="item in articles">
                        <div class="fl img">
                            <a href="javascript:;"><img v-bind:src="item.first_picture.url"></a>
                            <span class="tag red">活动</span>
                        </div>
                        <div class="fr text">

                            <a target="_blank" class="title" v-bind:href=" '/article/' + item.id">{{item.title}}</a>

                            <p>{{item.abstract}}</p>
                            <div class="numb-time clearfix">
                                <p class="fl">{{item.updated_at}}</p>
                                <ul class="fr numbs clearfix">
                                    <li class="fl"><i class="icons icon-skim"></i>{{item.viewed}}</li>
                                    <li class="fr"><i class="icons icon-zan"></i>54</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                <a class="more" href="javascript:;">加载更多<i class="icon-arrowbottom"></i></a>
            </div><!--article-wrap-end-->
        </div>
        <!--左边文章列表-结束-->

        <div class="fr right">
            <div class="tags clearfix">
                <a href="javascript:;">社区购物中心</a>
                <a href="javascript:;">文体娱乐</a>
                <a href="javascript:;">媒体新闻</a>
                <a href="javascript:;">市集地摊</a>
                <a href="javascript:;">文体娱乐</a>
                <a href="javascript:;">媒体新闻</a>
                <a href="javascript:;">市集地摊</a>
                <a href="javascript:;">文体娱乐</a>
                <a href="javascript:;">媒体新闻</a>
            </div>

            <div class="hot-recommend">
                <h2>热门推荐</h2>
                <ul>
                    <li class="clearfix" v-for="item in recommends">
                        <div class="fl img">
                            <a href="javascript:;"><img src=""></a>
                        </div>
                        <div class="fr text">
                            <a class="title" href="javascript:;">云SPACE护航《微微一笑很倾城》开启泛娱乐IP多维度营销先河</a>
                            <p class="time">2016-08-28</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import Lib from 'assets/Lib.js'
    import Owl from 'assets/owl.js'

    import 'assets/css/component.css';
    import 'assets/css/newfound.css';
    //  import holder from 'http://cdn.bootcss.com/holder/2.9.4/holder.js';

    import moduleHeader from 'components/module-header';
    import moduleFooter from 'components/module-footer';

    export default{
        data(){
            return {
                newsType:'',
                guideType : '',
                caseType : '',
                articles:[],
                articleTags : [],
                articleType : [],
                recommends:[1,2,3,4,5,6]
            }
        },
        components: {

        },
        mounted(){
            var self= this;
            $.ajax({
                url: window.YUNAPI.articleTags,
                success: function (data) {
//                    self.cities = data.cities;
                    self.articleTags = data;
                    self.articleType = data.information_type;
                    console.log(self.articleType['资讯'])
                    self.newsType = 1;
                    self.guideType = 23;
                    self.caseType = 6;
                }
            });
            $.ajax({
                url: window.YUNAPI.article,
                context: document.body,
                data : {
                    page : 1,
                    i_keyword : '',
                    i_class : '',
                    i_type : ''
                },
                success: function (data) {
//                    self.cities = data.cities;
                    self.articles = data.information;
                    self.$parent.loading = false;
                }
            });
        },
        methods: {
            condTypeChange : function (e) {
                console.log(e)
            }
        }

    }
</script>
