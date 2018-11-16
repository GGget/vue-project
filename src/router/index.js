import Vue from 'vue'

import VueRouter from "vue-router"
// import auth from '@util/auth'


Vue.use(VueRouter)
//引入路由页面
import AppHome from '@pages/home/AppHome'
import AppBuyhouse from '@pages/buyhouse/AppBuyhouse'
import AppNotFound from '@pages/not-found/AppNotFound'
import  AppApartments from '@pages/apartments/AppApartments'

//路由表
const routes = [
    {
        path: '/',
        redirect: {name: "home"}
    },
    {
        path: '/home',
        name: 'home',
        component: AppHome
    },
    {
        path: '/buyhouse',
        name: 'buyhouse',
        component: AppBuyhouse
    },
    {   
        path:"/not-found",
        name: 'not-found',
        component: AppNotFound
    },
    {   
        path:"/apartments/:hid",
        name: 'apartments',
        component: AppApartments
    },
    {
        path: '**',
        redirect: 'not-found'
    }
]
//路由工具
const router = new VueRouter({
    mode: 'history',
    // base: '/app/',
    routes

})

export default router