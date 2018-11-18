


<template>
    <section class="uhomes-video">
        <div class="video">
            <video data-v-390a8a4c="" 
                   controls="controls" 
                   x5-video-player-type="h5" 
                   x5-video-player-fullscreen="true" 
                   playsinline="" 
                   webkit-playsinline="" 
                   :poster="videoData.logo" 
                   :src="videoData.link_url">
                   您的浏览器不支持video标签
            </video>
        </div>
        <div class="details">
            <p class="title">{{videoData.title}}</p>
            <p class="time">{{videoData.duration}}</p>
            <p class="content">{{videoData.description}}</p>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            videoData:{}
        }
    },
    async beforeCreate() {
        let _id = this.$route.params.id
        let _data = await this.$http({
            // url:`https://m.uhomes.com/index.php/wechatapp/video/videoDetail?src=webapp&hid=0&videoId=${_id}`,
            //下面这个方法也可以 将 参数放进 params对象中
            url:`https://m.uhomes.com/index.php/wechatapp/video/videoDetail`,
            params:{
                src:'webapp',
                hid:0,
                videoId:_id
            }
        })
        this.videoData = _data
    },

}

    //视频接口
    // https://m.uhomes.com/index.php/wechatapp/video/videoDetail?src=webapp&hid=0&videoId=101
</script>
<style lang="scss">
    .uhomes-video{
        width: 100%;
        .video{
            video{
                width: 100%;
            }
        }
        .details{
                padding: .533333rem .533333rem 0;
                font-size: .48rem;
                color: #313131;
                line-height: .48rem;
            .title{
                color: #313131;
            }
            .time{
                font-size: .32rem;
                color: #999;
                line-height: .32rem;
                margin-top: .266667rem;
            }
            .content{
                font-size: .373333rem;
                color: #666;
                line-height: .64rem;
                padding: .533333rem 0 1.866667rem;
            }
        }   
    }
</style>
