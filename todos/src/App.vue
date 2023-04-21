<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todoHeader :addtodo="addtodo"></todoHeader>
        <todoMain :todos="todos"></todoMain>
        <todoFooter></todoFooter>
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
      todos: [
        { id: "001", title: "唱歌", completed: true },
        { id: "002", title: "打游戏", completed: false },
        { id: "003", title: "编程", completed: true },
      ],
    };
  },
  methods: {
    addtodo(todoobj) {
      console.log("get todoobj:", todoobj);
      this.todos.unshift(todoobj);
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

/*base*/
body {
  background: #fff;
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
