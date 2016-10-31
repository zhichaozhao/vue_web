<template>
    <div>
    <div style="height: 600px"></div>
    <div class="calenderbox">
        <!--日历-->
        <div class="icons icon-close closebtn"></div>
        <div class="title">当期日历</div>
        <div class="current-time">
            <a href="javascript:;" class="clbtn btnleft icon-arrowleft"></a>
            <a href="javascript:;" class="clbtn btnright icon-arrowright"></a>
            <div class="current-time-box">2016年08月</div>
        </div>
        <table class="calender" cellpadding="0" cellspacing="0">
            <thead>
            <tr>
                <th>日</th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td><a href="javascript:;"></a></td>
                <td><a href="javascript:;"></a></td>
                <td><a href="javascript:;"></a></td>
                <td><a href="javascript:;">1<span>已租</span></a></td>
                <td><a href="javascript:;">2<span>已租</span></a></td>
                <td><a href="javascript:;">今天<span>1200元</span></a></td>
                <td><a href="javascript:;">4<span>1200元</span></a></td>
            </tr>
            <tr>
                <td><a href="javascript:;">5<span>1200元</span></a></td>
                <td><a href="javascript:;">6<span>1200元</span></a></td>
                <td><a class="red" href="javascript:;">7<span>1200元</span></a></td>
                <td><a class="red" href="javascript:;">8<span>1200元</span></a></td>
                <td><a class="red" href="javascript:;">9<span>1200元</span></a></td>
                <td><a href="javascript:;">10<span>1200元</span></a></td>
                <td><a href="javascript:;">11<span>1200元</span></a></td>
            </tr>
            <tr>
                <td><a href="javascript:;">11<span>1200元</span></a></td>
                <td><a href="javascript:;">12<span>1200元</span></a></td>
                <td><a class="red" href="javascript:;">13<span>1200元</span></a></td>
                <td><a class="red" href="javascript:;">14<span>1200元</span></a></td>
                <td><a class="red" href="javascript:;">15<span>1200元</span></a></td>
                <td><a href="javascript:;">16<span>1200元</span></a></td>
                <td><a href="javascript:;">17<span>1200元</span></a></td>
            </tr>
            <tr>
                <td><a href="javascript:;">18<span>1200元</span></a></td>
                <td><a href="javascript:;">19<span>1200元</span></a></td>
                <td><a href="javascript:;">20<span>1200元</span></a></td>
                <td><a href="javascript:;">21<span>1200元</span></a></td>
                <td><a href="javascript:;">22<span>1200元</span></a></td>
                <td><a href="javascript:;">23<span>1200元</span></a></td>
                <td><a href="javascript:;">24<span>1200元</span></a></td>
            </tr>
            <tr>
                <td><a href="javascript:;">25<span>1200元</span></a></td>
                <td><a href="javascript:;">26<span>1200元</span></a></td>
                <td><a href="javascript:;">27<span>1200元</span></a></td>
                <td><a href="javascript:;">28<span>1200元</span></a></td>
                <td><a href="javascript:;">29<span>1200元</span></a></td>
                <td><a href="javascript:;">30<span>1200元</span></a></td>
                <td><a href="javascript:;"></a></td>
            </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>

<script>

    import Lib from 'assets/Lib.js'
    import Owl from 'assets/owl.js'

    import 'assets/css/component.css';

    import moduleHeader from 'components/module-header';
    import moduleFooter from 'components/module-footer';

    export default{
        data(){
            return {

            }
        },
        components: {

        },
        ready(){

        },
        methods: {

        }

    }
</script>
<style>
    .calenderbox *{box-sizing: border-box;}
    .calenderbox{
        background:#fff;
        box-shadow:0px 0px 4px 0px rgba(0,0,0,0.50);
        width:560px;
        height:700px;
        padding: 20px 70px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -280px;
        margin-top: -350px;
        overflow: hidden;
        box-sizing: border-box;
    }
    .closebtn{
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
    }
    .calenderbox .title{
        font-size: 18px;
        text-align: center;
        padding: 10px 0;
        margin-top: 30px;
    }
    .current-time{
        width: 200px;
        height: 30px;
        line-height: 30px;
        margin: 20px auto;
        font-size: 18px;
        text-align: center;
        position: relative;
    }
    .current-time .clbtn{
        display: block;
        width: 13px;
        height: 13px;
        position: absolute;
        top: 7px;
    }
    .current-time .btnleft{
        left: 0;
    }
    .current-time .btnright{
        right: 0;
    }
    .calender thead tr{height: 50px;}
    .calender thead th{
        width: 60px;
        height: 50px;
        line-height: 50px;
        padding: 0 15px;
        background: #f4f4f4;
        font-size: 18px;
    }
    .calender tbody tr{height: 90px;}
    .calender td{
        width: 60px;
        height: 90px;
        padding: 20px 3px;
        border-bottom: 1px solid #f4f4f4;
    }
    .calender tr:last-child td{
        border-bottom: 0;
    }
    .calender td>a{
        color: #000;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 18px;
        text-align: center;
    }
    .calender td span{
        display: block;
        font-size: 12px;
        margin-top: 5px;
    }
    .calender td .red span{
        color: #e92332;
    }



</style>
