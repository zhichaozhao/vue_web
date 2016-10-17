<template>
  <div>
    <div class="w1200 topback">
        <a class="back" href="javascript:;"><i class="icon-arrowleft"></i> 返回搜索</a>
    </div>

  <div class="w1200">
    <div class="events-container clearfix">
      <div class="fl left">
        <div class="banner-cont">
          <div class="title">
            <h2>03 - 大会议室</h2>
            <p class="addr">区域位置 : 上海市闸北区大场、大华沪太支路538号飞马旅5i</p>
            <a href="javascript:;" class="collect fr">
              <i class="icon-collect"></i>
              <span>收藏</span>
            </a>
          </div>
          <div class="banner">

          </div>
        </div>
        <div class="space-dtl">
          <div class="price-dtl">
            <div class="price-num">
              <p>周一</p>
              <p>¥ 8888元／天 起</p>
              <p>¥ 9888元／天 起</p>
            </div>
            <div class="price-op">
              <button>立即预定</button>
            </div>
          </div>
        </div>
      </div>

      <!--侧边栏-->
      <div class="fr right"></div>
    </div>
  </div>
  </div>
</template>

<script>
    import Lib from 'assets/Lib.js';
    //import Jquery from 'assets/jquery-3.1.0.min.js'

    import 'assets/css/component.css';
    import 'assets/css/hold-event.css';

    import moduleHeader from 'components/module-header';
    import moduleFooter from 'components/module-footer';

    export default {
        data() {
            return {
                phone:'',
                password:'',
                username:''
            }
        },
        components: {
            moduleHeader,moduleFooter
        },
        ready(){},
        methods: {},

        //记住密码
        rememberPassword(){}
    }

</script>






