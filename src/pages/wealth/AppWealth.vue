<template>
    <section>
        <login-register :allClose.sync='isClose'></login-register>
        <app-wealth-list :allClose.sync='isClose'></app-wealth-list>
    </section>
</template>

<script>
import loginRegister from '@c/common/app-admin/loginRegister'
import AppWealthList from '@c/common/app-wealth/AppWealthList'

export default {
    data(){
        return {
            isClose:true
        }
    },
    components:{
        loginRegister,
        AppWealthList
    }

}
</script>

<style lang="scss" >

</style>

