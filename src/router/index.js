import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";

export default new VueRouter({
  routes: [{
    path: "/Home",
    component: Home
  },
  {
    path: "/About",
    component: About
  },
  ]
})