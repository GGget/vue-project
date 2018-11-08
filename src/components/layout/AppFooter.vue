<template>
    <footer  class="app-footer">
        <section class="footer-load-app">
            <div class="footer-load">
                <div class="logo">
                    <img src="../../../public/images/footer.png" alt="">
                    <p><strong>异乡好居APP</strong>全球长租预订平台</p>
                </div>
                <a class="go-load zh">打开APP</a>
            </div>
            <div class="footer-kefu">
                <div class="footer-lang">
                    <select>
                        <option value="zh-CN">中文简体</option>
                        <option value="en-US">English</option>
                        <option value="tw">繁体</option>
                        <option value="jp">日本語</option>
                        <option value="kr">한국어</option>
                        <option value="vn">Tiếng Việt</option>
                        <option value="fr">Français</option>
                        <option value="es">Español</option>
                        <option value="ru">русский</option>
                        <option value="de">Deutsch</option>
                        <option value="th">ภาษาไทย</option>
                        <option value="gr">Ελλάδα</option>
                        <option value="tr">Türkçe</option>
                        <option value="br">Português</option>
                        <option value="it">Italiano</option>
                    </select><i class="iconfont icon-xialajiantoushixin footer-zhankaix_huaban"></i>
                </div>
                <div class="footer-tel">客服电话</div>
            </div>
        </section>
        <div>
            <p class="company-info">©2018异乡好居 津ICP备15000930号-2</p>
            <p class="company-info" style="display: none;">©2018北京异乡好居网络科技有限公司
                <br>京ICP备16055998号-1</p>
            <p class="company-info" style="display: none;">©2018北京西游旅行网络科技有限公司<br>京ICP备16005657号</p>
        </div>
        <!---->
    </footer>
</template>

<script>

    
    export default {
        name:'',
        props:[''],
        data () {
            return {
                
            };
        }

    }

</script>
<style lang='scss'>
    .app-footer {
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding-top: .533333rem!important;
        font-size: .32rem;
        color: #fff;
        text-align: center;
        background: #f0f0f0;
        background-size: 100%;
        line-height: 1;

        .footer-load-app {
            padding: 0 .533333rem;
            .footer-load{
                padding: 0 .4rem;
                display: -webkit-box;
                -webkit-box-align: center;
                background-color: #fff;
                border: .026667rem solid #e8e8e8;
                line-height: 1.813333rem;
                font-size: .373333rem;
                color: #313131;
                height: 1.813333rem;
                border-radius: .08rem;
                .logo{
                    align-items: center;
                    height: 1.146667rem;
                    -webkit-box-flex: 1;
                    display: -webkit-box;
                    -webkit-box-align: center;
                    img{
                        width: 1.253333rem;
                        height: 1.253333rem;
                        border-radius: .16rem;
                    }
                    p{
                        strong{
                            display:block;
                        }
                        line-height: .453333rem;
                        color: #626262;
                        text-align: left;
                        margin-left: .266667rem;
                        -webkit-box-flex: 1;
                    }
                }
                .go-load{
                    width: 2rem;
                    height: .8rem;
                    color: #fff;
                    background-color: #ff5a5f;
                    border-radius: .08rem;
                    text-align: center;
                    font-size: .373333rem;
                    text-indent: 0;
                    display: block;
                }
                .zh{
                    line-height:.8rem;
                }
            }
            .footer-kefu{
                display: flex;
                margin-top: .533333rem;
                padding-bottom: .533333rem;
                border-bottom: .026667rem solid #e8e8e8;
                .footer-lang{
                    flex: 1;
                    display: -ms-flexbox;
                    display: flex;
                    margin: 0 .266667rem 0 0;
                    position: relative;
                    select{
                        height: 1.173333rem;
                        border: .026667rem solid #e8e8e8;
                        font-size: .373333rem;
                        color: #666;
                        padding-left: .533333rem;
                        display: block;
                        -ms-flex: 1;
                        flex: 1;
                        border-radius: .08rem;
                    }
                    i{
                        display: block;
                        width: .4rem;
                        padding: .4rem 0 0;
                        position: absolute;
                        right: .266667rem;
                    }
                }
                .footer-tel{
                    height: 1.173333rem;
                    margin: 0 0 0 .266667rem;
                    -ms-flex: 1;
                    flex: 1;
                    line-height: 1.173333rem;
                    background: #fff;
                    font-size: .373333rem;
                    color: #666;
                    border: .026667rem solid #e8e8e8;
                    text-align: center;
                    border-radius: .08rem;
                }
            }
        }
        div{
            .company-info {
                padding: .533333rem 0 1.333333rem;
                text-align: center;
                font-size: .32rem;
                line-height: 1;
                color: #999;
            }
        }
    }
</style>