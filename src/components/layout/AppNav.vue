
<template>
    <div class="app-nav">
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <nav class="nav-list animated" v-show = "menushow">
                <div class="userimg">
                    <img src="" alt="">
                </div>
                <div class="username">登录</div>
                <i  class="fa fa-close fa-lg close"  @click="$emit('update:menushow', false)"></i>
                <ul class="nav-content">
                    <li class="split-line"></li>
                    <li v-for = 'nav in navs_top' :key = 'nav.id' class="nav-item">
                        <a href="">
                            <i class="fa fa-lg" :class="nav.icon" style="line-height:0px"></i> 
                            <span>{{nav.title}}</span>
                            <span v-if ='nav.hint' class="hint">{{nav.hint}}</span>
                        </a>
                    </li>
                    <li class="split-line"></li>
                    <li v-for = 'nav in navs_bottom' :key = 'nav.id' class="nav-item">
                        <a href="">
                            <i class="fa fa-lg" :class="nav.icon" style="line-height:0px"></i> 
                            <span>{{nav.title}}</span>
                            <span v-if ='nav.hint' class="hint">{{nav.hint}}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </transition>
    </div>
</template>

<script>
export default {
    data () {
        return {
            navs_top:[
                { id: 1, title: '首页', path: '/', icon:'fa-home'},            
                { id: 2, title: '订单', path: '/', icon:'fa-user-o' },            
                { id: 3, title: '财富', path: '/', icon:'fa-money' },            
                { id: 4, title: '足迹', path: '/', icon:'fa-plane' },            
                { id: 5, title: '收藏', path: '/', icon:'fa-heart-o' },
               
            ],
            navs_bottom:[
                { id: 7, title: '发布房源', path: '/', icon:'fa-institution' },            
                { id: 8, title: '公寓申请', path: '/', icon:'fa-edit' },            
                { id: 9, title: '下载app', path: '/', icon:'fa-download', hint:'优惠便捷'},            
                { id: 10, title: '关注微信', path: '/', icon:'fa-wechat', hint:'随时沟通'},            
                { id: 11, title: '生活服务', path: '/', icon:'fa-bell-o' },            
            ]
        }
    },
    props: {
        menushow: Boolean
    }
}
</script>
<style lang="scss">
.app-nav {
    .animated {
        animation-duration: 0.3s;
    }
    position: absolute;
    z-index: 200;
    height: auto;
    top: 0;
    right: 0;
    .nav-list{
        width: 6.8rem;
        background:  #fff;
        height: 100vh;
        overflow: hidden;
        .userimg{
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
            margin-top: .666667rem;
            background: url('https://pcpic.uhouzz.com/webappseo/images/be1964664ce5ced931ecf6698f2423aa.jpg') no-repeat;
            background-size: 1.6rem 1.6rem;
        }
        .username{
            text-align: center;
            margin-top: .4rem;
            font-size: .4rem;
            color: #313131;
        }
        .close{
            position: absolute;
            top: 20px;
            right: 20px;
            color: #8b8a8ac5
        }
        .nav-content{
            overflow: hidden;
            .nav-item{
                padding: .4rem 0;
                padding-left: .266667rem;
                line-height: .266667rem;
                font-size: .373333rem;
                margin: 0 .666667rem;
                a{
                    color: #4e4d4d;
                    i{
                        padding-right: .266667rem;
                    }
                    .hint{
                        font-size: .32rem;
                        color: #a0a0a0;
                        float: right;
                    }
                }
            }
            .split-line{
                background: #d3d3d3;
                height: .026667rem;
                overflow: hidden;
                padding: 0;
                margin: .266667rem .666667rem;
            }
        }
    }
}

</style>

