import Vue from "vue"
import Vuex from "vuex"
import firebase from "@/firebase"
import "firebase/auth"
import "firebase/firestore"
import router from "../router"
const auth = firebase.auth()
const db = firebase.firestore()
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    location: []
  },
  actions: {
    async getLocation({ state }) {
      await db.collection("location").onSnapshot(snapchat => {
        state.location = []
        snapchat.docs.forEach(doc => {
          state.location.push({
            ...doc.data(),
            id: doc.id
          })
        })
      })
    },
    user({ state }) {
      return new Promise(res => {
        auth.onAuthStateChanged(user => {
          state.user = user || null
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
