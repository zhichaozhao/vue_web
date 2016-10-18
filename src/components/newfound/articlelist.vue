<template>
    <div class="w1200 newfound clearfix">
        <!--左边文章列表-开始-->
        <div class="fl left clearfix">
            <div class="s-wrap clearfix">
                <ul class="fl selectlist clearfix">
                    <li>全部</li>
                    <li>
                        <!--资讯-->
                        <el-select v-model="valnews">
                            <el-option
                                    v-for="item in news"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </li>

                    <li>
                        <!--攻略-->
                        <el-select v-model="valguides">
                            <el-option
                                    v-for="item in guides"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </li>

                    <li>
                    <!--案例-->
                        <el-select v-model="valcases">
                            <el-option
                                    v-for="item in aboutcases"
                                    :label="item.label"
                                    :value="item.value">
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
                    <li class="clearfix">
                        <div class="fl img">
                            <a href="javascript:;"><img src=""></a>
                            <span class="tag red">活动</span>
                        </div>
                        <div class="fr text">
                            <a class="title" href="javascript:;">2016年创意年会演出节目和晚会节目单</a>
                            <p>一年到头了，终于有个机会放松一下，就别搞得那么苦大仇深的了，也别做领导报告了，让大家释放下压力，搞搞团队文化建设，挺好的。娱乐归娱乐，该正经的时候还得正经。这一年公司的发展情况，各部门的发展情况，个人的发展情况，都可以在年会中有所表现。</p>
                            <div class="numb-time clearfix">
                                <p class="fl">2016-08-28</p>
                                <ul class="fr numbs clearfix">
                                    <li class="fl"><i class="icons icon-skim"></i>233</li>
                                    <li class="fr"><i class="icons icon-zan"></i>54</li>
                                </ul>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        <!--左边文章列表-结束-->

        <div class="fr right"></div>
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
                valnews:'选项1',
                valguides:'选项1',
                valcases:'选项1',
                news: [{
                    value: '选项1',
                    label: '活动'
                }, {
                    value: '选项2',
                    label: '空间'
                }, {
                    value: '选项3',
                    label: '创意'
                }, {
                    value: '选项4',
                    label: '榜单'
                }, {
                    value: '选项5',
                    label: '行业'
                }, {
                    value: '选项5',
                    label: '推广'
                }],
                guides:[
                    {
                        value: '选项1',
                        label: '攻略'
                    },
                    {
                        value: '选项2',
                        label: '攻略'
                    }],
                aboutcases:[
                    {
                        value: '选项1',
                        label: '案例'
                    },
                    {
                        value: '选项2',
                        label: '案例'
                    }]
            }
        },
        components: {

        },
        ready(){

        },
        methods: {
            //获取活动人数、类型
        }

    }
</script>
