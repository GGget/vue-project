<template>
    <div  class="index-mq">
        <i class="fa fa-lg fa-commenting"></i>
    </div>
</template>

<script>
export default {
    mounted() {
        
    }
}

</script>
<style lang='scss'>
    .index-mq {
        background: #ff5a5f;
        width: 1.333333rem;
        height: 1.333333rem;
        border-radius: 100%;
        position: fixed;
        bottom: .266667rem;
        right: .266667rem;
        z-index: 1;
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;

        i {
            line-height: 1.333333rem;
            margin: 0 auto;
            display: block;
            text-align: center;
            color: #fff;
            font-size: .693333rem;
        }
    }
</style>