<template>
    <section>
        <login-register :allClose.sync='isClose'></login-register>
        <app-order-list :allClose.sync='isClose'></app-order-list>
    </section>
</template>

<script>
import loginRegister from '@c/common/app-admin/loginRegister'
import AppOrderList from '@c/common/app-order/AppOrderList'


export default {
    data(){
        return {
            isClose:true
        }
    },
    components:{
        loginRegister,
        AppOrderList
    }

}
</script>

<style lang="scss" >

</style>

