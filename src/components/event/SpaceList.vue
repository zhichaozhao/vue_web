<template>
    <div class="w1200 mt20 pagination-fore-end">
        <div class="condition-wrap clearfix">
            <div class="condition-sp">
                <span class="icon-text">区域范围</span>
                <el-select v-model="valType" class="select-text">
                    <el-option
                            v-for="item in areaRange"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="condition-sp">
                <span class="icon-text">行政区域</span>
                <p class="select-text">全部</p>
                <div class="sub-condition clearfix">
                    <!--<ul class="condition-left">-->
                        <!--<li>全部</li>-->
                        <!--<li>全部</li>-->
                        <!--<li>全部</li>-->
                        <!--<li>黄埔区</li>-->
                    <!--</ul>-->
                    <!--<ul class="condition-right">-->
                        <!--<li>-->
                            <!--<el-checkbox class="checkbox" checked>备选项</el-checkbox>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<el-checkbox class="checkbox" checked>备选项</el-checkbox>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<el-checkbox class="checkbox" checked>备选项</el-checkbox>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<el-checkbox class="checkbox" checked>备选项</el-checkbox>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<el-checkbox class="checkbox" v-model="checked" checked>备选项</el-checkbox>-->
                        <!--</li>-->
                    <!--</ul>-->
                </div>
            </div>
            <div class="condition-sp">
                <span class="icon-text">场地类型</span>
                <el-select v-model="valType" class="select-text">
                    <el-option
                            v-for="item in placeTypes"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="condition-sp">
                <span class="icon-text">价格</span>
                <el-select v-model="valType" class="select-text">
                    <el-option
                            v-for="item in prices"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="condition-sp">
                <span class="icon-text">可用面积</span>
                <el-select v-model="valType" class="select-text">
                    <el-option
                            v-for="item in usableArea"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="search-content">
            <div class="w1200 mt20 clearfix">
                <div class="space-list">
                    <div class="search-input-wrap clearfix">

                        <div class="inputbox clearfix">
                            <div class="fl citySelect" style="width: 120px">
                                <div class="result">

                                    <el-select v-model="spaceSearchCondition.city">
                                        <el-option
                                                v-for="item in searchCondition.cities"
                                                :label="item.name"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <input @keyup.enter="spaceSearch" class="" type="text" placeholder="商圈／地标／机场／火车站／场地名" v-model='spaceSearchCondition.q.keyword_cont'>
                            <button class="searchbtn" @click="spaceSearch">搜索</button>
                        </div>
                    </div>
                    <div class="list">
                        <ul class="recommend recommend-sub list-piece clearfix">
                            <li v-for="spacesub in spacesubs">
                                <div class="img">
                                    <a :href="'/space/'+spacesub.id" target="_blank">
                                        <img :src="spacesub.img_paths.url">
                                    </a>
                                </div>
                                <div class="text">
                                    <a target="_blank" class="title" :href="'/space/'+spacesub.id">{{spacesub.name}}</a>
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

                                    <a @click="addInquiry(spacesub.id,spacesub.name)" class="btnjoin"
                                       v-bind:class=" {'hv' : inquiryList.hasOwnProperty(spacesub.id)}" href="javascript:;"
                                        v-text="inquiryList.hasOwnProperty(spacesub.id) ? '已加入询价' : '加入询价' ">

                                    </a>
                                    <!--<a class="btnjoin hv" href="javascript:;">已加入询价单</a>-->
                                </div>
                            </li>
                        </ul>
                    </div>
                    <el-pagination
                            @sizechange="handleSizeChange"
                            @currentchange="handleCurrentChange"
                            :current-page="page"
                            :page-size="10"
                            layout="prev, pager, next, jumper"
                            :total="total">
                    </el-pagination>
                </div>
                <div class="search-left">
                    <div class="search-left-map"></div>
                    <div class="enquiry-tip">
                        您还没有添加任何空间!
                    </div>
                    <!--<button class="key-enquiry-btn">-->
                        <!--一键询价-->
                        <!--<span class="enquiry-num">{{inquiryCount}}</span>-->

                    <!--</button>-->
                    <router-link class="key-enquiry-btn" to="/inquiry">
                        一键询价
                        <span class="enquiry-num">{{inquiryCount}}</span>
                    </router-link>
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
                areaRange: [ ],
                spacemains: [
                    1, 2, 3, 4, 5, 6
                ],
                areaRange: [
                    {
                        value:'选项一',
                        label:'全部'
                    },
                    {
                        value:'选项二',
                        label:'范围一'
                    },
                    {
                        value:'选项三',
                        label:'范围二'
                    },
                ],
                placeTypes:[
                    {
                        value:'选项一',
                        label:'全部'
                    },
                    {
                        value:'选项二',
                        label:'场地类型一'
                    },
                    {
                        value:'选项三',
                        label:'场地类型二'
                    },
                ],
                prices:[
                    {
                        value:'选项一',
                        label:'全部'
                    },
                    {
                        value:'选项二',
                        label:'价格一'
                    },
                    {
                        value:'选项三',
                        label:'价格二'
                    },
                ],
                usableArea:[
                    {
                        value:'选项一',
                        label:'全部'
                    },
                    {
                        value:'选项二',
                        label:'面积一'
                    },
                    {
                        value:'选项三',
                        label:'面积二'
                    },
                ],
                spacesubs: [ ],
                valType:'选项一',
                page: 1,
                total: 0
            }
        },

        computed : {
            searchCondition (){
                return this.$store.state.searchCondition
            },
            spaceSearchCondition : {
                get: function () {
                    return this.$store.state.spaceSearchCondition
                },
                set: function (newValue) {
                    this.$store.commit('spaceSearchCondition', newValue);
                }
            },
            inquiryCount () {
                return this.$store.state.inquiryCount
            },
            inquiryList () {
                return this.$store.state.inquiryList
            }
        },
        mounted () {
            var self = this;
            self.search();

        },
        components: {},
        methods: {
            search : function () {
                var self = this;

                self.spaceSearchCondition.page = this.page

                $.ajax({
                    url: window.YUNAPI.SpaceList,
                    data : self.spaceSearchCondition,
                    success:function (data) {
                        self.spacesubs=data.spaces;
                        self.total = data.page_count
                        console.log(data);
                        //场地类型
                        for(var i = 0; i < self.spacesubs.length - 1; i++){
                            self.spacesubs[i].keyword = self.spacesubs[i].keyword.replace(',','|');
                        }
                        self.$parent.loading = false;
                    }
                });
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.page = val
                this.search()
            },
            spaceSearch : function () {
                this.$store.commit('spaceSearchCondition', this.spaceSearchCondition);
                this.search();
            },
            addInquiry : function (id,name) {
//                LS.set('inquiry',[id,name])
                this.$store.commit('inquiryChange',{id : id, name : name, type : 2});
            }
        }
    }
</script>

<style scoped>

</style>





