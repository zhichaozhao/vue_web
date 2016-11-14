<template>
    <div class="space-dtl-wrap">
        <div class="w1200 topback">
            <a class="back" href="javascript:;"><i class="icon-arrowleft"></i> 返回空间列表</a>
        </div>

        <div class="w1200 map-container clearfix">
            <div class="fl mapcontleft">
                <div class="mapsearch-warp clearfix">
                    <input class="fl adress-name" type="text" placeholder="输入地址／名称">
                    <div class="fl distance">
                        <el-select v-model="distancetype">
                            <el-option
                                    v-for="item in distance"
                                    :label="item.name"
                                    :value="item.name">
                            </el-option>
                        </el-select>
                    </div>
                    <button class="fr searchbtn">搜索</button>
                </div>

                <div class="mapcont-wrap">
                    <ul class="selectlist clearfix">
                            <li>
                                <!--城市-->
                                <el-select v-model="citytype">
                                    <el-option
                                            v-for="item in city"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>

                            <li>
                                <!--场地类型-->
                                <el-select v-model="placetype">
                                    <el-option
                                            v-for="item in place"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>

                            <li>
                                <!--可用面积-->
                                <el-select v-model="areatype">
                                    <el-option
                                            v-for="item in area"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                            <li>
                                <!--推荐排序-->
                                <el-select v-model="sorttype">
                                    <el-option
                                            v-for="item in sort"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                        </ul>
                    <ul class="mapcont">
                        <li class="clearfix">
                            <a href="javascript:;" class="img"><img src="" ></a>
                            <div class="pcont ">
                                <a class="title" href="javascript:;">上海蒲公英会议中心－北中环</a>
                                <div class="price red">
                                    ¥3000/元 天 <span>起</span>
                                </div>
                                <p>场地类型：酒店</p>
                                <p>场地面积：500㎡</p>
                                <p>地址：上海市浦东新区上南路长柳路13弄45号</p>
                                <a class="btnjoin" href="javascript:;">加入询价</a>
                            </div>
                        </li>
                        <li class="clearfix">
                            <a href="javascript:;" class="img"><img src="" ></a>
                            <div class="pcont">
                                <a class="title" href="javascript:;">上海蒲公英会议中心－北中环</a>
                                <div class="price">
                                    ¥3000/元 天 <span>起</span>
                                </div>
                                <p>场地类型：酒店</p>
                                <p>场地面积：500㎡</p>
                                <p>地址：长柳路58号</p>
                                <a class="btnjoin hv" href="javascript:;">已加入询价单</a>
                            </div>
                        </li>
                        <li class="clearfix">
                            <a href="javascript:;" class="img"><img src="" ></a>
                            <div class="pcont">
                                <a class="title" href="javascript:;">上海蒲公英会议中心－北中环</a>
                                <div class="price">
                                    ¥3000/元 天 <span>起</span>
                                </div>
                                <p>场地类型：酒店</p>
                                <p>场地面积：500㎡</p>
                                <p>地址：长柳路58号</p>
                                <a class="btnjoin" href="javascript:;">加入询价</a>
                            </div>
                        </li>
                    </ul>
                </div><!--mapcont-end-->
            </div><!--mapcontleft-end-->

            <!--地图-->
            <div class="fr spacemap-wrap">
                <div class="spacemap"></div>


                <div class="pcont map-pcont">
                    <a class="title" href="javascript:;">上海蒲公英会议中心－北中环</a>
                    <div class="price red">
                        ¥3000/元 天 <span>起</span>
                    </div>
                    <p>场地类型：酒店</p>
                    <p>场地面积：500㎡</p>
                    <p>地址：上海市浦东新区上南路长柳路13弄45号</p>
                    <a class="btnjoin" href="javascript:;">加入询价</a>
                </div>

                <button class="key-enquiry-btn">
                    一键询价
                    <span class="enquiry-num">0</span>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    import Lib from 'assets/Lib.js';

    require ('assets/css/component.css');
    require ('assets/css/hold-event.css');

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
                ]
            }
        },

        components: {},
        mounted () {
            var self=this;
            self.$parent.loading = false;
        },
        methods: {
            tapClick(event){
                this.activeTab = event.target.innerHTML;
            },
        },

    }

</script>
<style>
    .map-container *{box-sizing: border-box;}
    /*左侧内容部分*/
    .map-container{margin-top: 30px;}
    .mapcontleft{
        width: 500px;
    }
    .mapsearch-warp .adress-name{
        width: 250px;
        height: 50px;
        line-height: 50px;
        border: 1px solid #ccc;
        padding: 10px;
        font-size: 18px;
    }
    .mapsearch-warp .distance{
        width: 126px;
        height: 50px;
        background: #fff;
        border: 1px solid #ccc;
        margin: 0 2px;
    }
    .mapsearch-warp .searchbtn{
        background:#272335;
        width:120px;
        height:50px;
        line-height: 50px;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
    }
    .mapcont-wrap{margin-top: 30px;}
    .mapcont-wrap .selectlist{
        border-left: 1px solid #ccc;
    }
    .mapcont-wrap .selectlist li{
        float: left;
        width: 125px;
        height: 40px;
        border: 1px solid #ccc;
        border-left: 0;
        background: #fff;
        box-sizing: border-box;
    }
    .mapcont-wrap .selectlist li:last-child{width: 124px;}
    .mapcont{
        width: 100%;
        background: #fff;
        border: 1px solid #ccc;
        border-top: 0;
    }
    .mapcont li{
        width: 100%;
        min-height: 142px;
        padding: 20px 20px 10px;
        border-bottom: 2px solid #ccc;
    }
    .mapcont li:last-child{border-bottom: 0;}
    .mapcont li:hover{
        background: #f4f4f4;
    }
    .mapcont li .img{
        float: left;
        width: 150px;
        height: 100px;
    }
    .pcont{
        float: left;
        background: #fff;
        width: 308px;
        padding-left: 10px;
        position: relative;
    }
    .pcont .title{
        display: block;
        font-size: 18px;
        line-height: 18px;
        color: #000;
        margin-bottom: 7px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .pcont .title:hover{color: #e92332;}
    .pcont .price{
        margin: 3px 0;
    }
    .pcont .price span{
        font-size: 12px;
    }
    .pcont p{
        width: 195px;
        color: #666;
        line-height: 1.3em;
    }
    .pcont .btnjoin{
        display: block;
        background:#fff;
        border:1px solid #000000;
        width:100px;
        height:30px;
        color: #000;
        text-align: center;
        line-height: 30px;
        position: absolute;
        top: 70px;
        right: 0;
    }
    .mapcont .btnjoin.hv{
        background:#e92332;
        color: #fff;
        border-color: #e92332;
    }


        /*右侧地图部分*/
    .spacemap-wrap{
        width: 680px;
        height: 1000px;
        background: #333;
        position: relative;
    }
    .map-pcont{
        position: absolute;
        left: 20px;
        top:100px;
        width: 338px;
        padding: 20px;
        border: 1px solid #ccc;
    }
    .map-pcont .btnjoin{
        right: 20px;
    }
    .spacemap-wrap .key-enquiry-btn{
        display: block;
        width: 280px;
        height: 60px;
        font-size: 24px;
        color: #fff;
        background-color: #e92332;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .spacemap-wrap .enquiry-num{
        position: relative;
        height: 24px;
        width: 24px;
        display: inline-block;
        top:-12px;
        background-color: #fff;
        color: #000;
        line-height: 24px;
        font-size: 14px;
        border-radius: 12px;
    }
</style>






