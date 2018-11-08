<template>
    <div class="search-type">
        <ul>
            <li><i class="fa fa-lg fa-institution"></i>
                <p>全球租房</p>
            </li>
            <li class="search-line"></li>
            <li><i class="fa fa-lg fa-home"></i>
                <p>海外买房</p>
            </li>
            <li class="search-line"></li>
            <li><i class="fa fa-lg fa-user-o"></i>
                <p>定制服务</p>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {


    }

</script>
<style lang='scss'>
    
    .search-type {
        padding-bottom: .4rem;
        margin-top: 1.333333rem;
        ul{
            display: -ms-flexbox;
            display: flex;
            display: -webkit-flex;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            -ms-flex-align: center;
            align-items: center;
            margin-top: -1.466667rem;
            padding: 0 5%;

            li{
                text-align: center;
                font-size: .373333rem;
                color: #313131;
                height:1.76rem;
                i{
                    
                    font-size: .8rem;
                    color:#ff5a5f;
                }
                p{
                    margin-top:.533333rem;
                }
            }
            .search-line{
                height: .906667rem;
                border-left: .026667rem solid #e8e8e8;
            }
        }
    }
</style>