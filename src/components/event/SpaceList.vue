<template>
    <div class="w1200 mt20 pagination-fore-end">
        <div class="condition-wrap clearfix">
            <div class="condition-sp">
                <span class="icon-text">区域范围</span>
                <p class="select-text">全部</p>

            </div>
            <div class="condition-sp">
                <span class="icon-text">区域范围</span>
                <p class="select-text">全部</p>
                <div class="sub-condition clearfix">
                    <ul class="condition-left">
                        <li>全部</li>
                        <li>全部</li>
                        <li>全部</li>
                        <li>黄埔区</li>
                    </ul>
                    <ul class="condition-right">
                        <li>
                            <el-checkbox class="checkbox" checked>备选项</el-checkbox>
                        </li>
                        <li>
                            <el-checkbox class="checkbox" checked>备选项</el-checkbox>
                        </li>
                        <li>
                            <el-checkbox class="checkbox" checked>备选项</el-checkbox>
                        </li>
                        <li>
                            <el-checkbox class="checkbox" checked>备选项</el-checkbox>
                        </li>
                        <li>
                            <el-checkbox class="checkbox" v-model="checked" checked>备选项</el-checkbox>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="condition-sp">
                <span class="icon-text">区域范围</span>
                <p class="select-text">全部</p>
            </div>
            <div class="condition-sp">
                <span class="icon-text">区域范围</span>
                <p class="select-text">全部</p>
            </div>
            <div class="condition-sp">
                <span class="icon-text">区域范围</span>
                <p class="select-text">全部</p>
            </div>
            <button class="condition-search">搜索</button>
        </div>
        <div class="search-content">
            <div class="w1200 mt20 clearfix">
                <div class="space-list">
                    <div class="search-input-wrap clearfix">
                        <div class="inputbox">
                            <div class="fl change-city">
                                <span class="">上海</span>
                            </div>
                            <input class="" type="text" placeholder="商圈／地标／机场／火车站／场地名">
                            <button class="searchbtn">搜索</button>
                        </div>
                    </div>
                    <div class="list">
                        <ul class="recommend recommend-sub list-piece clearfix">
                            <li v-for="spacesub in spacesubs">
                                <div class="img">
                                    <a href="/space/dtl" target="_blank">
                                        <img :src="spacesub.img_paths.url">
                                    </a>
                                </div>
                                <div class="text">
                                    <a class="title" href="javascript:;">{{spacesub.site_name}}</a>
                                    <div class="price">￥{{spacesub.market_price}}/元 {{spacesub.units}}</div>
                                    <div class="textinfo">
                                        <p><span>场地类型：</span>{{spacesub.keyword}}</p>
                                        <p><span>落位区域：</span>{{spacesub.through_three_areas}}</p>
                                        <p><span>容纳人数：</span>{{spacesub.site_max_people}}人</p>
                                        <div class="numb clearfix">
                                            <p><span>面积：</span>{{spacesub.area}}㎡</p>
                                            <p><span>层高：</span>{{spacesub.height}}m</p>
                                        </div>
                                        <p><span>地址：</span>{{spacesub.city_name}}&nbsp;{{spacesub.areas}}&nbsp;{{spacesub.address}}</p>
                                    </div>

                                    <a class="btnjoin" href="javascript:;">加入询价</a>
                                    <!--<a class="btnjoin hv" href="javascript:;">已加入询价单</a>-->
                                </div>
                            </li>
                        </ul>
                    </div>
                    <el-pagination
                            @sizechange="handleSizeChange"
                            @currentchange="handleCurrentChange"
                            :current-page="5"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000">
                    </el-pagination>
                </div>
                <div class="search-left">
                    <div class="search-left-map"></div>
                    <div class="enquiry-tip">
                        您还没有添加任何空间!
                    </div>
                    <button class="key-enquiry-btn">
                        一键询价
                        <span class="enquiry-num">0</span>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import Lib from 'assets/Lib.js'

    import 'assets/css/component.css';
    import 'assets/css/hold-event.css';
    export default {
        data() {
            return {
                checked: true,
                spacemains: [
                    1, 2, 3, 4, 5, 6
                ],
                spacesubs: [ ],
                page: 1,
                recordCount: 205
            }
        },
        mounted () {
            var self = this;
            $.ajax({
                url: window.YUNAPI.SpaceList,
                success:function (data) {
                    self.spacesubs=data.spaces;

                    //场地类型
                    for(var i = 0; i < self.spacesubs.length - 1; i++){
                        self.spacesubs[i].keyword = self.spacesubs[i].keyword.replace(',','|');
                    }

                    self.$parent.loading = false;
                }
            });
        },
        components: {},
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>

</style>





