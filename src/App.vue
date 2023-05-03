<template>
  <div id="app">
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header">
            <h2>Vue Router Demo</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <a class="list-group-item" href="./about.html">About</a>
            <a class="list-group-item active" href="./home.html">Home</a>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <Home />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: "App",
  components: { Home },
  mounted() { },
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
</style>
