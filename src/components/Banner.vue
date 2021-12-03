<template>
    <!-- <div class="block">
    <el-carousel trigger="click" height="600px">
      <el-carousel-item v-for="(item,index) in ListData" :key="index">
        <div class="pic-img">
            <img :src="item.rotationUrl" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div> -->
  <el-row>
    <el-col :span="24">
        <div class="banner-img"> 
            <img src="../assets/images/banner.png" alt="">
            <div class="text">
                <div class="title1 flex flex-aic">
                    <p>一山智慧</p>
                    <p>Yishan Wisdom</p>
                </div>
                <p class="p1">物联网数字化班级管理</p>
                <p class="p2 themecolors">提供硬件到软件一体化应用，支持多个场景</p>
                <div class="button">
                    查看详情
                </div>
            </div>
        </div>
    </el-col>
</el-row>
  
</template>
<script>
export default {
    data(){
        return{
            ListData:[]
        }
    },
    created(){},
    mounted(){
        this.Queryall()
    },
    computed:{

    },
    methods:{
          // 查询全部
        Queryall(){
            this.axios.post(this.$api_router.banner+'findAll')
            .then(res=>{
                console.log("banenr图",res)
                if(res.data.code == 200){
                        this.ListData = res.data.data
                }else{
                    // this.$Message.warning(res.data.msg);
                    return false
                }
            })     
        },
    }
}
</script>
<style scoped>
    .banner-img{
        /* width: 100%; */
        position: relative;
    }
    .banner-img .text{
        position:absolute;
        width: 520px;
        top: 159px;
        left: 448px;
        bottom: 0;
        right: 0;
        /* margin: 0 auto; */
        /* transform: translate(50%,50%); */
        color: #fff;
    }
    .banner-img .text .title1{
        font-weight: 800;   
    }
    .banner-img .text .title1 p:nth-child(1){
        font-size: 48px;
        letter-spacing: 6px;
    }
    .banner-img .text .title1 p:nth-child(2){
        font-size: 18px;
        letter-spacing: 2px;
        margin-left: 30px;
        /* height: 25px; */
        line-height: 21px;
        margin-top: 28px;
    }
    .banner-img .text .p1{
        margin-top: 10px;
        font-size: 36px;
        letter-spacing:7px;
    }
    .banner-img .text .p2{
        color: #1AE7E3;
        margin-top: 20px;
        font-size: 24px;
        letter-spacing: 3px;
    }
    .banner-img .text .button{
        margin-top: 40px;
        width: 138px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        /* background-color: #1AE7E3; */
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: 700;
        border-radius: 1px;
        opacity: 1;
        cursor: pointer;
        /* color: #158eff; */
        color: rgba(255, 255, 255, 0.8);
        background-color: rgba(66,130,244,0.8);
    }
    .banner-img .text .button:hover{
        opacity: 0.9;
        /* color: rgba(255, 255, 255, 0.8);
        background-color: rgba(66,130,244,0.8); */
    }
    .pic-img img{
        height: 600px;
    }
    /* .el-carousel__item.is-animating {
        transition: opacity .2s ease-in-out !important;
    } */
</style>