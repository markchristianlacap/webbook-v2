import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import store from "@/store"
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
    path: "/Guide",
    name: "Guide",
    component: () => import("@/views/Guide/")
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/Production",
    name: "Production",
    component: () => import("@/views/Production"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/Analytics",
    name: "Analytics",
    component: () => import("@/views/Analytics.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/Guide/Corn",
    name: "Corn",
    component: () => import("@/views/Guide/Corn")
  },
  {
    path: "/Guide/Rice",
    name: "Rice",
    component: () => import("@/views/Guide/Rice")
  },
  {
    path: "/Tips",
    name: "Tips",
    component: () => import("@/views/Tips/index")
  },
  {
    path: "/Tips/:id",
    name: "View",
    component: () => import("@/views/Tips/View")
  },
  {
    path: "/Geolocation",
    name: "Geolocation",
    component: () => import("@/views/Geolocation/index"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/Geolocation/:brgy",
    name: "Geolocation Record",
    props: true,
    component: () => import("@/views/Geolocation/Record"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/Events",
    name: "Events",
    component: () => import("@/views/Events"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/Password",
    name: "Password",
    component: () => import("@/views/ChangePassword"),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})
//Guard authentication
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = store.state.user || (await store.dispatch("user"))
    if (!user) {
      next({
        path: "/",
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
