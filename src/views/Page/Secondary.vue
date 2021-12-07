<template>
    <!--二级共享页面-->
    <div class="detail-box">
        <h1>二级页面
           {{id}}
        </h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:"",
            detailId:"",
            DetailData:""
        }
    },
    components:{},
    created(){},
    mounted(){
        this.id = this.$route.params.Id
       // console.log(this.$route.params.Id)
        this.Queryall()
    },
    computed:{

    },
    methods:{
         // 查询全部
        Queryall(){
            this.axios.post(this.$api_router.solution+'findMenuId?menuId='+this.id)
            .then(res=>{
               //console.log(res)
                if(res.data.code == 200){
                        this.DetailData = res.data.data
                }else{
                    return false
                }
            })     
        },
    }
}
</script>
<style scoped>
   
</style>