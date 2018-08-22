<template>
  <div class="container">
    <site-header page-title="Monitor Application" page-subtitle="Monitor your applications"></site-header>
    <table class="table">
  <thead>
    <tr>
      <th><abbr>Payment ref</abbr></th>
      <th><abbr>Config id</abbr></th>
      <th><abbr>Status</abbr></th>
      <th><abbr>Order Date</abbr></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="application in applications"  :application ="application" :key="application.id">
      <td>{{application.user_id}}</td>
      <td>{{application.payment_ref}}</td>
      <td>{{application.Status}}</td>
      <td>{{application.order_date}}</td>
   </tr>
  </tbody>
</table>
  </div>
</template>
<script>
  import requestsList from '@/components/Applications/applicationList'
  import siteHeader from '@/components/Layout/siteHeader'
  import siteFooter from '@/components/Layout/siteFooter'
export default {
  name:'monitor-application',
  computed:{
    applications: function(){
      return this.$store.getters.allApplications;
    }
  },
  props:['application'],
  components:{
    'site-header':siteHeader,
    'site-footer':siteFooter
  }
}
</script>
<style scoped>

</style>


  

 