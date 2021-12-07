<template>
    <!-- 首页-功能介绍 -->
    <div class="module-box">
        <div class="title">
            <div class="m-title flex flex-aic">
                <img class="m-title-img" src="../assets/images/group.png" alt="">
                <p>功能介绍</p> 
                <img class="m-title-img rotate" src="../assets/images/group.png" alt="">
            </div>
            <div class="m-title flex flex-aic">
                <span>AFeatures</span> 
            </div>
        </div>
        <div class="Module4 flex">
            <div class="list flex" v-for="(item,index) in listData" :key="index">
                <div class="div-radius">
                    <img class="div-img" :src="item.featurePic" alt="">
                </div>
                <div class="text flex">
                    <p>{{item.featureHeadline}}</p>
                    <p class="p2">{{item.featureDetails}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listData:[]
        }
    },
    created(){

    },
    mounted(){this.Queryall()},
    computed:{},
    methods:{
         // 查询全部
        Queryall(){
            this.loading = true
            this.axios.post(this.$api_router.function+'findAll')
            .then(res=>{
               // console.log("功能介绍",res)
                if(res.data.code == 200){
                        this.listData = res.data.data
                }else{
                  
                    return false
                }
            })     
        },
    }
}
</script>
<style scoped>
   @import "../assets/css/Module4.css";
</style>
