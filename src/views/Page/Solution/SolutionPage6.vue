<template>
  <div class="Solutionpage-box">
        <div class="banner">
            <!-- <img :src="listdata2.schoolPic" alt="">
            <p>{{listdata2.schoolHeadline}}</p> -->
             <img src="../../../assets/images/solution.png" alt="">
            <p>多种智能方案,构建智慧校园</p>
            <div class="mask"></div>
        </div>
        <div class="content  module-box">
            <div class="mar-auto">
                <div class="folte-l" @click="back()">
                    <span class="iconfont icon-fanhui"></span>
                    <a href="javascript:;">返回</a>
                    <!-- <router-link to="/industry">返回</router-link>  -->
                </div>
            </div>
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="../../../assets/images/group.png" alt="">
                    <p>{{listdata1.menuName}}</p> 
                    <img class="m-title-img rotate" src="../../../assets/images/group.png" alt="">
                </div>
                <!-- <div class="m-title flex flex-aic">
                    <span>Smart clothes</span> 
                </div> -->
            </div>
            <div class="list" v-show="!show">
               <p v-html="listdata2.schoolDetails"></p>
            </div>
            <div class='loader' v-show="show">
                <!-- <div class='loader_overlay'></div> -->
                <div class='loader_cogs'>
                    <div class='loader_cogs__top'>
                    <div class='top_part'></div>
                    <div class='top_part'></div>
                    <div class='top_part'></div>
                    <div class='top_hole'></div>
                </div>
                <div class='loader_cogs__left'>
                    <div class='left_part'></div>
                    <div class='left_part'></div>
                    <div class='left_part'></div>
                    <div class='left_hole'></div>
                </div>
                <div class='loader_cogs__bottom'>
                    <div class='bottom_part'></div>
                    <div class='bottom_part'></div>
                    <div class='bottom_part'></div>
                    <div class='bottom_hole'></div>
                </div>
                    <p>loading...</p>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            listdata1:[],
            listdata2:{},
            id:"",
            show:true,
        }
    },
    created(){},
    mounted(){
        // this.id = this.$route.params.Id
        this.Queryall()
        
    },
    computed:{
            
    },
    watch:{
        
    },
    methods:{
        Queryall(){
            this.axios.post(this.$api_router.solutionmenu+'findAll')
            .then(res=>{
               //console.log("菜单数据",res)
                if(res.data.code == 200){
                        this.listdata1 = res.data.data[5]
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
              //.console.log("详细内容",res)
                if(res.data.code == 200){
                        this.listdata2 = res.data.data
                        this.show = false
                        // this.$Message.success('查询完成!');
                }else{
                    return false
                }
            })     
        },
         //返回上一层
        back(){
            this.$router.go(-1);
        },

    }
}
</script>
<style scoped>
   @import '../../../assets/css/Solutionpage.css';
</style>