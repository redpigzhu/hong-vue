<template>
  <!--  https://www.youtube.com/watch?v=ZqgiuPt5QZo -->
  <img alt="Vue logo" src="./assets/OxYear2021.png">
  <h1>Happy Chinese New Year 2021</h1>
  <div id="app">
    @{{ user.username }} - {{ fullName }}
    <strong>Followers: </strong> {{ followers }}
    <button @click="followThisUser">follow</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      followers:0,
      user:{
        id:1,
        username:'whoami',
        firstName:"who",
        lastName:'am',
        email:'whoami@gmail.com',
        isAdmin: true
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if(oldFollowerCount < newFollowerCount)
      {
        console.log(`${this.user.username} has gained a follwer!`)
      }
    }
  },
  computed:{
    fullName(){
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods:{
    followThisUser(){
      this.followers++;
    }
  },
  // loading time calling api or something to load and init the data
  mounted() {
    this.followThisUser();
    console.log('followers:' + this.followers);
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
