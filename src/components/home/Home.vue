<template>
    <div class="home">
        <!--banner板块-开始-->
        <div class="banner-search">
            <!--banner部分-->
            <div class="banner">
                <img src="/static/images/home/banner1.png">
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
                    <div class="result">
                        <input type="text" value="" placeholder="做什么">
                        <i class="icon-updown"></i>
                    </div>
                    <div class="cont dowhat-contlist hide">
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
                            <li class="fl"><i class="scan"></i>233</li>
                            <li class="fr"><i class="zan"></i>54</li>
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
                value: ''
            }

        },
        components: {},
        ready(){

        },
        methods: {}
    }
</script>

<style scoped>
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

    .btns .btn {
        width: 40px;
        height: 80px;
        background: rgba(0, 0, 0, .5);
        position: absolute;
        top: 50%;
        margin-top: -40px;
    }

    .btns .btn:hover {
        background: rgba(0, 0, 0, 1);
    }

    .btns .btn span {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -4px;
        margin-top: -8px;
    }

    .btns .btnleft {
        left: 50%;
        margin-left: -600px;
    }

    .btns .btnright {
        right: 50%;
        margin-right: -600px;
    }

    .btns .icon-arrowleft,
    .btns .icon-arrowright {
        width: 13px;
        height: 13px;
        border-width: 2px;
        border-color: #fff;
    }

    .banner-search {
        width: 100%;
        min-width: 1200px;
        height: 533px;
        background: #ddd;
        overflow: hidden;
        position: relative;
    }

    .banner {
        width: 1920px;
        height: 533px;
        background: #ddd;
        position: absolute;
        left: 50%;
        margin-left: -960px;
        top: 0;
        overflow: hidden;
        z-index: 1;
    }

    .search {
        width: 1000px;
        padding: 0 100px;
        position: absolute;
        bottom: 100px;
        left: 50%;
        margin-left: -600px;
        z-index: 2;
    }

    .search .select {
        position: relative;
    }

    .search .select:hover .result .icon-updown {
        transform: rotate(-180deg);
        -ms-transform: rotate(-180deg); /* IE 9 */
        -moz-transform: rotate(-180deg); /* Firefox */
        -webkit-transform: rotate(-180deg); /* Safari 和 Chrome */
        -o-transform: rotate(-180deg); /* Opera */
    }

    .search .select .cont {
        position: absolute;
        left: 0;
        top: 52px
    }

    .search .result {
        width: 110px;
        height: 50px;
        padding: 0 20px;
        background: #fff;
        position: relative;
    }

    .search .result input {
        width: 100%;
        height: 50px;
        line-height: 50px;
    }

    .search .result .icon-updown {
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

    .classifyselected li:hover .numb {
        transform-origin: -82px 85px;
        -webkit-transform-origin: -82px 85px;

        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
    }

    .citysubject.section {
        width: 100%;
        min-width: 1200px;
        overflow: hidden
    }

    .citysubject h3 {
        width: 1200px;
        margin: 0 auto;
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
        max-height: 57px;
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
        width: 25px;
        height: 25px;
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
        height: 69px;
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


</style>





