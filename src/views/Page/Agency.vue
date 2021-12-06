<template>
    <!-- 代理加盟-->
    <div class="Agency-box">
        <div class="banner">
            <img src="../../assets/images/about-banner.png" alt="">
            <p>加入我们</p>
        </div>
        <div class="box">
            <div class="center1 module-box">
                <div class="title">
                    <div class="m-title flex flex-aic">
                        <img class="m-title-img" src="@/assets/images/group.png" alt="">
                        <p>服务体系</p> 
                        <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                    </div>
                    <div class="m-title flex flex-aic">
                        <span>Service system</span> 
                    </div>
                </div>
                <ul class="list flex">
                    <li class="flex flex-jcsb" v-for="(item,index) in listdata" :key="index">
                        <span class="iconfont span-icon" :class="item.icon"></span>
                        <p class="p1">{{item.title}}</p>
                        <p class="p2">{{item.text}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="center2 module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>合伙人报名</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Partner registration</span> 
                </div>
            </div>
            <div class="form flex">
                <div class="input1 flex">
                    <span class="iconfont icon-xingming span"></span>
                    <input type="text" v-model="information.applyName" placeholder="姓名 (必填)">
                </div>
                <div class="input1 flex">
                    <span class="iconfont icon-dianhua span"></span>
                    <input type="text" v-model="information.applyPhone" placeholder="联系方式 (必填)">
                </div>
                <div class="input1 flex">
                    <span class="iconfont icon-youjian span"></span>
                    <input type="text" v-model="information.applyMailbox" placeholder="邮箱 (必填)">
                </div>
                <div class="input1 flex">
                    <span class="iconfont icon-dizhi span"></span>
                    <input type="text" v-model="information.applyLocation" placeholder="意向合作城市 (必填)">
                </div>
            </div>
            <div class="button" @click="submit()">确认发送</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listdata:[
                {icon:"icon-jiaoyu",title:"教育系统相关资源",text:"国家政策支持 — AI+智慧校园"},
                {icon:"icon-shezhi",title:"一系列的技术服务",text:"提供安装到售后完整技术支持"},
                {icon:"icon-men",title:"全国范围内加盟合作",text:"以郑州为中心全国范围加盟合作"},
                {icon:"icon-_shichangyingxiao",title:"即时的市场服务支撑",text:"随时关注市场并提供市场支撑"},
                {icon:"icon-weibiaoti-4",title:"完整的供应链支持",text:"提供完整的产品供应链服务支持"},
                {icon:"icon-tubiaozhizuomoban-",title:"提供产品相关法务支撑",text:"提供产品销售相关法律服务体系"},
                {icon:"icon-caiwu",title:"提供一定的财务支撑",text:"便捷的财务支持解决资金不足问题"},
                {icon:"icon-renshiyewu",title:"优秀的业务攻单支撑",text:"提供优秀的业务攻单技术支持"},
                {icon:"icon-shiwuzhongxin_jinxiupeixun",title:"完善的产品培训支撑",text:"完善的培训支撑解决售后使用问题"},
            ],
            information:{   //添加数组
                applyId:"",
                applyLocation:"",	
                applyMailbox:"",	
                applyName:"",	
                applyPhone:"",	
                createTime:"",
            },  
        }
    },
    methods:{
        submit(){
            if(this.information.applyName == "" || this.information.applyPhone == "" || this.information.applyMailbox == "" || this.information.applyLocation == ""){
                this.$message({
                    showClose: true,
                    message: '内容未完善',
                    type: 'warning',
                    offset:100
                });
            }else{
                 this.axios.post(this.$api_router.apply+'saveOne',this.information)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code == 200){
                            this.$message({
                                showClose: true,
                                message: '恭喜您,提交成功',
                                type: 'success',
                                offset:100
                            });
                        }else{
                             this.$message({
                                showClose: true,
                                message: res.data.msg,
                                type: 'warning',
                                offset:100
                            });
                        }
                    })  
               
            }
        }
    }

}
</script>
<style scoped>
    @import '../../assets/css/Agency.css';
</style>