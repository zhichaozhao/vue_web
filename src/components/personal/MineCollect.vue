<template>
    <div>
        <div class="alink mb20">
            <a href="" class="active">场地</a>
            <a href="">空间</a>
            <a href="">资讯</a>
        </div>
        <div class="collection">
            <i class="icons icon-collect-hv"></i>
            <a class="fl img" href=""><img src=""/></a>
            <div class="fl divc">
                <h3><a href="">奢居会派对会所－5楼露台</a></h3>
                <p class="qy">徐汇区 ｜ 中山西路</p>
                <ul>
                    <li>200人</li>
                    <li>500m2</li>
                    <li>大型活动</li>
                </ul>
            </div>
        </div>
        <div class="collection">
            <i class="icons icon-collect-hv"></i>
            <a class="fl img" href=""><img src=""/></a>
            <div class="fl divc">
                <h3><a href="">奢居会派对会所－5楼露台</a></h3>
                <p class="qy">徐汇区 ｜ 中山西路</p>
                <ul>
                    <li>200人</li>
                    <li>500m2</li>
                    <li>大型活动</li>
                </ul>
            </div>
        </div>

        <paging :page.sync="page" :record-count="recordCount" :psize="20"></paging>
    </div>
</template>