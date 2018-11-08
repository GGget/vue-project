<template>
    <div class="search-index">
        <div>
            <i class="fa fa-lg fa-search"></i>
            <input type="text" readonly="readonly" placeholder="搜索城市或学校" class="search-index-input">
        </div>
        <button class="search-index-buttion">开始搜索</button>
    </div>
</template>

<script>

    export default {


    }

</script>
<style lang='scss'>
    .search-index{
        background: #fff;
        box-shadow: 0 0 .266667rem 0 rgba(0,0,0,.2);
        border-radius: .08rem;
        width: 80%;
       
        margin: 0 auto;
        position: relative;
        top: -.666667rem;
        z-index: 1;
        padding: .133333rem .533333rem .533333rem;
        
        div{
            i{
                color: #d8d8d8;
                font-size: .48rem;
            }
            .search-index-input {
                border: none;
                width: 80%;
                font-size: .426667rem;
                color: #313131;
                margin-left: .266667rem;
                letter-spacing: 1;
                line-height:1.2rem;
            }
        }
        .search-index-buttion{
            background: #ff5a5f;
            border-radius: .08rem;
            width: 100%;
            height: 1.173333rem;
            display: block;
            margin: 0 auto;
            color: #fff;
            font-size: .426667rem;
            margin-top: .133333rem;
        }
    }
</style>