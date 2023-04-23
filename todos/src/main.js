import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  beforeCreate() {
    // 添加全局总线
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
