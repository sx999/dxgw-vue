<template>
  <div class="Solutionpage-box">
        <div class="banner">
            <img :src="listdata2.schoolPic" alt="">
            <p>{{listdata2.schoolHeadline}}</p>
        </div>
        <div class="content  module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="../../assets/images/group.png" alt="">
                    <p>{{listdata1.menuName}}</p> 
                    <img class="m-title-img rotate" src="../../assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Smart clothes</span> 
                </div>
            </div>
            <div class="list">
               <p v-html="listdata2.schoolDetails"></p>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            listdata1:{},
            listdata2:{},
            id:""
        }
    },
    created(){},
    mounted(){
        this.id = this.$route.params.Id
        this.Queryall()
        
    },
    computed:{

    },
    methods:{
        Queryall(){
            this.axios.post(this.$api_router.solutionmenu+'findAllId?menuId='+this.id)
            .then(res=>{
               console.log("菜单数据",res)
                if(res.data.code == 200){
                        this.listdata1 = res.data.data
                        this.Queryall1()
                        // this.$Message.success('查询完成!');
                }else{
                    return false
                }
            })     
        },
        Queryall1(){
            this.axios.post(this.$api_router.solution+'findMenuId?menuId='+this.listdata1.menuId)
            .then(res=>{
               console.log("详细内容",res)
                if(res.data.code == 200){
                        this.listdata2 = res.data.data
                        // this.$Message.success('查询完成!');
                }else{
                    return false
                }
            })     
        },

    }
}
</script>
<style scoped>
   @import '../../assets/css/Solutionpage.css';
</style>