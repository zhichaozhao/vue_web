<style scoped>
	/*分页*/
	.page-bar{text-align:center;}
	.page-bar .page-items{padding:0px;border-radius:4px;display:inline-block;float: left;margin-left: -10px}
	.page-bar .page-items>li{color:#333;margin-left: 10px; padding:5px 12px;font-size:14px;float:left;position:relative;display:block;line-height:1.5em;cursor:pointer;border: 1px solid #000;background-color: #fff}
	.page-bar .page-current-item{color:white!important;background-color:#000!important;cursor:default!important;}
	.page-bar .page-disable-item{color:#999!important;border-color:#ddd;cursor:default!important;pointer-events:none;}
	.page-bar .page-jump{display:inline-block;float: right;font-size: 18px;height:30px;font-size:14px;margin-left:20px;margin-top: 16px;
    -webkit-transform:translate(0,-16px);-moz-transform:translate(0,-16px);-ms-transform:translate(0,-16px);-o-transform:translate(0,-16px);transform:translate(0,-16px);}
	.page-bar .page-jump input{width:40px;padding:0px;margin:0px;height:27px;text-align:center;border:1px solid #000;color:#000;}
	.page-bar .page-jump button{width:50px;padding:0px;margin:0px;height:29px;margin-left:5px;cursor:pointer;color:#000;background: none}
	.page-bar .page-info{margin:0 8px;}
</style>
<template>
	<div v-show="pages.length" class="page-bar clearfix">
		<ul class="page-items">
			<!--<li @click="setPage(1)" :class="{'page-disable-item':page == 1}">首页</li>-->
			<li @click="setPage(page-1)" :class="{'page-disable-item':page == 1}">上一页</li>
			<li v-for="p in pages" @click="setPage(p)" :class="{'page-current-item':p == page}">{{ p }}</li>
			<li @click="setPage(page+1)" :class="{'page-disable-item':page == maxPage}">下一页</li>
			<!--<li @click="setPage(maxPage)" :class="{'page-disable-item':page == maxPage}">末页</li>-->
		</ul>
		<div class="page-jump">
      <span>跳转:</span>
			<input type="number" v-model="jumpPage" min="1" :max="maxPage">
			<button @click="setPage(jumpPage)" class="page-goto">GO</button>
			<!--<span class="page-info">共{{ maxPage }}页</span>-->
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			jumpPage:this.page
		}
	},
	computed:{
		maxPage(){
			return Math.ceil(this.recordCount / this.psize);
		},
		pages(){
			if(!this.maxPage) return [];
			var pages = [];
			if (this.page > this.maxPage - 3) {
				for (var i = Math.max(1, this.maxPage - 6); i <= this.page - 4; i++) {
					pages.push(i);
				}
			}
			for (var i = 1; i <= this.maxPage; i++) {
				if (this.page - 3 <= i && i <= this.page + 3) {
					pages.push(i);
				}
			}
			if (this.page < 4) {
				for (var i = 4 + this.page; i <= Math.min(7, this.maxPage); i++) {
					pages.push(i);
				}
			}
			return pages;
		}
	},
	watch:{
		page(val){
			this.jumpPage = this.page;
			this.$dispatch(this.changeEvent,val);
		}
	},
	methods:{
        setPage(p){
        	p = p < 1 ? 1 : p > this.maxPage ? this.maxPage : p;
        	this.page = p;
        }
    },
	props:{
		page:{
			type:Number,
			default:0,
			twoWay:true,
			coerce(val){
				return val*1;
			}
		},
		psize:{
			type:Number,
			default:20
		},
		recordCount:{
			type:Number,
			default:0,
			coerce(val){
		        return val*1;
		    }
		},
		changeEvent:{
			type:String,
			default:'onPageChange'
		}
	}
}
</script>
