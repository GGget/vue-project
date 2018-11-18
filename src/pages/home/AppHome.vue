<template>
    <section class="app-home">
        <app-home-banner></app-home-banner>
        <app-home-box :info = "options[0]"></app-home-box>
        <app-home-box :info = "options[1]"></app-home-box>
        <app-home-consultation></app-home-consultation>
        <app-home-video-box :info = "options[2]"></app-home-video-box>
        <app-line-block></app-line-block>
        <app-home-tip></app-home-tip>
    </section>
</template>

<script>
import AppHomeBanner from '@c/common/app-home/AppHomeBanner'
import AppHomeBox from '@c/common/app-home/AppHomeBox'
import AppHomeConsultation from '@c/common/app-home/AppHomeConsultation'
import AppHomeVideoBox from '@c/common/app-home/AppHomeVideoBox'
import AppLineBlock from '@c/common/app-home/AppLineBlock'
import AppHomeTip from '@c/common/app-home/AppHomeTip'


export default {
    props:['closeFooter'],
    created() {
        //这个界面不需要footer 
        this.$emit('update:closeFooter', true)
    },
    data(){
        return {
            options:[0,1,2]
        }
    },
    components: {
        AppHomeBanner,
        AppHomeBox,
        AppHomeConsultation,
        AppLineBlock,
        AppHomeVideoBox,
        AppHomeTip
    }
}
</script>

<style lang="scss" >
    
</style>
