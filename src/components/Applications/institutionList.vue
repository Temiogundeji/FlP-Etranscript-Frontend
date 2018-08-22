<template>
<section class="section">
  <div class="container">
    <!-- Main container -->
<nav class="level">
  <!-- Left side -->
  <div class="level-left">
    <div class="level-item">
      <p class="subtitle is-5">
        <strong></strong> posts
      </p>
    </div>
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Find a institution">
        </p>
        <p class="control">
          <button class="button">
            Search
          </button>
        </p>
      </div>
    </div>
  </div>

  <!-- Right side -->
  <div class="level-right">
    <p class="level-item"><router-link to="/manage-all-institutions"><strong>All</strong></router-link></p>
    <p class="level-item"><router-link to="/add-institution" class="button is-success">Add New</router-link></p>
  </div>
</nav>
        <table class="table">
        <thead>
            <tr>
            <th><abbr>ID</abbr></th>
            <th><abbr>Name</abbr></th>
            <th><abbr>Logo</abbr></th>
            <th><abbr>Description</abbr></th>
            <th><abbr>Admin id</abbr></th>
            <th><abbr>Name</abbr></th>
            <th><abbr>Password</abbr></th>
             <th><abbr>Email</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="institution in institutions"  :institution ="institution" :key="institution.id">
                <!-- Attach a link leading to each institution profile page. -->
              <!-- <router-link :to="'institution-profile' + institution.id"> -->
                <td>{{institution.id}}</td>
                <td>{{institution.name}}</td>
                <td>{{institution.logo}}</td>
                <td>{{institution.description}}</td>
                <td>{{institution.admin.id}}</td>
                <td>{{institution.admin.name}}</td>
                <td>{{institution.admin.password}}</td>
                <td>{{institution.admin.email}}</td>
              <!-- </router-link> -->
          </tr>
        </tbody>
        </table>
  </div>
</section> 
</template>
<script>

export default {
  name:'institution-list',
  props:['institution'],
  computed:{
    institutions: function(){
      return this.$store.getters.allInstitutions;
    },
    numberOfUsers:function(){
      return this.$store.getters.allInstitutions.length;
    }
  },
  methods:{
      getInstitutionInfo(){
          return `${institutions.id}`,`${institutions.name}`;
      }
  }
  
}
</script>
<style scoped>
a{
  color:#00d1b2;
}
</style>
