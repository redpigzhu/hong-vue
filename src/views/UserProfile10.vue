<template>
 <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
         <h1 class="user-profile__username">@{{userId}} {{ state.user.username}}</h1>
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</div>
        <div class="user-profile__follower-count"><strong>Followers: </strong> {{ state.followers }}</div>
      </div>
      <CreateTwootPanel @add-twoot="createNewTwoot"/>
    </div>
 
    <div class="user-profile__twoots-wrapper"> 
         <TwootItem v-for="atwoot in state.user.twoots" :key="atwoot.id" :username="state.user.username" :twoot="atwoot" />
    </div>
 </div>
 
</template>

<script>
import {reactive, computed} from 'vue';
import {useRoute} from 'vue-router';
import {users} from "../assets/users";
import TwootItem from "../components/TwootItem10";
import CreateTwootPanel from "../components/CreateTwootPanel9";
import { useStore } from 'vuex';
import { onMounted } from 'vue';

export default {
  name: 'UserProfile',
  components: { TwootItem ,CreateTwootPanel },
  setup(){
    const route = useRoute();
    const userId  = computed(() => route.params.userId);
    // if (userId) fatchUserfomrAPI (userId)
    const store =useStore();
    const state=reactive({
      followers:0,
      user: users[userId.value-1] || users[0]
    })

    function createNewTwoot(twoot) {
      state.user.twoots.unshift(  {
            id: state.user.twoots.length +1,
            content: twoot
          });
    }
   
   onMounted(() => {
      console.log('mounted!')
      store.dispatch('User/setUser', state.user);
    })

    return {
      state,createNewTwoot, userId
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
