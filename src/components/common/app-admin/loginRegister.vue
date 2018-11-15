

<template>
    <div class="login-show" v-show="loginShow">
        <div class="page-mask"></div>
        <div class="login-register">
            <div class="close"><i class="fa fa-close fa-lg close" @click="close"></i></div>
            <div class="title">{{title}}</div>
            <div class="login">
                <ul>
                    <li>
                        <div class="country"><span>+86</span></div>
                        <input type="tel" class="tel" name="" v-model="tel" placeholder="请输入手机号">
                    </li>
                    <li v-if = 'show' >
                        <input type="password" v-model="password" class="password" name="" placeholder="请输入登录密码">
                    </li>
                    <button @click ='next' :class="{submit:isSubmit}" class="btn">下一步</button>
                    <p v-if = 'show' class="forget">忘记密码</p>
                    <!-- <img src="https://m.uhomes.com/index.php/wechatapp/User/verify" alt=""> -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'登录',
            tel : '',
            password: '',
            show: false,
            loginShow:true,
            isSubmit: false
        }
    },
    //为了做通信 
    props:['allClose'],
    methods:{
        close(){
            this.loginShow = false;
        },
        next(){
            if(this.isSubmit && this.password){
                this.loginShow = false
                //当验证后 密码账号都没问题后 跟新allClose数据为false 这样就可以让AppOrderList组件的这个数据更新 得到关闭
                this.$emit('update:allClose', false)
                localStorage.setItem('MEIQIA_EXTRA_TRACK_ID',this.tel)
            }else if(this.isSubmit){
                this.isSubmit= false;
                this.show = true;
                this.title = '输入密码'
            }
        }
    },
    created (){
        if(localStorage.getItem('MEIQIA_EXTRA_TRACK_ID')){
            this.loginShow = false;
        }
    },
    watch:{
        tel(val){
            if((!this.show || this.password.length>6 )&& val.length > 8){
                this.isSubmit = true;
            }else{
                this.isSubmit = false;
            }
        },
        password(val){
            if(val.length>6 && this.tel.length>8){
                this.isSubmit = true;
            }else{
                this.isSubmit = false;
            }
        }
    }
}
</script>

<style lang="scss">
    .login-show{
        font-family: "micrMicrosoft YaHei";
        .page-mask{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0,0,0,.4);
            z-index: 1000;
        }
        .login-register{
            position: absolute;
            width: 7.2rem;
            top: 2.666667rem;
            background: #fff;
            margin: 0 auto;
            text-align: center;
            left: .4rem;
            right: .4rem;
            z-index: 1001;
            border-radius: .133333rem;
            padding: .8rem .533333rem;
            color: #313131;
            .close{
                position: absolute;
                top: .266667rem;
                right: .266667rem;
                color: #a0a0a0;
            }
            .title{
                font-size: .533333rem;
                font-weight: 300;
                line-height: .8rem
            }
            .login{
                ul{
                    li{
                        border-bottom: .026667rem solid #d3d3d3;
                        border-radius: .053333rem;
                        font-size: .4rem;
                        margin-top: .4rem;
                        .country{
                                height: 1.2rem;
                                float: left;
                                line-height: 1.2rem;
                                width: 25%;
                            span{
                                font-size: .4rem
                            }
                        }
                        input{
                            box-sizing: border-box;
                            border: none;
                            width: 100%;
                            font-size: .426667rem;
                            height: 1.2rem;
                            padding-left: .533333rem;
                            outline: none;
                        }
                        .tel{
                            width: 75%;
                        }
                    }
                    button{
                        margin-top: .533333rem;
                        color: #fff;
                        background: #e8e8e8;
                        display: inline-block;
                        width: 100%;
                        height: 1.2rem;
                        line-height: 1.2rem;
                        text-align: center;
                        font-size: .48rem;
                        border: 0;
                        border-radius: .053333rem;
                    }
                    .submit {
                        background: #ff5a5f!important;
                    }
                    .btn{
                        outline: none;
                    }
                    .forget{
                        font-size: .32rem;
                        color: #a0a0a0;
                        letter-spacing: 0;
                        text-align: left;
                        margin-top: .266667rem;
                    }
                }
            }
            
        }
    }
   
</style>
