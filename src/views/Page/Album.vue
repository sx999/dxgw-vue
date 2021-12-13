<template>
    <div class="Album-box">
        <!-- 暂无此页面 -->
        <!-- <Nomatch></Nomatch> -->
       
        
        <div class="demo-image__lazy">
            <el-image
                style="width: 20%; height: 20%"
                :src="url"
                :fit="fits.contain"
                :preview-src-list="srcList"
            >
            </el-image>
        </div>
    </div>
</template>
<script>
import Nomatch from '../../components/Nomatch.vue'
export default {
    data(){
        return{
            url: '',        //当前图片
            srcList: [],   //预览图片组
            listdata:[],
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        }
    },
    components:{Nomatch},
    created(){},
    mounted(){this.Queryall()},
    methods:{
        Queryall(){
            this.axios.post(this.$api_router.brochure+'findAll')
            .then(res=>{
                //console.log("详细内容",res)
                if(res.data.code == 200){
                        this.listdata = res.data.data
                        this.url = res.data.data[0].brochurePic
                        this.Recombination()
                }else{
                    return false
                }
            })     
        },
         //生成预览图 数组
        Recombination(){
            var srcList = this.listdata.map(({brochurePic})=>({brochurePic}));
            // console.log(srcList)
            var srcListnew = []
            for(var a =0;a<srcList.length;a++){
                srcListnew.push(srcList[a].brochurePic)
            }
            this.srcList  = srcListnew
        },
    }
}
</script>
<style>
    .demo-image__lazy{
        margin: 50px 0;
        text-align: center;
    }
    .el-image-viewer__canvas .el-image-viewer__img{
        max-width: 80% !important; 
        max-height: 80% !important;
    }
</style>