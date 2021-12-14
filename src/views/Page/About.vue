<template>
    <!-- 关于我们-->
    <div class="About-box">
        <div class="banner">
            <img :src="bannerimg" alt="">
            <p>关于我们</p>
        </div>
        <div class="center1  module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>企业介绍</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Company Introduction</span> 
                </div>
            </div>
            <div class="data" v-for="(item,index) in listdata1" :key="index">
                <div class="text">
                    <p>公司简介：</p>
                    <p class="text-z">  河南独秀科技有限公司是依托国家教育部颁布的《教育信息化“十三五”规划》、《国家教育信息化建设2.0规划》等相关政策，
                        面向学校提供自主研发的安全校园管理系统及专业化的智慧教育解决方案与集成服务的供应商。</p>
                    <p class="text-z">“让学校成为‘更阳光’、‘更安全’的地方”是我们的奋斗目标和努力方向。现主营业务有：无阻碍门禁管理系统、
                        宿舍管理系统、教务管理系统、智慧教室、录播教室、同步课堂、人工智能学习课程以及大数据与运维服务等教育类科技产品
                        。在项目建设过程中，先后获得ISO9001、ISO14001、OHSAS18001体系认证、3A体系认证、五星售后服务证书、多项软件著作权、专利证书等。 </p>
                    <p class="text-z">
                    独秀科技借助于云计算、大数据、互联网、物联网、人工智能技术等信息技术的发展，自主研发的“一山智慧”APP安全校园管理平台，是一个集校务管理、班级管理、德育教育等服务为一体的智慧化云平台
                    ，可以兼容多家厂商软、硬件，实现一个APP软件多功能、多角色联机使用。<p>
                    <p>公司团队：</p> 
                    <p  class="text-z">团队成员多为90,00后，青春洋溢、活力四射。</p>
                    <p class="text-z">团队意识与强烈的事业心是公司力量不竭的源泉。你会发现个人的聪明才智只有融入团队才会获得更好的发挥、才能取得更大的成就。
                        以公司共同目标和整体形象为前提，公司提倡个性发挥，为职员提供广阔的发展空间。</p>
                    <p>企业文化：</p>
                    <p>企业愿景：让学校成为更阳光、更安全的地方</p>    
                    <p>工作原则：不为失败找理由、只为成功找方法</p>  
                    <p>企业使命：科技引领教育变革</p>
                    <p>工作口号：团结拼搏，永争第一，我能、横刀立马，勇创新高，我行</p>
                    <p>团队理念：没有完美的个人,只有完美的团队</p>
                    <p>工作精神：</p>
                    <p class="text-z">亮剑精神：狭路相逢勇者胜</p>
                    <p class="text-z">大海精神：积累、宽容、无私</p>
                    <p class="text-z">大雁精神：不达目的誓不罢休</p>
                    <p class="text-z">螃蟹精神：创新、张扬、好奇</p>
                </div>
                <img class="img" :src="item.firmPic" alt="">
            </div>
        </div>
        <div class="center2  module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>荣誉资质</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Honor qualification</span> 
                </div>
            </div>
            <div class="swiper flex flex-jcsb">
                <div class="left">
                   <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/68771638770781622.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/68771638770781622.png" alt=""></a> 
                </div>
                <ul class="cen">
                    <li class="cen-box cen1">
                        <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/2641638770807138.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/2641638770807138.png" alt=""></a> 
                    </li>
                    <li class="cen-box cen2">
                        <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/12971638770751466.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/12971638770751466.png" alt=""></a>
                    </li>
                    <li class="cen-box cen3">
                        <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/18051638770839478.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/18051638770839478.png" alt=""></a>
                    </li>
                </ul>
                <div class="right">
                    <a href="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/2411638770824417.png"><img src="https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/2411638770824417.png" alt=""></a>
                </div>
            </div>
            <div class="swiper-two">
                <ul>
                    <li v-for="(item,index) in soft" :key="index" class="soft">
                        <img :src="item.src" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="center3  module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>联系我们</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Contact us</span> 
                </div>
            </div>
            <div class="mapData flex flex-jcsb">
                <img src="../../assets/images/map-img.png" alt="">
                <div class="text">
                    <p>联系电话：0371-63301628</p>
                    <p>电子邮箱：hnduxiukeji@163.com</p>
                    <p>公司地址：河南省郑州市中原区华强云瓴中心4009室</p>
                </div>
            </div>
        </div>
        <div class="center4  module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>合作伙伴</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Cooperation partner</span> 
                </div>
            </div>
            <div class="black">
                <div class="left" @click="leftlook()"><span class="iconfont icon-xiangzuo1"></span></div>
                <div class="right" @click="rightlook()"><span class="iconfont icon-xiangyou1"></span></div>
                 <ul class="data" id="ul">
                    <li v-for="(item,index) in listData3" :key="index" class="flex flex-aic" :style="{transform:'translateX('+number+')'}">
                        <div>
                            <img :src="item.mergePic" alt="">
                        </div>
                        <p>{{item.mergeTitle}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bannerimg:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/45541639033092089.png",
            listData:[],
            soft:[
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/85241638771441031.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/94211638771463398.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/91801638771453189.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/91381638771420677.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/83251638772999450.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/36991638771397489.png"},
                {src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/77381638773391385.png"},
            ],
            listData2:[],
            listData3:[],
            number:0
        }
    },
    created(){},
    mounted(){this.Queryall(),this.Queryall2(),this.Queryall3()},
    computed:{
        listdata1:function(){
            return this.listData.splice(0,1)
        }
    },
    methods:{
         // 查询全部
        Queryall(){
            this.axios.post(this.$api_router.company+'findAll')
            .then(res=>{
                //console.log("企业介绍",res)
                if(res.data.code == 200){
                        this.listData = res.data.data
                        // this.$Message.success('查询完成!');
                }else{
                    // this.$Message.warning(res.data.msg);
                    return false
                }
            })     
        },
        Queryall2(){
            this.axios.post(this.$api_router.system+'findAll')
            .then(res=>{
                //console.log("系统配置",res)
                if(res.data.code == 200){
                        this.listData2 = res.data.data[0]
                        // this.$Message.success('查询完成!');
                }else{
                    // this.$Message.warning(res.data.msg);
                    return false
                }
            })     
        },
        Queryall3(){
            this.axios.post(this.$api_router.cooperator+'findAll')
            .then(res=>{
               // console.log("合作单位",res)
                if(res.data.code == 200){
                        this.listData3 = res.data.data
                        // this.$Message.success('查询完成!');
                }else{
                    // this.$Message.warning(res.data.msg);
                    return false
                }
            })     
        },
         //鼠标滚动
        cassply(){
            var outDiv = document.getElementById("ul");
            outDiv.onwheel = function(event){  
            //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）  
            event.preventDefault();  
            //设置鼠标滚轮滚动时屏幕滚动条的移动步长  
            var step = 270;  
            if(event.deltaY < 0){  
                //向上滚动鼠标滚轮，屏幕滚动条左移  
                this.scrollLeft -= step;  
            } else {  
                //向下滚动鼠标滚轮，屏幕滚动条右移  
                this.scrollLeft += step;  
            }  
        }
        },
        leftlook(){
            this.number = this.number = 0+'px'
            console.log(this.number)
        },
        rightlook(){
            this.number = this.number = -600+'px'
            console.log(this.number)
        }
    }
}
</script>
<style scoped>
    @import '../../assets/css/about.css';
</style>