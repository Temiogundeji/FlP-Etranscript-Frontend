<template>
    <section class="hero is-primary text-center">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
      {{pageTitle}}
      </h1>
      <h2 class="subtitle" >
       {{pageSubtitle}}
      </h2>
    </div>
  </div>
</section>
</template>
<script>
export default {
  name:'site-header',
  data (){
    return{
    
    }
  },
  props:{
    pageTitle:'',
    pageSubtitle:''
  }
}
</script>
<style scoped>
  section{
    margin-bottom:50px;
  }
  .text-center{
    padding:0 50px;
  }
</style>

