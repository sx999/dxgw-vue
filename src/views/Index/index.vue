<template>
    <el-container>
        <!-- pc 头部导航-->
        <el-header id="header" class="" :class="{'is_fixed' : isFixed}">
            <MenuBar></MenuBar>
        </el-header>
        <!-- 主要内容 -->
        <el-main id="conter">
           <router-view/>
        </el-main>
        <!-- 底部/页脚 -->
        <el-footer id="fotter">
            <Footer></Footer>
        </el-footer>
        <!-- 回顶start  -->
        <div class="scollTop" id="imgscoll" v-show="isShowimg"  @click="goTop">
            <span class="iconfont icon-xiangshang1 themecolors"></span>
        </div>
        <!-- 回顶end -->
    </el-container>
</template>
<script>
import MenuBar from '@/components/MenuBar.vue'
import Footer from '@/components/Footer.vue'
export default({
  data(){
      return{
          isFixed:false,
          offsetTop:0,
          isShowimg:false,
      }
  },
  components:{MenuBar,Footer,},
  created(){},
  mounted(){
        window.addEventListener('scroll',this.initHeight);
        this.$nextTick( () => {
            this.offsetTop = document.querySelector('#header').offsetTop;
        })
        window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
        document.removeEventListener('scroll', this.handleScroll)
        document.body.scrollTop = document.documentElement.scrollTop = 0
        window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
        //吸顶
        initHeight () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.isFixed = scrollTop > this.offsetTop ? true : false;
        },
         // 回到顶部
        goTop(){
             let top = document.documentElement.scrollTop || document.body.scrollTop
            // 实现滚动效果
            const timeTop = setInterval(() => {
            document.body.scrollTop = document.documentElement.scrollTop = top -= 50
            if (top <= 0) {
                clearInterval(timeTop)
            }
            }, 10)
            // document.body.scrollTop = document.documentElement.scrollTop = 0
            // this.isShowimg = false
        },
        //滚动监听
        handleScroll(e) {
            // 滚动操作监听
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
             //console.log(scrollTop)
            let offsetTop = 0
            try {
                offsetTop = document.querySelector('.main').offsetTop
            } catch (e) {
                offsetTop = 0
            }
            if (scrollTop > offsetTop) {
            if (scrollTop > 800) {
            this.isShowimg = true
            } else {
            this.isShowimg = false
            }
            } else {
                this.isShowimg = false
            }
        },
        refresh(){
            this.$router.go(0);
        }
  },
})
</script>

<style scoped>
    #header{
        width: 100%;
        background-color: #FFFFFF;
        height: 88px !important;
    }
    #conter{
        margin:0 !important;
        padding: 0 !important;
        overflow:visible !important;
    }
    #fotter{
        width: 100%;
        height: 100% !important;
        margin: 0;
        padding: 0;
    }
      /* 吸顶css 开始 */
    .is_fixed{
        position: fixed;
        top: 0;
        z-index: 99;
        border-bottom:1px solid rgba(110, 159, 233, 0.3);
    }
    .is_back{
        background-color: rgba(0, 0, 0, 0) !important;
    }
    /* 吸顶css end */

    /* 回顶style start*/
    .scollTop {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        position: fixed;
        bottom: 80px;
        right:100px;
        background-color:#ffffff;
        box-shadow: 0px 0px 8px rgba(138, 134, 134, 0.3);
    }
    .scollTop span{
        font-size: 30px;
    }
    .scollTop:hover{
        background-color:rgba(193, 196, 197, 0.5);
    }
    /* 回顶style end*/
</style>