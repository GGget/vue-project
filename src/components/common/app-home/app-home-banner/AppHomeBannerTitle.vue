<template>
    <div class="banner-title">
        <banner-title-search></banner-title-search>
        <banner-title-select></banner-title-select>
    </div>
</template>

<script>
    import BannerTitleSearch from '@c/common/app-home/app-home-banner/banner-title/BannerTitleSearch'
    import BannerTitleSelect from '@c/common/app-home/app-home-banner/banner-title/BannerTitleSelect'

    export default {
        components:{
            BannerTitleSearch,
            BannerTitleSelect
        }
    }
</script>

<style lang="scss">
    .banner-title{
        width:100%;
        border-bottom:solid .266667rem #f0f0f0;
    }
</style>