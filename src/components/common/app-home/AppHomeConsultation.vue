<template>
    <div  class="index-meiqia">
        <div  class="index-mq-i">
            <img src="../../../../public/images/kefu.png">
            <p  class="index-text"><span >Hi 我是小居</span>
                <br >
                <b >有什么可以帮到您?</b>
            </p>
        </div>
        <p class="index-bt-chat"><a data-v-452167fa="" class="zh">在线咨询</a>
        </p>
    </div>
</template>

<script>

    
    export default {
        

    }

</script>
<style lang='scss'>
    .index-meiqia {
        margin-top: .533333rem;
        background: #ff5a5f;
        width: 80%;
        margin: 0 auto;
        display: -ms-flexbox;
        display: flex;
        border-radius: .133333rem;
        height: 20vw;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
        color: #fff;
        padding: 0 .533333rem;

        .index-mq-i{
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;

            img{
                background: #fff;
                width: 1.066667rem;
                height: 1.066667rem;
                border-radius: 2.666667rem;
                border: .026667rem solid #fff;
                margin-right: .266667rem;
            }
            .index-text{
                span{
                    font-family: HiraginoSansGB-W6;
                    font-size: .48rem;
                }
                b{
                    font-family: HiraginoSansGB-W3;
                    font-size: .373333rem;
                }
            }
        }
        .index-bt-chat{
            display: block;
            border: .026667rem solid;
            padding: .133333rem .266667rem;
            border-radius: .133333rem;
            font-family: HiraginoSansGB-W6;
            font-size: .373333rem;
        }
    }
</style>