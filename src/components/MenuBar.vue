<template>
    <!-- 导航 -->
    <div class="header-home"> 
            <div class="logo flex flex-aic">
                <div class="logo-left-img">
                     <img :src="ListData.sysLogo" alt="Logo" @click="refresh()">
                </div>
                <div class="logo-text themecolors ">
                    <p class="p1 basic-font">独秀科技</p>
                    <p class="p2">DU XIU KE JI</p>   
                </div>
            </div>
        <el-menu
        :default-active="'/' +this.$route.path.split('/')[1]"
        class="el-menu-demo navt"
        mode="horizontal" 
        text-color="#333333"
        active-text-color="#4282F4"
        :router="true"
        >
            <el-menu-item index="/home"><p>首页</p> </el-menu-item>
            <el-menu-item index="/industry">行业资讯</el-menu-item>
            <el-submenu index="/solution" style="width: 125px">
                    <template slot="title" class="titlefont">
                       解决方案
                    </template>
                   <!-- <ul class="pull-down">
                       <li v-for="(item,index) in BarData" :key="index" @click="ToDetail(item.menuId)">{{item.menuName}}</li>
                   </ul> -->
                    <el-menu-item  class="smalldiv" index="/solution/solutionpage2">门禁系统</el-menu-item>
                    <el-menu-item class="smalldiv" index="/solution/solutionpage1">智能校服</el-menu-item>
                    <el-menu-item class="smalldiv" index="/solution/solutionpage3">智慧教室</el-menu-item>
                    <el-menu-item class="smalldiv" index="/solution/solutionpage4">录播教室</el-menu-item>
                    <el-menu-item class="smalldiv" index="/solution/solutionpage5">互动课堂</el-menu-item>
                    <el-menu-item class="smalldiv" index="/solution/solutionpage6">智慧照明</el-menu-item>
                    <el-menu-item class="smalldiv" index="/solution/solutionpage7">智慧图书馆</el-menu-item>
            </el-submenu>
            <el-menu-item index="/agency">代理加盟</el-menu-item>
            <el-menu-item index="/contact">APP下载</el-menu-item>
            <el-menu-item index="/album">宣传画册</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    data(){ 
        return{
            ListData:[],
            BarData:[],
             activeIndex: '',
        }
    },
    created(){},
    mounted(){
      this.Queryall(),
      this.Queryall1()
   },
    computed:{

    },
    methods:{
        //调用
        Queryall(){
            this.axios.post(this.$api_router.system+'findAll')
            .then(res=>{
                //console.log("配置信息",res)
                if(res.data.code == 200){
                        this.ListData = res.data.data[0]
                }else{

                    return false
                }
            })     
        },
        // 查询全部
        Queryall1(){
            this.axios.post(this.$api_router.solutionmenu+'findAll')
            .then(res=>{
              //  console.log(res)
                if(res.data.code == 200){
                        this.BarData = res.data.data
                }else{
                    return false
                }
            })     
        },
        // 二级跳转
        ToDetail(id){
            // console.log(id)
            this.$router.push({name: "Secondary", params: {Id:id}})
            // this.$router.push({path:'/solution/secondary',query:{Id:id}})
        },
    }
}
</script>
<style>
    .header-home{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1024px;
        height: 100%;
        margin:0 auto;
    }
    /* 头部左侧logo */

    /* .logo {
        align-items: center;
    } */
    .logo .logo-text{
        margin-left: 26px;
        color: #518DF5;
        display: flex;
        flex-direction: column;
    }
    .logo .logo-text  .p1{
        letter-spacing: 3px;
    }
    .logo .logo-text  .p2{
        margin-top: 2px;
        font-size: 12px;
    }
    .logo-left-img{
        width: 35px;
        height: 63px;
    }
    .logo-left-img img{
        width: 100%;
        height: 100%;
        cursor:pointer;
    }
    .el-menu-item{
        font-size: 16px !important;
        font-weight: 500;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
        font-size: 16px !important;
    }
     /* element-nav css修改 start*/
    .el-menu.el-menu--horizontal{
        font-size: 16px !important;
        border-bottom:none !important;
    }
    /* .el-menu--horizontal>.el-menu-item.is-active{
         border-bottom: 3px solid #4282F4 !important;
    } */
    .el-menu .el-menu-item:hover{
        color: #4282F4  !important;
        border-bottom: 2px solid #4282F4  !important;
    }
    /* .el-menu .el-submenu__title:hover{
        background: #4282F4 !important;
    } */
     /* element-nav css修改 end*/

    .smallp{
        font-size: 16px;
    }
    .smalldiv{
        /* width: 100px !important; */
        font-size: 15px !important;
        overflow: hidden !important;
    }
    .pull-down {
        width: 100px;
        cursor: pointer;
    }
    .pull-down li{
        padding: 0 20px;
        width: 100px !important;
        height: 38px;
        text-align: left;
        line-height: 38px;
    }
    .pull-down li:hover{
        background-color:rgba(200,200,200,0.5) ;
    }
    .el-submenu__title {
        width: 100px;
        /* text-align: center; */
        font-size: 14px;
        color: #303133;
        padding: 0px 15px;
        cursor: pointer;
        transition: border-color .3s,background-color .3s,color .3s;
        box-sizing: border-box;
        margin-left: 8px;
    }
    .el-menu--collapse .el-menu .el-submenu, .el-menu--popup{
        /* font-size: 15px; */
        text-align: center;
        min-width: 110px !important;
        margin-left: 6px !important;
        font-family:"Microsoft YaHei",微软雅黑,"Microsoft JhengHei",华文细黑,STHeiti,MingLiu !important;
    }
     .el-menu .smalldiv:hover{
        font-weight: 600 !important;
        color: #4282F4  !important;
        border-bottom:none !important;
        background-color: rgba(200,200,200,0.5) !important;
        
        /* border-bottom: 3px solid #4282F4  !important; */
    }
    .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
        background-color: #FFF;
        float: none;
        height: 38px;
        line-height: 38px;
        padding: 0 10px;
        color: #909399;
    }
</style>