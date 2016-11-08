<template>
    <div class="w1200 newfound clearfix">
        <!--左边文章列表-开始-->
        <div class="fl left clearfix">
            <div class="s-wrap clearfix">
                <ul class="fl selectlist clearfix">
                    <li :class="selectType == '' ? 'active' : '' " v-on:click="clearType">全部</li>
                    <li :class="selectType == 'newsType' ? 'active' : '' ">
                        <!--资讯-->
                        <el-select v-model="newsType"  v-on:change = 'newsTypeChange' placeholder="资讯">
                            <el-option
                                    v-for="(value,key) in articleType['资讯']"
                                    :label="key"
                                    :value="value">
                            </el-option>
                        </el-select>
                    </li>

                    <li :class="selectType == 'guideType' ? 'active' : '' ">
                        <!--攻略-->
                        <el-select v-model="guideType" v-on:change = 'guideTypeChange' placeholder="攻略">
                            <el-option
                                    v-for="(value,key) in articleType['攻略']"
                                    :label="key"
                                    :value="value">
                            </el-option>
                        </el-select>
                    </li>

                    <li :class="selectType == 'caseType' ? 'active' : '' ">
                        <!--案例-->
                        <el-select v-model="caseType" v-on:change = 'caseTypeChange' placeholder="案例">
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
                    <input class="fl" type="text" v-model="searchKeyword" placeholder="输入关键字" v-on:keypress = 'searchSubmit'>
                    <button class="fr searchbtn" v-on:click="bindGetArticle">搜索</button>
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
                <span class="more" href="javascript:;" @click="moreArticle">加载更多<i class="icon-arrowbottom"></i></span>
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
                    <li class="clearfix" v-for="item in hotArticle">
                        <div class="fl img">
                            <a target="_blank" :href="'/article/'+item.id"><img v-bind:src="item.first_picture.url"></a>
                        </div>
                        <div class="fr text">
                            <a class="title" target="_blank" :href="'/article/'+item.id">{{item.title}}</a>
                            <p class="time">{{item.created_at}}</p>
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
                newsType: '',
                guideType : '',
                caseType : '',
                articles:[],
                articleTags : [],
                articleType : [],
                recommends:[1,2,3,4,5,6],
                selectType : '',
                selectTypeKey : '', // 文章类型
                searchKeyword : '', // 搜索关键词
                hotArticle : [], //热门文章
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
//                    console.log(data);
                    self.articleType = data.information_type;
//                    self.newsType = 1;
//                    self.guideType = 23;
//                    self.caseType = 6;
                    self.selectType = '';
                },
                error : function () {
                    console.log('error'.window.YUNAPI.articleTags)
                }
            });

            $.ajax({
                url: window.YUNAPI.articleHot,
                success: function (data) {
                    self.hotArticle = data.hot_recommend;
                },
                error : function () {
                    console.log('error'.window.YUNAPI.articleHot)
                }
            });

            self.$parent.loading = true; //显示loading 状态
            this.getArticle() // 请求文章列表
        },
        methods: {
            newsTypeChange : function (e) {
                this.selectType = "newsType";
                this.selectTypeKey = e;
                this.getArticle();

            },
            guideTypeChange : function (e) {
                this.selectType = "guideType";
                this.selectTypeKey = e;
                this.getArticle();
            },
            caseTypeChange : function (e) {
                this.selectType = "caseType";
                this.selectTypeKey = e;
                this.getArticle();
            },
            searchSubmit : function () {
                if(event.keyCode==13){
                    this.getArticle();
                }
            },
            clearType : function () {
                this.selectType = '';
                this.selectTypeKey = '';
                this.getArticle();
            },
            moreArticle : function () {
                var lastId = this.articles[this.articles.length - 1].id;
                this.getArticle(lastId,'more');
            },
            bindGetArticle : function () {
                this.getArticle();
            },
            getArticle : function (id,method) { //请求 文章列表

                var self= this;
                self.$parent.loading = true;

                var urlData = {
                    page : 1,
                    i_keyword : self.searchKeyword,
                    i_class : '',
                    i_type : self.selectTypeKey,
                    i_id : id || ''
                };
                $.ajax({
                    url: window.YUNAPI.article,
                    context: document.body,
                    data : urlData,
                    success: function (data) {
//                    self.cities = data.cities;
                        if(method == 'more'){
                            self.articles = self.articles.concat(data.information);
                        }else{
                            self.articles = data.information;
                        }

                        self.$parent.loading = false;
                    }
                });
            }
        }

    }
</script>
