<template>
    <div class="w1200 mt20">
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
        <div class="w1200 mt20">
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
                    <a href="javascript:;">
                      <img src="/static/images/home/imgmain1.png">
                    </a>
                  </div>
                  <div class="text">
                    <a class="title" href="javascript:;">上海电影场-五号棚</a>
                    <div class="price">￥50000/元 天</div>
                    <div class="city">杭州</div>
                    <div class="textinfo">
                      <p><span>场地类型：</span>高端场所 | 主题派对</p>
                      <p><span>落地区域：</span>主题餐厅</p>
                      <p><span>地址：</span>上海市 黄浦区|南京东路789号</p>
                    </div>
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
        checked:true,
        spacemains:[
          1,2,3,4,5,6
        ],
        spacesubs:[
          1,2,3,4,5,6
        ],
        page : 1,
        recordCount:205
      }
    },
    components: {
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

<style scoped>

</style>





