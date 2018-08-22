<template>
  <div class="container">
        <table class="table">
        <thead>
            <tr>
            <th><abbr>User ID</abbr></th>
            <th><abbr>First Name</abbr></th>
            <th><abbr>Last Name</abbr></th>
            <th><abbr>institution ID</abbr></th>
            <th><abbr>Email</abbr></th>
            <th><abbr>Phone Number</abbr></th>
            <th><abbr>Password</abbr></th>
            <th><abbr>Address</abbr></th>
            <th><abbr>User Type</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users"  :user ="user" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.firstname}}</td>
            <td>{{user.lastname}}</td>
            <!-- <td>{{institution.id}}</td> -->
            <td>{{user.email}}</td>
            <td>{{user.phone}}</td>
            <td>{{user.password}}</td>
            <td>{{user.address}}</td>
            <td>{{user.type}}</td>
            
            <td><button class="button is-danger" @click="removeUser(user.user_id)">Remove</button></td>
        </tr>
        </tbody>
        </table>
  </div>
 </template>
<script>
import institutionList from '@/components/Applications/institutionList'
export default {
  name:'user-list',
  //Add institution to the props,get the institutionID from the institutionList component,
  // create a getID method inside the component
  //which will return institutionID of the current clicked institution. 
  prop:['user'],
  computed:{
   users(){
     return this.$store.getters.allUsers;
   }
  }
}

</script>
<style scoped>

</style>
