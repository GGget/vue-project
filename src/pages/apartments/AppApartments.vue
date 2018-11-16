<template>
    <section class="apartments">
        <div class="apartment-swiper-box">
            <swiper  :options="swiperOption" ref="mySwiper">
                <swiper-slide 
                    v-for = "item in headimglist"
                    :key  = "item.index"
                >
                <img width="100%" :src="item+'?x-oss-process=image/resize,h_420,w_750,limit_0,m_fill'">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <div><span class="favo"><i class="fa fa-lg fa-heart"></i></span>
                <div transition="bounce" class="favo-show" style="display: none;"><i class="iconfont icon-shoucangx-"></i>
                </div>
                <div transition="bounce2" class="favo-hidden" style="display: none;"><span class="zh">您已取消收藏此房源</span>
                </div>
            </div>
        </div>
        <div class="apartment-basic-wrap">
            <ul class="basic">
                <li class="change-bott">
                    <h1>{{houseDate.title}}</h1>
                    <!---->
                    <p class="price">US$<span>{{houseDate.price}}</span>起/月</p>
                    <p class="tags"><span style="border-color: rgb(96, 194, 140); color: rgb(96, 194, 140);">过马路就到UIC</span><span style="border-color: rgb(165, 147, 224); color: rgb(165, 147, 224);">有门禁</span><span style="border-color: rgb(46, 196, 182); color: rgb(46, 196, 182);">可租单间</span>
                    </p>
                    <div class="tags-bird">
                        <div class="tags-bird-more">
                            <img src="https://pcpic.uhouzz.com/webappseo/images/f17b0060abd12775e9b326f6da7abbb4.png" alt="">
                        </div>
                        <ul>
                            <li v-for="item in houseDate.actHousetag" :key="item.tagname">
                                <p class="ico-text"><i class="fa fa-lg fa-tags"></i><span class="text">{{item.activity_description}}</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div class="wrap-box">
                
            </div>
            <ul class="basic">
                
                <li class="address"><i></i><span>地址：{{houseDate.address}}</span>
                </li>
                <li class="times">
                    <h6>去往{{houseDate.schoolname}}的时间：</h6>
                    <p class="time">
                        
                        <span class="time-bike">{{traffics.cycling}}</span><span class="time-walk">{{traffics.walking}}</span>
                        
                    </p>
                    <p class="tips">(以上数据来自google,以实际情况为准)</p>
                </li>
            </ul>
            <div class="recommend-reason">
                <h6>推荐理由</h6>
                
                <p v-for="(item,index) in houseDate.recommendReason" :key="index"><span>{{(index+1)}}</span><i>{{item}}</i>
                </p>
            </div>
            
        </div>
        <div class="apartment-room-comment">
            <h5 class="title">看住过的朋友怎么说(5)<span>></span></h5>
            <div class="content">
                <p class="nickname">
                    <img align="absmiddle">617*****98</p>
                <p class="des">和我同学一起在loop租的房子。相比较而言这个公寓简直不能更划算。家具什么的都有，客厅的沙发和桌椅也很有格调。我们住的房间采光很好，暖气也很足，冬天非常的温暖。公寓的管理人员也非常优秀，出现问题都很积极的帮我们解决。</p>
            </div>
        </div>
        <div class="apartment-house-type apt detail-box">
            <div   >
                <div    class="low-qrice-wrap" style="padding: .533333rem 0rem 0rem;">
                    <div    class="low-qrice-content">
                        <img    src="https://pcpic.uhouzz.com/webappseo/images/dbf4c930c25f27492033383d9333679f.gif" alt="">
                        <div    class="low-qrice-text">
                            <p   >更低价格保障</p>
                            <p   >没有比这更低价，如果有，我照给。</p>
                            <p   >条款和条件</p>
                        </div>
                    </div>
                </div>
            </div>
            <h4 id="house-detail-title" class="house-detail-title">房间类型</h4>
            <div class="tab-title">
                <p class="tabs"><span class="hover">{{rooms.description}}</span><span class="">一室</span><span class="">两室</span><span class="">三室</span><span class="">四室</span>
                </p>
            </div>
            <ul>
                <li>
                    <dl class="img-desc"><dt><img :src="rooms.thumburl+'?x-oss-process=image/resize,m_lfit,h_50,w_90'"></dt>
                        <dd>
                            <h6>{{rooms.roomtype}}</h6>
                            <p>
                                <!---->
                                <!----><span>  起租日期:{{rooms.datefrom}}</span>
                            </p>
                            <p><span>租期:{{rooms.rent_time}}{{rooms.rentunit}}</span>
                            </p>
                        </dd>
                    </dl>
                    <div class="price-button">
                        <div class="price">
                            <!---->
                            <p v-html="rooms.amount_string">{{rooms.amount_string}}</p>
                        </div>
                        <!---->
                        <button class="bt-consult">咨询</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="apartment-detail-box">
            <h4 class="detail-house-title">配套设施</h4>
            <div class="content">
                <ul class="facilities-part">
                    <li>
                        <img src="https://pic.uhouzz.com/HouseFacilitiesIconUrl/icon3x/8.png"></img>
                        <span>厨房</span>
                    </li>
                    <li>
                        <img src="https://pic.uhouzz.com/HouseFacilitiesIconUrl/icon3x/13.png"></img>
                        <span>暖气</span>

                    </li>
                    <li>
                        <img src="https://pic.uhouzz.com/HouseFacilitiesIconUrl/icon3x/15.png"></img>
                        <span>家具</span>

                    </li>
                    <li>
                        <img src="https://pic.uhouzz.com/HouseFacilitiesIconUrl/icon3x/23.png"></img>
                        <span>空调</span>

                    </li>
                    <li>
                        <span class="num">
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div  class="apartment-about">
            <h4  class="house-detail-title">房源描述</h4>
            <div  class="content-house">
                <div  class="house-about" v-html="houseDate.about">{{houseDate.about}}</div>
                <p  class="show-all ">展开<i class="fa fa-lg fa-sort-down"></i>
                </p>
            </div>
            <!---->
        </div>
        <div class="apartment-money">
            <h4 class="house-detail-title">公寓收费说明</h4>
            <div class="spec-info">
                <div class="content">
                    
                    <p v-for="(item,index) in houseDate.priceDescs" :key="index"><span>{{index+1}}.</span><i>{{item.title}}：{{item.remark}}</i>
                    </p>
                </div>
                <!---->
                <p class="more"><a>收起<i></i></a>
                </p>
            </div>
        </div>
        <div class="apartment-map detail-box">
            <h4 class="house-detail-title">周边地图</h4>
            <img src="https://maps.google.cn/maps/api/staticmap?markers=41.876170,-87.652195&amp;zoom=13&amp;size=375x200&amp;scale=2&amp;format=png&amp;key=AIzaSyB4ggOBQ9UfDbEhcKy8aBAv46YBu03tjUA&amp;language=zh-CN" alt="">
            <div class="info">
                {{houseDate.address}}
            </div>

            <div class="info"><p class="title">交通情况</p><h6>去往{{houseDate.schoolname}}的时间：</h6><p class="times"><!----><!----><span class="time-bike">自行车：{{traffics.cycling}}</span><span class="time-walk">步行：{{traffics.walking}}</span></p><p class="tips">(以上数据来自google,以实际情况为准)</p></div>
            <div class="info"><p class="title">周边设施</p></div>
        </div>
        <div class="apartment-cooperate detail-box">
            <div class="body">
                <div class="cooperate-list">
                    <p>2964人想找该房室友</p>
                    <ul>
                        <li class=""><span class="head-img"><img src="https://pic.uhouzz.com/uhouzzpic/20180612/b370d1b7fcc6b28aac09028d658a71d3"></span>
                        </li>
                        <li class=""><span class="head-img"><img src="https://pic.uhouzz.com/uhouzzpic/20160815/8b366f0bbec0828a2e43993d3a3ce3c9"></span>
                        </li>
                        <li class=""><span class="head-img"><img src="https://pic.uhouzz.com/geren/default_photo.png"></span>
                        </li>
                        <li class=""><span class="head-img"><img src="https://pic.uhouzz.com/uhouzzpic/20161107/4c16981a4b0224513a579cfe38cbdb03"></span>
                        </li>
                        <li class=""><span class="head-img"><img src="https://pic.uhouzz.com/uhouzzpic/20150827/0686ad8d7b55913dfc113d5843af2318"></span>
                        </li>
                        <li class="bt-turn-page">
                            <p>...</p>
                        </li>
                    </ul>
                </div>
                <button>我要找室友</button>
            </div>
        </div>
        <div class="developer-intro">
            <a>公寓商 </a>
            <span>></span>
        </div>
        <div style="background:#fff">
        <app-home-box :info="3"></app-home-box>
        </div>
        
        <div class="sku">
            <p class="line-grey"></p>
            <span class="text">房源编号: {{houseDate.sku}}</span>
        </div>
    </section>

