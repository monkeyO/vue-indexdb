
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import INDEXDB  from '../common/js/db';
Vue.use(Vuex);
Vue.use(VueResource);

//保存用户初始状态
const state = {
  infoData: [],
  isloadingComplete: false,
  userData: []
};
//创建对象存储一系列mutations函数
const mutations = {
  addData(state, json) {
    state.infoData = json;
  },
  updateLoadingState(state, data) {
    state.isloadingComplete = data;
  },
  openDb(state,object){
    INDEXDB.openDB(object);
  },
  addUser(state,object){
    INDEXDB.addData(object.db,object.name,object.data);
  },
  closeDb(state){
     INDEXDB.closeDB();
  },
   getUser(state,object){
    state.userData= INDEXDB.getDataByKey(object.db,object.ojstore.name);
   },
   deleteUser(state,object){
     state.userData= INDEXDB.deleteData(object.db.name,object.db.ojstore.name,object.key);
   }
};
//Action 提交的是 mutation
const actions = {
  getData(mutat, object) {
    const progress = object.progress;
    const refresh = object.refresh;
    mutat.commit('updateLoadingState', false);
    Vue.http.get('../../app.json').then((response) => {
      mutat.commit('updateLoadingState', true);
      const Data = response.body;
      mutat.commit('addData', Data);
    });
  },
  openDb(mutat,object){
      mutat.commit('openDb',object);
  },
  addUser(mutat,object){
      mutat.commit('addUser',object); 
  },
  getUser(mutat,object){
      mutat.commit('getUser',object);
  },
  deleteUser(mutat,object){
      mutat.commit('deleteUser',object);  
  },
  closeDB(mutat){
     mutat.commit('closeDb',object);
  }
};
//派生状态
const getters = {

};
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})