import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import message from "@/pages/message.vue";
import news from "@/pages/news.vue";
import detail from "@/pages/detail.vue";

export default new VueRouter({
  routes: [{
    path: "/Home",
    component: Home,
    children: [
      {
        path: "message",
        component: message,
        children: [
          {
            name: "detail",
            path: "detail/:id/:title",
            component: detail,
            // 固定参数，对象中的所有参数都会以props形式传给detail组件
            // props: { a: 1, b: 'hello' }
            // 若为true,会把所有收到的params以props形式传给detail组件
            // props: true
            // 回调函数写法,适用query
            props($router) {
              return {
                id: $router.query.id,
                title: $router.query.title
              }
            }
          },
        ]
      },
      {
        path: "news",
        component: news,
      }
    ]
  },
  {
    path: "/About",
    component: About
  },
  ]
})