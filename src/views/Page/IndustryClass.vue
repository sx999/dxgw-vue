<template>
    <!-- 行业资讯分类-->
        <div class="center module-box">
            <div class="title">
                <div class="m-title flex flex-aic">
                    <img class="m-title-img" src="@/assets/images/group.png" alt="">
                    <p>行业资讯</p> 
                    <img class="m-title-img rotate" src="@/assets/images/group.png" alt="">
                </div>
                <div class="m-title flex flex-aic">
                    <span>Company news</span> 
                </div>
            </div>
            <div class="data-header">
                <div class="data-header-l">
                    <span @click="reset()">新闻</span>
                </div>
                <div class="data-header-r">
                    <img src="../../assets/images/search.png" alt="无法显示" @click="Search()"> 
                    <input type="text" placeholder="关键词" v-model="keyword">
                </div>
            </div>
            <div class="list">
                <div class="list-data flex" v-for="(item,index) in  countData" :key="index" @click="goDetail(item.newsID)">
                    <div class="left">
                        <img :src="item.newsImagePath" alt="">
                    </div>
                    <div class="right flex">
                        <p class="p1">{{index+1}}</p>
                        <p class="p2">{{item.newsTitle}}</p>
                        <!-- <p class="p3" v-html="item.newsContent"></p> -->
                        <p class="p3">{{item.newsDesc}}</p>
                        <div class="div4 flex flex-jcsb flex-aic">
                            <p>{{item.newsDate}}</p>
                            <span class="iconfont icon-youjiantou span"></span>
                        </div>
                    </div>
                </div>
                <div class="button" @click="Addpage()" v-show="this.listData.length>=this.cou">
                   <i class="el-icon-loading" v-show="loading"></i>
                    加载更多
                </div>
                <div class="button black-back" v-show="this.listData.length<this.cou">
                    暂无更多了
                </div>
            </div>
        </div>
</template>
<script>
import {mapState } from "vuex";
export default {
    data(){
        return{
            listData:[],
            keyword:"", //关键词
            loading:false,
            show:true,
            //默认显示条数
            cou: 5,
            timepage:null,
            time:"",
        }
    },
    created(){ this.Queryall()},
    mounted(){
       
         // 绑定监听事件
		window.addEventListener("keydown", this.keyDown);
    },
    destroyed() {
		// 销毁事件
		window.removeEventListener("keydown", this.keyDown, false);
        clearInterval(this.time)
	},
    computed:{
        noMore() {
            // 判断加载条数是否大于列表数据长度
            return this.cou > this.listData.length;
        },
        // listdata1:function(){
        //     return this.listData.splice(0,1)
        // }
        countData() {  // 计算属性使用切片生成新数组
                let data = [];
               	// 大于三条，使用切片，返回新数组
                if (this.listData.length > 5) {
                    data = this.listData.slice(0, this.cou);
                    return data;
                } else {
                	// 否则使用原来数组，不进行切片处理
                    data = this.listData
                    return data;
                }
        },
       
    },
    methods:{
        // 查询全部
        Queryall(){
            // this.listData  =  this.$store.state.demoList
            // this.listData = sessionStorage.getItem("data");   
            // this.Dateformatting()
            this.axios.post(this.$api_router.industry+'findAll')
            .then(res=>{
                if(res.data.code == 200){
                        this.listData = res.data.data
                        this.Dateformatting()
                }else{
                    return false
                }
            })     
        },
        // 搜索
        Search(){
             this.axios.post(this.$api_router.industry+'list?currentPage=1&limit=6&newsTitle='+this.keyword)
             .then(res=>{
                 this.keyword=""
                 //console.log(res)
                 if(res.data.code == 200){
                        this.listData = res.data.data.page.dataList
                        this.Dateformatting()
                }else{
                    this.$message({
                        message: '没有该关键词的新闻!',
                        type: 'warning'
                    });
                }
             })
            
        },
        keyDown(e){
            // 回车则执行登录方法 enter键的ASCII是13	
            if (e.keyCode === 13) {
                this.Search(); // 定义的登录方法
            }
        },
        // 跳转详情
        goDetail(id){
            this.$router.push({path:'/industry/industrydetail',query:{id:id}})
        },
        // 时间格式化
        Dateformatting(){   
            for(var i=0;i<this.listData.length;i++){
                this.listData[i].newsDate = this.moment(this.listData[i].newsDate).format("YYYY年MM月DD日")
            }
            // this.MsgSort(this.listData)
        },
        // 加载更多
        Addpage(){
            this.loading = true
            this.time = setInterval(() => {
                 this.loading=false
                 this.cou+=5
            },1500)
        },
        // 重置查询
        reset(){
            this.Queryall()
        }
    }
}
</script>
<style scoped>
    @import '../../assets/css/Industry.css';
</style>