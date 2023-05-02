<template>
  <div>
    <h1>人员列表</h1>
    <h3>下方求和为{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addPerson() {
      console.log(this.personList);
      const PersonObj = { id: nanoid(), name: this.name };
      this.$store.commit("personOptins/AddPerson", PersonObj);
      this.name = "";
    },
  },
  computed: {
    ...mapState("countOptins", ["sum"]),
    ...mapState("personOptins", ["personList"]),
  },
};
</script>
