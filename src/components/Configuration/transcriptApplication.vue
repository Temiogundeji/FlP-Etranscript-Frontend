<template>
    <section class="section">
        <div id="register" class="container">
          <site-header page-title="Apply For Transcript" page-subtitle="Fill in the following form to apply for transcript"></site-header>
            <form class="columns" @submit.prevent="validateForm">
              <div class="column is-6">
                <div class="field">
                  <label class="label">First Name</label>
                  <div class="control">
                      <input name="firstname" class="input" type="text" placeholder="Your first name" :class="{'form-control': true, 'error': errors.has('firstname') }" 
                        v-validate="'required|alpha_num'">
                  </div>
                  <p  v-show="errors.has('firstname')"  class="help is-danger">{{errors.first('firstname')}}</p>
                </div>

              <div class="field">
                <label class="label">LastName</label>
                <div class="control">
                  <input name="lastname" class="input" type="text" placeholder="Your last name" :class="{'form-control': true, 'error': errors.has('lastname') }" 
                        v-validate="'required|alpha_num'">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </div>
                <p  v-show="errors.has('lastname')"  class="help is-danger">{{errors.first('lastname')}}</p>
            </div>
            <div class="field">
                <label class="label">Matric No</label>
                <div class="control">
                    <input name="matricno" class="input" type="text" placeholder="Your matric no" :class="{'form-control': true, 'error': errors.has('matricno') }"
                v-validate="'required'">
                </div>
                <p  v-show="errors.has('matricno')"  class="help is-danger">{{errors.first('matricno')}}</p>
            </div>
            <div class="field">
                <label class="label">Start Year</label>
                <div class="control">
                    <input name="start_year" class="input" type="text" placeholder="Year of admission" :class="{'form-control': true, 'error': errors.has('start_year') }"
                v-validate="'required'">
                </div>
                <p  v-show="errors.has('start_year')"  class="help is-danger">{{errors.first('start_year')}}</p>
            </div>
            <div class="field">
                <label class="label">End Year</label>
                <div class="control">
                    <input name="end_year" class="input" type="text" placeholder="Year of graduation" :class="{'form-control': true, 'error': errors.has('end_year') }"
                v-validate="'required'">
                </div>
                <p  v-show="errors.has('end_year')"  class="help is-danger">{{errors.first('end_year')}}</p>
            </div>
            <div class="field">
            <label class="label">Faculty</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Science</option>
                  <option>Engineering</option>
                  <option>Art</option>
                  <option>Social Science</option>
                  <option>Management Sciene</option>
                </select>
              </div>
            </div>
          </div>
          </div>
        <div class="column is-6">
            <div class="field">
            <label class="label">Department</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Computer science</option>
                  <option>Mathematics</option>
                  <option>Statistics</option>
                  <option>Geology</option>
                  <option>Biology</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input name="email" class="input" type="email" placeholder="jane@gmail.com"  :class="{'form-control': true, 'error': errors.has('email') }"
                v-validate="'required|email'">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p  v-show="errors.has('email')"  class="help is-danger">{{errors.first('email')}}</p>
          </div>
          <div class="field">
          <label class="label">Date Of Birth</label>
            <p class="control has-icons-left">
              <input name="dob" class="input"  placeholder="Date Of Birth" :class="{'form-control': true, 'error': errors.has('dob') }"
                v-validate="'required'">
            </p>
            <p  v-show="errors.has('dob')"  class="help is-danger">{{errors.first('dob')}}</p>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <router-link class="button is-primary" to="/payment-page">Next</router-link>
            </div>
            <div class="control">
              <button class="button is-danger">Cancel Order</button>
            </div>
          </div>
          </div>
        </form>
      </div>
      <router-view></router-view>
    </section> 
</template>
<script>
  import siteHeader from '@/components/Layout/siteHeader'
export default {
  name:'transcript-application',
  methods:{
    validateForm(){
      this.$validator.validateAll();
      // console.info('fake AJAX request')
    }
  },
  components:{
    'site-header':siteHeader,
  }
}
</script>
<style scoped>
  .form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
