import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  sum: 0,
};

const actions = {
  // 业务逻辑写这里
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
  // 数据加工写这里
  Add(state, value) {
    state.sum += value;
  },
  DEC(state, value) {
    state.sum -= value;
  },
};
//将state中的数据进行加工
const getters = {
  bigSum() {
    return state.sum * 10;
  },
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {},
});
