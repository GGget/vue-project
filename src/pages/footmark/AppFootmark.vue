<template>
    <section>
        <login-register :allClose.sync='isClose'></login-register>
        <app-footmark-list :allClose.sync='isClose'></app-footmark-list>
    </section>
</template>

<script>
import loginRegister from '@c/common/app-admin/loginRegister'
import AppFootmarkList from '@c/common/app-footmark/AppFootmarkList'

export default {
    data(){
        return {
            isClose:true
        }
    },
    components:{
        loginRegister,
        AppFootmarkList
    }

}
</script>

<style lang="scss" >

</style>

