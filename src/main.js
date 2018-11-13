import Vue from 'vue'
import App from './App.vue'

//引入全局通用样式
import "@styles/main.scss"

//引入移动端适配
import '@libs/flexible'
//引入各种插件
import '@libs'

//引入router路由
import router from "./router"

Vue.config.productionTip = false


//根实例
new Vue({
  router,//将路由工具配置到全局
  render: h => h(App),
}).$mount('#app')
