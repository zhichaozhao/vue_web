<template>
    <div>
        <div class="alink">
            <a href="" class="active">全部</a>
            <a href="javascript:;">咨询中</a>
            <a href="javascript:;">收到报价</a>
            <a href="javascript:;">已过期</a>
            <a href="javascript:;">已关闭</a>
        </div>
        <table class="tblist" cellspacing="0" cellpadding="0">
            <tr>
                <th width="20%">提交时间</th>
                <th width="10%">城市</th>
                <th width="25%">活动时间</th>
                <th width="10%">活动类型</th>
                <th width="15%">意向场地</th>
                <th width="10%">状态</th>
                <th width="10%">操作</th>

            </tr>
            <tr v-for="item in orders">
                <td>{{item.created_at}}</td>
                <td>{{item.order_city}}</td>
                <td>{{item.s_time}}~{{item.e_time}}</td>
                <td>{{item.activity_type}}</td>
                <td>
                    <router-link :to="'/space/'+space.id" v-for="space in item.spaces">{{space.title}}</router-link>
                </td>
                <td>已收到2份报价</td>
                <td>
                    <router-link :to="'/personal/enquiry/dtl/'+item.id">查看</router-link>
                </td>
            </tr>
            <!--<tr>-->
                <!--<td>2016/8/26 15:00</td>-->
                <!--<td>上海</td>-->
                <!--<td>2016/8/26 15:00</td>-->
                <!--<td>亲子活动</td>-->
                <!--<td><a href="">奢居会派对会所</a></td>-->
                <!--<td>已收到2份报价</td>-->
                <!--<td><a href="">查看</a></td>-->
            <!--</tr>-->

        </table>
        <div class="text-center">
            <el-pagination
                    @sizechange="handleSizeChange"
                    @currentchange="handleCurrentChange"
                    :current-page="page"
                    :page-size="10"
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                page: 1,
                total: 205,
                orders : []

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
                url: window.YUNAPI.host + 'api/users/' + self.personalData.id + '/demands',
                data : self.$store.getters.validationData,
                success : function (data) {
                    console.log(data,111);
                    self.orders = data.data
                    self.total = data.page_count
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