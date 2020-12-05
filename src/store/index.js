import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mainActive: 'home',
        subActive: 'home'
    },
    mutations: {
        changeMainActive(state, payload) {
            state.mainActive = payload.name;
        },
        changeSubActive(state, payload) {
            state.subActive = payload.name;
        }
    },
    actions: {},
    modules: {}
});
