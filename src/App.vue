<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
 import Navbar from '@/components/Layout/Navbar.vue';
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components:{
    'nav-bar':Navbar
  }
}
</script>
<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
  
<style lang='scss'>
@import 'sass/app.scss'
</style>
