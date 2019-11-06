import Vue from "vue"
import Vuex from "vuex"
import firebase from "@/firebase"
import "firebase/auth"
import router from "../router"
const auth = firebase.auth()
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  actions: {
    user({ state }) {
      return new Promise(res => {
        auth.onAuthStateChanged(user => {
          state.user = user || null
          console.log(user)
          res(user)
        })
      })
    },
    async logout() {
      await auth.signOut()
      router.push("/")
    }
  }
})
