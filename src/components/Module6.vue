<template>
    <!-- 首页-联系我们 -->
    <div class="module-box">
        <div class="title">
            <div class="m-title flex flex-aic">
                <img class="m-title-img" src="../assets/images/group.png" alt="">
                <p>联系我们</p> 
                <img class="m-title-img rotate" src="../assets/images/group.png" alt="">
            </div>
            <div class="m-title flex flex-aic">
                <span>Contact us</span> 
            </div>
        </div>
        <div class="Module6">
            <div class="div2">
                <div class="front">
                    <div class="ico-img"><span class="iconfont icon-dianhua"></span></div>
                    <div>联系电话</div>
                    <div>{{this.listdata.sysPhone}}</div>
                </div>
                <div class="back front" style="background-color:#FFF">
                    <div class="ico-img"><span class="iconfont icon-dianhua"></span></div>
                    <div>联系电话</div>
                    <div>{{this.listdata.sysPhone}}</div>
                </div>
            </div>
            <div class="div2">
                <div class="front">
                    <div class="ico-img"><span class="iconfont icon-dizhi"></span></div>
                    <div>公司地址</div>
                    <div class="address">{{this.listdata.sysAddress}}</div>
                </div>
                <div class="back front" style="background-color:#FFF">
                    <div class="ico-img"><span class="iconfont icon-dizhi"></span></div>
                    <div>公司地址</div>
                    <div class="address">{{this.listdata.sysAddress}}</div>
                </div>
            </div>
            <div class="div2">
                <div class="front">
                    <div class="ico-img"><span class="iconfont icon-youjian"></span></div>
                    <div>邮箱地址</div>
                    <div>{{this.listdata.sysEmail}}</div>
                </div>
                <div class="back front" style="background-color:#FFF">
                    <div class="ico-img"><span class="iconfont icon-youjian"></span></div>
                    <div>邮箱地址</div>
                    <div>{{this.listdata.sysEmail}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listdata:[]
        }
    },
    created(){

    },
    mounted(){
        this.Queryall()
    },
    computed:{

    },
    methods:{
         //调用
          Queryall(){
            this.axios.post(this.$api_router.system+'findAll')
            .then(res=>{
               // console.log("配置信息",res)
                if(res.data.code == 200){
                        this.listdata = res.data.data[0]
                }else{

                    return false
                }
            })     
        },
    }
}
</script>
<style scoped>
   @import "../assets/css/Module6.css";
</style>
