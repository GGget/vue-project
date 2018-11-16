


<template>
    <div>
        <app-uhomes-video></app-uhomes-video>
    </div>
</template>

<script>
import AppUhomesVideo from '@c/common/app-uhomes-video/AppUhomesVideo' 

export default {
    props:['closeFooter'],
    components:{
        AppUhomesVideo
    },
    created() {
        this.$emit('update:closeFooter',false)
    },

}
</script>
