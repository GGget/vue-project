

<template>
    <div class="gold">
        <div class="sum-gold">
            <p>0</p>
            <p class="text">可通过下载Uhomes App获取金币</p>
        </div>
        <div class="title">
            金币明细
            <span>金币使用规则</span>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss">
    .gold{
        .sum-gold{
            padding: 2.133333rem 0;
            font-size: .96rem;
            color: #ff5a5f;
            text-align: center;
            font-family: 'HelveticaNeueDeskInterface-MediumP4';
            .text{
                font-size: .4rem;
                line-height: .32rem;
                margin: .266667rem 0 0;
                color: #626262;
            }
        }
        .title{
            font-weight: 400;
            height: 1.066667rem;
            line-height: 1.066667rem;
            background: #f0f0f0;
            font-size: .4rem;
            color: #a0a0a0;
            padding: 0 .4rem;
            span{
                color: #79cccd;
                float: right;
                background: url(https://pcpic.uhouzz.com/webappseo/images/ea8b1d343e15533d65cf979d1a3a518a.png) no-repeat 0;
                background-size: .4rem .4rem;
                padding: 0 0 0 .533333rem;
            }
        }
    }
</style>
