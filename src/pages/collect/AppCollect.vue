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
    data(){
        return {
            isClose:true
        }
    },
    components:{
        loginRegister,
        AppCollectList
    }

}
</script>

<style lang="scss" >

</style>

