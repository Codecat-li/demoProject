import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  sum: 0,
};

const actions = {
  add(conxtext, value) {
    console.log("add被调用了", conxtext, value);
    conxtext.commit("Add", value);
  },
  dec(conxtext, value) {
    conxtext.commit("DEC", value);
  },
  addOdd(conxtext, value) {
    if (conxtext.state.sum % 2) {
      conxtext.commit("Add", value);
    }
  },
  addWait(conxtext, value) {
    setTimeout(() => {
      conxtext.commit("Add", value);
    }, 500);
  },
};

const mutations = {
  Add(state, value) {
    state.sum += value;
  },
  DEC(state, value) {
    state.sum -= value;
  },
};

export default new Vuex.Store({
  state,
  getters: {},
  actions,
  mutations,
  modules: {},
});
