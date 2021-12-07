<template>
    <!-- 首页-产品优势 -->
    <div class="module-box">
        <div class="title">
            <div class="m-title flex flex-aic">
                <img class="m-title-img" src="../assets/images/group.png" alt="">
                <p>产品优势</p> 
                <img class="m-title-img rotate" src="../assets/images/group.png" alt="">
            </div>
            <div class="m-title flex flex-aic">
                <span>AFeatures</span> 
            </div>
        </div>
        <div class="Module5">
           
            <div class="list flex" v-for="(item,index) in listdata" :key="index">
                <div class="one">
                </div>
                <img :src="item.advantagePic" alt="">
                <p>{{item.advantageHeadline}}</p>
                <span>{{item.advantageDetails}}</span>
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
         // 查询全部
        Queryall(){
            this.axios.post(this.$api_router.product+'findAll')
            .then(res=>{
               // console.log("产品优势",res)
                if(res.data.code == 200){
                        this.listdata = res.data.data
                }else{

                    return false
                }
            })     
        },
    }
}
</script>
<style scoped>
   @import "../assets/css/Module5.css";
</style>
