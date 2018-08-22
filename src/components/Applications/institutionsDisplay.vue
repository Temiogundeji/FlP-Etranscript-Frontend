<template>
    <div id="searchResult" class="container">
      <div class="columns">
        <!-- <institution-item v-for="institution in filterInstitutions" :institution ="institution" :key="institution.name">
          
        </institution-item> -->
      </div>
    </div>
</template>
<script>
    import institutionItem from '@/components/Applications/institutionItem'
    export default{
        name:'institution-display',
        data(){
            return{
                instname:''
            }
        },
    //     components:{                                             
    //         'institution-item':institutionItem
    //     },
    //      computed:{
    //         institutions(){
    //          return this.$store.getters.allInstitutions
    //          },
    //         filterInstitutions(){
    //         let instname = this.instname
    //       // return this.$store.getters.allInstitutions.filter(inst => inst.name === instname);
    //         return this.$store.getters.allInstitutions.filter(inst =>{
    //         return inst.name.includes(instname);
    //       })
    //   }
    //}
}
</script>
<style scoped>
#searchResult{
    background:#cbcbcb;
    margin-top:80px;
    margin-bottom:80px;
}
</style>
