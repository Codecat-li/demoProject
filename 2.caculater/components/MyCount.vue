<template>
  <div class="hello">
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和十倍为：{{ bigSum }}</h3>
    <h3>下方总人数：{{ personList.length }}</h3>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="incerment(number)">+</button>
    <button @click="decerment(number)">-</button>
    <button @click="incermentOdd(number)">当前求和为奇数再加</button>
    <button @click="incermentWait(number)">等一等再加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "MyCount",
  data() {
    return {
      number: 1, //用户选择的数字
    };
  },
  methods: {
    ...mapMutations("countOptins", { incerment: "Add", decerment: "DEC" }),
    // 有业务逻辑dispatch()和actions对话
    ...mapActions("countOptins", {
      incermentOdd: "addOdd",
      incermentWait: "addWait",
    }),
  },
  computed: {
    // 导入对应模块
    ...mapState("countOptins", ["sum"]),
    ...mapState("personOptins", ["personList"]),
    ...mapGetters("countOptins", ["bigSum"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
