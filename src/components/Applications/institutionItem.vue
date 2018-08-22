<template>
  <div class="column is-narrow">
      <router-link :to="'/userdashboard'">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="institution.logo" />
              </figure>
            </div>
            <div class="card-content">
          <div class="content">
            {{institution.name}}
            <br>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name:'institution-item',
  props:['institution'],
  data(){
    return{
      logo: "../src/assets/logo.png"
    }
  },
  computed:{}
}
</script>
<style scoped>

</style>
