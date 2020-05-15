import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  },
  getters:{
    doingList(state){
      return state.todos.filter((item => {
        return item.done == false
      }))
    },
    doneList(state){
      return state.todos.filter(item => {
        return item.done == true
      })
    }
  },
  mutations: {
    SETTODOS(state,payload){
      state.todos = payload
    },
    DELETETODOS(state,payload){
      var index = state.todos.findIndex(item => {
        return item.id == payload
      })
      state.todos.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
