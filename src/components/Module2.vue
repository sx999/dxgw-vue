<template>
    <!-- 首页-解决方案 -->
    <div class="module-box">
        <div class="title">
            <div class="m-title flex flex-aic">
                <img class="m-title-img" src="../assets/images/group.png" alt="">
                <p>解决方案</p> 
                <img class="m-title-img rotate" src="../assets/images/group.png" alt="">
            </div>
            <div class="m-title flex flex-aic">
                <span>Multiple solutions</span> 
            </div>
        </div>
        <div class="Module2">
            <ul id="ul" class="list" @scroll="handleScroll($event)">
                    <li class="mar-none">
                        <div class="div1 flex">
                            <span class="iconfont icon-tushuguan"></span>
                            <p class="p1">智慧图书馆</p>
                        </div>
                        <div class="block flex flex-aic" @click="$router.push({path:'/solution/solutionpage7'})">
                            <p>查看更多</p>
                            <span class="iconfont icon-youjiantou"></span>
                        </div>
                    </li>
                    <li class="">
                        <div class="div1 flex">
                            <span class="iconfont icon-menjin"></span>
                            <p class="p1">门禁系统</p>
                        </div>
                        <div class="block flex flex-aic" @click="$router.push({path:'/solution/solutionpage2'})"> 
                            <p>查看更多</p>
                            <span class="iconfont icon-youjiantou"></span>
                        </div>
                    </li>
                    <li class="">
                        <div class="div1 flex">
                            <span class="iconfont icon-clothes"></span>
                            <p class="p1">智能校服</p>
                        </div>
                        <div class="block flex flex-aic" @click="$router.push({path:'/solution/solutionpage1'})">
                            <p>查看更多</p>
                            <span class="iconfont icon-youjiantou"></span>
                        </div>
                    </li>
                    <li class="">
                        <div class="div1 flex">
                            <span class="iconfont icon-jiaoshi"></span>
                            <p class="p1">智慧教室</p>
                        </div>
                        <div class="block flex flex-aic" @click="$router.push({path:'/solution/solutionpage3'})">
                            <p>查看更多</p>
                            <span class="iconfont icon-youjiantou"></span>
                        </div>
                    </li>
                    <li class="">
                        <div class="div1 flex">
                            <span class="iconfont icon-luxiang"></span>
                            <p class="p1">录播教室</p>
                        </div>
                        <div class="block flex flex-aic" @click="$router.push({path:'/solution/solutionpage4'})">
                            <p>查看更多</p>
                            <span class="iconfont icon-youjiantou"></span>
                        </div>
                    </li>
                    <li class="">
                        <div class="div1 flex">
                            <span class="iconfont icon-banjishangke"></span>
                            <p class="p1">互动课堂</p>
                        </div>
                        <div class="block flex flex-aic" @click="$router.push({path:'/solution/solutionpage5'})">
                            <p>查看更多</p>
                            <span class="iconfont icon-youjiantou"></span>
                        </div>
                    </li>
                    <li class="">
                        <div class="div1 flex">
                            <span class="iconfont icon-deng"></span>
                            <p class="p1">智慧照明</p>
                        </div>
                        <div class="block flex flex-aic" @click="$router.push({path:'/solution/solutionpage6'})">
                            <p>查看更多</p>
                            <span class="iconfont icon-youjiantou"></span>
                        </div>
                    </li>
            </ul>
            <div class="three-small-button">
                <div class="small-button marl-none" :class="this.con==1 ? 'back' :''"  @click="scroll1()"></div>
                <div class="small-button" :class="this.con==2 ? 'back' :''" @click="scroll2()"></div>
                <div class="small-button" :class="this.con==3 ? 'back' :''" @click="scroll3()"></div>
                <!-- v-on:mouseenter="visible" @mouseleave="invisible" -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            con:1,
        }
    },
    created(){},
    mounted(){
        this.cassply()
    },
    computed:{

    },
    methods:{
        //计算滚动距离
        handleScroll(e){
            // console.log(e.target.scrollLeft)
            if(e.target.scrollLeft == 0){
                this.con = 1
            }else if(e.target.scrollLeft >= 280 && e.target.scrollLeft<680){
                this.con = 2
            }else if(e.target.scrollLeft >= 680){
                this.con = 3
            }
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
        //点击控制
        scroll1(){
            var offleft = document.getElementById("ul");
            var offlefta = offleft.scrollLeft 
            if(offlefta >0){
                var timer=setInterval(function(){
                if(offlefta==0){
                    clearInterval(timer)
                }else{
                    offlefta =  offlefta-40
                    offleft.scrollTo(offlefta,0);
                }
                },50);
            }
        },
        scroll2(){
            var offleft = document.getElementById("ul");
            var offlefta = offleft.scrollLeft 
            if(offlefta <280){
                var timer=setInterval(function(){
                if(offlefta==280){
                    clearInterval(timer)
                }else{
                    offlefta =  offlefta+40
                    offleft.scrollTo(offlefta,0);
                }
                },50);
            }else{
                var timer=setInterval(function(){
                if(offlefta==280){
                    clearInterval(timer)
                }else{
                    offlefta =  offlefta-40
                    offleft.scrollTo(offlefta,0);
                }
                },50);
            }
        }, 
        scroll3(){
            var offleft = document.getElementById("ul");
            var offlefta = offleft.scrollLeft 
            var timer=setInterval(function(){
                if(offlefta==800){
                    clearInterval(timer)
                }else{
                    offlefta =  offlefta+40
                    offleft.scrollTo(offlefta,0);
                }
            },50);
        },
    }
}
</script>
<style scoped>
   @import "../assets/css/Module2.css";
</style>