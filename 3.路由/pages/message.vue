<template>
  <div>
    <ul>
      <li v-for="mes in   messageList  " :key="mes.id">
        <!-- params写法 -->
        <!-- <router-link :to="`/Home/message/detail/${mes.id}/${mes.title}`">
          {{ mes.title }}
        </router-link> -->
        <!-- to的对象写法 -->
        <router-link :to="{
          name: 'detail',
          query: { id: mes.id, title: mes.title }
        }">
          {{ mes.title }}
        </router-link>
        <button @click="pushShow(mes)">push查看</button>
        <button @click="replaceShow(mes)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'message',
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },

      ]
    }
  },
  methods: {
    pushShow(mes) {
      this.$router.push({
        name: 'detail',
        query: { id: mes.id, title: mes.title }
      })
    },
    replaceShow(mes) {
      this.$router.replace({
        name: 'detail',
        query: { id: mes.id, title: mes.title }
      })
    }
  }
}
</script>
<style lang="less" scoped></style>
