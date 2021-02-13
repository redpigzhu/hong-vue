<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">
          <img alt="Vue logo" src="./assets/OxYear2021.png">
        </div>
      </router-link>
      
      <div class="navigation__user" v-if="state.user">
        {{ state.user.username }}
      </div>
    </nav>
    <router-view/> <!--inject whatever the view page current is-->
  </div>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: 'App',
  setup()
  {
    const state = reactive({
      user:{
          username:'redpig'
      }
    })
    return {state}
  }
  
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: navajowhite;
    color: navy;

    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }

    .navigation__user {
      font-weight: bold;
    }
  }
}
</style>