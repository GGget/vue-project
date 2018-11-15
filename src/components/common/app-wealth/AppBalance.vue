

<template>
    <div class="balance">
        <div class="sum-money">0.00
            <br>
            <span>总金额（元）</span>
        </div>
        <p class="out">
            <router-link 
                tag="span"
                to='/wealth/voucher'
            >
                转出
            </router-link>
        </p>
        <router-link 
                tag="p"
                class="set-pwd"
                to='/wealth/set-pay-pwdr'
            >
                设置支付密码
        </router-link>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss">
    .balance{
        padding: 0 .4rem;
        .sum-money{
            padding: 1.6rem 0;
            font-size: .96rem;
            color: #ff5a5f;
            text-align: center;
            font-family: 'HelveticaNeueDeskInterface-MediumP4';
            span{
                font-size: .4rem;
                line-height: .32rem;
                display: block;
                margin: .533333rem 0 0;
                color: #626262;
            }
        }
        .out{
            border: 1px solid #928d8d;
            background-color: #fff;
            height: 1.12rem;
            line-height: 1.12rem;
            border-radius: .133333rem;
            overflow: hidden;
            text-align: center;
            span{
                color: #626262;
                display: block;
            }
        }
        .set-pwd{
            display: inline-block;
            margin-top: .4rem;
            color: #626262;
            font-size: .4rem;
        }
    }
</style>


