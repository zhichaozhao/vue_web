
<template>
    <div>
        <div class="about-location">
            <div class="wrapper">
                <div class="crumb">
                    <a href="javascript:;">首页</a>&gt;<a href="../about/about_us.vue" class="active">关于我们</a>
                </div>
            </div>
        </div>
        <div class="about_banner"></div>
        <div class="wrapper about-wrapper clearfix">
            <ul class="about-sidebar fl">
                <li><router-link to="/about/aboutus">云SPACE简介</router-link></li>
                <li><router-link to="/about/news">云SPACE新闻</router-link></li>
                <li><router-link to="/about/recruitment">云SPACE招聘</router-link></li>
                <li><router-link to="/about/agreement">云SPACE协议</router-link></li>
                <li><router-link to="/about/business">业务合作</router-link></li>
                <li><router-link to="/about/contact">联系我们</router-link></li>
                <li><router-link to="/about/drawback">退款说明</router-link></li>
                <!--<li><router-link to="/about/question">常见问题</router-link></li>-->
                <li><router-link to="/about/feedback">意见反馈</router-link></li>
            </ul>
            <div class="about-content fr">
                <router-view></router-view>
            </div><!--about-content-end-->
        </div><!--wrapper-end-->

        <!--弹窗-->
        <div class="pop-status hide">
            <a href="javascript:;" class="icon-close js-close"></a>
            <div class="pop-status-success hide">
                <h1><i class="icon-state icon-state-success"></i><span>提交成功！</span></h1>
                <p>感谢您提出的宝贵意见</p>
            </div>
            <div class="pop-status-error hide">
                <h1><i class="icon-state icon-state-error"></i><span>提交失败！</span></h1>
                <p>必要字段没有填写</p>
            </div>
        </div>
        <div class="pop-bg hide"></div>
    </div>
</template>