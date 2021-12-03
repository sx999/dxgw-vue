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
            <div class="list flex">
                <img src="" alt="">
                <p>保障学生安全</p>
                <span>人脸识别、智能校服加强进出安全</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listdata:[
                
            ]
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
                // console.log(res)
                if(res.data.code == 200){
                        this.tableData = res.data.data
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
