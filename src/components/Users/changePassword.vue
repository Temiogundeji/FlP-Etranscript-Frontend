<template>
  <div>
    <site-header page-title="Change password" page-subtitle="Enter your new password"></site-header>
    <div class="container">
      <success-message></success-message>
      <failure-message></failure-message>
  <div class="column is-6">
    <div class="field">
        <label class="label">Email</label>
        <p class="control has-icons-left has-icons-right">
            <input name="email" class="input" type="email" placeholder="Email"
             v-model="model.email" v-validate="'required|email'" 
             :class="{'form-control': true, 'error': errors.has('email') }">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
      <span class="help is-danger" v-show="errors.has('email')">{{errors.first('email')}}</span>
</div>
<div>
  <div class="field">
      <label class="label">New Password</label>
    <p class="control has-icons-left">
      <input name="password" class="input" type="password" placeholder="Password"
      v-model="model.password" data-vv-name="password" v-validate="'required'"
      :class="{'form-control': true, 'error': errors.has('password') }">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
    <span class="help is-danger" v-show="errors.has('password')">{{errors.first('password')}}</span>
  </div>
  <div class="field">
      <label class="label">Confirm Password</label>
    <p class="control has-icons-left">
      <input name="newpassword" class="input" type="password" placeholder="Password"
   data-vv-as="password"  v-validate="'required|confirmed:password'"
      :class="{'form-control': true, 'error': errors.has('newpassword') }">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
    <span class="help is-danger" v-show="errors.has('newpassword')">{{errors.first('newpassword')}}</span>
  </div>
</div>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success">
      Reset Password
    </button>
  </p>
</div>
  </div>
    <site-footer></site-footer>
  </div>
</template>
<script>
  import siteHeader from '@/components/Layout/siteHeader.vue';
  import siteFooter from '@/components/Layout/siteFooter.vue';
  import successMessage from '@/components/Applications/successMessage'
  import failureMessage from '@/components/Applications/failureMessage'
export default {
  name:'change-password',
  data(){
    return{
      model:{
        password:''
        
      }
    }
  },
   methods:{
    validateForm(){
      this.$validator.validateAll();
    }
  },
  components:{
    'siteHeader':siteHeader,
    'siteFooter':siteFooter,
    'success-message':successMessage,
    'failure-message':failureMessage
  }
}
</script>
<style scoped>
 .form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
</style>

