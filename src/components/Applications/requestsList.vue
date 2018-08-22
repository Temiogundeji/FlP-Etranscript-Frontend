<template>
    <div>
        <div class="container">
        <table class="table">
        <thead>
            <tr>
                <th><abbr>Order ID</abbr></th>
                <th><abbr>User ID</abbr></th>
                <th><abbr>Programme Type</abbr></th>
                
                <th><abbr>Sending Institution</abbr></th>
                <th><abbr>Receiving Institution</abbr></th>
                <th><abbr>Order Date</abbr></th>
                <th><abbr>Application Status</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="application in applications"  :application ="application" :key="application.id">
            <td>{{application.order_id}}</td>
            <td>{{application.user_id}}</td>
            <td>{{application.prog_type}}</td>
            <td>{{application.receiver}}</td>
            <td>{{application.sender}}</td>
            <td>{{application.order_date}}</td>
            <td>{{application.application_status}}</td>
            <td><a class="button is-success" @click="grantApply(application.order_id)">Pending</a></td>
        </tr>
        </tbody>
        </table>
  </div>
    </div>
</template>
<script>
export default {
  name:'request-list',
  props:['application'],
  computed:{
      applications(){
          return this.$store.getters.allApplications
      }
  }
}
</script>

<style scoped>

</style>
