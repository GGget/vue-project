<template>
    <section>
        <login-register :allClose.sync='isClose'></login-register>
        <app-collect-list :allClose.sync='isClose'></app-collect-list>
    </section>
</template>

<script>
import loginRegister from '@c/common/app-admin/loginRegister'
import AppCollectList from '@c/common/app-collect/AppCollectList'

export default {
    props:['closeFooter'],
    created() {
        //这个界面需要footer 组件 所以修改为true
        this.$emit('update:closeFooter', true)
    },
    data(){
        return {
            isClose:true
        }
    },
    components:{
        loginRegister,
        AppCollectList
    },
    // 切换二级路由可以出发的钩子函数
    // beforeRouteUpdate(to, from, next) {
    //     console.log(111)
    //     console.log(to)
    //       next();
    // }
    

}
</script>

<style lang="scss" >

</style>

