<template>
<div>
    <card v-for="(row,index) in cards" :key="row.sn" :card="row" @click="removeCard(index)"></card>
</div>
</template>
<script>
import card from './Card.vue'
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
    ...mapGetters(['cards'])
  },
  components:{
      card
  },
    methods: {
    ...mapActions(['removeCard'])
  },
}
</script>
