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
                <span>AFeatures</span> 
            </div>
        </div>
        <div class="Module6">
            
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
   @import "../assets/css/Module6.css";
</style>
