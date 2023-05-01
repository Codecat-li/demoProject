import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const countOptins = {
  namespaced: true,
  state: {
    sum: 0,
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
  actions: {
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
  },
  mutations: {
    Add(state, value) {
      state.sum += value;
    },
    DEC(state, value) {
      state.sum -= value;
    },
  },
};

const personOptins = {
  namespaced: true,
  state: {
    personList: [
      {
        id: "001",
        name: "张三",
      },
    ],
  },
  getters: {},
  actions: {},
  mutations: {
    AddPerson(state, value) {
      state.personList.unshift(value);
    },
  },
};

export default new Vuex.Store({
  modules: {
    countOptins: countOptins,
    personOptins: personOptins,
  },
});
