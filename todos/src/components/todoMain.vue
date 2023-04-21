<template>
  <div>
    <ul class="todo-main">
      <TodoItem
        v-for="todoitm in todos"
        :key="todoitm.id"
        :todo="todoitm"
      ></TodoItem>
    </ul>
  </div>
</template>
<script>
import TodoItem from "./todoItem.vue";

export default {
  name: "todoMain",
  components: { TodoItem },
  data() {
    return {
      todos: [
        { id: "001", title: "唱歌", completed: true },
        { id: "002", title: "打游戏", completed: false },
        { id: "003", title: "编程", completed: true },
      ],
    };
  },
};
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
