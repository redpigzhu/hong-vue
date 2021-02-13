<template>
  <div class="home"> 
    <h1>HOME SWEET HOME</h1>
    Select a Users
     <div class="users-list">

       <router-link v-for="(auser, index) in users" :to="{ name: 'UserProfile', params:{ userId: auser.id} }" :key=index>
         {{auser.username}}
       </router-link>
     </div>
  </div>
</template>

<script>
import { users } from "../assets/users";

export default {
  name:'home',
  setup(){
    return {
      users
    }
  }
  
}
</script>


<style lang="scss" scoped>
.home {
   padding: 50px, 5%;

   .users-list {
     display: flex;
     flex-direction: column;
     color: navy;
   }
}
</style>

