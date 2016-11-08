<template>
    <div>
        <div class="alink mb20">
            <a href="" class="active">场地</a>
            <a href="">空间</a>
            <a href="">资讯</a>
        </div>
        <div class="collection">
            <i class="icons icon-collect-hv"></i>
            <a class="fl img" href=""><img src=""/></a>
            <div class="fl divc">
                <h3><a href="">奢居会派对会所－5楼露台</a></h3>
                <p class="qy">徐汇区 ｜ 中山西路</p>
                <ul>
                    <li>200人</li>
                    <li>500㎡</li>
                    <li>大型活动</li>
                </ul>
            </div>
        </div>
        <div class="collection">
            <i class="icons icon-collect-hv"></i>
            <a class="fl img" href=""><img src=""/></a>
            <div class="fl divc">
                <h3><a href="">奢居会派对会所－5楼露台</a></h3>
                <p class="qy">徐汇区 ｜ 中山西路</p>
                <ul>
                    <li>200人</li>
                    <li>500㎡</li>
                    <li>大型活动</li>
                </ul>
            </div>
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
</template>

<script>

    import Lib from 'assets/Lib.js'
    import 'assets/css/component.css';
    import 'assets/css/personal.css';

    export default {
        data() {
            return {
                subPage: '',
                page: 1,
                recordCount: 205
            }
        },
        components: {},
        mounted(){

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