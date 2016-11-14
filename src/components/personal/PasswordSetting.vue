<template>
    <div>
        <div class="info-from-piece">
            <span>手机号</span>
            <input type="text" value="15012345678" class="disable" disabled>
        </div>
        <div class="info-from-piece clearfix">
            <span>验证码</span>
            <input type="text" placeholder="请输入短信验证码" class="w410 fl">
            <button class="getCode btn fl">获取验证码</button>
        </div>
        <div class="info-from-piece">
            <span>新密码</span>
            <input type="text" placeholder="请输入新密码">
        </div>
        <div class="info-from-piece">
            <span>确认密码</span>
            <input type="text" placeholder="确认新密码">
        </div>

        <button class="submit-btn btn">提交</button>
    </div>
</template>