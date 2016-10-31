<template>
    <div>

        <div class="about-title">
            <h2>意见反馈</h2>
        </div>

        <div class="feedback-wrap">
            <input type="hidden" name="fedbak" id="fedbak" value="15">
            <div>
                <textarea id="feedback" name="data[意见反馈]" rows="12" placeholder="您的意见，对我们而言十分宝贵，请畅所欲言！" style="max-width:797px"></textarea>
                <div class="contact-number clearfix">
                    <input id="contact" name="data[联系方式]" class="fl" type="text" placeholder="请留下您的联系方式：手机号码/QQ/微信/邮箱">
                    <button class="fr btn js-feedback-btn">提交</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Lib from 'assets/Lib.js';

    import 'assets/css/about.css';

    import moduleHeader from 'components/module-header';
    import moduleFooter from 'components/module-footer';

    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {},

    }

</script>