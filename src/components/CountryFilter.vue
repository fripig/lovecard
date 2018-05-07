<template>
<div>
    <div class="row">
        <input type="text" name="filter" id="text-filter" v-model="filterText" placeholder="search...">
        <select name="country" id="country-select" v-model='selectCountry'>
            <option value="">地區</option>
            <option v-for="country in  country_list" :key="country" :value="country" v-text="country"  ></option>
        </select>      
  <button class="btn" @click="reset">reset</button>
    </div>
            <div class="row">
                <li>
                    <input type="checkbox" name="noinvoice" id="noinvoice" v-model="noinvoice">
                    <label for="noinvoice">不要明細</label>
                </li>
                <li>
                    <input type="checkbox" name="notableware" id="notableware" v-model="notableware">
                    <label for="notableware">不要餐具</label>
                </li>
            </div>
  <div class="row">
        <table class="table">
      <thead>
      <tr>
          <th scope="col">name</th>
          <th scope="col">code</th>
          <th scope="col">country</th>
      </tr>
      </thead>
        <tbody>
        <tr v-for="row in full_list_filter" :key="row.sn" @click="doAddCard(row)">
            <td scope="row" v-text="row.name"></td>
            <td scope="row" v-text="row.code"></td>
            <td scope="row" v-text="row.country"></td>
        </tr>
        </tbody>
  </table>
  </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
        filterText:'',
      selectCountry: '',
      noinvoice:0,
      notableware:0
    };
  },
  computed: {
    ...mapGetters(["full_list_filter", "country_list"]),
    options(){
        return {
            noinvoice:this.noinvoice,
            notableware:this.notableware
        }
    }
  },
  watch:{
      filterText(val){
         this.setFilterText(val); 
      },
      selectCountry(val){
            this.setCountryFilter(val); 
      }
  },
  methods: {
    ...mapActions(["setFilterText", "setList",'setCountryFilter','reset','removeCard','addCard']),
    doAddCard(target){
        target = Object.assign(target,this.options)
        this.addCard(target)
    }
  },
  mounted() {
    this.setList();
  }
};
</script>
