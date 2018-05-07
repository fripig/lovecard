<template>
  <div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">
        請用這個愛心碼
        <button type="button"
                class="close"
                @click="removeCard(card.uuid)">
            <span aria-hidden="true">&times;</span>
        </button>
    </h5>

    <h5 class="card-subtitle mb-2 text-muted">{{card.shortname}}</h5>
    <h5 class="card-subtitle mb-2 text-muted">{{card.code}}</h5>
      <h6 class="card-subtitle" v-show="card.noinvoice" >不用明細</h6>
      <h6 class="card-subtitle" v-show="card.notableware" >不用餐具</h6>
    <p class="card-text">{{card.name}}</p>
  </div>
</div>
</template>
<script>
    import { mapGetters, mapActions } from "vuex";
export default {
    props:['card'],
    methods: {
        ...mapActions(['removeCard'])
    },
}
</script>

