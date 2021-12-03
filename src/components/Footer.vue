<template>
    <!-- 页脚 -->
    <div class="Footer">
        <div class="Footer-box">
            <div class="box-t">
                <div class="bottom-l">
                    <div class="bottom-l-t">
                        <p>行业资讯</p>
                        <p></p>
                        <p>解决方案</p>
                        <p></p>
                        <p>解决方案</p>
                        <p></p>
                    </div>
                    <div class="bottom-l-b">
                        <ul>
                            <li><router-link to="/"> 全部资讯</router-link></li>
                            <li><router-link to="/">全部资讯</router-link></li>
                        </ul>
                        <ul>
                            <li><router-link to="/">门禁系统</router-link></li>
                            <li><router-link to="/">智能校服</router-link></li>
                            <li><router-link to="/">智慧教室</router-link></li>
                            <li><router-link to="/">录播教室</router-link></li>
                        </ul>
                        <ul>
                            <li class="orange pitch">联系电话：{{this.listdata.sysPhone}}</li>
                            <li class="pitch">邮箱地址：{{this.listdata.sysEmail}}</li>
                            <li class="pitch">公司地址：{{this.listdata.sysAddress}}</li>
                        </ul>
                    </div>
                </div>
                <div class="bottom-r">
                    <div class="img">
                        <img :src="this.listdata.sysAccount" alt="">
                    </div>
                    <p class="blue">扫码关注官方公众号</p>
                </div>
            </div>
            <div class="box-b">
                <div class="put">
                    <p>Copyright &copy; 2021-2022 河南独秀科技有限公司</p>
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41019702003062" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                        <p class="flex flex-jcsb" style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;marginTop:5px;">
                            <img src="../assets/images/xxx.png" alt="">&ensp;豫公网安备 41019702003062号
                        </p>
                    </a>
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
                console.log("配置信息",res)
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
    @import "../assets/css/Footer.css";
</style>