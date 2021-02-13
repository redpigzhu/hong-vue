<template>
 <div class="user-profile">
     <div class="user-profile__user-panel">
         <h1 class="user-profile__username">@{{ user.username }} - {{ fullName }}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
        <div class="user-profile__admin-badge" v-else> Not Admin</div>
        <div class="user-profile__follower-count"><strong>Followers: </strong> {{ followers }}
        </div>
     </div>
     <div class="user-profile__twoots-wrapper"> 
       <div class="user-profile__twoot" v-for="twoot in user.twoots" :key="twoot.id">
         {{twoot.content}}
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
        isAdmin: false,
        twoots :[
          {id: 1, content:"learning Vue for the first day"},
          {id: 2, content:"the Youtube channel The Earth is Squire is great to start"}
        ]
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
  text-align: left;
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
.user-profile__admin-badge {
  background: red;
  color:white;
  border-radius: 5px;
  margin-right: auto;
  padding: 0 10px;
  font-weight: bold;
}
h1 {
  margin: 0;
}


</style>
