// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'assets/Libs/jquery.validate.js';

Vue.use(Element)
Vue.use(VueRouter);

const router = new VueRouter({
      mode: 'history',
      base: __dirname,
      history: true,
      saveScrollPosition: true,
      routes: [
            {
              path: '/',
              component: (resolve) => require(['./components/home/Home'], resolve)
            },
            {
              path: '/event',
              component: (resolve) => require(['./components/event/Event'], resolve)
            },
            {
              path: '/spaces/:keyword',
              component: (resolve) => require(['./components/event/SpaceList.vue'], resolve)
            },
            {
              path: '/booking',
              component: (resolve) => require(['./components/booking/app.vue'], resolve)
            },
            {
                  path: '/personal',
                  component: (resolve) => require(['./components/personal/app.vue'], resolve),
                        children: [
                        { path: 'info', component: (resolve) => require(['./components/personal/info.vue'], resolve),name:'个人信息' },
                        { path: 'password', component: (resolve) => require(['./components/personal/PasswordSetting.vue'], resolve),name:'密码设置'},
                        { path: 'enquiry', component: (resolve) => require(['./components/personal/enquiry/MineEnquiry.vue'], resolve),name:'我的询价'},
                        { path: 'enquiry/dtl', component: (resolve) => require(['./components/personal/enquiry/dtl.vue'], resolve),name:'我的询价'},
                        { path: 'order', component: (resolve) => require(['./components/personal/order/MineOrders.vue'], resolve),name:'我的订单'},
                        { path: 'order/dtl', component: (resolve) => require(['./components/personal/order/dtl.vue'], resolve),name:'我的订单'},
                        { path: 'collect/:type', component: (resolve) => require(['./components/personal/MineCollect.vue'], resolve) ,name:'我的收藏'},
                        { path: 'feedback', component: (resolve) => require(['./components/personal/FeedBack.vue'], resolve) ,name:'意见反馈'}
                    ]
            },
            {
                path: '/about',
                    component: (resolve) => require(['./components/about/app.vue'], resolve),
                        children: [
                        { path: 'aboutus', component: (resolve) => require(['./components/about/about_us.vue'], resolve) ,name:'云SPACE简介'},
                        { path: 'news', component: (resolve) => require(['./components/about/news.vue'], resolve) ,name:'云SPACE新闻'},
                        { path: 'recruitment', component: (resolve) => require(['./components/about/about_recruitment.vue'], resolve) ,name:'云SPACE招聘'},
                        { path: 'agreement', component: (resolve) => require(['./components/about/about_agreement.vue'], resolve),name:'云SPACE协议' },
                        { path: 'business', component: (resolve) => require(['./components/about/about_business.vue'], resolve),name:'业务合作'},
                        { path: 'contact', component: (resolve) => require(['./components/about/about_contact_us.vue'], resolve),name:'联系我们'},
                        { path: 'drawback', component: (resolve) => require(['./components/about/about_drawback.vue'], resolve),name:'退款说明'},
                        { path: 'feedback', component: (resolve) => require(['./components/about/about_feedback.vue'], resolve),name:'意见反馈'}

                    ]
            },
            {
              path: '/space/:id',
              component: (resolve) => require(['./components/space/dtl.vue'], resolve)
            },
            {
                path: '/space/map',
                        component: (resolve) => require(['./components/space/maplist.vue'], resolve)
            },
            {
              path: '/site/:id',
                      component: (resolve) => require(['./components/place/app.vue'], resolve)
            },
            {
              path: '/event/hold',
                component: (resolve) => require(['./components/event/Form'], resolve)
            },
            {
              path: '/personal/form',
                component: (resolve) => require(['./components/personal/Form'], resolve)
            },
            {
                path: '/personal/login',
                    component: (resolve) => require(['./components/personal/login'], resolve)
            },
            {
                path: '/found',
                component: (resolve) => require(['./components/newfound/article'], resolve)
            },
            {
                path: '/articles',
                        component: (resolve) => require(['./components/newfound/article'], resolve)
            },
            {
                path: '/article/:id',
                        component: (resolve) => require(['./components/newfound/article-dtl'], resolve)
            },
            {
                path: '/ip',
                        component: (resolve) => require(['./components/ip/ip'], resolve)
            },
            {
                path: '/iplist',
                        component: (resolve) => require(['./components/ip/iplist'], resolve)
            },
            {
                path: '/openshop',
                    component: (resolve) => require(['./components/openshop/openshop'], resolve)
            },
            {
                path: '/test',
                        component: (resolve) => require(['./components/test2'], resolve)
            },
            {
                path: '/calender',
                        component: (resolve) => require(['./components/openshop/calender'], resolve)
            },
            {
                path: '/map',
                        component: (resolve) => require(['./components/event/map'], resolve)
            }

      ]
})
window.app = new Vue({

    render: h => h(App),
    router:router

}).$mount('#app');

jQuery.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })


// 现在，应用已经启动了！
