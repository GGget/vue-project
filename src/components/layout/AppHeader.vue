
<template>
    <header class="app-header">
        <div class="header-content">  
            <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
                <div class='page-mask animated' v-show = "isNavShow"  v-on:click = "isNavShow = !isNavShow" ></div> 
            </transition>
            <div class="nav-btn">
                <img src="../../../public/images/menu.png" alt=""  v-on:click = "isNavShow = !isNavShow">
            </div>
            <div class="logo">
                <i @click="back" v-if="title" class="fa fa-angle-left fa-lg"></i>
                <img v-if="!title" src="../../../public/images/logo.png" alt="" >
                <span v-if="title">{{title}}</span>
            </div>
        </div>
            <app-nav :menushow.sync = "isNavShow" ></app-nav>
    </header>
</template>
<script>
import AppNav from "./AppNav";
export default {
  data: () => {
    return {
      isNavShow: false,
      title:''
    };
  },

  components: {
    AppNav
  },
  
  created () {
    // 给bus绑定事件
    // this.$bus.$on('change:title', title => this.title = title)
    // 全局路由钩子
    this.title =this.createTitle()
    this.$router.beforeEach((to, from, next) => {
        this.title =this.createTitle(to)
        next()
    })
  },

  methods: {
      createTitle (to) {
          let _to = to || this.$route
          switch ( _to.matched[0].name ) {
              case 'order': return '我的订单';
              case 'wealth': return '我的财富';
              case 'footmark': return '足迹';
              case 'collect': return '我的收藏';
              case 'uhomes-tv': return 'UHOMES TV';
              case 'uhomes-video': return 'UHOMES TV';
              default: return '';
          }
      },
      back(){
        history.go(-1)
      }
  }
};
</script> 
<style lang="scss">
// sass语法，不是webpack的东西，所以不能使用alias
.app-header {
  background:#fff;
  position:sticky;
  top:0;
  z-index:999;
  .header-content {
    width: 100%;
    height: 1.2rem;
    border-bottom: 1px solid #868080;
    padding-bottom: 1px;
    .animated {
      animation-duration: 0.3s;
    }
    .page-mask {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 100;
    }

    .nav-btn img {
      width: 0.533333rem;
      height: 0.4rem;
      margin-right: 0.32rem;
      float: right;
      margin-top: 0.4rem;
    }
    .logo{
      text-align: center;
      i{
        position: absolute;
        left: .433333rem;
        top: .396667rem;
        color: #9e9e9e;

      }
      img{
        height: 0.56rem;
        width: 2.48rem;
        line-height: 1.2rem;
        margin-top: 0.32rem;
      }
      span{
        line-height:1.2rem; 
        padding-left: .8rem;
      }
    } 
  }
}
</style>

