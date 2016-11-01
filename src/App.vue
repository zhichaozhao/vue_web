<template>
    <div id="app2" v-on:click="bodyClick">
        <module-header cities = "cities"></module-header>

        <!--<router-view></router-view>-->
        <div class="loading-wrap" v-if="this.loading">
            <div v-loading="loading" class="el-loading-yun"></div>
        </div>


        <router-view  class="child-view"></router-view>



        <module-footer ref="test"></module-footer>
    </div>
</template>

<script>
    import Hello from './components/Hello'
    import ModuleFooter from './components/module-footer.vue'
    import ModuleHeader from './components/module-header.vue'
    const host = "http://172.16.1.154:3000/";
    window.YUNAPI = {
        cities : host + 'api/cities',
        homeIpProject : host + 'api/projects/get_home_list',
        home : host + 'api/indexs',
        homeSearch : host + 'api/tags/get_home_search',
        article : host + 'api/informations',
        articleTags : host + 'api/tags/get_information_tags',
    };

    export default {
        name: 'app',
        data(){
            return {
                cities:[],
                isShowHomeSearchCondition : false,
                loading: true
            }

        },
        components: {
            Hello, ModuleFooter, ModuleHeader
        },
        mounted () {
            var self = this;
//            console.log(window.YUNAPI);
            $.ajax({
                url: window.YUNAPI.cities, context: document.body, success: function (data) {
                    self.cities = data.cities;
                }
            });
        },
        methods: {
            //获取活动人数、类型
            bodyClick : function (event) {

                //搜索 : 做什么  点击其他地方隐藏
                var e = event || window.event;
                var elem = e.srcElement||e.target;
                while(elem){
                    if(elem.id == "whatToSearch"){
                        return
                    }
                    elem = elem.parentNode;
                }
                this.isShowHomeSearchCondition = false
            }
        }

    }
</script>
