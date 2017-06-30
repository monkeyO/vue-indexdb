<template>
    <div>
        <v-top :tittle="tittle" :show-refesh-icon="false" :show-return-icon="false" :show-write-icon="false"></v-top>
        <v-bottom></v-bottom>
    </div>
</template>
<<script>
   import VBottom from '../public/bottom/bottom.vue';
   import VTop from '../public/top/top.vue';
   export default {
      data(){
          return {
              tittle:"列表",
              infoData:"列表"
          }
      },
      components:{
        VTop,
        VBottom
      },
       methods:{

      }
   }
</script>

