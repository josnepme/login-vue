import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		loading: false
	},

	getters: {
        
        isLoading: (state) => (p) => {
            return state.loading
        }
    },

	mutations: {},

	actions: {}
})
