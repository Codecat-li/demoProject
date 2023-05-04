<template>
  <div>
    <h2>我是Home的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/Home/news">News</router-link>
      </li>
      <li>
        <router-link class="list-group-item" active-class="active" to="/Home/message">Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
