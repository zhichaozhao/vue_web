<template>
    <div>
        <div class="alink">
            <a href="" class="active">全部</a>
            <a href="">场地方待接单</a>
            <a href="">场地方已接单</a>
            <a href="">活动执行中</a>
            <a href="">活动已结束</a>
            <a href="">订单已取消</a>
        </div>
        <table class="tblist" cellspacing="0" cellpadding="0">
            <tr>
                <th width="20%">提交时间</th>
                <th width="10%">城市</th>
                <th width="25%">活动时间</th>
                <th width="10%">活动类型</th>
                <th width="15%">总金额</th>
                <th width="10%">关闭理由</th>
                <th width="10%">操作</th>

            </tr>
            <tr>
                <td>2016/8/26 15:00</td>
                <td>上海</td>
                <td>2016/8/26 15:00</td>
                <td>亲子活动</td>
                <td><a href="">奢居会派对会所</a></td>
                <td>已收到2份报价</td>
                <td><a href="javascript:void(0)">查看</a></td>
            </tr>
            <tr>
                <td>2016/8/26 15:00</td>
                <td>上海</td>
                <td>2016/8/26 15:00</td>
                <td>亲子活动</td>
                <td><a href="">奢居会派对会所</a></td>
                <td>已收到2份报价</td>
                <td><a href="">查看</a></td>
            </tr>
            <tr>
                <td>2016/8/26 15:00</td>
                <td>上海</td>
                <td>2016/8/26 15:00</td>
                <td>亲子活动</td>
                <td><a href="">奢居会派对会所</a></td>
                <td>已收到2份报价</td>
                <td><a href="">查看</a></td>
            </tr>
        </table>
        <!--<paging :page.sync="page" :record-count="recordCount" :psize="20"></paging>-->
        <el-pagination
                @sizechange="handleSizeChange"
                @currentchange="handleCurrentChange"
                :current-page="5"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
        </el-pagination>
    </div>
</template>