<template>
  <img alt="Vue logo" src="./assets/OxYear2021.png">
  <h1>Happy Chinese New Year 2021</h1>
  <div id="app">
    <UserProfile/>
  </div>
</template>

<script>
import UserProfile from "./components/UserProfile5";

export default {
  name: 'App',
  components: { UserProfile }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;;
}
</style>
