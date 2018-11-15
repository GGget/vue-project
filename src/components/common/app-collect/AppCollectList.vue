
<template>
    <div class="page" >
        <section class="common-list">
            <div class="load-icon"  v-if="allClose">
                <img src="https://pcpic.uhouzz.com/webappseo/images/4b9c5c7e7736c5490433fe0f9fce05c1.gif" alt="">
            </div>
            <div class="collect-list" v-if="!allClose">
                <ul class="tab">
                    <router-link 
                        v-for="tab in tabs"
                        :key="tab.id"
                        tag="li"
                        :to='tab.path'
                        :class="tab.class"
                    >
                        {{tab.title}}
                    </router-link>
                </ul>
            </div>
            <router-view></router-view>
        </section>
        
    </div>
</template>


<script>
export default {
    data(){
        return {
            tabs:[
                {id:'1',path:'/collect/like', title:'收藏的房源',class:'line'},
                {id:'2',path:'/collect/comment',title:'评价的房源'}
            ]
        }
    },
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
    .collect-list{
        padding: 0;
        background-color: #fff;
        color: #313131;
        .tab{
            display: flex;
            height: 1.173333rem;
            line-height: 1.173333rem;
            text-align: center;
            li{
                display: block;
                flex: 1;
                font-size:.426667rem;
                position: relative;
            }
            .router-link-active{
                border-bottom:4px solid #ff5a5f;
            }
            .line::after{
                width: 0;
                height: .533333rem;
                border-left: 1px solid #afacac;
                overflow: hidden;
                content: "";
                position: absolute;
                top: .32rem;
                right: 0;
            }
        }
    }
   
</style>
