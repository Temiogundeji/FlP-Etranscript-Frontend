<template>
  <div class="container">
        <table class="table">
        <thead>
            <tr>
            <th><abbr>User ID</abbr></th>
            <th><abbr>Payment ref</abbr></th>
            <th><abbr>Status</abbr></th>
            <th><abbr>Amount</abbr></th>
            <th><abbr>Order Date</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="paymentLog in paymentLogs"  :paymentLog ="paymentLog" :key="paymentLog.user_id">
            <td>{{paymentLog.user_id}}</td>
            <td>{{paymentLog.payment_ref}}</td>
            <td>{{paymentLog.payment_status}}</td>
            <td>{{paymentLog.amount}}</td>
            <td>{{paymentLog.order_date}}</td>
        </tr>
        </tbody>
        </table>
  </div>
</template>
<script>
export default {
  name:'payment-log-list',
  props:['paymentLog'],
  computed:{
    paymentLogs(){
      return this.$store.getters.allPaymentLog
    }
  }
}
</script>
<style scoped>

</style>

