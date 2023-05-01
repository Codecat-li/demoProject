<template>
  <div>
    <h1>人员列表</h1>
    <h3>下方求和为{{ contOptins.sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="Pname" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personOptins.personList.length" :key="p.id">
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
      Pname: "",
    };
  },
  methods: {
    addPerson() {
      const PersonObj = { id: nanoid(), name: this.Pname };
      this.$store.commit("AddPerson", PersonObj);
      this.Pname = "";
    },
  },
  computed: {
    ...mapState(["contOptins", "personOptins"]),
  },
};
</script>
<style lang="less" scoped></style>
