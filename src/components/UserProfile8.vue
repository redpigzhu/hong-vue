<template>
 <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
         <h1 class="user-profile__username">@{{ user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
        <div class="user-profile__follower-count"><strong>Followers: </strong> {{ followers }}</div>
      </div>
      <CreateTwootPanel @add-twoot="createNewTwoot"/>
    </div>
 
    <div class="user-profile__twoots-wrapper"> 
       <TwootItem v-for="atwoot in user.twoots" :key="atwoot.id" :username="user.username" :twoot="atwoot" />
    </div>
 </div>
 
</template>

<script>
import TwootItem from "./TwootItem8";
import CreateTwootPanel from "./CreateTwootPanel8";

export default {
  name: 'UserProfile',
  components: { TwootItem ,CreateTwootPanel },
 
  data() {
    return {
      followers:0,
      user:{
        id:1,
        username:'whoami',
        firstName:"who",
        lastName:'am',
        email:'whoami@gmail.com',
        isAdmin: true,
        twoots :[
          {id: 1, content:"learning Vue for the first day"},
          {id: 2, content:"the Youtube channel The Earth is Squire is great to start"}
        ]
      }
    }
  },
  methods:{
    createNewTwoot(twoot){
      this.user.twoots.unshift(  {
          id: this.user.twoots.length +1,
          content: twoot
        });
      }
  }
 
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
  text-align: left;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;

    h1 {
      margin: 0;
    }
    .user-profile__admin-badge {
      background: red;
      color:white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  
  }
  .user-profile__twoots-wrapper {
    display: grid;
    grid-gap: 10px;
  }
}

</style>
