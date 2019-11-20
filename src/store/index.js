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
    location: [],
    farmers: [],
    tips: []
  },
  actions: {
    async get({ state }, payload) {
      return new Promise(res => {
        db.collection(payload).onSnapshot(snapchat => {
          state[payload] = []
          snapchat.docs.forEach(doc => {
            state[payload].push({
              ...doc.data(),
              id: doc.id
            })
          })
          res(snapchat)
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
