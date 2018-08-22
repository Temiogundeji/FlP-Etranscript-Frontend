<template>
    <div class="notification is-success is-outlined" v-show="isShown">
        <button class="delete" @click="toggle"></button>
     Confirmation email has been sent to your email account.<br>
    Follow the link on the email to login.
    </div>
</template>
<script>
export default {
    name:'success-message',
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
