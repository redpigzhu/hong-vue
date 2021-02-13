<template>
 <div class="user-profile">
     <div class="user-profile__user-panel">
         <h1 class="user-profile__username">@{{ user.username }} - {{ fullName }}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
        <div class="user-profile__admin-badge" v-else> Not Admin</div>
        <div class="user-profile__follower-count"><strong>Followers: </strong> {{ followers }}
        </div>
        <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
          <label for="newTwoot"><strong>Enter New Twoot</strong></label>
          <textarea id="newTwoot" rows=4 v-model="newTwootContent"/>
          <div class="user-profile__create-twoot-type">
              <label for="newTwootType"><strong>Type:</strong></label>
              <select id="newTwootType" v-model="selectedTwootType">
                <option :value="aoption.value" v-for="(aoption, index) in twootTypes" :key="index">
                  {{ aoption.name }}
                </option>
              </select>
          </div>
           <button>Twoot!</button>
        </form>
     </div>
     <div class="user-profile__twoots-wrapper"> 
       <TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot" @favoriteevent="setFavorite" />
     </div>
 </div>
</template>

<script>
import TwootItem from "./TwootItem";

export default {
  name: 'UserProfile',
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant', //default
      twootTypes: [
        {value:'draft',name:'Draft'},
        {value:'instant', name:'Instant Twoot'}
      ],
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
    // future API calls
    followThisUser(){
      this.followers++;
    },
    setFavorite(id){
      console.log(`favorited tweet #${id}`);
    },
    createNewTwoot(){
      if(this.newTwootContent && this.selectedTwootType !=='draft')
      {
        //push a new one in the list -- api call to persistent data in future
        this.user.twoots.unshift(  {
          id: this.user.twoots.length +1,
          content: this.newTwootContent
        })
        this.newTwootContent=''
      }
    }
  },
  // loading time calling api or something to load and init the data
  mounted() {
    this.followThisUser();
    console.log('followers:' + this.followers);
  },
  components: { TwootItem }
 
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
.user-profile__twoots-wrapper {
  display: grid;
  grid-gap: 10px;
  
}
.user-profile__create-twoot {
  border-top: 1px, solid green;
  display: flex;
  flex-direction: column;
  
}

</style>
