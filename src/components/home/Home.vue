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
                                    v-for="item in options"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <ul class="cont citylist hide">
                        <li><a href="javasctipt;;">上海</a></li>
                        <li><a href="javasctipt;;">北京</a></li>
                    </ul>
                </div>
                <!--城市选择-结束-->

                <!--做什么-->
                <div class="fl select ml20 dowhat">
                    <div class="result" @click="showdowhat=!showdowhat">
                        <input type="text" value="" placeholder="做什么">
                        <i class="el-input__icon el-icon-caret-bottom"></i>
                    </div>
                    <div class="cont dowhat-contlist" v-show="showdowhat">
                        <dl class="clearfix">
                            <dt class="fl">办活动</dt>
                            <dd class="fl">
                                <a href="javascript:;">展览展示</a>
                                <a href="javascript:;">商业发布</a>
                                <a href="javascript:;">晚会年会</a>
                                <a href="javascript:;">展览展示</a>
                                <a href="javascript:;">商业发布</a>
                                <a href="javascript:;">晚会年会</a>
                                <a href="javascript:;">展览展示</a>
                                <a href="javascript:;">商业发布</a>
                                <a href="javascript:;">晚会年会</a>
                                <a href="javascript:;">展览展示</a>
                                <a href="javascript:;">商业发布</a>
                                <a href="javascript:;">晚会年会</a>
                            </dd>
                        </dl>
                        <dl class="clearfix">
                            <dt class="fl">要开店</dt>
                            <dd class="fl">
                                <a href="javascript:;">Pop Up Store</a>
                                <a href="javascript:;">店中店</a>
                                <a href="javascript:;">市集/展</a>
                            </dd>
                        </dl>
                        <dl class="clearfix">
                            <dt class="fl">IP项目</dt>
                            <dd class="fl">
                                <a href="javascript:;">亲子</a>
                                <a href="javascript:;">卡通</a>
                                <a href="javascript:;">艺术</a>
                                <a href="javascript:;">亲子</a>
                                <a href="javascript:;">卡通</a>
                                <a href="javascript:;">艺术</a>
                                <a href="javascript:;">亲子</a>
                                <a href="javascript:;">卡通</a>
                                <a href="javascript:;">艺术</a>
                                <a href="javascript:;">亲子</a>
                                <a href="javascript:;">卡通</a>
                                <a href="javascript:;">艺术</a>
                                <a href="javascript:;">亲子</a>
                                <a href="javascript:;">卡通</a>
                                <a href="javascript:;">艺术</a>
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
        <!--快捷链接块-结束-->

        <!--城市精选专题-开始-->
        <div class="section citysubject clearfix">
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
                <ul class="subject-list"></ul>
            </div>
            <a href="javascript:;" class="btnlookmore">查看更多专题</a>
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
        <div class="section spacerecommend clearfix">
            <h3>空间推荐</h3>
            <ul class="recommend recommend-main clearfix">
                <li v-for="spacemain in spacemains">
                    <div class="img">
                        <a href="javascript:;">
                            <img src="/static/images/home/imgmain1.png">
                        </a>
                        <span class="tags">上海</span>
                    </div>
                    <div class="text">
                        <a class="title" href="javascript:;">上海电影场-五号棚</a>
                        <div class="price">￥50000/元 天</div>
                        <div class="textinfo">
                            <p><span>场地类型：</span>高端场所 | 主题派对 | 年会晚会 | 颁奖晚会</p>
                            <p><span>落地区域：</span>主题餐厅</p>
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
            <ul class="recommend recommend-sub clearfix">
                <li v-for="spacesub in spacesubs">
                    <div class="img">
                        <a href="javascript:;">
                            <img src="/static/images/home/imgmain1.png">
                        </a>
                    </div>
                    <div class="text">
                        <a class="title" href="javascript:;">上海电影场-五号棚</a>
                        <div class="price">￥50000/元 天</div>
                        <div class="city">杭州</div>
                        <div class="textinfo">
                            <p><span>场地类型：</span>高端场所 | 主题派对</p>
                            <p><span>落地区域：</span>主题餐厅</p>
                            <p><span>地址：</span>上海市 黄浦区|南京东路789号</p>
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
                <li class="clearfix" v-for="ipinfo in ipinfos">
                    <a class="maskbtn" href="javascript:;">
                        <p>合作咨询</p>
                    </a>
                    <div class="img">
                        <img src="">
                    </div>
                    <div class="textinfo">
                        <div class="title">冰川时代主题快闪店</div>
                        <p class="tags">
                            <span>ICE AGE</span>
                            <span>大电影</span>
                        </p>
                        <div class="group">
                            <p>类别：影视</p>
                            <p>来源：国际</p>
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
        <div class="section ipwinchuang clearfix">
            <h3>场地配套服务</h3>
            <div class="cont">
                <div class="btns">
                    <a class="btn btnleft" href="javascript:;">
                        <span class="icon-arrowleft"></span>
                    </a>
                    <a class="btn btnright" href="javascript:;">
                        <span class="icon-arrowright"></span>
                    </a>
                </div>

                <ul class="iplist"></ul>
            </div>

        </div>
        <!--场地配套服务-结束-->

        <!--新发现-开始-->
        <div class="section newfound clearfix">
            <h3>新发现</h3>
            <div class="cont clearfix">
                <div class="fl info info-big">
                    <a class="img" href="javascript:;">
                        <img src="">
                    </a>
                    <a class="text" href="javascript:;">
                        内地音乐节产业链风头正劲 云SPACE布局文艺非标“地主”
                    </a>
                </div>
                <ul class="infolist fl clearfix">
                    <li class="info info-normal" v-for="newfoundinfo in newfoundinfos">
                        <a class="img" href="javascript:;">
                            <img src="">
                        </a>
                        <a class="text" href="javascript:;">
                            云SPACE护航《微微一笑很倾城》开启泛娱乐IP多维度营销先河
                        </a>
                    </li>
                </ul>
                <ul class="fr textinfolist clearfix">
                    <li>
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>希仕会游艇福利，约女神一起出海</p>
                            </div>
                            <p>还在犹豫周末约哪里？玩什么？ 希仕会游艇俱乐部，普通人约不了的老码头空间。 希仕会联合云space秋季福利套餐。</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>希仕会游艇福利，约女神一起出海</p>
                            </div>
                            <p>还在犹豫周末约哪里？玩什么？ 希仕会游艇俱乐部，普通人约不了的老码头空间。 希仕会联合云space秋季福利套餐。</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>希仕会游艇福利，约女神一起出海</p>
                            </div>
                            <p>还在犹豫周末约哪里？玩什么？ 希仕会游艇俱乐部，普通人约不了的老码头空间。 希仕会联合云space秋季福利套餐。</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="title">
                                <i class="point"></i>
                                <p>希仕会游艇福利，约女神一起出海</p>
                            </div>
                            <p>还在犹豫周末约哪里？玩什么？ 希仕会游艇俱乐部，普通人约不了的老码头空间。 希仕会联合云space秋季福利套餐。</p>
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
                <li v-for="i in cases">
                    <a href="javascript:;" class="img">
                        <img src="">
                    </a>
                    <div class="textinfo">
                        <a class="title" href="javascript:;">《国家地理》跑进国家会展中心 实体商业空间添加内容场景</a>
                        <div class="tags">
                            <span>发布会</span>
                            <span>展览</span>
                            <span>路演</span>
                        </div>
                        <ul class="numbs clearfix">
                            <li class="fl"><i class="icons icon-skimbg"></i>233</li>
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
    //import Jquery from 'assets/jquery-3.1.0.min.js'
    import 'assets/css/component.css';
    import 'assets/css/home.css';
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
                newfoundinfos: [
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
                showdowhat: 0
            }

        },
        components: {},
        ready(){

        },
        methods: {}
    }
</script>





