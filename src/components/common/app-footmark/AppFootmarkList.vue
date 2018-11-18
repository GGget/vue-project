
<template>
    <div class="page" id="footmark">
        <section class="common-list">
            <div class="load-icon"  v-if="allClose">
                <img src="https://pcpic.uhouzz.com/webappseo/images/4b9c5c7e7736c5490433fe0f9fce05c1.gif" alt="">
            </div>
            <div class="footmark-list" v-if="!allClose">
                <div class="no-foot" v-if="isHaveFoot">
                    你还没有浏览过房源
                </div>
                <div class="have-foot" v-else>
                    <ul class="foot-list">
                        <li 
                            v-for="data in footDatas" 
                            :key="data.id"
                        >   
                            <a href="">
                                <div class="img-warp">
                                     <img class="pic" :src="data.img" alt="">
                                </div>
                                <p class="title">{{data.title}}</p>
                                <p class="abstract">{{data.abstract}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        
    </div>
</template>


<script>
export default {
    data(){
        return {
            isHaveFoot:false,
            footDatas:[
                {id:'1',title:'费城全新Townhouse二楼阳光大卧房出租',abstract:'公寓 4卧室 3卫浴',img:'https://pic.uhouzz.com/houseImages2/c2/6df8bd643f66e5e83a16f3521567301ac28aa7.jpg?x-oss-process=image/resize,h_500'}
                ,{id:'2',title:'费城全新Townhouse二楼阳光大卧房出租',abstract:'公寓 4卧室 3卫浴',img:'https://pic.uhouzz.com/houseImages2/c2/6df8bd643f66e5e83a16f3521567301ac28aa7.jpg?x-oss-process=image/resize,h_500'}
                ,{id:'3',title:'费城全新Townhouse二楼阳光大卧房出租',abstract:'公寓 4卧室 3卫浴',img:'https://pic.uhouzz.com/houseImages2/c2/6df8bd643f66e5e83a16f3521567301ac28aa7.jpg?x-oss-process=image/resize,h_500'}
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
    .footmark-list{
        .no-foot{
            width: 100%;
            text-align: center;
            font-size: .426667rem;
            background: url(https://pcpic.uhouzz.com/webappseo/images/c70194b6e42acb32a989a9db788717ea.png) no-repeat center 160px;
            background-size: 1.6rem 1.44rem;
            color: #a0a0a0;
            padding-top: 4.106667rem;
            background-color: #f7f7f7;
            padding-bottom: 4.16rem;
            line-height: 1.386667rem;
        }
        .have-foot{
            li{
                position: relative;
                overflow: hidden;
                padding-bottom: 10px;
                width: 100%;
                a{
                    display: block;
                    .img-warp{
                        width: 100%;
                        min-height: 6rem;
                        position: relative;
                        .pic{
                            position: absolute;
                            display: block;
                            width: 100%;
                            height: 100%;
                            background: #e1e1e1 url(https://pcpic.uhouzz.com/webappseo/images/4eed1f63e548f9fa9d16cd4266cc19c1.gif) no-repeat 50%;
                            background-size: 1.6rem .32rem;
                        }
                    }
                    p{
                        padding-left: .4rem;
                        color: #626262;
                        font-size: .32rem;
                    }
                    .title{
                        line-height: .8rem;
                        color: #313131;
                    }
                    .abstract{
                        font-size: .32rem
                    }
                }
            }
        }
    }
    #footmark{
        padding: 0;
        background-color: #fff;
        color: #313131;
    }
</style>
