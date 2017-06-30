<template>
  <header class="bar bar-nav bar-easy-vue">
    <a class="icon icon-left-nav pull-left" v-if="showBackIcon" @click="hide"></a>
    <a class="icon icon-refresh pull-left" v-if="showRefeshIcon"></a>
    <a class="icon icon-left-nav pull-left" v-if="showReturnIcon"></a>
    <a class="icon icon-compose pull-right" v-if="showWriteIcon"></a>
    <a class="icon icon-plus pull-right" v-if="showAddIcon" @click="show_m"></a>
    <h1 class="title">{{tittle}}</h1>
    <div class="showbox" v-show="menuShow" @click="hide_m">
      <div class="showover">
        <ul class="table-view">
          <li class="table-view-cell">
               <router-link to="/add">
                 添加好友
               </router-link>
          </li>
           <li class="table-view-cell">
              <router-link to="/card">
                 查看好友                      
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "v-top",
  data() {
    return {
      params: "true",
      menuShow: false
    }
  },
  props: {
    tittle: {
      type: String
    },
    showRefeshIcon: {
      default: false
    },
    showReturnIcon: {
      default: false
    },
    showWriteIcon: {
      default: false
    },
    showBackIcon: {
      default: false
    },
    showAddIcon: {
      default: false
    }
  },
  methods: {
    hide() {
      this.$emit('go-back', this.params);
    },
    show_m() {
      this.menuShow = true;
    },
    hide_m() {
      this.menuShow = false;
    }
  }
}
</script>
<style lang="stylus">
@import './top.styl';
.bar-easy-vue {
  background-color: #12BBD6;
}
.bar-easy-vue>a,
h1 {
  color: #fff !important;
}
.showbox .table-view{
  border-top:none;
}

</style>