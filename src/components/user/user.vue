<template>
   <div>
       <v-top :tittle="tittle" :show-add-icon="true" :show-refesh-icon="false" :show-return-icon="false" :show-write-icon="false"></v-top>
       <v-my></v-my>
       <v-bottom></v-bottom>
   </div>
</template>
<<script>
    import VBottom from '../public/bottom/bottom.vue';
    import VTop from '../public/top/top.vue';
    import VMy from '../public/my/my.vue';
    export default {
       data(){
           return{
               tittle:"个人中心",
               inforData:"用户"
           }
       },
        components:{
           VTop,
           VMy,
           VBottom
       },
    }
</script>
