<template>
    <div class="hot-house" v-show="housetitle.length">
        <div class="hot-house-title" >
            <p class="hot-title">{{housetitle}}</p><a class="hot-more">更多<i class="fa fa-lg fa-angle-right"></i></a>
            <!---->
        </div>
        <swiper class="swiper-container-house"  v-if = "billboards.length" :options="swiperOption" ref="mySwiper">
        
                <swiper-slide
                    class="swiper-slide " style="margin-right: .266667rem;"
                    v-for = "item in billboards "  :key  = "item.index" >
                    
                    <a >
                        <img  @click="idUrl" :id='item.id' alt="" :src="item.thumburl">
                    </a>
                    
                    <p class="hot-housetitl"><span class="spanB">{{item.chinesecity}}</span><span style="font-family: PingFangSC-Regular;">{{item.title}}</span>
                    </p>
                    <p class="hot-houseprice" v-html="item.price_string">{{item.price_string}}</p>
                
                </swiper-slide>
            
            <!--
            <swiper-slide
                    class="swiper-slide " style="margin-right: .266667rem;"
                    v-for = "item in billboards "  :key  = "item.index" >
                    
                    <a>
                        <img @click='addUrl' :id='item.id' alt="" :src="item.thumburl">
                    </a>
                    
                    
                    <p class="hot-housetitl"><span class="spanB">{{item.chinesecity}}</span><span style="font-family: PingFangSC-Regular;">{{item.title}}</span>
                    </p>
                    <p class="hot-houseprice" v-html="item.price_string">{{item.price_string}}</p>
                    
                </swiper-slide>
                -->
        </swiper>
        <div  class="index-line"></div>
    </div>
</template>

<script>

    export default {
        props:['info'],
        data() {
            return {
                url:"/apartments/:id",
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    loop: false, 
                    autoplay: false
                },
                billboards: [],
                housetitle:[]
            }
    },
    beforeCreate () {
        this.$http({
            url: '/yxhj/index.php/wechatapp/region/index?src=webapp',
            react: false
        }).then(result => {
            this.billboards = result[this.info].list
            this.housetitle = result[this.info].title
            // console.log(this.info)
        })
    },
    methods:{
        idUrl(e){
            const _id=e.target.id
            // console.log(e.target.getAttribute("data_id"))
            this.$router.push({
                name:'apartments',
                params:{hid:_id}
            })
            // this.url+=e.target.id
            //  console.log(this.$route)
            // console.log(this.$route.params)
            // console.log(this.$route.params.id)
            // console.log(_id)

        }
    },
    // computed: {
    //   swiper () {
    //     return this.$refs.mySwiper.swiper
    //   }
    // }, 
    // mounted() {
    //     this.addUrl(e)
    //     // current swiper instance
    //     // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //     //   console.log('this is current swiper instance object', this.swiper)
    //     //   this.swiper.slideTo(3, 1000, false)
    // }
    }
</script>
<style lang='scss'>
    .hot-house{
        padding: .533333rem 0 0 .533333rem;
        .hot-house-title {
            padding: .186667rem 0 .4rem;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            .hot-title {
                font-size: .48rem;
                color: #313131;
            }
            .hot-more {
                font-size: .373333rem;
                color: #666;
                margin-right: .4rem;
                line-height:.72rem;
            }
        }
        .swiper-container-house {
            width: 100%;
            height: 71vw;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            z-index: 1;
            .swiper-slide{
                text-align: center;
                font-size: .48rem;
                background: #fff;
                width: 81.09%;
                height: 50vw;
                display: -ms-flexbox;
                -ms-flex-pack: center;
                justify-content: center;
                -ms-flex-align: center;
                align-items: center;

                img{
                    height: 50vw;
                    width: 100%;
                }

                .hot-housetitl {
                    text-align: left;
                    font-size: .373333rem;
                    color: #313131;
                    padding: .08rem 0 .186667rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    .spanB {
                        font-family: PingFangSC-Semibold;
                        border-right: .026667rem solid #d3d3d3;
                        padding-right: .213333rem;
                        margin-right: .213333rem;
                    }
                }
                .hot-houseprice {
                    text-align: left;
                    font-size: .32rem;
                    color: #ff5a5f;
                    span {
                        font-size: .426667rem;
                    }
                }
            }
        }
        .index-line{
            border-bottom: .026667rem solid #f0f0f0;
            width: 100%;
        }
    }
</style>