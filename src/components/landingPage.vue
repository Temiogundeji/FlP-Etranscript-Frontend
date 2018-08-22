<template>
  <div id="body">
    <!-- <nav-bar></nav-bar> -->
    <section class="hero is-primary is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            FlexiSAF E-Transcript System 
          </h1>
          <h2 class="subtitle">
            Transcript application made easy...
          </h2>
        </div>
      </div>
    </section>
  <section class="hero is-light" id="searchBox">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-two-third">
          <div class="field">
          <div class="control">
            <input id="input"  class="input" type="text" placeholder="Search your institution" v-model="instname">
          </div>
        </div>
      </div>
      <div class="column">
        <a  class="button is-primary  is-outlined">SEARCH</a>
      </div>
    </div>
  </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div id="result">
          <div class="columns is-multiline " v-show="showResult">
            <institution-item   v-for="institution in filterInstitutions" :institution ="institution" :key="institution.name">

            </institution-item>
            <!-- <institution-item :instname ="filterInstitutions" :key="institution.name">

            </institution-item> -->
          </div>
    </div>
    <section class="hero is-medium  is-bold instruction">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Getting Started
          </h1>
          <h2 class="subtitle">
           How to apply for transcript
          </h2>
           <ul>
              <li>Create an account</li>
              <li>Login to your account</li>
              <li>Search your institution</li>
              <li>Click your institution to access your dashboard</li>
            </ul>
        </div>
      </div>
    </section>
  </div>
</section>
<site-footer></site-footer>
</div>
</template>

<script>
  // import Navbar from '@/components/Layout/Navbar'
  import siteFooter from '@/components/Layout/siteFooter'
  import institutionsDisplay from '@/components/Applications/institutionsDisplay'
  import institutionItem from '@/components/Applications/institutionItem'
  
export default {
    
    name: 'landing-page',
    props:['institution','user'],
    data(){
      return{
        instname:'',
        showResult:false
      }
    },
    computed:{
      //First hide all result and show the result that corresponds with the user input
      filterInstitutions(){
        let iname = this.instname
          this.showResult = true
          return this.$store.getters.allInstitutions.filter(inst =>{
            return inst.name.toString().toLowerCase().includes(iname.toLowerCase());
            // return inst.name.toString().toLowerCase().indexOf(iname.toLowerCase()) >= 0
          })
      }
    },
    components:{
    // 'nav-bar':Navbar,
    'institution-item':institutionItem,
    'institutions-display':institutionsDisplay, 
    'site-footer':siteFooter
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#body{
  background-color:rgba(95, 204, 177, 0.425);
  color:rgb(117, 116, 116);

}

h1, h2 {
  font-weight: normal;
}
ul{
  font-size:18px;
	font-family: Arial, Helvetica, sans-serif;
	color: #2c3e50;
  font-weight: 200;
  line-height: 40px;
}
a {
  color: #42b983;
}
.hero.is-primary .title {
    color: #fff;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:40px;
    margin-bottom: 40px;
}
.hero .is-primary .subtitle{
  font-size:30px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.button{
  padding:20px 40px;
}
input{
  padding:20px 40px;
  font-size:20px;
}
input:focus{
   border-color: #42b983;
}
.title:not(:last-child), .subtitle:not(:last-child) {
	margin-bottom: 42px;
}
#searchBox{
  margin-bottom:25px;
} 
 #result{
  margin:40px;
} 
.profile{
      background-color: #00d1b2;
      color:#fff;
      
}
.subtitle {
    color: #4a4a4a;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
}
.instruction{
   color:#494b4a;
}
</style>
