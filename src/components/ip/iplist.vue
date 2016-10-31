<template>

    <div class="w1200 ip-page">

        <div class="module-header">
            <span>IP类别</span>
        </div>
        <div class="ip-category clearfix">
            <a href="">全部</a>
            <a href="">动漫</a>
            <a href="">卡通</a>
            <a href="">影视</a>
            <a href="">游戏</a>
            <a href="">市集</a>
            <a href="">市集</a>
            <a href="">市集</a>
            <a href="">市集</a>
            <a href="">游戏</a>
            <a href="">市集</a>
            <a href="">市集</a>
            <a href="">市集</a>
            <a href="">市集</a>
        </div>
        <div class="concentration">
            <ul class="clearfix">
                <li v-for="i in s">
                    <a href=""><img src="http://placehold.it/590x400" alt=""></a>
                    <div class="rec-dtl">
                        <a href="" class="op-coop">合作咨询</a>
                        <p class="title">冰川时代主题快闪店</p>
                        <p class="tag">ICE AGE 大电影</p>
                        <div class="dl-wrap clearfix">
                            <dl><dt>类别 : </dt><dd>影视</dd></dl>
                            <dl><dt>来源 :</dt><dd>国际</dd></dl>
                            <dl><dt>场地面积 :</dt><dd>100-500m</dd></dl>
                        </div>
                        <div class="">
                            <dl><dt>适用人群 :</dt><dd>冰川时代影迷</dd></dl>
                            <dl><dt>场地面积 :</dt><dd>面议</dd></dl>
                        </div>
                        <p class="des">是继Playze与Tony合作有机农庄之后的第二个项目。
                            多利有机屋旨在向上海市民展示他们的农庄产品及推广有机生活方式，为城市生活居民引入自然生活理念。
                            像素化的方木箱出现在建筑的每一层， 成为空间关联的主线。
                            采用立体化的可移动模块将中央楼梯打造成一个灵活的居善地，这里可以适应演讲，展览，接待，非正式回应等多种活动。</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>

    import Lib from 'assets/Lib.js';
    require ('assets/css/component.css')
    require ('assets/css/ip.css')
    import 'assets/libs/swiper/swiper.js'
    export default {
        data(){
            return {
                s:[1,2,3,4],
                s2:[1,2,3]
            }

        },
        mounted () {

        },
        components: {},

        methods: {

        }
    }
</script>





