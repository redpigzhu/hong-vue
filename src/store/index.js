import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
  state: {},
  
  // Mutations are functions that effect the STATE
  mutations: {},

  //Actions are funcions that ou call thoughout your application that call mutations.
  actions: {},
  modules: {
    User: UserModule
  }
})
