<template>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">請用這個愛心碼</h5>
    <h5 class="card-title" v-show="card.notableware" >不用餐具</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{card.shortname}}</h6>
    <h6 class="card-subtitle mb-2 text-muted">{{card.code}}</h6>
    <p class="card-text">{{card.name}}</p>
  </div>
</div>
</template>
<script>
export default {
    props:['card']
}
</script>

