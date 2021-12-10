<template>
    <div class="Contact-box">
        <!-- 暂无此页面 -->
         <!-- <Nomatch></Nomatch> -->
         <img src="../../assets/images/app-img.png" alt="">
    </div>
</template>
<script>
import Nomatch from '../../components/Nomatch.vue'
export default {
    data(){
        return{
           
        }
    },
    components:{Nomatch},
    created(){},
    mounted(){this.Queryall()},
    methods:{
        
    }
}
</script>
<style scoped>
   .Contact-box img{
       width: 100%;
       /* height: 100%; */
   }
</style>