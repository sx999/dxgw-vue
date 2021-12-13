import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Vuex保存数组
		demoList: []
  },
  getters:{
    getDemoList(state) {
      state.demoList = state;
      return state.demoList;
  }
  },
  mutations: {
    setDemoList(state, demoList) {
			state.demoList = demoList
		}
  },
  actions: {
    commitToken(context) {
      context.commit('createUser');
  },
  },
  modules: {
  }
})
