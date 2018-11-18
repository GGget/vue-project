<template>
  <div id="app">
      <app-header></app-header>
      <!-- <app-home></app-home> -->
      <router-view :closeFooter.sync='isShow'></router-view>
      
      <app-footer v-if="isShow"></app-footer> 
      <!-- <app-mq></app-mq> -->
  </div>
</template>

<script>
import AppHeader from '@c/layout/AppHeader'
// import AppHome from '@pages/home/AppHome'
import AppFooter from '@c/layout/AppFooter'

export default {
  data(){
    return {
      isShow:true
    }
  },
  name: 'app',
  components: {
    // AppHome,
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
#app {
  
}
</style>
