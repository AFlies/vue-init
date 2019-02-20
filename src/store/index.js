import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
    // 这里引用具体的store
  }
})

export default store
