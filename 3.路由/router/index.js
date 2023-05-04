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
            path: "detail",
            component: detail,
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