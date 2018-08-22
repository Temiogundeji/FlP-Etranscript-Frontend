<template>
    <div class="notification is-danger is-outlined" v-show="isShown">
        <button class="delete" @click="toggle"></button>
        You entered the wrong...
    </div>
</template>
<script>
export default {
    name:'failure-message',
    data(){
      return{
         isShown:true
      }
  },
  methods:{
    toggle(){
       this.isShown = !this.isShown
    }
  }
}
</script>
<style scoped>

</style>
