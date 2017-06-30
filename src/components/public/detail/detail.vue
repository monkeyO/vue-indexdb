<template>
    <div v-show="showFlag" class="details">
        <v-top :tittle="tittle" :show-back-icon="true" v-on:go-back="hide"></v-top>
        <div class="content" v-infinite-scroll="loadMore" infinite-scroll-disabled="false" infinite-scroll-distance="10">
            <div class="con">
                <img :src="detailData.img" />
                <div class="tittle">
                    {{detailData.tittle}}
                </div>
                <div class="con_c">
                    {{detailData.content}}
                </div>
            </div>
            <div class="nsr-card-loading">
                <v-loading :hide-loading="isloadingComplete">
                </v-loading>
            </div>
        </div>
    
    </div>
</template>
 <<script>
 import VTop from '../top/top.vue';
 import VLoading from '../loading/loading.vue';
  export default {
     name:"v-detail",
     data(){
         return{
             tittle:"信息详情",
             showFlag:false,
             isloadingComplete:false
         }
     },
     props:{
        detailData:{
            type : Object
        } 
     },
     components:{
        VTop,
        VLoading
     },
     computed:{
        con:function(){
            return this.detailData.content;
        },

     },
     methods:{
         show(){
            this.showFlag=true;
         },
         hide(params){
            this.showFlag=false;
            console.log("信息"+params);
         },
         loadMore: function () {
             this.isloadingComplete=false;
             this.detailData.content=this.detailData.content+this.con;
             this.isloadingComplete=true;
     }
     }
  }
</script>
<<style lang="stylus">
    @import './detail.styl';
</style>

