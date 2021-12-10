import Vue from 'vue'
import Vuex from 'vuex'
import heros from './heros'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const storeModules = {
    actions,
    getters,
    modules:{
        heros
    }
}

export default new Vuex.Store(storeModules)
