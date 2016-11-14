<template>
    <div>
        <div class="pinfo clearfix">
            <img src="/static/images/personal/head.png" alt="">
            <span>{{order.contact}}</span>
            <a href="">{{order.phone}}</a>
        </div>
        <div class="oinfo">
            <span>提交时间:</span>
            <span>{{order.created_at}}</span>
        </div>
        <div class="oinfo">
            <span>联系人:</span>
            <span>{{order.contact}}</span>
            <span>{{order.phone}}</span>
        </div>
        <div class="oinfo">
            <span>城市:</span>
            <span>{{order.order_city}}</span>
        </div>
        <div class="oinfo">
            <span>活动时间:</span>
            <span>{{order.s_time}}至{{order.e_time}}</span>
            <span v-if="order.change_time"><a href="">可改期</a></span>
        </div>
        <div class="oinfo">
            <span>活动人数:</span>
            <span>{{order.number_of_activities}}</span>
        </div>
        <div class="oinfo">
            <span>活动类型:</span>
            <span>{{order.activity_type}}</span>
        </div>
        <div class="oinfo">
            <span>场地预算:</span>
            <span>¥50000</span>
        </div>
        <div class="oinfo">
            <span>具体要求:</span>
            <span>希望可以有专门的一条龙服务，帮我们进行场地搭建，灯光效果，午餐，音乐</span>
        </div>
        <div class="oinfo">
            <span>意向场地:</span>
            <div class="relative-place">
                <router-link :to="'/space/'+item.id" v-for="item in order.spaces">{{item.title}}</router-link>
                <!--<a href="" >红坊创意园－红厅</a>-->
            </div>
        </div>

        <!--<div class="offer-list">-->
            <!--<div class="offer-top">-->
                <!--【第2份】-->
            <!--</div>-->
            <!--<div class="place-info">-->
                <!--<div class="place-info-mian clearfix">-->
                    <!--<div class="place-logo">-->
                        <!--<img src="/static/images/personal/place.png" alt="">-->
                    <!--</div>-->
                    <!--<div class="info-detail">-->
                        <!--<p>北京云SPACE奥莱空间</p>-->
                        <!--<p>浦东新区 | 南京西路</p>-->
                        <!--<div class="place-tags clearfix">-->
                            <!--<span>200人</span>-->
                            <!--<span>500m</span>-->
                            <!--<span>大型活动</span>-->
                        <!--</div>-->
                    <!--</div>-->

                <!--</div>-->
                <!--<table class="tblist">-->
                    <!--<tr>-->
                        <!--<th width="30%">规格</th>-->
                        <!--<th width="35%">市场价</th>-->
                        <!--<th width="35%">售价</th>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>常规</td>-->
                        <!--<td>3000/天</td>-->
                        <!--<td>3000/天</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>备注</td>-->
                        <!--<td colspan="2" style="text-align: left">-->
                            <!--希望可以有专门的一条龙服务希望可以有专门的一条龙服务希望可以有专门的一条龙服务希望可以有专门的一条龙服务-->
                        <!--</td>-->
                    <!--</tr>-->
                <!--</table>-->
                <!--<div class="offer-operation">-->
                    <!--<button>预定</button>-->
                    <!--<button>我要看场地</button>-->
                    <!--<button>不感兴趣</button>-->
                <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                page: 1,
                total: 205,
                order : ''

            }
        },
        components: {},
        computed: {
            personalData (){
                return this.$store.state.personalData
            }
        },
        mounted () {
            var self=this;

            self.$store.commit('loading',true);

            console.log(self.$store.getters.validationData)

//            console.log(window.YUNAPI.host + 'api/users/' + self.personalData.id + '/orders/index_inquiry')

            $.get({
                url: window.YUNAPI.host + 'api/users/' + self.personalData.id + '/demands/' + self.$route.params.id,
                data : self.$store.getters.validationData,
                success : function (data) {
                    console.log(data,111);
                    self.order = data.order
                    //banner
                    self.$store.commit('loading',false);
                },
                error(){
                }

            });
        },
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