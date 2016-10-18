<template>
    <div>
        <div class="w1200 topback">
            <a class="back" href="javascript:;"><i class="icon-arrowleft"></i> 返回搜索</a>
        </div>

        <div class="w1200 events-dtlbox clearfix">
        <div class="spacedtl clearfix">
            <div class="fl logo"><img src=""></div>
            <div class="fl evdtlcont">
                <div class="title">
                    <h2>上海蒲公英会议中心－北中环</h2>
                    <div class="icons-text">
                        <i class="icon-place"></i>
                        <p class="title">区域位置：上海市浦东新区世纪公园长柳路58号</p>
                    </div>
                    <a class="collect" href="javascript:;">
                        <i class="icon-collect"></i>
                        <span>收藏</span>
                    </a>
                </div>
                <div class="intro">
                    <h5>场地介绍</h5>
                    <p>京金所多功能厅是京金所（北京）信息技术有限公司旗下用于组织沙龙、培训等公开交流互动的场地。“我所地为众所用”，我们关注每个行业组织的活动需求，通过与协会、青年团体、金融、MBA联盟、企业组织合作，共同为每个参会的个人提供有价值的活动体验和优质服务，使多功能厅成为人脉链接的桥梁。 合作，共同发现价值。我们希望不仅为需求方提供舒适的环境和服务，更能一起提升并创造价值。 自2015年合作以来，目前举办了20场，参与的人数达到了近千人。 免费茶水、果盘供应，全程贴心一站式服务。 凡到场者均有精美礼品赠送</p>
                </div>
                <div class="reason">
                    <h6>推荐理由</h6>
                    <div class="icons-text">
                        <i class="icon-zan"></i>
                        <p class="title">时尚汇聚地，潮流风向标</p>
                    </div>
                </div>
            </div><!--evdtlcont-end-->
            <div class="fr evdtllist">
                <div class="title">
                    <i class="icons icon-space"></i>
                    <p>拥有<span class="red">3</span>个空间</p>
                </div>
                <div class="cont">
                    <dl>
                        <i class="icons icon-pnumbs"></i>
                        <dt>最大容纳</dt>
                        <dd>800人</dd>
                    </dl>
                    <dl>
                        <i class="icons icon-assort"></i>
                        <dt>场地配套</dt>
                        <dd>
                            <span>洗手间</span>｜
                            <span>化妆间</span>｜
                            <span>空调暖气</span>｜
                            <span>网络WIFI</span> ｜
                            <span>货运电梯</span>｜
                            <span>灯光音响</span>｜
                            <span>投影LED</span>
                        </dd>
                    </dl>
                    <dl>
                        <i class="icons icon-busintype"></i>
                        <dt>行业类型</dt>
                        <dd>
                            <span>通用</span> ｜
                            <span>IT类</span>｜
                            <span>公益事业</span>｜
                            <span>教育</span>｜
                            <span>通讯</span>
                        </dd>
                    </dl>
                    <dl>
                        <i class="icons icon-evtype"></i>
                        <dt>活动类型</dt>
                        <dd>
                            <span>文体娱乐</span>｜
                            <span>会议会务</span>｜
                            <span>培训演讲</span>
                        </dd>
                    </dl>
                </div>
            </div><!--evdtllist-end-->
        </div>
        <!--spacedtl-end-->

        <!--内容部分-->
        <div class="spacecont clearfix">
            <div class="fl left">
                <div class="spacetitle">场地空间</div>
                <ul class="recommend clearfix">
                    <li v-for="spacesub in spacesubs">
                        <div class="img">
                            <a href="javascript:;">
                                <img src="/static/images/home/imgmain1.png">
                            </a>
                        </div>
                        <div class="text">
                            <a class="title" href="javascript:;">04－中会议室</a>
                            <div class="textinfo">
                                <p>最大容纳：800人</p>
                                <p>落位区域：三楼会议室</p>
                                <p>空间面积：60㎡</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="fr right">
                <!--相关专题-->
                <div class="rtsubject">
                    <div class="spacetitle">相关专题</div>
                    <ul class="rtspacelist">
                        <li class="clearfix">
                            <a class="fl img" href="javascript:;">
                                <img src="">
                            </a>
                            <a class="fr text" href="javascript:;">
                                魔都最具创意的十大会务中心，不仅仅只是为了开会
                            </a>
                        </li>
                        <li class="clearfix">
                            <a class="fl img" href="javascript:;">
                                <img src="">
                            </a>
                            <a class="fr text" href="javascript:;">
                                魔都最具创意的十大会务中心，不仅仅只是为了开会
                            </a>
                        </li>
                    </ul>
                </div>

                <!--相关资讯-->
                <div class="rtinformation">
                    <div class="spacetitle">相关资讯</div>
                    <ul class="rtspacelist">
                        <li class="clearfix">
                            <a class="fl img" href="javascript:;">
                                <img src="">
                            </a>
                            <a class="fr text" href="javascript:;">
                                魔都最具创意的十大会务中心，不仅仅只是为了开会
                            </a>
                        </li>
                    </ul>
                </div>

            </div><!--right-end-->
        </div><!--spacecont-end-->
    </div><!--events-dtlbox-end-->
    </div>

</template>

<script>
    import Lib from 'assets/Lib.js';
    //import Jquery from 'assets/jquery-3.1.0.min.js'

    import 'assets/css/component.css';
    import 'assets/css/hold-event.css';

    import moduleHeader from 'components/module-header';
    import moduleFooter from 'components/module-footer';

    export default {
        data() {
            return {
                phone:'',
                password:'',
                username:'',
                spacesubs:[
                        1,2,3
                ]
            }
        },
        components: {
            moduleHeader,moduleFooter
        },
        ready(){},
        methods: {},

        //记住密码
        rememberPassword(){}
    }

</script>






