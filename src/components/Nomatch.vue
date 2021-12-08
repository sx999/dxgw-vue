<template>
    <div class="Nomatch-box">
        <div class="Nomatch-box-img">
            <div class="nomatchimg">
                <img src="../assets/images/icon-500-color.svg" alt="">
            </div>
        </div>
        <div class="ivu-exception-content">
            <h1>500</h1>
            <div class="ivu-exception-content-desc">抱歉,服务器出错了</div>
            <div class="ivu-exception-content-actions">
                <el-button type="info" @click="backhome()">返回首页</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        //反回首页
        backhome(){
            this.$router.push({path:'/home',query:{}})
        }
    }
}
</script>
<style scoped>
    @import "../assets/css/Nomatch.css";
</style>