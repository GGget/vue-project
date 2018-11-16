<template>
    <div class="hot-house"  v-show="housetitle.length">
        <div class="hot-house-title" >
            <p class="hot-title">{{housetitle}}</p><a class="hot-more">更多<i class="fa fa-lg fa-angle-right"></i></a>
            <!---->
        </div>
        <swiper class="swiper-container-house"  v-if = "billboards.length" :options="swiperOption" ref="mySwiper">
        
                <swiper-slide class="swiper-slide " style="margin-right: .266667rem;"
                    v-for = "item in billboards "  :key  = "item.index">
                    
                    <div>
                        <img :src="item.logo" lazy="loaded"></img>
                        <span class="video-switch">
                        <i class="fa fa-lg fa-play"></i>
                        </span>
                    </div>
                    <!---->
                    <p class="hot-housetitl"><span class="spanB">{{item.title}}</span>
                    </p>
                    <!---->
                </swiper-slide>
            
        </swiper>
        <div class="index-line"></div>
    </div>
</template>

<script>

    export default {
        props:['info'],
        data() {
      return {
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
            console.log(this.info)
        })
    },

    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    }, 
    mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        //   console.log('this is current swiper instance object', this.swiper)
        //   this.swiper.slideTo(3, 1000, false)
    }
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

                div{
                    img{
                        height: 50vw;
                        width: 100%;
                    }
                    .video-switch{
                            background-color: rgba(0,0,0,.5);
                            width: 1.333333rem;
                            height: 1.333333rem;
                            border-radius: 100%;
                            color: #fff;
                            z-index: 500;
                            position: absolute;
                            top: 35%;
                            left: 50%;
                            transform: translateX(-50%);
                            text-align: center;
                            line-height: 1.333333rem;
                            i{
                                color:#fff;
                                font-size:.526667rem;

                                
                            }
                    }
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
                
            }
        }
        .index-line{
            border-bottom: .026667rem solid #f0f0f0;
            width: 100%;
        }
    }
</style>