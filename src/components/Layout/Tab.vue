<template>
  <div class="tabs is-toggle is-fullwidth">
  <ul>
    <li class="is-active is-primary">
      <a>
        <span class="icon is-small"><i class="fas fa-image"></i></span>
        <span ><router-link to="/transcript-application">{{firstTab}}</router-link></span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-music"></i></span>
        <span><router-link to="/monitor-application">{{secondTab}}</router-link></span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-film"></i></span>
        <span><router-link to="/user-profile">{{thirdTab}}</router-link></span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-file-alt"></i></span>
        <span><router-link to="/">{{fourthTab}}</router-link></span>
      </a>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name:'Tab',
  props:{
    'first-tab':'',
    'first-link':'',
    'second-tab':'',
    'first-link':'',
    'third-tab':'',
    'first-link':'',
    'fourth-tab':'',
    'first-link':'',
  }
}
</script>
<style scoped>

</style>
