<template>
    <div class="w1200 newfound clearfix" v-if="!this.$parent.loading">
        <!--左边文章详情-开始-->
        <div class="fl left clearfix">
            <ul class="article-location clearfix">
                <li><a href="">资讯 <i class="icon-arrowright"></i></a></li>
                <li><a href="">全部 <i class="icon-arrowright"></i></a></li>
                <li><a href="">{{article.title}}</a></li>
            </ul>
            <div class="article-dtl">
                <h2>{{article.title}}</h2>
                <div class="describe clearfix">
                    <ul class="fl desc clearfix">
                        <li>分类：活动</li>
                        <li>作者：{{article.source}}</li>
                        <li>{{article.creation_time}}</li>
                    </ul>
                    <ul class="fr clearfix">
                        <li><i class="icons icon-skim"></i> {{article.viewed}}</li>
                        <li><i class="icons icon-zan"></i> {{article.up_number}}</li>
                    </ul>
                </div>

                <div class="textinfo" v-html="article.details">

                    <!--<p>营造气氛，共享娱乐</p>-->
                    <!--<p>一年到头了，终于有个机会放松一下，就别搞得那么苦大仇深的了，也别做领导报告了，让大家释放下压力，搞搞团队文化建设，挺好的。</p>-->
                    <!--<p>2、总结业绩，关注成长</p>-->
                    <!--<p>娱乐归娱乐，该正经的时候还得正经。这一年公司的发展情况，各部门的发展情况，个人的发展情况，都可以在年会中有所表现。但要注意表达方式，还是参照第一条，娱乐着来，准保出彩。</p>-->
                    <!--<p>3、找找问题，委婉表达。</p>-->
                    <!--<p>总结嘛，总有好的一面，也有不好的一面。把那些不是原则性，不会引起根本矛盾的小问题，借机点一点，也当是对公司做的贡献了。趁领导也在场，幽默的捅一下窗户纸，大家会心一笑，成不成的就看领导有没有放心上了。比如要加薪神马的不提白不提。</p>-->
                    <!--<p>二、年会创意节目有哪些内容：</p>-->
                    <!--<p>且不论节目表现形式，一定要把握好节目的内容。不管是歌舞还是特效，都要表达内容，而内容要出彩，基本没办法靠公司以外的人实现的，谁能比你更清楚公司这一 年的发展情况啊。所以，内容方面还是找找团队内部谁比较有才的，花点心思执个笔，当然，很多东西也是可以群策群力的，团队的智慧永远大于个人。</p>-->

                    <!--<img src="/static/images/openshopbanner.png">-->

                    <!--<p>1.年度热点</p>-->
                    <!--<p>盘点一下当年的各种热点，社会热点、娱乐热点、网络热点……能套的上的尽管往里套，能调侃的尽管拿来调侃，能模仿的尽管拿来模仿。</p>-->
                    <!--<p>2.共鸣</p>-->
                    <!--<p>表达的内容要注意能不能引起同事的共鸣，比如公司加班情况比较严重，大家都深有感触，那就拿出来调侃一下。只要找到共鸣点，你们这个“圈子”的人就会会心的笑。</p>-->
                    <!--<p>3.出位</p>-->
                    <!--<p>表演在可控的范围内可以尽量出位一些，别顾及自己的面子，能反串的就不要正着来，神马面子啊这个时候都要放得下，搞不了自己，怎么搞别人啊。</p>-->
                    <!--<p>4.恶搞</p>-->
                    <!--<p>反正都把自己搞了，那就接着搞搞公司、搞搞同事、搞搞领导，只要不揭人隐私，搞点大家都知道的，平时正式场合不好意思开的玩笑，趁机恶搞一下。领导这个时候也都可以放下身段，主动恶搞自己，娱乐员工嘛，让他们开心了，才能让他们更加卖命的干活。当然，这个恶搞的意思是所有的东西都可以拿来搞，掌握好度就行。</p>-->
                    <!--<p>5.公司年度重大事件</p>-->
                    <!--<p>公司很多都有大事记，这一年公司都发生了哪些重大事件，官方的民间的都可以，拿出来晾一晾，可能很多新员工还不太知道呢，借这个机会传播一下。还有啥特殊的公司传统，也可以拿出来晒晒。</p>-->
                    <!--<p>6.行业特点</p>-->
                    <!--<p>你们公司所在的行业特点，有哪些通病，有哪些笑点，同行间的不同特点，神马眼中体，能总结的总结一把，同事看了可乐，领导看了也开心。</p>-->
                    <!--<p>7.职业特点</p>-->
                    <!--<p>谁都觉得自己干的活苦逼啊，有木有?那就说说有多苦逼吧，你是码农、市场推广、PR、HR、还是销售，哪个不亚历山大。把这辈子的苦水都倒出来吧。</p>-->
                    <!--<p>8.网络流行语</p></p>-->
                    <!--<p>网上流行啥咱就说啥，春晚都跟上网络流行语了，咱还不得在他们前面用一把啊，网络语言年年更新，你就跟着来吧。</p>-->
                    <!--<p>9.温馨</p>-->
                    <!--<p>搞也搞了，闹也闹了，乐也乐乐，一个节目不能只是恶搞的堆砌吧，得有主旋律的部分啊，结束最好能回归到温馨上来。神马叫温馨，温馨就是能让人心里暖融融的，不要喊口号，不要假大空，真心的，亲，要真心的。</p>-->
                    <!--<p>10.业绩成长</p>-->
                    <!--<p>你们公司这么大张旗鼓搞年会，盈利状况很好的有木有，今年业绩大增长的有木有，你们劳苦功高的有木有，该邀功邀功，该表态表态，该涨士气涨士气。记住，这是老板要的。</p>-->
                    <!--<p>查阅更多公司年会方案，企业年会策划方案，年会活动策划，年会节目，年会拍摄，年会游戏，公司年会主持稿，年会背景音乐，年会舞蹈，年会场地上云SPACE。</p>-->
                    <!--<p>1.拓展年会</p>-->
                    <!--<p>作为激扬士气，部署战略，制定目标，展示团队风采，奏响新一年度工作的序曲，传统的会议方式采取一人发言众人聆听的单项沟通方式，其弊端是形式单调缺乏互动性和参与性。而会议拓展即变单项宣讲式为共同参与体验互动会议，把拓展训练项目运用到会议中可能有效的让参会人员积极参与到会议主题中，帮助企业和组织不仅达到熔炼团队的培训目标，而且能最大限度的提升年会的会议效果，使之成为让参与者终生难忘的盛事。</p>-->

                </div>

                <ul class="zan-collect clearfix">
                    <li :class=" zcurt ? 'fl zan current' : 'fl zan' " @click="zancurt">
                        <a href="javascript:;"><i class="icons icon-zansm"></i> 点赞</a>
                    </li>
                    <li :class=" ccurt ? 'fr collect current' : 'fr collect' " @click="collectcurt">
                        <a href="javascript:;"><i class="icons icon-collectsm"></i> 收藏</a>
                    </li>
                </ul>
            </div><!--article-dtl-end-->
        </div>
        <!--左边文详情-结束-->

        <div class="fr article-right">
            <h2>场地推荐</h2>
            <ul>
                <li>
                    <a href="">
                        <div class="img">
                            <img src="/static/images/home/imgmain1.png">
                        </div>
                        <div class="text">
                            <h5>上海电影场-五号棚</h5>
                            <div class="price">￥50000/元 天</div>
                            <div class="textinfo">
                                <p><span>地址：</span>上海市 黄浦区 | 南京东路789号</p>
                                <div class="numb clearfix">
                                    <p><span>面积：</span>450㎡</p>
                                    <p><span>容纳人数：</span>200人</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="img">
                            <img src="/static/images/home/imgmain1.png">
                        </div>
                        <div class="text">
                            <h5>上海电影场-五号棚</h5>
                            <div class="price">￥50000/元 天</div>
                            <div class="textinfo">
                                <p><span>地址：</span>上海市 黄浦区 | 南京东路789号</p>
                                <div class="numb clearfix">
                                    <p><span>面积：</span>450㎡</p>
                                    <p><span>容纳人数：</span>200人</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
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
                zcurt: true,
                ccurt: false,
                article : {}
            }
        },
        components: {

        },
        mounted(){
            var self = this;
            $.ajax({
                url: window.YUNAPI.article + "/" + this.$route.params.id, context: document.body, success: function (data) {
//                    self.cities = data.cities;
                    self.article = data.information;
                    self.$parent.loading = false;
                }
            });
        },
        methods: {
            //获取活动人数、类型
            zancurt : function () {
                this.zcurt = !this.zcurt
            },
            collectcurt : function () {
                this.ccurt = !this.ccurt
            }
        }

    }
</script>
