<template>
  <div>
    <!-- <nav-bar></nav-bar> -->
    <div class="wrapper">
      <div class="columns">
        <aside class="column is-2">
          <nav class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a class="is-active">User Dashboard</a></li>
          </ul>
          <p class="menu-label">
            Manage Applications
          </p>
          <ul class="menu-list">
            <li><router-link to="/monitor-application">All Applications</router-link></li>
            <li><router-link to="/transcript-application">New Application</router-link></li>
            <li><router-link to="/user-profile">Profile</router-link></li>
          </ul>
          </nav>
        </aside>
        <div class="column is-10">
          <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Bulma</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Components</a></li>
              <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
            </ul>
          </nav>
        <router-view></router-view>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Navbar from '@/components/Layout/Navbar.vue';
import siteHeader from '@/components/Layout/siteHeader.vue';
import siteFooter from '@/components/Layout/siteFooter.vue';
export default {
  name:'user-dashboard',
  components:{
      // 'nav-bar':Navbar,
      'site-header':siteHeader,
      'site-footer':siteFooter
  }
}
</script>
<style scoped>
.router-link-exact-active.router-link-active {
    background-color: #f0eeee;
}
.wrapper{
    margin-top:30px;
    margin-bottom:80px;
}
  .menu-list a.is-active {
    background-color: #00d1b2;
    color: #fff;
}
.breadcrumb a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #00d1b2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0.5em 0.75em;
}

</style>
 