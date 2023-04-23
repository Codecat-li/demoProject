<template>
  <div>
    <li>
      <label>
        <!-- 此处还可以去掉checked和handleChecked改用v-model，但是违反了props只读规则，在改变绑定对象结构的情况下可能会出错 -->
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleChecked(todo.id)"
        />
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
    </li>
  </div>
</template>
<script>
export default {
  name: "todoItem",
  props: ["todo"],
  data() {
    return {};
  },
  methods: {
    // 勾选功能
    handleChecked(id) {
      this.$bus.$emit("checkTodo", id);
    },
    // 删除功能
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        console.log("id");
        this.$bus.$emit("todoDelete", id);
      }
    },
  },
};
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
