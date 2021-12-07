<template>
    <!-- 行业资讯详情-->
    <div class="IndustryDetail-box">
        <div class="mar-auto">
            <div class="folte-l" @click="back()">
                 <span class="iconfont icon-fanhui"></span>
                 <a href="javascript:;">返回</a>
                <!-- <router-link to="/industry">返回</router-link>  -->
            </div>
        </div>
        <div class="detail" v-for="(item,index) in list" :key="index">
            <div class="title">
                <p class="p1">{{item.newsDesc}}</p>
                <p class="p2">时间：{{item.newsDate}}</p>
            </div>
            <div class="text">
                <p v-html="item.newsContent"></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            id:""
        }
    },
    created(){},
    mounted(){
        let id=this.$route.query.id;
        this.id = id
        this.Queryall()
    },
    computed:{
       
    },
    methods:{
        Queryall(){
            this.axios.post(this.$api_router.industry+'findAllId?newsID='+this.id)
            .then(res=>{
                console.log(res)
                if(res.data.code == 200){
                        this.list = res.data.data[0]
                        this.Dateformatting()
                }else{
                    return false
                }
            })     
        },
        back(){
            console.log("1")
            this.$router.go(-1);//返回上一层
        },
        // 时间格式化
        Dateformatting(){   
            for(var i=0;i<this.list.length;i++){
                this.list[i].newsDate = this.moment(this.list[i].newsDate).format("YYYY年MM月DD日")
            }
            // this.MsgSort(this.listData)
        },
    }
}
</script>
<style scoped>
    @import '../../assets/css/IndustryDetail.css';
</style>