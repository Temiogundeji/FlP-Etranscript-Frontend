<template>
    <div>
     <!-- <nav-bar></nav-bar> -->
    <div class="wrapper"> 
      <div class="columns">
        <aside class="menu column is-2">
            <p class="menu-label">
                GENERAL 
            </p>
            <ul class="menu-list">
                <li><a class="is-active">Flexisaf Dashboard <span class="fa fa-user"></span></a></li>
            </ul>
            <p class="menu-label">
                TRANSCRIPT REQUESTS
            </p>
            <ul class="menu-list">
                <li><router-link to="/manage-all-requests">All Transcript Requests</router-link></li>
            </ul>
            <p class="menu-label">
                CONFIGURATION
            </p>
            <ul class="menu-list">
                <li><router-link to="/manage-all-institutions">Manage Institutions</router-link></li>
                <li><router-link to="/manage-users">Manage Users</router-link></li>
                <li><router-link to="/payment-settings">Payment Settings</router-link></li>
            </ul>
            <p class="menu-label">
                PAYMENTS
            </p>
            <ul class="menu-list">
                <li><router-link to="all-payment-log">Payment Log</router-link></li>
            </ul>
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
        name:'flexisaf-admin',
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
