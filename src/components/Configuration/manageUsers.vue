<template>
    <div>
      <site-header page-title="Manage Transcript Request" page subtitle="Manage all transcript application for the institution"></site-header>
      <div class="container">
        <section class="hero is-light">
          <div class="hero-body">
            <div class="container">
              <!-- operations to be performed -->
              sort, search
            </div>
          </div>
        </section>  
          <user-list></user-list>

      </div>
  </div>
</template>
<script>
import userList from '@/components/Applications/userList'
import siteHeader from '@/components/Layout/siteHeader'
export default {
  name:'manage-users',
  components:{
    'user-list':userList
  }
}
</script>
<style scoped>

</style>
