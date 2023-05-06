<template>
  <ul>
    <li :style="{ opacity }">VUE生命周期</li>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>
<script>
export default {
  name: 'news',
  data() {
    return {
      opacity: 1,
    }
  },
  activated() {
    console.log("news被激活了");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01
      if (this.opacity <= 0) {
        this.opacity = 1
      }
    }, 16);
  },
  deactivated() {
    console.log("news失活了");
    clearInterval(this.timer)
  },
}
</script>
<style lang="less" scoped></style>
