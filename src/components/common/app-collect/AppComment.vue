



<template>
    <div class="comment">
        <div v-if="!isHaveComment" class="no-comment">
            您还没有评价房源哦~
        </div>
        <div v-else>展示评价过的房源</div>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                isHaveComment:false
            }
        }
    }

</script>

<style lang="scss">
    .comment{
        .no-comment{
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