</template>
<script>

    import AppHomeBox from '@c/common/app-home/AppHomeBox'
    export default {
        // props:['info'],
        data() {
            return {
                    swiperOption: { 
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'fraction',
                        },
                        loop: false, 
                        autoplay: false
                    },
                    
                    headimglist:[],
                    houseDate:{},
                    rooms:{},
                    traffics:{},
                    broker:{}
                }
            },
            components: {
                AppHomeBox
            },
            created() {
                const _hid=this.$route.params.hid
                console.log(_hid)
                this.$http({
                    url: '/yxhj/index.php/wechatapp/House/houseDetail?src=webapp&hid='+_hid,
                }).then(result => {
                    this.headimglist = result.headimglist
                    this.houseDate=result
                    this.rooms=result.rooms[0]
                    this.traffics=result.traffics
                    this.broker=result.broker
                    console.log(result)
                    console.log(this.houseDate)
                    // console.log(this.headimglist)
                    // console.log(this.houseDate.traffics.cycling)
                })
            },
            // created() {
            //     console.log( this.$route.params.hid)
                
            //     console.log("1")
            // },
            methods:{
                
            },
            computed: {
                swiper () {
                    return this.$refs.mySwiper.swiper
                    }
            }, 
            mounted() {
                // current swiper instance
                // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
                //   console.log('this is current swiper instance object', this.swiper)
                //   this.swiper.slideTo(3, 1000, false)
                // console.log(this.$router)
            }
        }
