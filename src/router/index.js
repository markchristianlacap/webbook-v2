import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue")
  },
  {
    path: "/Production",
    name: "Production",
    component: () => import("@/views/Production")
  },
  {
    path: "/Geolocation",
    name: "Geolocation",
    component: () => import("@/views/Geolocation/index")
  },
  {
    path: "/Geolocation/:brgy",
    name: "Geolocation Record",
    props: true,
    component: () => import("@/views/Geolocation/Record")
  },
  {
    path: "/Events",
    name: "Events",
    component: () => import("@/views/Events")
  },
  {
    path: "/Password",
    name: "Password",
    component: () => import("@/views/ChangePassword")
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
