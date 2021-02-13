import { createApp } from 'vue'
//import App from './App.vue'
//import App from './App8-refactor.vue'
//import App from './App9-composition.vue'
//import App from './App10-router.vue'
import App from './App11-statemgr.vue'  // with vuex4 global state
import router from './router'
import store from './store'
createApp(App).use(store).use(router).mount('#app')
