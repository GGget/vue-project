<template>
  <div id="app">
      <!-- <app-header></app-header> -->
      <app-home></app-home>
      
  </div>
</template>

<script>
// import AppHeader from '@c/layout/AppHeader'
import AppHome from '@pages/home/AppHome'

export default {
  name: 'app',
  components: {
    AppHome,
    // AppHeader
  }
}
</script>

<style lang="scss">
#app {
  
}
</style>
