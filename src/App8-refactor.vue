<template>
  <div id="app">
    <nav>
      <div class="navigation__logo">
        <img alt="Vue logo" src="./assets/OxYear2021.png">
      </div>
      <div class="navigation__user" v-if="user">
        {{ user.username }}
      </div>
    </nav>
    <UserProfile/>
  </div>
</template>

<script>
import UserProfile from "./components/UserProfile8";

export default {
  name: 'App',
  components: { UserProfile },
  data() {
    return {
        user:{
          username:'redpig'
      }
    }
  }
}
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