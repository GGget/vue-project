

<template>
    <div class="like">
        <div v-if="!isHaveLike" class="no-like">
            您还没有收藏房源哦~
        </div>
        <div v-else>展示喜欢的房源</div>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                isHaveLike:false
            }
        },
    }

</script>

<style lang="scss">
    .like{
        .no-like{
            width: 100%;
            text-align: center;
            font-size: .426667rem;
            background:url(https://pcpic.uhouzz.com/webappseo/images/c70194b6e42acb32a989a9db788717ea.png) no-repeat center 160px;
            background-size: 1.6rem 1.44rem;
            color: #a0a0a0;
            padding-top: 4.106667rem;
            background-color: #f7f7f7;
            padding-bottom: 2.666667rem;
            line-height: 1.386667rem;
        }
    }
</style>
