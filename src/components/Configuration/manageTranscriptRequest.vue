<template>
  <div>
      <site-header page-title="Manage Transcript Request" page subtitle="Manage all transcript application for the institution"></site-header>
      <div class="container">
          <requests-list></requests-list>
      </div>
  </div>
</template>
<script>
import siteHeader from '@/components/Layout/siteHeader'
import requestsList from '@/components/Applications/requestsList'
export default {
  name:'manage-transcript-request',
  components:{
      'site-header':siteHeader,
      'requests-list':requestsList
  }
}
</script>
<style scoped>

</style>
