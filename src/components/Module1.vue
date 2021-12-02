<template>
    <!-- 首页-行业资讯 -->
    <div class="module-box">
        <div class="title">
            <div class="m-title flex flex-aic">
                <img class="m-title-img" src="../assets/images/group.png" alt="">
                <p>行业资讯</p> 
                <img class="m-title-img rotate" src="../assets/images/group.png" alt="">
            </div>
            <div class="m-title flex flex-aic">
                <span>Industry news</span> 
            </div>
        </div>
        <div class="Module1 flex flex-jcsb">
            <div class="Module1-left" v-for="(item,index) in list1" :key="index">
                <img :src="item.newsImagePath" alt="无法加载">
                <div class="block flex flex-aic flex-jcsb">
                    <p>{{item.newsTitle}}</p>
                    <p>查看全文 <span class="iconfont icon-youjiantou"></span></p>
                </div> 
            </div>  
            <div class="Module1-right flex flex-jcsb">
                <div class="list flex" v-for="(item,index) in list2" :key="index">
                    <div class="list-img">
                        <img :src="item.newsImagePath" alt="无法加载">
                    </div>
                    <div class="list-text">
                        <p class="p1">{{item.newsTitle}}</p>
                        <p class="p2 hover-color" v-html="item.newsContent"></p>
                        <div class="look flex flex-jcsb flex-aic">
                            <p>{{item.newsDate}}</p>
                            <p>查看全文<span class="iconfont icon-youjiantou"></span></p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
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
        list1:function(){
            return this.ListData.slice(0,1)
        },
        list2:function(){
            return this.ListData.slice(1,4)
        }
    },
    methods:{
          // 查询全部
        Queryall(){
            this.axios.post(this.$api_router.industry+'findAll')
            .then(res=>{
                console.log("资讯",res)
                if(res.data.code == 200){
                        this.ListData = res.data.data
                        this.Dateformatting()  
                }else{
                    this.$Message.warning(res.data.msg);
                    return false
                }
            })     
        },
           //时间格式化
        Dateformatting(){
            for(var i=0;i<this.ListData.length;i++){
               // this.tableData[i].createTime = this.moment(this.tableData[i].createTime).format("YYYY-MM-DD HH:mm:ss")
               // this.tableData[i].updateTime = this.moment(this.tableData[i].updateTime).format("YYYY-MM-DD HH:mm:ss")
                // this.tableData[i].startTime = this.moment(this.tableData[i].startTime).format("YYYY-MM-DD HH:mm:ss")
                // this.tableData[i].endTime = this.moment(this.tableData[i].endTime).format("YYYY-MM-DD HH:mm:ss")
                
               this.ListData[i].newsDate = this.moment(this.ListData[i].newsDate).format("YYYY.MM.DD")
            }
        },
    }
}
</script>
<style scoped>
    @import "../assets/css/Module1.css";
</style>
   
