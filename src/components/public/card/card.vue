<template>
     <div>
         <v-top :tittle="tittle" :show-back-icon="true" v-on:go-back="hide" ></v-top>
         <div class="content">
                <ul class="table-view">
                     <li class="table-view-cell"  v-for="item in userData">
                        <div>姓名:{{item.name}}</div>
                        <div>手机号:{{item.tel}}</div>  
                        <div>
                           <p>个人介绍:</p>
                            {{item.introdution}} 
                        </div>
                         <button class="btn pull-right" @click="delet(item.key)">
                             <span class="icon icon-trash"></span>
                         </button>
                     </li>
                </ul> 
         </div> 
     </div>
</template>
<script>
   import vTop from '../top/top.vue';
   import { mapState } from 'vuex';
   export default {
      name:"v-card",
      data(){
          return{
              tittle:"用户列表",
               myDB: {
                name: 'univisity',
                version: 4,
                db: null,
                ojstore: {
                    name: 'users',//存储空间表的名字
                    keypath: 'id'//主键
                }
            }
          }
      },
      components:{
          vTop
      },
      mounted(){
         var that=this;
         this.$store.dispatch("openDb", this.myDB);
         setTimeout(function() {
             that.$store.dispatch('getUser',that.myDB); 
         }, 500); 
      },
      computed:mapState({
          userData: function(state){
              return state.userData;
          }
      }),
      methods:{
          hide(params){
            if (JSON.parse(params)) {
                window.history.go(-1);
            }
          },
          delet(param){
             this.$store.dispatch('deleteUser',{
                 key:param,
                 db:this.myDB
             });
          }
      }
   }
</script>
