import Vue from 'vue'
import Vuex from 'vuex'
import generalModule from './store/general'
import userModule from './store/user'
import booksModule from './store/books'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
   userModule,
   generalModule,
   booksModule
  }
})
