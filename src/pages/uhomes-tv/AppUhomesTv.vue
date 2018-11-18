<template>
    <div class="wrapper" ref="wrapper" >
        <section class="app-uhome-tv ">
            <!-- <router-link 
                @click="goToUhomesVideo"
                tag="div"
                :to="{  name:'uhomes-video', params: {id: tv.videoid} }"
                v-for="tv in tvs" 
                :key="tv.videoid"
                class="uhome-warp"
            >   
                <img :src='tv.logo' alt="">
                <span class="time">{{tv.duration}}}</span>
                <p class='title'>{{tv.title}}</p>
                <div class="play">
                    <i class="fa fa-play fa-lg"></i>
                </div>
            </router-link> -->
            <!-- 两种方法实现路由动态传参 -->
            <div 
                @click="goToUhomesVideo(tv.videoid)"
                tag="div"
                v-for="tv in tvs" 
                :key="tv.videoid"
                class="uhome-warp"
            >   
                <img :src='tv.logo' alt="">
                <span class="time">{{tv.duration}}</span>
                <p class='title'>{{tv.title}}</p>
                <div class="play">
                    <i class="fa fa-play fa-lg"></i>
                </div> 
            </div>
            <div v-if="tvs.length" class="pull">{{msg}}</div>
        </section>
    </div>
</template>

<script>
import scroll from '../../util/scroll'
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            tvs:[],
            all_tvs:[],
            msg:'上拉加载',
        }
    },
    props:['closeFooter'],
    created() {
        //这个界面不需要footer 组件 所以先将他消失
        this.$emit('update:closeFooter', false)
    },
    //获取数据
    async beforeCreate() {
        let data = await this.$http({
            url:'https://m.uhomes.com/index.php/wechatapp/video/videoList',
        })
        // this.tvs = data
        this.all_tvs = data;
        this.tvs.push(...data.splice(0,5))
    },
    mounted(){
        // let betterScroll = new BScroll('.wrapper')
        scroll({
            // el: this.$el
            el: this.$refs.wrapper,
            handler: this.addTvs.bind(this),
        })
    },
    methods:{
        goToUhomesVideo(_id){
            this.$router.push({name:'uhomes-video', params: {id: _id} })
            //query 传参这样 并且在路由里面 不需要配置:id 标志
            // this.$router.push({path:'/uhomes-video',query:{id:_id}})
        },
        addTvs(){
            if(this.all_tvs.length >0){
                console.log(11)
                this.tvs.push(...this.all_tvs.splice(0,5))
                if(this.all_tvs.length == 0){
                    this.msg = '到底啦！！！'
                }
            }
        }
    },
    // beforeRouteEnter(to,from,next){
    //         console.log('beforRouteEnter')

    //         // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
    //         console.log(this) 

    //         //参数vm就是当前组件的实例。
    //         next((vm)=>{ 
    //             vm.test = '进入到我这里啦'
    //             console.log(vm)
    //             console.log(vm.test)
    //         })
    //     },
    // beforeRouteLeave (to, from, next) {
    //     console.log(1111)
    //     next((vm)=>{
    //         vm.test = '溜溜球'
    //         console.log(vm.test)
    //     })
    // },
}
</script>

<style lang="scss" >
    #app,html,body{
        height: 100%;
    }
    .wrapper{
        height: 100%;
        overflow: hidden;
        .app-uhome-tv{
            width: 100%;
            padding: .8rem .533333rem 0rem;
            box-sizing: border-box;
            .uhome-warp{
                position: relative;
                img{
                    width: 100%;
                }
                .time{
                    width: 1.12rem;
                    height: .586667rem;
                    border-radius: .08rem;
                    background-color: rgba(0,0,0,.6);
                    font-size: .32rem;
                    color: #fff;
                    line-height: .586667rem;
                    text-align: center;
                    position: absolute;
                    top: 4.133333rem;
                    right: .4rem;
                }
                .title{
                    margin: .266667rem 0 .8rem;
                    font-size: .426667rem;
                    color: #313131;
                    line-height: .426667rem;
                }
                .play{
                    background-color: rgba(0,0,0,.5);
                    width: 1.333333rem;
                    height: 1.333333rem;
                    border-radius: 50%;
                    color: #fff;
                    z-index: 100;
                    position: absolute;
                    left: 50%;
                    top: 1.866667rem;
                    transform: translateX(-50%);
                    text-align: center;
                    line-height: 1.333333rem;
                }
            }
        }
        .pull{
            width: 50%;
            margin: 0 auto;
            border-radius: .133333rem;
            font-size: .426667rem;
            background: #c3c1c1;
            text-align: center;
            color: #312d2d;
            line-height: .8rem;
        }
    }
    
</style>

