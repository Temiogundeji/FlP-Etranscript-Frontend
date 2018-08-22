<template>
  <div>
    <site-header page-title="Checkout" page-subtitle="Select payment method"></site-header>
    <section class="section">
      <div class="container">
        <div class="container">
          <b id="amount">TOTAL PAYMENT :</b><span></span>
        </div>
        <div class="control" id="payment" >
          <label class="radio" >
            <input type="radio" name="answer">
           <router-link to="/bank-details"><a> Direct Bank Deposit</a></router-link>
          </label><br>
          <label class="radio">
            <input type="radio" name="answer">
            Interswicth
          </label><br>
          <label class="radio">
            <input type="radio" name="answer" checked>
            Mastercard/Verve Card
          </label>
      </div>
        <div class="field is-grouped">
            <div class="control">
              <router-link class="button is-danger" to="">Cancel Order</router-link>
            </div>
            <div class="control">
              <router-link to="/transcript-application" class="button" >Back</router-link>
            </div>
            <div class="control">
              <router-link to="" class="button is-success" >Pay order</router-link>
            </div>
          </div>
      </div>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
  import siteHeader from '@/components/Layout/siteHeader'
export default {
  name:'payment-page',
  components:{
    'site-header':siteHeader
  }
}
</script>
<style scoped>
  #payment{
    padding:40px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 400;

  }
  .control{
    font-size:15px;
  }
 a{
    color:#00d1b2;
  }
  .input[type="radio"]{
    font-size:32px;
    margin:50px;
  }
  #amount{
    font-size:24px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:500;
  }
  label{
    padding:8px;
    font-size:22px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:200;
  }
</style>
