<template>
    <div>

        <div class="about-title">
            <h2>云SPACE官方新闻</h2>
        </div>


        <div class="news_list clearfix" data-id="{$v['id']}">
            <div class="news_pic_one">
                <a target="_blank" href="{$_home}article/{Func_NumEncode::e($v['id'])}.html">
                    {if $v['logo']}
                        <img src="{Page_Site_Global::displayMedia($v['logo'],"200","135")}" />
                    {else}
                        <img src="img/img_zu.jpg" />
                    {/if}
                </a>
            </div>
            <div class="news_title_left">
                <div class="news_title_outside1 clearfix">
                    <a target="_blank" href="{$_home}article/{Func_NumEncode::e($v['id'])}.html" class="news_title">{$v['title']}</a>
                    <p>
                        {$v['des']}
                    </p>
                </div>
                <div class="news_des">
                    <div class="news_gb">
                        <div class="news_bad clearfix">{$v['counter_view']}92</div>
                        <div class="news_good">{$v['counter_praise']}12</div>
                    </div>
                    <div class="user_time clearfix">
                        <span>{$v['author']|default:"云SPACE"}公关部</span>·<span>{Func_Time::format($v['create_time'])}七天前</span>
                    </div>
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