</script>
<style lang="scss">
    .apartments{
        background:#eee;
        .detail-box {
            padding: 0 .533333rem .533333rem;
            margin: .266667rem 0 0;
            background: #fff;
            .house-detail-title{
                font-family: STHeiti;
                font-size: .48rem;
                color: #313131;
                line-height: 1;
                text-align: left;
                border-bottom: 0;
                padding:  .533333rem 0;
                
    
            }
        }
        
        .apartment-swiper-box{
            background:#eee;
            
            position: relative;
            overflow: hidden;
            .favo {
                position: absolute;
                top: 0;
                right: 0;
                padding: .426667rem;
                z-index:1;
                font-size:.293333rem;
                i {
                    background: rgba(0,0,0,.3);
                    width: .373333rem;
                    height: .373333rem;
                    border-radius: 100%;
                    padding: .213333rem;
                    color: #fff;
                    &:before{
                        position:relative;
                        top:.06rem;
                    }
                }
            }
            .swiper-pagination{
                width: 1.173333rem;
                height: .586667rem;
                text-align: center;
                line-height: .586667rem;
                color: #fff;
                font-size: .32rem;
                position: absolute;
                bottom: .533333rem;
                left:auto;
                border-radius: .293333rem;
                right: .266667rem;
                background: rgba(0,0,0,.5);
            }
        }
        .apartment-basic-wrap{

            .basic{
                padding: 0 .533333rem;
                color: #313131;
                font-size: .4rem;
                background: #fff;
                position: relative;
                li{
                    padding: .266667rem 0 .4rem;
                    border-bottom: .026667rem solid #e8e8e8;
                    &:last-child {
                        border: 0;
                    }
                }
                .change-bott{
                    padding-bottom: .026667rem;
                    h1{
                        color: #313131;
                        font-size: .64rem;
                        line-height: .72rem;
                        font-weight: 400;
                        word-break: break-all;
                    }
                    .price{
                        color: #ff5a5f;
                        margin: .186667rem 0;
                        font-size: .32rem;
                        span{
                            font-size: .48rem;
                        }
                    }
                    .tags{
                        padding: 0 0 .266667rem;
                        span{
                        display: inline-block;
                        border-radius: .053333rem;
                        font-size: .32rem;
                        padding: .026667rem .133333rem;
                        margin: .08rem .133333rem 0 0;
                        border: .026667rem solid;
                        }
                    }
                    .tags-bird{
                            font-size: .32rem;
                            color: #626262;
                            margin: 0 0 .533333rem;
                        .tags-bird-more{
                            position: absolute;
                            right: .533333rem;
                            margin-top: .213333rem;
                            img{width: .533333rem;}
                        }
                        ul{
                            border: 0;
                            font-size: 100%;
                            vertical-align: baseline;
                            margin: 0;
                            padding: 0;
                            li{
                                line-height: .506667rem;
                                margin: 0 0 .266667rem;
                                padding: 0;
                                border: 0;
                                .ico-text{
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    font-family: PingFangSC-Regular;
                                    font-size: .373333rem;
                                    color: #313131;
                                    padding-right: 1.066667rem;
                                    i{
                                        width: .4rem;
                                        color: #fca646;
                                        margin-right: .266667rem;
                                    }
                                    .text{
                                        height: .533333rem;
                                        display: inline-block;
                                        overflow: hidden;
                                    }
                                }
                            }
                        }
                    }
                    
                }
                .address{
                    font-size: .373333rem;
                    color: #626262;
                    line-height: .56rem;
                    border-top: .026667rem solid #e8e8e8;
                    display: -webkit-box;
                    -webkit-box-align: center;
                    i{
                        display: block;
                        width: .453333rem;
                        height: .64rem;
                        background: url(https://pcpic.uhouzz.com/webappseo/images/52c5cb2f30aaf642a53f43cb7ef435eb.png) no-repeat 0;
                        background-size: .453333rem .64rem;
                        margin: 0 .266667rem 0 0;
                    }
                    span{
                        display: block;
                        -webkit-box-flex: 1;
                    }
                }
                .times{
                    
                    
                    h6{
                        font-size: .373333rem;
                        color: #313131;
                        font-weight: 400;
                    }
                    .time{
                        margin: .053333rem 0;
                        span{
                            padding: 0 0 0 .533333rem;
                            font-size: .32rem;
                            margin: 0 .266667rem 0 0;
                            color: #626262;
                        }
                    }
                    .tips{    
                        margin: .053333rem 0;
                        font-size: .32rem;
                        color: #a0a0a0;
                        }
                }
            }
            .recommend-reason{
                margin: .266667rem 0 0;
                padding: 0 .533333rem .4rem;
                background: #fff;
                h6{
                    font-size: .48rem;
                    color: #313131;
                    font-weight: 400;
                    padding: .4rem 0;
                }
                p{
                    font-size: .373333rem;
                    color: #626262;
                    margin: .08rem 0;
                    display: -webkit-box;
                    span{
                        display: block;
                        width: .426667rem;
                        height: .426667rem;
                        border-radius: .053333rem;
                        background: #ff5a5f;
                        color: #fff;
                        line-height: .453333rem;
                        text-align: center;
                        margin: 0 .266667rem 0 0;
                        font-size: .32rem;
                    }
                    i{
                        -webkit-box-flex: 1;
                        display: block;
                    }
                }
            }
        }
        .apartment-room-comment{
            background: #fff;
            padding: 0 .4rem;
            margin: .266667rem 0 0;
            h5{
                font-size: .48rem;
                color: #313131;
                font-weight: 400;
                padding: .4rem 0;
                border-bottom: .026667rem solid #e8e8e8;
                span{
                    text-align:right;
                }
            }
            .content{
                color: #626262;
                font-size: .373333rem;
                padding: 0 0 .533333rem;
                .nicname{
                        padding: .4rem 0 .133333rem;
                    img{
                        width: .8rem;
                        height: .8rem;
                        border: .026667rem solid #feb501;
                        border-radius: 100%;
                        display: inline-block;
                        margin: 0 .133333rem 0 0;
                    }
                }
                .des{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    line-height: .506667rem;
                }
            }
        }
        .apartment-house-type{
            padding: 0 .533333rem .533333rem;
            margin: .266667rem 0 0;
            background: #fff;
                color: #626262;
            div{
                .low-qrice-wrap{
                    width: 100%;
                    padding: .533333rem;
                    background: #fff;
                    .low-qrice-content{
                        width: 100%;
                        background: #fff2f1;
                        padding: .266667rem;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-align: center;
                        align-items: center;
                        img{
                            width: 2.346667rem;
                            height: 1.44rem;
                            margin-right: .266667rem;
                            display: inline-block;
                        }
                        .low-qrice-text{
                            -ms-flex: 1;
                            flex: 1;
                            p{
                                &:first-child{
                                color: #ff5a5f;
                                font-size: .426667rem;
                                margin-bottom: .053333rem;
                                }
                                &:second-child{
                                font-size: .32rem;
                                color: #333;
                                }
                                &:nth-child(3){
                                font-size: .32rem;
                                color: #ff5a5f;
                                text-decoration: underline;
                                }
                            }
                            
                        }
                    }
                }
            }
            h4{
                border-bottom: .026667rem solid #e8e8e8;
                padding: .533333rem 0;
                font-family: STHeiti;
                font-size: .48rem;
                color: #313131;
                line-height: 1;
                text-align: left;
            }
            .tab-title{
                display: -ms-flexbox;
                display: flex;
                border-bottom: .026667rem solid #e8e8e8;
                .tabs{
                    -ms-flex: 1;
                    flex: 1;
                    padding: .133333rem 0 0;
                    span{
                        display: inline-block;
                        font-family: PingFangSC-Regular;
                        font-size: .373333rem;
                        color: #313131;
                        padding: .133333rem .133333rem .213333rem;
                        margin: 0 .133333rem;
                        border-bottom: .08rem solid #fff;
                    }
                    .hover{
                            color: #ff5a5f;
                            border-bottom: .08rem solid #ff5a5f;
                    }
                }
            }
            ul{
                li{
                    background:#fff;
                    padding: .4rem 0;
                    border-bottom: .026667rem solid #e8e8e8;
                    .img-desc{
                        display: -webkit-box;
                        dt{
                            width: 2.4rem;
                            height: 1.333333rem;
                            overflow: hidden;
                            img{
                                display: block;
                                border: 0;
                                height: 100%;
                                margin: 0 auto;
                            }
                        }
                        dd{
                            -webkit-box-flex: 1;
                            margin: 0 0 0 .266667rem;
                            h6{
                                font-weight: 400;
                                font-size: .426667rem;
                                color: #313131;
                                padding: 0;
                                margin: 0;
                            }
                            p{
                                height:.48rem;
                                display: block;
                                font-size: .32rem;
                                color: #666;
                                line-height:.48rem;
                                span{    display: inline-block;}
                            }
                        }
                    }
                    .price-button{
                        display: -webkit-box;
                        -webkit-box-align: center;
                        .price{
                            -webkit-box-flex: 1;
                            p{
                                display: block;
                                font-size: .32rem;
                                color: #ff5a5f;
                                span{font-size: .48rem;}
                            }
                        }
                        .bt-consult{
                            background: #fff;
                            border: .026667rem solid #ff5a5f;
                            color: #ff5a5f;
                            margin-bottom: .133333rem;
                            width: 1.866667rem;
                            height: .88rem;
                            line-height: .88rem;
                        }
                    }
                }
            }

        }
        .apartment-detail-box{
            padding: 0 .533333rem .533333rem;
            background: #fff;
            margin: -0.266667rem 0 0;
            .detail-house-title{
                padding: .533333rem 0;
                font-family: STHeiti;
                font-size: .48rem;
                color: #313131;
                line-height: 1;
                text-align: left;
                border-bottom: 0;
            }
            .content{
                background: #fff;
                margin: 0;
                padding: 0;
                .facilities-part {
                    padding: .4rem 0;
                    overflow: hidden;
                    width: 100%;
                    margin: 0 auto;
                    border-bottom: .026667rem solid #e8e8e8;
                    span{
                        display: block;
                        font-size: .32rem;
                        color: #666;
                        margin: .266667rem auto 0;
                        white-space: nowrap;
                    }
                    li{
                        display:block;
                        float: left;
                        width: 18%;
                        list-style: none;
                        margin: .133333rem .053333rem;
                        text-align: center;
                        img{
                            width: .693333rem;
                            height: .64rem;
                            margin: 0 auto;
                            display: block;
                            background: none;
                        }
                        .num{
                            font-size: .32rem;
                            color: #626262;
                            margin: .533333rem 0 0;
                            i{
                                display: inline-block;
                                background: #666;
                                width: .133333rem;
                                height: .133333rem;
                                border-radius: 100%;
                                margin: 0 .053333rem;
                            }
                        }
                    }
                }
            }
        }
        .apartment-about{
            margin: 0;
            background: #fff;
            padding: 0 .533333rem .533333rem;
            .house-detail-title{
                font-family: STHeiti;
                font-size: .48rem;
                color: #313131;
                line-height: 1;
                text-align: left;
                padding: 0 0 .533333rem;
                border-bottom: 0;
            }
            .content-house{
                color: #666;
                background: #fff;
                font-size: .373333rem;
                padding: .266667rem 0 0;
                .house-about{ 
                    line-height:1.5;
                    white-space:1.5;
                }
                .show-all{
                    text-align: center;
                    font-size: .373333rem;
                    color: #666;
                    line-height: .4rem;
                    padding: .666667rem 0 .266667rem;
                    i{
                        color:#000;
                        margin-left:.266667rem;
                    }
                }
            }
        }
        .apartment-money{
            padding: 0 .533333rem .533333rem;
            margin: .266667rem 0 0;
            background: #fff;
            .house-detail-title{
                font-family: STHeiti;
                font-size: .48rem;
                color: #313131;
                line-height: 1;
                text-align: left;
                border-bottom: 0;
                padding: 0 0 .533333rem;
            }
            .spec-info{
                .content{
                    background: #fff;
                    margin: 0;
                    padding: 0;
                    p{
                        color: #626262;
                        font-size: .373333rem;
                        line-height: 1.5;
                        background-color: #fff;
                        text-align: left;
                        display: -webkit-box;
                        span{
                            display: block;
                            width: .533333rem;
                        }
                        i{
                            display: block;
                            -webkit-box-flex: 1;
                        }
                    }
                }
                .more{
                    text-align: right;
                    font-size: .373333rem;
                    color: #666;
                    margin: -0.266667rem 0;
                    display: block;
                    padding: 0;
                    a{
                        i{
                            display: inline-block;
                            width: 0;
                            height: 0;
                            border-left: .106667rem solid transparent;
                            border-right: .106667rem solid transparent;
                            border-bottom: .106667rem solid #666;
                            margin: 0 0 0 .133333rem;
                            position: relative;
                            top: -0.08rem;
                        }
                    }
                }

            }
        }
        .apartment-map{
            img{
                display: block;
                margin: 0 0 .533333rem;
                width: 100%;
            }
            .info{
                font-size: .373333rem;
                color: #666;
                line-height: 1.5;
                font-weight: 200;
            }
        }
        .apartment-cooperate{
            .body{
                padding: .4rem .4rem 0 0;
                text-align: center;
                .cooperate-list{
                    p{
                        text-align: left;
                    }
                    ul{
                        display: -webkit-box;
                        margin-top: .72rem;
                        li{
                            width: 100%;
                            -webkit-box-flex: 1;
                            text-align: center;
                            .head-img{
                                display: block;
                                font-size: .4rem;
                                color: #626262;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                display: block;
                                width: 1.333333rem;
                                height: 1.333333rem;
                                margin: 0 auto .266667rem;
                                border-radius: 50%;
                                border: .026667rem solid #feb501;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .bt-turn-page{
                            p{
                                width: 1.333333rem;
                                height: 1.333333rem;
                                line-height: .853333rem;
                                margin: 0 auto .266667rem;
                                border-radius: 50%;
                                background: #e8e8e8;
                                color: #fff;
                                text-align: center;
                                font-size: .8rem;
                            }
                        }
                    }
                }
                button{
                    height: .933333rem;
                    line-height: .853333rem;
                    max-width: 5.2rem;
                    text-align: center;
                    display: inline-block;
                    margin-top: .533333rem;
                    font-size: .4rem;
                    color: #ff5a5f;
                    border: .026667rem solid #ff5a5f;
                    border-radius: .106667rem;
                    background: #fff;
                }
            }
        }
        .developer-intro{
                background: #fff;
                padding: 0 .4rem;
                margin: .266667rem 0;
                display: -webkit-box;
                -webkit-box-align: center;
            a{
                -webkit-box-flex: 1;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                font-size: .48rem;
                display: block;
                color: #313131;
                font-weight: 400;
                padding: .4rem 0;
                white-space: nowrap;
            }
            span{
                position:relative;
                font-weight:600;
                font-size:.533333rem;
            }
        }
        .sku{
            font-size: .373333rem;
            color: #999;
            padding: 0 .533333rem .01rem;
            text-align: center;
            .line-grey{
                border-bottom: .026667rem solid #d3d3d3;
                width: 100%;
                position: relative;
                top: .533333rem;
                z-index: 1;
            }
            .text{
                display: block;
                width: 5.866667rem;
                background: #f7f7f7;
                position: relative;
                z-index: 2;
                margin: .266667rem auto .4rem;
            }
        }
    }
    
</style>