<template>
  <div>
      <site-header page-title="Payment Log" page-subtitle="List all the payment log"></site-header>
      <payment-log-list></payment-log-list>
      <site-footer></site-footer>
  </div>
</template>
<script>
import paymentLogList from '@/components/Applications/paymentLogList'
import siteHeader from '@/components/Layout/siteHeader'
import siteFooter from '@/components/Layout/siteFooter'
export default {
  name:'payment-log',
  components:{
    'site-header':siteHeader
  }
}
</script>
<style scoped>

</style>
