<template>
    <div>
       <v-top :tittle="tittle" :show-back-icon="false" :show-refesh-icon="false" :show-return-icon="false" :show-write-icon="false"></v-top>
       <v-wecome></v-wecome>
       <v-bottom></v-bottom>
    </div>  
</template>
<<script>
   import VBottom from '../public/bottom/bottom.vue';
   import VTop from '../public/top/top.vue';
   import VWecome from '../public/wecome/wecome.vue';
   export default {
      data(){
         return{
             tittle:"消息",
             infoData:"信息"
         } 
      },
      components:{
        VTop,
        VBottom,
        VWecome 
      },
      methods:{

      }
   }
</script>

