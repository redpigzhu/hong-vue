<template>
 <div class="user-profile">
     <div class="user-profile__user-panel">
         <h1 class="user-profile__username">@{{ user.username }} - {{ fullName }}</h1>
        <div class="user-profile__follower-count"><strong>Followers: </strong> {{ followers }}
        </div>
     </div>
 </div>
</template>

<script>

export default {
  name: 'UserProfile',
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
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;
}
.user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}
h1 {
    margin: 0;
}
</style>
