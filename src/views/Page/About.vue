<template>
    <!-- 关于我们-->
    <div class="About-box">
        <div class="banner">
            <img src="../../assets/images/about-banner.png" alt="">
            <p>关于我们</p>
        </div>
        <div class="center1  module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>企业介绍</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Company Introduction</span> 
                </div>
            </div>
            <div class="data flex flex-jcsb" v-for="(item,index) in listdata1" :key="index">
                <div class="text">
                    <p v-html="item.firmMatter"></p>
                </div>
                <img class="img" :src="item.firmPic" alt="">
            </div>
        </div>
        <div class="center2  module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>荣誉资质</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Honor qualification</span> 
                </div>
            </div>
            <div class="swiper flex flex-jcsb">
                <div class="left">
                   <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/68771638770781622.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/68771638770781622.png" alt=""></a> 
                </div>
                <ul class="cen">
                    <li class="cen-box cen1">
                        <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/2641638770807138.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/2641638770807138.png" alt=""></a> 
                    </li>
                    <li class="cen-box cen2">
                        <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/12971638770751466.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/12971638770751466.png" alt=""></a>
                    </li>
                    <li class="cen-box cen3">
                        <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/18051638770839478.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/18051638770839478.png" alt=""></a>
                    </li>
                </ul>
                <div class="right">
                    <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/2411638770824417.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/2411638770824417.png" alt=""></a>
                </div>
            </div>
            <div class="swiper-two">
                <ul>
                    <li v-for="(item,index) in soft" :key="index" class="soft">
                        <img :src="item.src" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="center3  module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>联系我们</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Contact us</span> 
                </div>
            </div>
            <div class="mapData flex flex-jcsb">
                <img src="../../assets/images/map-img.png" alt="">
                <div class="text">
                    <p>联系电话：0371-63301628</p>
                    <p>电子邮箱：hnduxiukeji@163.com</p>
                    <p>公司地址：河南省郑州市中原区华强云瓴中心4009室</p>
                </div>
            </div>
        </div>
        <div class="center4  module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>合作伙伴</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Cooperation partner</span> 
                </div>
            </div>
            <div class="black">
                 <ul class="data flex flex-jcsb">
                    <li v-for="(item,index) in listData3" :key="index" class="flex">
                        <div>
                            <img :src="item.mergePic" alt="">
                        </div>
                        <p>{{item.mergeTitle}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listData:[],
            soft:[
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/85241638771441031.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/94211638771463398.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/91801638771453189.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/91381638771420677.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/83251638772999450.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/36991638771397489.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/77381638773391385.png"},
            ],
            listData2:[],
            listData3:[]
        }
    },
    created(){},
    mounted(){this.Queryall(),this.Queryall2(),this.Queryall3()},
    computed:{
        listdata1:function(){
            return this.listData.splice(0,1)
        }
    },
    methods:{
         // 查询全部
        Queryall(){
            this.axios.post(this.$api_router.company+'findAll')
            .then(res=>{
                //console.log("企业介绍",res)
                if(res.data.code == 200){
                        this.listData = res.data.data
                        // this.$Message.success('查询完成!');
                }else{
                    // this.$Message.warning(res.data.msg);
                    return false
                }
            })     
        },
        Queryall2(){
            this.axios.post(this.$api_router.system+'findAll')
            .then(res=>{
                //console.log("系统配置",res)
                if(res.data.code == 200){
                        this.listData2 = res.data.data[0]
                        // this.$Message.success('查询完成!');
                }else{
                    // this.$Message.warning(res.data.msg);
                    return false
                }
            })     
        },
        Queryall3(){
            this.axios.post(this.$api_router.cooperator+'findAll')
            .then(res=>{
               // console.log("合作单位",res)
                if(res.data.code == 200){
                        this.listData3 = res.data.data
                        // this.$Message.success('查询完成!');
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
    @import '../../assets/css/about.css';
</style>