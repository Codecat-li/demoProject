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
  addWait(conxtext, value) {
    conxtext.commit("AddWait", value);
  },
};

const mutations = {
  Add(state, value) {
    state.sum += value;
  },
  AddWait(state, value) {
    setTimeout(() => {
      state.sum += value;
    }, 500);
  },
};

export default new Vuex.Store({
  state,
  getters: {},
  actions,
  mutations,
  modules: {},
});
