<template>
  <div>
    <!-- <nav-bar></nav-bar> -->
    <site-header page-title="User Login" page-subtitle="Fill in the following form to login"></site-header>
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-4"></div>
      <div class="column is-3 offset-1 login">
        <form @submit.prevent="login()"> 
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input name="email" class="input" type="text" placeholder="jane@gmail.com" 
                v-model="email" v-validate="'required|email'"
                :class="{'form-control': true, 'error': errors.has('email') }">
              </div>
                <span class="help is-danger" v-show="errors.has('email')"  >{{errors.first('email')}}</span>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" name="password" placeholder="your password here" v-validate="'required'" v-model="password"
                :class="{'form-control': true, 'error': errors.has('password') }">
              </div>
              <span class="help is-danger" v-show="errors.has('password')">{{errors.first('password')}}</span>
            </div>
            <div class="field" >
                <div class="control">
                    <label class="checkbox">
                    <input type="checkbox">
                   <a href="#"> I agree to the terms and conditions</a>
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <a class="button is-primary" type="submit">Login</a>
              </div>
              <div class="control">
                <a href="#/register" class="button is-outlined is-primary" >Register</a>
              </div>
              <div class="control">
                <a><router-link to ="/changepassword" class="button is-text">Forget password</router-link></a>
              </div>
            </div>
        </form>     
      </div>
  <div class="column is-4"></div>
  </div>
  </div>
</section>
</div>
</template>
<script>
  import siteHeader from '@/components/Layout/siteHeader.vue';
  // import Navbar from '@/components/Layout/Navbar.vue';
export default {
  name:'user-login',
  data(){
    return{
        email:"",
        password:""
    }
  },
  methods:{
    validateForm(){
      this.$validator.validateAll();
    }, 
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      }).then(res => {
        this.$router.push('/');
      })
    }

  },
  props:['page-name'],
  components:{
    'site-header':siteHeader,
    // 'nav-bar':Navbar
  }
}
</script>
 <style scoped>
 .form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
a{
  color: #00d1b2;
}
.login {
    background-color: #f0eeeec5;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
}
.field{
  padding:10px;
}
</style>