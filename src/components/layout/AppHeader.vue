
<template>
    <header class="app-header">
        <div class="header-content">  
            <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
                <div class='page-mask animated' v-show = "isNavShow"  v-on:click = "isNavShow = !isNavShow" ></div> 
            </transition>
            <div class="nav-btn">
                <img src="../../../public/images/menu.png" alt=""  v-on:click = "isNavShow = !isNavShow">
            </div>
            <div class="logo" >
                <img src="../../../public/images/logo.png" alt="" >
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
      isNavShow: false
    };
  },
  components: {
    AppNav
  }
};
</script> 
<style lang="scss">
// sass语法，不是webpack的东西，所以不能使用alias
.app-header {
  .header-content {
    width: 100%;
    height: 1.2rem;
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 1px;
    text-align: center;
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
    .logo img {
      height: 0.56rem;
      width: 2.48rem;
      line-height: 1.2rem;
      margin-top: 0.32rem;
    }
  }
}
</style>

