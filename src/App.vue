<template>
    <div id="app2" v-on:click="bodyClick">
        <module-header cities = "cities"></module-header>

        <!--<router-view></router-view>-->

        <router-view class="child-view"></router-view>


        <module-footer></module-footer>
    </div>
</template>

<script>
    import Hello from './components/Hello'
    import ModuleFooter from './components/module-footer.vue'
    import ModuleHeader from './components/module-header.vue'

    export default {
        name: 'app',
        data(){
            return {
                cities:[]
            }

        },
        components: {
            Hello, ModuleFooter, ModuleHeader
        },
        mounted () {
            var self = this;
            $.ajax({
                url: "http://172.16.1.154:3000/api/cities", context: document.body, success: function (data) {
                    console.log(data.cities);
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
                $('#whatToSearchContent').hide();


            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
