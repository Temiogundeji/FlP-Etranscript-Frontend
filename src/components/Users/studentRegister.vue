<template>
  <div>
     <!-- <nav-bar></nav-bar> -->
     <site-header page-title="Student/Alumni Registration" page-subtitle="Fill in the following form to register"></site-header>

    <section class="section">
      <div class="container">
        <form class="columns" @submit.prevent="validateForm">
      <div class="column is-6">
        <div class="field">
          <label class="label">First Name</label>
            <div class="control">
                <input class="input" name="firstname" type="text"
                 placeholder="Your first name" :class="{'form-control': true, 'error': errors.has('firstname') }" 
                 v-model="newUser.firstname" v-validate="'required|alpha_num'">
            </div>
            <p  v-show="errors.has('firstname')"  class="help is-danger">{{errors.first('firstname')}}</p>
        </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input class="input"  name="lastname" type="text" placeholder="Your last name"
        :class="{'form-control': true, 'error': errors.has('lastname') }"
        v-model="newUser.lastname" v-validate="'required|alpha_num'">
        <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div> 
      <span  v-show="errors.has('lastname')"  class="help is-danger">{{errors.first('lastname')}}</span>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" name="email" type="email" placeholder="adam@gmail.com" 
        v-model="newUser.email" v-validate="'required|email'"
        :class="{'form-control': true, 'error': errors.has('email') }">
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-exclamation-triangle"></i>
        </span>
      </div>
      <span  v-show="errors.has('email')"  class="help is-danger">{{errors.first('email')}}</span>
    </div>
    <div class="field">
      <label class="label">Address</label>
      <div class="control">
      <textarea name="address" class="textarea" placeholder="Address" v-model="newUser.address" v-validate="'required|max:50'"
        :class="{'form-control': true, 'error': errors.has('address') }"></textarea>
    </div>
  <span  v-show="errors.has('address')"  class="help is-danger">{{errors.first('address')}}</span>
  </div>
</div>
<div class="column is-6">
  <div class="field">
        <label class="label">Mobile </label>
        <div class="control">
            <input class="input" name="phone" type="number" placeholder="Phone number1"  
            :class="{'form-control': true, 'error': errors.has('phone') }"
            v-model="newUser.phone" v-validate="'required'">
        </div>
        <span  v-show="errors.has('phone')"  class="help is-danger">{{errors.first('phone')}}</span>
  </div>
  <div class="field">
      <label class="label">Country</label>
      <div class="control">
        <div class="select">
          <select v-model="newUser.country" v-validate="'required'" name="country" :class="{'form-control': true, 'error': errors.has('country') }">
            <option>Nigeria</option>
            <option>Ghana</option>
          </select>
        </div>
      </div>
      <span  v-show="errors.has('country')"  class="help is-danger">{{errors.first('country')}}</span>
    </div>
    <div class="field">
      <label class="label">State</label>
      <div class="control">
        <div class="select">
          <select v-model="newUser.state" v-validate="'required'" name="state" :class="{'form-control': true, 'error': errors.has('state') }">
            <option>Oyo</option>
            <option>Ogun</option>
          </select>
        </div>
      </div>
      <span  v-show="errors.has('state')"  class="help is-danger">{{errors.first('state')}}</span>
    </div>
  <div class="field">
      <label class="label"> Password</label>
    <p class="control has-icons-left">
      <input name="password" class="input" type="password" placeholder="Password"
      v-model="newUser.password" data-vv-name="password" v-validate="'required'"
      :class="{'form-control': true, 'error': errors.has('password') }">
      <span class="icon is-small is-left">
        <i class="fa fa-lock"></i>
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
        <i class="fa fa-lock"></i>
      </span>
    </p>
    <span class="help is-danger" v-show="errors.has('newpassword')">{{errors.first('newpassword')}}</span>
  </div>
<div class="field is-grouped">
  <div class="control">
    <button type="submit" @click="addNewApplicant()" class="button is-primary">Register now</button>
    <!-- <router-link to="/login"><a type="submit" @click="addNewApplicant()" class="button is-primary">Register now</a></router-link> -->
  </div>
  <div class="control">
    <button class="button is-danger">Cancel</button>
  </div>
  </div>
  </div>
</form>
  </div>
    </section>
    <site-footer></site-footer>    
  </div>
</template>
<script>
  // import Navbar from '@/components/Layout/Navbar'
  import Vuex from 'vuex'
  import siteFooter from '@/components/Layout/siteFooter';
  import siteHeader from '@/components/Layout/siteHeader';
  import {ADD_NEW_USER} from '@/store/mutation_types'
  import {mapState} from 'vuex'
  
export default {
  name:'student-register',
  data(){
    return{
      newUser:{
        id:1,
        usertype:'applicant',
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        password:'',
        country:'',
        state:'',
        address:'',
      }
    }
  },
  // computed:Vuex.mapState(['user']),
  // computed:{
  //   users(){
  //     return this.$store.getters.users
  //   }
  // },
  methods:{
    addNewApplicant (){
    let applicants = this.newUsers
    this.$store.commit('ADD_NEW_USER',applicants)
    }
  },
  components:{
    // 'nav-bar':Navbar,
    'site-footer':siteFooter,
    'site-header':siteHeader
  },
  methods:{
    validateForm(){
      this.$validator.validateAll();
    }
  }
}
</script>
<style scoped>
  .form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
.passwordfield{
  margin-bottom:20px;
}
</style>
