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
                   <template slot="title" class="titlefont">解决方案</template>
                   <ul class="pull-down">
                       <li>门禁系统</li>
                       <li>智能校服</li>
                       <li>智慧教室</li>
                       <li>录播教室</li>
                       <li>互动课堂</li>
                       <li>智慧照明</li>
                       <li>智慧图书馆</li>
                   </ul>
                    <!-- <el-menu-item  class="smalldiv" index="/"><p class="smallp">门禁系统</p> </el-menu-item>
                    <el-menu-item class="smalldiv" index="/">智能校服</el-menu-item>
                    <el-menu-item class="smalldiv" index="/">智慧教室</el-menu-item>
                    <el-menu-item class="smalldiv" index="/">录播教室</el-menu-item>
                    <el-menu-item class="smalldiv" index="/">互动课堂</el-menu-item>
                    <el-menu-item class="smalldiv" index="/">智慧照明</el-menu-item>
                    <el-menu-item class="smalldiv" index="/">智慧图书馆</el-menu-item> -->
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
            ListData:[]
        }
    },
    created(){},
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
                console.log("配置信息",res)
                if(res.data.code == 200){
                        this.ListData = res.data.data[0]
                }else{

                    return false
                }
            })     
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
    .el-menu--horizontal>.el-menu-item.is-active{
         border-bottom: 3px solid #4282F4 !important;
    }
    .el-menu .el-menu-item:hover{
        color: #4282F4  !important;
        border-bottom: 3px solid #4282F4  !important;
    }
    /* .el-menu .el-submenu__title:hover{
        background: #4282F4 !important;
    } */
     /* element-nav css修改 end*/

    .smallp{
        font-size: 16px;
    }
    .smalldiv{
        width: 100px !important;
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
</style>