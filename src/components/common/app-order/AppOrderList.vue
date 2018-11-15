
<template>
    <div class="page" >
        <section class="common-list">
            <div class="load-icon"  v-if="allClose">
                <img src="https://pcpic.uhouzz.com/webappseo/images/4b9c5c7e7736c5490433fe0f9fce05c1.gif" alt="">
            </div>
            <div class="no-order" v-if="!allClose">
                <img src="https://pcpic.uhouzz.com/webappseo/images/22170664f3e156fa0664a1d44a2122ce.png" class="pic">
                <p class="font">您还没有下过订单哦~</p>
            </div>
        </section>
        
    </div>
</template>


<script>
export default {
    props:['allClose'],
    created (){
        // console.log(this.$props.allClose)
        if(localStorage.getItem('MEIQIA_EXTRA_TRACK_ID')){
            this.$emit('update:allClose', false)
        }
    }
}
</script>
<style lang="scss">
.page{
    transition: all .3s ease;
    background: #f7f7f7;
    width: 100%;
     .common-list{
        padding: 0;
        min-height: 9.656667rem;
        .load-icon{
            background-color: #e1e1e1;
            background: url(https://pcpic.uhouzz.com/webappseo/images/ad9d3a68cd0b4b3642eadb327c3dd232.png) no-repeat top;
            background-size: 3.573333rem .746667rem;
            padding-top: 1.066667rem;
            text-align: center;
            margin: -1.6rem auto 0;
            display: block;
            position: absolute;
            top: 40%;
            bottom: 0;
            right: 0;
            left: 0;
        }
        .no-order{
            width: 100%;
            min-height: 9.656667rem;
            font-size: .426667rem;
            padding-top: 1.306667rem;
            background-color: #f0f0f0;
            padding-bottom: 2.666667rem;
            text-align: center;
            box-sizing: border-box;
            .pic{
                margin-top: 1.333333rem;
                width: 2.666667rem;
                height: 2.666667rem;
            }
            .font{
                font-family: 'STHeitiSC-Light';
                font-size: .4rem;
                color: #626262;
                line-height: .4rem;
                text-align: center;
                margin-top: .48rem;
            }
        }
    }
}
   
</style>
