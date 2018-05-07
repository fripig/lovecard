<template>
  <div class="container">
    <div class="row">
      <countryfilter class="col-4"></countryfilter>
      <div class="col-8">
        <lottery></lottery>
        <cardlist></cardlist>
      </div>
    </div>
  </div>
</template>

<script>
import countryfilter from './CountryFilter.vue'
import cardlist from './CardList.vue'
import lottery from './Lottery.vue'
export default {
  name: 'mainbody',
  data () {
    return {
    }
  },
  components:{
    lottery,
    cardlist,
    countryfilter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
