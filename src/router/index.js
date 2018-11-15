import Vue from 'vue'

import VueRouter from "vue-router"
// import auth from '@util/auth'


Vue.use(VueRouter)
//引入路由页面
import AppHome from '@pages/home/AppHome'
import AppBuyhouse from '@pages/buyhouse/AppBuyhouse'
import AppNotFound from '@pages/not-found/AppNotFound'
import AppOrder from '@pages/order/AppOrder'
import AppFootmark from '@pages/footmark/AppFootmark'

import AppWealth from '@pages/wealth/AppWealth'
    //二级路由
    import AppBalance from '@c/common/app-wealth/AppBalance'
    import AppVoucher from '@c/common/app-wealth/AppVoucher'
    import AppGold from '@c/common/app-wealth/AppGold'


import AppCollect from '@pages/collect/AppCollect'
    //二级路由
    import AppLike from '@c/common/app-collect/AppLike'
    import AppComment from '@c/common/app-collect/AppComment'

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
        path: '/order',
        name: 'order',
        component: AppOrder
    },
    {
        path: '/wealth',
        name: 'wealth',
        component: AppWealth,
        redirect: {name: "balance"},
        children: [
			// 二级路由路径,不加/
            {path:'balance', name:'balance', component:AppBalance},
            {path:'voucher', name:'voucher', component:AppVoucher },
            {path:'gold', name:'gold', component:AppGold },
            // {path:'out', name:'out', component:AppGold },
		]

    },
    {
        path: '/footmark',
        name: 'footmark',
        component: AppFootmark
    },
    {
        path: '/collect',
        name: 'collect',
        component: AppCollect,
        redirect: {name: "like"},
        children:[
            {
                path:'like', 
                name:'like',
                component:AppLike 
            },
            {
                path:'comment',
                name:'comment',
                component:AppComment
            }
        ]
    },
    {   
        path:"/not-found",
        name: 'not-found',
        component: AppNotFound
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