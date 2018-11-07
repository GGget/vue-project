import Vue from 'vue'

import VueRouter from "vue-router"

Vue.use(VueRouter)

//路由表
const routes = [
    {   
        path:"/",
        comments: {
            template:""
        }
    }
]
//路由工具
const router = new VueRouter(
    routes
)

export default router