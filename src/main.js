import Vue from 'vue'
import App from './App.vue'

//引入全局通用样式
import "@styles/main.scss"

//引入移动端适配
import '@libs/flexible'

import '@libs'

Vue.config.productionTip = false

import router from "./router"

//根实例
new Vue({
  render: h => h(App),
}).$mount('#app')
