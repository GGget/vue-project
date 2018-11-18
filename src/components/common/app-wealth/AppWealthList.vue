
<template>
    <div class="page" id="wealth" >
        <section class="common-list">
            <div class="load-icon"  v-if="allClose">
                <img src="https://pcpic.uhouzz.com/webappseo/images/4b9c5c7e7736c5490433fe0f9fce05c1.gif" alt="">
            </div>
            <div class="wealth-list" v-if="!allClose">
                <ul class="tab">
                    <router-link 
                        tag="li"
                        v-for = 'list in tab_list' 
                        :key='list.id'
                        :to='list.path'
                    >
                        {{list.title}}
                    </router-link>
                </ul>
                <router-view></router-view>
                <!-- <div class="balance"></div>
                <div class="voucher"></div>
                <div class="gold"></div> -->
            </div>
        </section>
        
    </div>
</template>


<script>
export default {
    data(){
        return {
             tab_list:[
                { id: 1, title: '我的余额', path: '/wealth/balance'},            
                { id: 2, title: '我的代金券', path: '/wealth/voucher'},            
                { id: 3, title: '我的金币', path: '/wealth/gold'},            
            ],
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
.wealth-list{
    .tab{
        width: 100%;
        display:flex;
        justify-content: space-around;
        height: 1.173333rem;
        line-height: 1.173333rem;
        box-sizing: border-box;
        border-bottom: 1px solid #868080;
        font-size: .373333rem;
        .router-link-active{
            border-bottom: 3px solid #ff5a5f;
        }
    }
}
#wealth{
    background: #fff;
}
   
</style>
