<template>

  <div class="w1200 mt30 clearfix">
    <!--<link rel="stylesheet" href="/assets/css/personal.css">-->
    <!--<style lang="styl" src='./assets/css/personal.css'></style>-->
    <div class="per-left">
      <div class="per-left-top">
        <div class="head-img">
          <img src="/static/images/personal/head.png" alt="" >
        </div>
        <div class="p-text">
          微笑百合~上午好
        </div>
        <div class="p-text">
          15012345678
        </div>
        <a href="" class="fr log-out">
          退出
        </a>
      </div>
      <ul class="mt20 alist">
        <li v-for="item in nav" :class="item == activeNav ? 'active' : ''">
        <!--<li v-for="item in nav" class="">-->
          <a v-on:click="navClick" href="javascript:void(0)">{{item}}</a>
        </li>

      </ul>
    </div>
    <div class="per-right">
      <div v-if='activeNav == "我的订单"' class="order-process clearfix">
        <div class="process-piece success">
          <span class="process-title">提交预订</span>
          <div class="clearfix">
            <div class="num">1</div>
            <span class="line"></span>
          </div>
        </div>
        <div class="process-piece red">
          <span class="process-title">待接单</span>
          <div class="clearfix">
            <div class="num">2</div>
            <span class="line"></span>
          </div>
        </div>
        <div class="process-piece">
          <span class="process-title">已接单</span>
          <div class="clearfix">
            <div class="num">3</div>
            <span class="line"></span>
          </div>
        </div>
        <div class="process-piece">
          <span class="process-title">活动执行中</span>
          <div class="clearfix">
            <div class="num">4</div>
            <span class="line"></span>
          </div>
        </div>
        <div class="process-piece">
          <span class="process-title">活动已结束</span>
          <div class="clearfix">
            <div class="num">5</div>
          </div>
        </div>
      </div>
      <div class="info-top clearfix">
          <h2>{{activeNav}}</h2>
          <p class="state">【收到报价】</p>
          <div class="inq-btnwrap clearfix">
              <a class="fl btn-cancel" href="JavaScript:;" @click="showstate=!showstate">取消资询</a>
              <a class="fr btn-goback" href="JavaScript:;">返回</a>
          </div>
      </div>


      <!--个人信息-->
      <div class="info-form" v-if='activeNav == "个人信息"'>
        <div class="clearfix">
          <div class="head-img-big">
            <img src="/static/images/personal/head.png" alt="">
            <a href="" class="change-info">修改资料</a>
          </div>
        </div>
        <div class="info-from-piece">
          <span>称 呼</span>
          <input class="w270" type="text" value="王丽丽">
          <input class="w270 ml15" type="text" value="王丽丽">
        </div>
        <div class="info-from-piece">
          <span>手机号</span>
          <input type="text" value="15012345678">
        </div>
        <div class="info-from-piece">
          <span>公司名称</span>
          <input type="text" value="上海星期网络科技有限公司">
        </div>
        <div class="info-from-piece">
          <span>第三方绑定</span>
          <div class="third-party-info">
            <img src="/static/images/personal/weixin.png" alt="">
            <p>lihb</p>
          </div>
          <div class="third-party-info">
            <img src="/static/images/personal/xinlang.png" alt="">
            <p>lihb</p>
          </div>
          <div class="third-party-info">
            <img src="/static/images/personal/weixin.png" alt="">
            <p>lihb</p>
          </div>
        </div>
      </div>
      <!--密码设置-->
      <div v-if='activeNav == "密码设置"'>
        <div class="info-from-piece">
          <span>手机号</span>
          <input type="text" value="15012345678" class="disable" disabled>
        </div>
        <div class="info-from-piece clearfix">
          <span>验证码</span>
          <input type="text" placeholder="请输入短信验证码" class="w410 fl">
          <button class="getCode btn fl" >获取验证码</button>
        </div>
        <div class="info-from-piece">
          <span>新密码</span>
          <input type="text"  placeholder="请输入新密码">
        </div>
        <div class="info-from-piece">
          <span>确认密码</span>
          <input type="text"  placeholder="确认新密码">
        </div>

        <button class="submit-btn btn">提交</button>
      </div>
      <!--我的询价-->
      <div v-if='activeNav == "我的询价" && activeNav != "询价详情"'>
        <div class="alink">
          <a href="" class="active">全部</a>
          <a href="">咨询中</a>
          <a href="">收到报价</a>
          <a href="">已过期</a>
          <a href="">已关闭</a>
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
            <tr>
              <td>2016/8/26 15:00</td>
              <td>上海</td>
              <td>2016/8/26 15:00</td>
              <td>亲子活动</td>
              <td><a href="">奢居会派对会所</a></td>
              <td>已收到2份报价</td>
              <td><a href="javascript:void(0)" v-on:click="xjContent">查看</a></td>
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
        <paging :page.sync="page" :record-count="recordCount" :psize="20"></paging>
      </div>
      <!--询价详情-->
      <div v-if='activeNav == "询价详情" && subPage == "询价详情"'>
        <div class="pinfo clearfix">
          <img src="/static/images/personal/head.png" alt="">
          <span>李丽丽(场地顾问)</span>
          <a href="">138656754389</a>
        </div>
        <div class="oinfo">
          <span>提交时间:</span>
          <span>2016-09-10 18:30:33</span>
        </div>
        <div class="oinfo">
          <span>联系人:</span>
          <span>张大春</span>
          <span>15018052290</span>
        </div>
        <div class="oinfo">
          <span>城市:</span>
          <span>上海</span>
        </div>
        <div class="oinfo">
          <span>活动时间:</span>
          <span>2016-09-11至2016-09-30</span>
          <span><a href="">可改期</a></span>
        </div>
        <div class="oinfo">
          <span>活动人数:</span>
          <span>2000人</span>
        </div>
        <div class="oinfo">
          <span>活动类型:</span>
          <span>亲子活动</span>
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
            <a href="">红坊创意园－红厅</a>
            <a href="">红坊创意园－红厅</a>
            <a href="">红坊创意园－红厅</a>
            <a href="">红坊创意园－红厅</a>
          </div>
        </div>

        <div class="offer-list">
          <div class="offer-top">
            【第2份】
          </div>
          <div class="place-info">
            <div class="place-info-mian clearfix">
              <div class="place-logo">
                <img src="/static/images/personal/place.png" alt="">
              </div>
              <div class="info-detail">
                <p>北京云SPACE奥莱空间</p>
                <p>浦东新区 | 南京西路</p>
                <div class="place-tags clearfix">
                  <span>200人</span>
                  <span>500m</span>
                  <span>大型活动</span>
                </div>
              </div>

            </div>
            <table class="tblist">
              <tr>
                <th width="30%">规格</th>
                <th width="35%">市场价</th>
                <th width="35%">售价</th>
              </tr>
              <tr>
                <td>常规</td>
                <td>3000/天</td>
                <td>3000/天</td>
              </tr>
              <tr>
                <td>备注</td>
                <td colspan="2" style="text-align: left">希望可以有专门的一条龙服务希望可以有专门的一条龙服务希望可以有专门的一条龙服务希望可以有专门的一条龙服务</td>
              </tr>
            </table>
            <div class="offer-operation">
              <button>预定</button>
              <button>我要看场地</button>
              <button>不感兴趣</button>
            </div>
          </div>
        </div>
      </div>
      <!--我的订单-->
      <div v-if='activeNav == "我的订单"'>
        <div class="pinfo clearfix">
          <img src="/static/images/personal/head.png" alt="">
          <span>李丽丽(场地顾问)</span>
          <a href="">138656754389</a>
        </div>
        <div class="oinfo">
          <span>提交时间:</span>
          <span>2016-09-10 18:30:33</span>
        </div>
        <div class="oinfo">
          <span>联系人:</span>
          <span>张大春</span>
          <span>15018052290</span>
        </div>
        <div class="oinfo">
          <span>城市:</span>
          <span>上海</span>
        </div>
        <div class="oinfo">
          <span>活动时间:</span>
          <span>2016-09-11至2016-09-30</span>
          <span><a href="">可改期</a></span>
        </div>
        <div class="oinfo">
          <span>活动人数:</span>
          <span>2000人</span>
        </div>
        <div class="oinfo">
          <span>活动类型:</span>
          <span>亲子活动</span>
        </div>
        <div class="oinfo">
          <span>场地预算:</span>
          <span>¥50000</span>
        </div>
        <div class="oinfo">
          <span>具体要求:</span>
          <span>希望可以有专门的一条龙服务，帮我们进行场地搭建，灯光效果，午餐，音乐</span>
        </div>
        <div class="place-info mt20" >
          <div class="place-info-mian clearfix">
            <div class="place-logo">
              <img src="/static/images/personal/place.png" alt="">
            </div>
            <div class="info-detail">
              <p>北京云SPACE奥莱空间</p>
              <p>浦东新区 | 南京西路</p>
              <div class="place-tags clearfix">
                <span>200人</span>
                <span>500m</span>
                <span>大型活动</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <!--我的收藏-->
        <div v-if='activeNav == "我的收藏"'>
            <div class="alink mb20">
                <a href="" class="active">场地</a>
                <a href="">空间</a>
                <a href="">资讯</a>
            </div>
            <div class="collection">
                <i class="icons icon-collect-hv"></i>
                <a class="fl img" href=""><img src="" /></a>
                <div class="fl divc">
                    <h3><a href="">奢居会派对会所－5楼露台</a></h3>
                    <p class="qy">徐汇区 ｜ 中山西路</p>
                    <ul>
                        <li>200人</li><li>500m2</li><li>大型活动</li>
                    </ul>
                </div>
            </div>
            <div class="collection">
                <i class="icons icon-collect-hv"></i>
                <a class="fl img" href=""><img src="" /></a>
                <div class="fl divc">
                    <h3><a href="">奢居会派对会所－5楼露台</a></h3>
                    <p class="qy">徐汇区 ｜ 中山西路</p>
                    <ul>
                        <li>200人</li><li>500m2</li><li>大型活动</li>
                    </ul>
                </div>
            </div>

            <paging :page.sync="page" :record-count="recordCount" :psize="20"></paging>
        </div>

      <!--意见反馈-->
        <div class="feedback" v-if='activeNav == "意见反馈"'>
            <div class="tblist feedbackfont">感谢您的意见和反馈，我们会努力优化、提高体验，感谢您的支持！</div>
            <textarea rows="22" name="a"  placeholder="请填写具体内容帮助我们了解您的意见和建议"></textarea>
            <button class="fl submit-btn submit-btn-sm btn">提交</button>
        </div>

    </div><!--per-right-end-->
      <!--取消资询-弹窗-->
      <div class="cancel-wp" v-show="showstate && !showmask">
          <div class="mask-bg" @click="showstate=!showstate"></div>
          <div class="cancelcont">
              <!--关闭按钮-->
              <a class="icons icon-bgclose btnclose" @click="showstate=!showstate"></a>

              <!--取消资询-->
              <div class="c-consulting">
                  <h2>取消资询</h2>
                  <div class="cont">
                      <textarea rows="15" placeholder="请输入取消理由（至少15字）"></textarea>
                  </div>
              </div>

              <!--取消资询-->
              <div class="c-reason hide">
                  <h2>填写理由</h2>
                  <div class="cont">
                      <div class="title">不感兴趣（可多选）</div>
                      <ul>
                          <li class="active">
                              <i class="icons icon-atv"></i>报价太高
                          </li>
                          <li>
                              <i class="icons icon-atv"></i>
                              收到报价太高，已找到场地
                          </li>
                          <li>
                              <i class="icons icon-atv"></i>
                              场地本身条件不匹配
                          </li>
                          <li>
                              <i class="icons icon-atv"></i>
                              <textarea rows="5" placeholder="请输入其他理由"></textarea>
                          </li>
                      </ul>
                  </div>
              </div>

              <!--我要看场地-->
              <div class="c-lookplace hide">
                  <h2>我要看场地</h2>
                  <div class="cont">
                      <div class="plantime">
                          <div class="title">计划看场时间</div>
                          <div class="schedule">
                              <i class="icons icon-schdl"></i>
                              <input type="text" value="2016-09-10 14:30">
                          </div>
                      </div>
                      <textarea rows="10" placeholder="备注"></textarea>
                  </div>
              </div>

              <button class="submit-btn submit-btn-sm btn">确定</button>
          </div>
      </div>
  </div>
</template>
<script>

  import Lib from 'assets/Lib.js'
  import 'assets/css/component.css';
  import 'assets/css/personal.css';

  export default {
    data() {
      return {
        nav:[
          '个人信息','密码设置','我的询价','我的订单','我的收藏','我的消息','意见反馈'
        ],
        activeNav : '个人信息',
        subPage : '',
        page : 1,
        recordCount:205,
        showstate:0
      }
    },
    components: {
    },
    ready(){
    },
    methods: {
      navClick(event){
        this.activeNav = event.target.innerHTML;
      },
      xjContent(){
        this.subPage = '询价详情';
        this.activeNav = '询价详情'
      }
    }
  }
</script>

<style scoped>

</style>





