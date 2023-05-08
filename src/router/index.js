import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import message from "@/pages/message.vue";
import news from "@/pages/news.vue";
import detail from "@/pages/detail.vue";

const router = new VueRouter({
  mode:"history",
  routes: [{
    path: "/Home",
    component: Home,
    meta: { title: "主页" },
    //     beforeEnter: (to, from,next)=> {
    //   if (to.meta.isAuth === true) {
    //     if (localStorage.getItem('school') === 'qinchuan') { next() }
    //     else {
    //       alert('该学校无权限')
    //     }
    //   }
    //   else {
    //     next()
    //   }
    // },
    children: [
      {
        path: "message",
        component: message,
        meta: { isAuth: true, title: "消息" },
        children: [
          {
            name: "detail",
            path: "detail/:id/:title",
            meta: { isAuth: true, title: "信息" },
            component: detail,
            props($router) {
              return {
                id: $router.query.id,
                title: $router.query.title
              }
            },
          },
        ]
      },
      {
        path: "news",
        component: news,
        meta: { isAuth: true, title: "新闻" }
      }
    ]
  },
  {
    path: "/About",
    component: About,
    meta: { title: "关于" },
  },
  ]
})
// 前置路由守卫，切换路由时触发。
router.beforeEach((to, from, next) => {

  if (to.meta.isAuth === true) {
    if (localStorage.getItem('school') === 'qinchuan') { next() }
    else {
      alert('该学校无权限')
    }
  }
  else {
    next()
  }
})
// 后置路由守卫，切换路由时触发
router.afterEach((to) => {
  document.title = to.meta.title
})
export default router;