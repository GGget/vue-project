<template>
    <div>
        <div class="app-home-swiper">
        
            <swiper v-if = "billboards.length" :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide
                    v-for = "item in billboards"
                    :key  = "item.index"
                >
                
                    <img width="100%" :src="item.adpicture" :title= "item.title" :alt="item.title">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <app-home-banner-title></app-home-banner-title>
    </div>
</template>
<script>
   import AppHomeBannerTitle from '@c/common/app-home/app-home-banner/AppHomeBannerTitle'
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
              el: '.swiper-pagination'
          },
          loop: true, 
          autoplay: true
        },
        billboards: []
      }
    },
    beforeCreate () {
        this.$http({
            url: '/yxhj/index.php/wechatapp/region/webappIndexTopTheme?src=webapp',
            react: false
        }).then(result => {
            this.billboards = result
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
    },
    components:{
         AppHomeBannerTitle
    }
  }
</script>
<style lang="scss">
    .app-home-swiper {
        height: 6.133333rem!important;
        padding-bottom: .133333rem;
        .swiper-pagination{

            .swiper-pagination-bullet{
                background: #fff;
                width: .16rem;
                height: .16rem;
                border-radius: 100%;
                margin: 0 .133333rem!important;
            }
            .swiper-pagination-bullet-active{
                    background: #fff!important;
                    border-radius: 2.666667rem!important;
                    width: .4rem!important;
                    height: .16rem!important;
            }
        }
        .swiper-pagination-bullets {
            bottom:1rem!important;
        }
    }
</style>