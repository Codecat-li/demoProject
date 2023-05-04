<template>
  <div id="app">
    <div>
      <div class="row">
        <banner></banner>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- <a class="list-group-item" href="./about.html">About</a>
            <a class="list-group-item active" href="./home.html">home</a> -->
            <router-link class="list-group-item" active-class="active" to="About">About</router-link>
            <router-link class="list-group-item" active-class="active" to="Home">Home</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import banner from "./components/banner.vue";

export default {
  name: "App",
  components: { banner },
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
