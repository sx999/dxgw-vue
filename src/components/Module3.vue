<template>
    <!-- 首页-应用场景 -->
    <div class="module-box">
        <div class="title">
            <div class="m-title flex flex-aic">
                <img class="m-title-img" src="../assets/images/group.png" alt="">
                <p>应用场景</p> 
                <img class="m-title-img rotate" src="../assets/images/group.png" alt="">
            </div>
            <div class="m-title flex flex-aic">
                <span>Application scenario</span> 
            </div>
        </div>
        <div class="Module3">
            <div class="data-box flex flex-jcsb">
                <div class="listdata flex flex-aic" v-for="(item,index) in listdata" :key="index">
                    <img class="list-img" :src="item.src" alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listdata:[
                {title:"老师通知",src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/87001638432525065.png"},
                {title:"班级活动",src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/92261638432559595.png"},
                {title:"班级信息",src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/54541638432586468.png"},
                {title:"布置作业",src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/60131638432606323.png"},
                {title:"进出安全",src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/71471638432624568.png"},
                {title:"请假管理",src:"https://dxkj2021-1306445192.cos.ap-nanjing.myqcloud.com/duxiu/44821638432638336.png"},
            ]
        }
    },
}
</script>
<style scoped>
   @import "../assets/css/Module3.css";
</style>
