<template>

    <footer id="footer">
        <div class="footer-outside">
            <div class="footer">
                <ul class="footer_left">
                    <li>
                        <div class="footer-item-title">我要办活动</div>
                        <span class="span-line"></span>
                        <p><a href="JavaScript:;">空间场地</a></p>
                        <p><a href="JavaScript:;">配套服务</a></p>
                        <p><a href="JavaScript:;">超值套餐</a></p>
                        <p><a href="JavaScript:;">云·发现</a></p>
                        <p><a href="JavaScript:;">服务商户</a></p>
                        <p><a href="JavaScript:;">2015旧版网站
                        </a></p>
                    </li>
                    <li>
                        <div class="footer-item-title">业务合作</div>
                        <span class="span-line"></span>
                        <p><a href="JavaScript:;">城市合伙人</a></p>
                        <p><a href="JavaScript:;">场地出租</a></p>
                        <p><a href="JavaScript:;">我要投稿</a></p>
                        <p><a href="JavaScript:;">文创项目加入</a></p>
                        <p><a href="JavaScript:;">关于短租/快闪店</a></p>
                    </li>
                    <li>
                        <div class="footer-item-title">关于云·SPACE</div>
                        <span class="span-line"></span>
                        <p><a href="JavaScript:;">官方新闻</a></p>
                        <p><a href="JavaScript:;">关于我们</a></p>
                        <p><a href="JavaScript:;">职位招聘</a></p>
                        <p><a href="JavaScript:;">联系我们</a></p>
                    </li>
                    <li>
                        <div class="footer-item-title">服务号</div>
                        <p class="weixin2"><img src="/static/images/qrcode-space.png" width="120"></p>
                    </li>
                </ul>
                <div class="footer_right">
                    <p class="title_one">服务热线 - 400-056-0599</p>
                    <p class="title_two">
                        服务邮箱 -
                        <a href="mailto:service@yunspace.com.cn">service@yunspace.com.cn</a>
                    </p>
                    <p class="title_two">
                        联系地址 - 淮海西路570号红坊创意园 F211<br>（近民生美术馆）</p>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="bottom-outside">
            <div class="bottom">
                <p>Copyright©2015 云·SPACE
                    <a href="http://www.miibeian.gov.cn/" target="_blank">
                        沪ICP备12039278号-2
                    </a>
                </p>
            </div>
        </div>
    </footer>

</template>

<script>

    import Lib from 'assets/Lib.js'

    module.exports = {
        props: {
            "title": {
                type: String,
                default: "标题"
            }
        }
    }
</script>

<style scoped>

    /****公共尾部****/
    .footer-outside {
        width: 100%;
        min-width: 1200px;
        background-color: #202830;
        height: auto;
        overflow: hidden;
    }

    .footer {
        margin: 50px auto;
        width: 1200px;
        height: auto;
        overflow: hidden;
    }

    .footer_left {
        float: left;
        height: auto;
        overflow: hidden;
    }

    .footer_left li {
        float: left;
        margin-right: 140px;
        color: #c7c7c7;
    }

    .footer_left li p {
        height: 30px;
        line-height: 30px;
    }

    .footer_left li p a {
        color: #f2f2f2;
    }

    .footer_left li p a:hover {
        color: #fff;
    }

    .footer-item-title {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
    }

    .weixin2 {
        margin-top: 18px;
    }

    .footer_right {
        float: right;
    }

    .footer_right a {
        color: #fff
    }

    .title_one {
        font-size: 18px;
        color: #fff;
    }

    .title_two {
        font-size: 18px;
        color: #fff;
        margin-top: 20px;
    }

    .title_two a {
        display: inline-block;
    }

    .title_content {
        font-size: 14px;
        color: #fff;
    }

    .bottom-outside {
        width: 100%;
        height: 50px;
        background-color: #171e25;
        min-width: 1200px;
        overflow: hidden;
    }

    .bottom {
        margin: auto;
        font-size: 12px
    }

    .bottom p {
        text-align: center;
        color: #9e9e9e;
        line-height: 50px;
        margin: 0;
    }

    .title_content a {
        color: #fff;
    }

    .title_content a:hover {
        text-decoration: underline;
    }

    .bottom a {
        color: #9e9e9e;
        display: inline;
    }

    /*友情链接*/
    .link-outside {
        width: 100%;
        background-color: #f2f2f2;
    }

    .link {
        width: 1200px;
        margin: auto;
        padding: 30px 0px;
    }

    .link-left {
        float: left;
        color: #24252f;
        font-weight: bold;
        margin-right: 40px;
    }

    .link-right {
        float: left;
    }

    .link-right li {
        float: left;
        margin-right: 10px;
    }

    .link-right li:last-child {
        margin-right: 0px;
    }

    .link-right li a {
        color: #bbb;
        font-size: 12px;
    }

    .link-right li a:hover {
        color: #454c52;
    }

    .footer {
        background-color: inherit;
        border-top: hidden;
        text-align: left;
        font-size: 14px;
    }

    .footer p {
        margin: 0;
        font-size: 12px;
        line-height: 1.5em;
    }

    p.title_two {
        margin-top: 20px;
    }

    .weixin2 {
        margin-top: 18px !important;
    }

    .span-line {
        width: 25px;
        background: #fff;
        height: 2px;
        display: block;
        margin-bottom: 15px;
        margin-top: 15px;
    }

</style>
