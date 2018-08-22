<template>
  <div>
   <div class="container">
    <section class="section"> 
    <site-header page-title="Create Institution" page-subtitle="Fill in the form to create an institution"></site-header>
    <form class="columns">
      <div class="column is-6">
          <section class="hero is-primary subheader">
                <div class="hero-body">
              <div class="container">
                <h2 class="title">
                Institution Details
                </h2>
              </div>
            </div>
          </section>  
        <div class="field">
          <label class="label">Name of Institution</label>
          <div class="control">
            <input class="input" type="text" placeholder="University of Xyz">
          </div>
        </div>

      <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>
    <div class="file has-name">
      <label class="file-label">Logo</label>
    <input class="file-input" type="file" name="logo">
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file…
      </span>
    </span>
    <span class="file-name">
      Screen Shot 2017-07-29 at 15.54.25.png
    </span>
</div>
  </div>
  <div class="column is-6">
  <section class="hero is-primary subheader">
    <div class="hero-body">
      <div class="container">
        <span class="title">
        Admin Details
        </span>
      </div>
    </div>
  </section>
    <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Admin name goes here">
        </div>
    </div>
     <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="">
          </div>
      </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="xyz@yourmmail.com">
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Submit</button>
      </div>
      <div class="control">
        <button class="button is-danger">Cancel</button>
      </div>
    </div>
  </div>
  </form>
  </section>
   </div>
  </div>
</template>
<script>
  import siteHeader from '@/components/Layout/siteHeader'
export default {
  name:'create-institution',
  data(){
    return{
      institution:{
        name:'',
        description:'',
        logo:'',
        admin_name:'',
        password:'',
        email:''
      }
    }
  },
  components:{
    'site-header':siteHeader
  }
  }
</script>
<style scoped>
.subheader{
  margin-bottom:20px;
  font-size:18px;
}
</style>
