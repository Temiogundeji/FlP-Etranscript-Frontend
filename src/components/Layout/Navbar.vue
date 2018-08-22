<template>
  
    <nav class="navbar has-shadow is-transparent" style="transform: translateY(0px);">
      <div class="navbar-brand">
            <a class="navbar-item" href="/"> 
          E-transcript
           </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div  class="navbar-menu" id="navMenu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                  <router-link to ="/login" v-if="!isLoggedIn"  class="button is-outlined is-primary is-rounded">
                    <span>LOGIN</span>
                  </router-link>
              </p>
                <p class="control">
                 <router-link to="/register" v-if="!isLoggedIn" :class="{'is-primary':isActive,activeStyle:isActive}" class="button  is-active is-rounded">
                    <span>REGISTER</span>
                 </router-link>
                </p>
                <p class="control">
                 <router-link to="" @click="logout" v-if="!isLoggedIn" :class="{'is-primary':isActive,activeStyle:isActive}" class="button  is-active is-rounded">
                    <span>LOGOUT</span>
                 </router-link>
                </p>
                <!-- <p class="control">
                 <router-link class="button  is-active is-rounded" href="#" @click="logout" v-if="!isLoggedIn">
                   <span>LOGOUT</span>
                </router-link> 
                </p> -->
          </div>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
  import userLogin from '@/components/Users/userLogin.vue';
  import studentRegister from '@/components/Users/studentRegister.vue';
    export default {
      name:'nav-bar',
      data(){
        return{
         isActive:true
        }
      },
      methods:{
        logout(){
        
        },

      },
      computed:{
         
      }
    }


//To toggle navbar
    document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>
<style scoped>
  a.router-link-active, li.router-link-active>a {
    background-color: #00d1b2;
}
  a.router-link:focus, a.router-link:focus{
    background-color: #00d1b2;
  }
  .navbar-item{
    color:hsl(0, 0%, 21%);
    font-size:32px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
  .navbar-item:hover{
    color:hsl(171, 100%, 41%);
  }
  .button {
    background-color: transparent;
    border-color:#00d1b2; 
    color: #00d1b2;
    padding:20px 25px;
}
</style>