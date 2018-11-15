

<template>
    <div class="voucher">
        <p class="no-voucher">您还没有代金券哦</p>
        <router-link 
                tag="p"
                class="get-voucher"
                to='/get-voucher'
        >
                去兑换代金券
        </router-link>
    </div>
     
</template>


<script>
export default {
    
}
</script>

<style lang="scss">
    .voucher{
        padding: 0 .4rem;
        .no-voucher{
            background: url(https://pcpic.uhouzz.com/webappseo/images/b0329f10457ddf6e9114e76320e41db1.png) no-repeat top;
            background-size: 1.44rem 1.173333rem;
            color: #626262;
            text-align: center;
            font-size: .48rem;
            line-height: .4rem;
            padding-top: 1.92rem;
            margin: 1.6rem auto;
        }
        .get-voucher{
            width: 100%;
            background-color: #ff5a5f;
            color: #fff;
            border-radius: .133333rem;
            display: block;
            padding: .373333rem 0;
            text-align: center;
            line-height: .426667rem;
        }
    }
</style>

