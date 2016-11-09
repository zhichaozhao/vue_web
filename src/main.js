// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'assets/Libs/jquery.validate.js';
import  'assets/Libs/localforage.min';
import Vuex from 'vuex'

Vue.use(Element)
Vue.use(VueRouter);
Vue.use(Vuex);

window.router = new VueRouter({
    mode: 'history',
    base: __dirname,
    history: true,
    saveScrollPosition: false,
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    },
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
                {
                    path: 'info',
                    component: (resolve) => require(['./components/personal/info.vue'], resolve),
                    name: '个人信息'
                },
                {
                    path: 'password',
                    component: (resolve) => require(['./components/personal/PasswordSetting.vue'], resolve),
                    name: '密码设置'
                },
                {
                    path: 'enquiry',
                    component: (resolve) => require(['./components/personal/enquiry/MineEnquiry.vue'], resolve),
                    name: '我的询价'
                },
                {
                    path: 'enquiry/dtl',
                    component: (resolve) => require(['./components/personal/enquiry/dtl.vue'], resolve),
                    name: '我的询价'
                },
                {
                    path: 'order',
                    component: (resolve) => require(['./components/personal/order/MineOrders.vue'], resolve),
                    name: '我的订单'
                },
                {
                    path: 'order/dtl',
                    component: (resolve) => require(['./components/personal/order/dtl.vue'], resolve),
                    name: '我的订单'
                },
                {
                    path: 'collect',
                    component: (resolve) => require(['./components/personal/MineCollect.vue'], resolve),
                    name: '我的收藏'
                },
                {
                    path: 'feedback',
                    component: (resolve) => require(['./components/personal/FeedBack.vue'], resolve),
                    name: '意见反馈'
                }
            ]
        },
        {
            path: '/about',
            component: (resolve) => require(['./components/about/app.vue'], resolve),
            children: [
                {
                    path: 'aboutus',
                    component: (resolve) => require(['./components/about/about_us.vue'], resolve),
                    name: '云SPACE简介'
                },
                {
                    path: 'news',
                    component: (resolve) => require(['./components/about/news.vue'], resolve),
                    name: '云SPACE新闻'
                },
                {
                    path: 'recruitment',
                    component: (resolve) => require(['./components/about/about_recruitment.vue'], resolve),
                    name: '云SPACE招聘'
                },
                {
                    path: 'agreement',
                    component: (resolve) => require(['./components/about/about_agreement.vue'], resolve),
                    name: '云SPACE协议'
                },
                {
                    path: 'business',
                    component: (resolve) => require(['./components/about/about_business.vue'], resolve),
                    name: '业务合作'
                },
                {
                    path: 'contact',
                    component: (resolve) => require(['./components/about/about_contact_us.vue'], resolve),
                    name: '联系我们'
                },
                {
                    path: 'drawback',
                    component: (resolve) => require(['./components/about/about_drawback.vue'], resolve),
                    name: '退款说明'
                },
                {
                    path: 'feedback',
                    component: (resolve) => require(['./components/about/about_feedback.vue'], resolve),
                    name: '意见反馈'
                }

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
window.store = new Vuex.Store({
    state:{
        cdVisible : false,
        cities:{},
        city_id : 1,
        searchCondition : {
            space_type : ''
        },
        elDialog : {
            cdVisible : false,
            loginForm : false,
            regForm : false
        }
    },
    mutations : {
        searchCondition (state,value) {
            state.searchCondition = value
        }
    },
    actions : {

    }
});
window.APP = new Vue({
    store,
    render: h => h(App),
    router: router

}).$mount('#app');

jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");

window.GlobleFun = {
    sendPhoneCode : function (phone,success,$ele) {
        if(!phone){
            APP.$message({
                message: '手机号不能为空!',
                type: 'error'
            });
            return;
        }
        $.get({
            url: window.YUNAPI.sendPhoneCode,
            data : {
                phone : phone
            },
            success: function (data) {
                
                var status = data.status == 1 ? 'success' : 'error';
                APP.$message({
                    message: data.message,
                    type: status
                });

                if(data.status == 1){
                    GlobleFun.codeTiming($ele)
                }

                success(data);
            },
            error : function () {
                
            }
        });
    },
    codeTiming : function ($ele) {
        var time = 60;
        var btn = $($ele);
        btn.text('60s重新发送');
        btn.attr('disabled',true);
        var interval = setInterval(function () {
            time -- ;
            if(time < 0){
                time == 60;
                clearInterval(interval);
                btn.text('发送验证码');
                btn.attr('disabled',false);
            }else{
                btn.text(time+'s重新发送')
            }

        },1000)
    },
    validate : function ($ele) {
        setTimeout(function () {
            $($ele).validate({
                debug: false,
                errorElement: "div",
//                    errorClass : 'warning',
                errorPlacement: function(error, element) {
                    error.addClass('warning').appendTo(element.parent("li"));
                    error.parent('li').addClass('war')
                },
                success : function (e) {
                    e.parents('li').removeClass('war');
                    e.parents('li').find('.warning').remove();
                },
                rules : {
                    phone : {
                        required : true,
//                            minlength : 11,
                        // 自定义方法：校验手机号在数据库中是否存在
                        // checkPhoneExist : true,
                        isMobile : true
                    },
                }
            })
        },300)
    }
};

window.YunConfig = {
    peopleNumberCondition : [
        {
            key : '50人以下',
            value : '50'
        },
        {
            key : '50-100人',
            value : '100'
        },
        {
            key : '100-300人',
            value : '300'
        },
        {
            key : '300-500人',
            value : '500'
        },
        {
            key : '500人以上',
            value : '500+'
        },

    ]
};
const host = "http://172.16.0.76:3000/";
window.YUNAPI = {
    cities : host + 'api/cities',
    homeIpProject : host + 'api/projects/get_home_list',
    home : host + 'api/index',
    homeSearch : host + 'api/tags/get_home_search',
    article : host + 'api/informations',
    articleTags : host + 'api/tags/get_information_tags',
    articleHot : host + 'api/informations/get_hot_recommend',
    findIp : host + 'api/projects/ip_project',
    ipList : host + 'api/projects',
    active : host + 'api/activities',
    submitConsult : host + 'api/consults',
    submitHoldEvent : host + 'api/orders',
    sendPhoneCode : host + 'api/auth_codes/send_code',
    openShop : host + 'api/informations/get_retail',
    SpaceList: host + 'api/spaces',
    SpaceDtl: host + 'api/spaces',
    placeDtl : host + 'api/sites',
    feedBack: host + 'api/feedback',
    inquiry: host + 'api/orders/create_inquiry',
    collection: host + 'api/collections',
    login : host + 'api/auth/sign_in',
    register : host + 'api/auth'
};

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })


// 现在，应用已经启动了！
