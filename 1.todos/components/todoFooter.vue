<template>
  <div>
    <div class="todo-footer" v-show="total">
      <label>
        <input type="checkbox" v-model="isAll" />
        <!-- <input type="checkbox" :checked="isAll" @change="checkedAll" /> -->
      </label>
      <span>
        <span>勾选{{ doneTotal }}</span> / 全部{{ total }}
      </span>
      <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "todoFooter",
  props: ["todos"],
  data() {
    return {};
  },
  computed: {
    //  计算todo的勾选个数，rudece会遍历并累加done的值。
    doneTotal() {
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    // 计算动态数组长度
    total() {
      return this.todos.length;
    },
    // 计算是否全选
    isAll: {
      // 通过完整版计算属性绑定v-model可以省区操作dom获取选中状态
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      // isAll被修改时会被调用
      set(value) {
        this.$emit("checkedAlltodo", value);
      },
    },
  },
  methods: {
    //   checkedAll(e) {
    //     this.checkedAlltodo(e.target.checked);
    //   },
    clearAll() {
      this.$emit("clearAllTodo");
    },
  },
};
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
