<template>
  <div>
    <ul class="todo-main">
      <TodoItem
        v-for="todoitm in todos"
        :key="todoitm.id"
        :todo="todoitm"
        :checkTodo="checkTodo"
        :todoDelete="todoDelete"
      ></TodoItem>
    </ul>
  </div>
</template>
<script>
import TodoItem from "./todoItem.vue";

export default {
  name: "todoMain",
  components: { TodoItem },
  props: ["todos", "checkTodo", "todoDelete"],
  data() {
    return {};
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
