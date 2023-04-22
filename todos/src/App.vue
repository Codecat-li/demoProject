<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todoHeader :addtodo="addtodo"></todoHeader>
        <todoMain
          :todos="todos"
          :checkTodo="checkTodo"
          :todoDelete="todoDelete"
        ></todoMain>
        <todoFooter
          :todos="todos"
          :checkedAlltodo="checkedAlltodo"
          :clearAllTodo="clearAllTodo"
        ></todoFooter>
      </div>
    </div>
  </div>
</template>

<script>
import todoHeader from "./components/todoHeader.vue";
import todoMain from "./components/todoMain.vue";
import todoFooter from "./components/todoFooter.vue";
export default {
  name: "App",
  components: {
    todoHeader,
    todoMain,
    todoFooter,
  },
  data() {
    return {
      // 将数据保存在最大的组件app中，可以传给所有子组件
      todos: [
        { id: "001", title: "唱歌", done: true },
        { id: "002", title: "打游戏", done: false },
        { id: "003", title: "编程", done: true },
      ],
    };
  },
  // 子组件可以通过调用以下函数来联动其他组件
  methods: {
    // 添加新todo对象
    addtodo(todoobj) {
      console.log("get todoobj:", todoobj);
      this.todos.unshift(todoobj);
    },
    // 勾选todo相关逻辑
    checkTodo(id) {
      this.todos.forEach((todo) => {
        todo.id === id ? (todo.done = !todo.done) : "";
      });
    },
    // 删除按钮
    todoDelete(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 让所有的todo.done都等于done的布尔值
    checkedAlltodo(done) {
      this.todo.done = done;
    },
    // 清除掉所有的false
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

/*base*/
body {
  background: #fff;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
