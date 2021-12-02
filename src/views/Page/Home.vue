<template>
    <!-- 首页-->
    <div class="Home-box">
        <div class="Banner">
            <Banner></Banner>
        </div>
        <div class="content">
            <Module1></Module1>
            <Module2></Module2>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
import Module1 from '@/components/Module1.vue'
import Module2 from '@/components/Module2.vue'
export default {
    data(){
        return{

        }
    },
    components:{Banner,Module1,Module2},
    created(){},
    mounted(){

    },
    computed:{

    },
    methods:{

    }
}
</script>
<style scoped>
    .Home-box .Banner{
       width: 100%;
       height: 600px;
    }
    .Home-box .content{
        width: 100%;
    }
</style>