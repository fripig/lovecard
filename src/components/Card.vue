<template>
  <div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">請用這個愛心碼</h5>
    <button type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="removeCard(card.uuid)">
      <span aria-hidden="true">&times;</span>
    </button>
    <h5 class="card-title" v-show="card.notableware" >不用餐具</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{card.shortname}}</h6>
    <h6 class="card-subtitle mb-2 text-muted">{{card.code}}</h6>
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

