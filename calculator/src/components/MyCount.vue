<template>
  <div class="hello">
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="incerment">+</button>
    <button @click="decerment">-</button>
    <button @click="incermentOdd">当前求和为奇数再加</button>
    <button @click="incermentWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "MyCount",
  data() {
    return {
      number: 1, //用户选择的数字
    };
  },
  methods: {
    incerment() {
      this.$store.dispatch("add", this.number);
    },
    decerment() {
      this.$store.dispatch("dec", this.number);
    },
    incermentOdd() {
      this.$store.dispatch("addOdd", this.number);
    },
    incermentWait() {
      this.$store.dispatch("addWait", this.number);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
