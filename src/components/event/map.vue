<template>
    <div class="space-dtl-wrap">
        <div class="w1200 topback">
            <a class="back" href="javascript:;"><i class="icon-arrowleft"></i> 返回搜索</a>
        </div>

        <div class="w1200">

        </div>
    </div>
</template>
<script>
    import Lib from 'assets/Lib.js';

    require ('assets/css/component.css')
    require ('assets/css/hold-event.css')

    export default{
        data(){
            return {
                loginerror: '',
                //是否记住密码
                remember_paw: 1,
                login_height: 500,
                peoplenumbs: [
                    111,222
                ],
                subjects:[
                    1,2,3
                ],
                shownumbs: 0,
                showtype: 0,
                showcitys: 0,
                showstate: 0,
                showcooper:0,

            }
        },
        mounted () {
            this.$parent.loading = false
        },
        methods: {
            //获取活动人数、类型
        }

    }
</script>
<style scoped>

</style>