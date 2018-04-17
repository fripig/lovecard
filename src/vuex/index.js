import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import card from './modules/card.js';77

export const store = new Vuex.Store({
    modules: {
        card
    }
  })