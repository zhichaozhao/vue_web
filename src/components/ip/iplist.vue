<template>

    <div class="w1200 ip-page">

        <div class="module-header">
            <span>IP类别</span>
        </div>
        <div class="ip-category clearfix">
            <a @click="ipTypeChange(v)" :class="ipCategory == v ? 'current' : ''" href="javascript:;" v-for="(v,key) in projectType">{{key}}</a>
        </div>
        <div class="concentration">
            <ul class="clearfix">
                <li v-for="item in projects">
                    <a href=""><img :src="item.img_paths.url" alt=""></a>
                    <div class="rec-dtl">
                        <a href="" class="op-coop">合作咨询</a>
                        <p class="title" v-text="item.title"></p>
                        <p class="tag" v-text="item.keyword"></p>
                        <div class="dl-wrap clearfix">
                            <dl><dt>类别 : </dt><dd v-text="item.p_type"></dd></dl>
                            <dl><dt>来源 :</dt><dd v-text="item.source">国际</dd></dl>
                            <dl><dt>场地面积 :</dt><dd v-text="item.area">100-500m</dd></dl>
                        </div>
                        <div class="">
                            <dl><dt>适用人群 :</dt><dd v-text="item.applicable_people">冰川时代影迷</dd></dl>
                            <dl><dt>预算范围 :</dt><dd v-text="item.budget_amount">面议</dd></dl>
                        </div>
                        <p class="des" v-text="item.p_notes"></p>
                    </div>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>

    import Lib from 'assets/Lib.js';
    require ('assets/css/component.css')
    require ('assets/css/ip.css')
    import 'assets/libs/swiper/swiper.js'
    export default {
        data(){
            return {
                projects:[],
                projectType:[],
                ipCategory: ''
            }

        },
        mounted () {
            var self = this;
            this.getIpList();
            //this.ipType();
        },
        components: {},

        methods: {
            getIpList : function (id) {
                var self = this;
                var urlData = {
                    p_type : id || ''
                };
                $.ajax({
                    url: window.YUNAPI.ipList,
                    data:urlData,
                    success: function (data) {
                        self.projects=data.projects;
                        self.projectType = data.project_type;

                        //ip类别 关键词
                        for(var i = 0; i < self.projects.length - 1; i++){
                            self.projects[i].keyword = self.projects[i].keyword.replace(',',' ');
                        }

                        self.$parent.loading = false;
                    }
                });
            },
            ipTypeChange: function (id) {
                this.getIpList(id);
                this.ipCategory = id;
            }
        }
    }
</script>





