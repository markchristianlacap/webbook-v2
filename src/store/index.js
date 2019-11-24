import Vue from "vue"
import Vuex from "vuex"
import firebase from "@/firebase"
import "firebase/auth"
import "firebase/firestore"
import router from "../router"
import moment from "moment"
const auth = firebase.auth()
const db = firebase.firestore()
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    location: [],
    schedules: [],
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
    },
    getRiceCalendar(sched) {
      const format = "YYYY-MM-DD"
      const addDate = (d, n, i) => {
        return moment()
          .add(n, i)
          .format(format)
      }
      let schedules = [
        {
          details: "Prepare soil for transplanting",
          start: addDate(sched.end, 1, "d"),
          end: addDate(sched.end, 5, "d")
        },
        {
          details: "Time to transplant the seeds",
          start: addDate(sched.end, 18, "d"),
          end: addDate(sched.end, 21, "d")
        },
        {
          details: "Time to fertilize your rice",
          start: addDate(sched.end, 22, "d"),
          end: addDate(sched.end, 23, "d")
        },
        {
          details: "Apply Mid-tillering fertilizer",
          start: addDate(sched.end, 38, "d"),
          end: addDate(sched.end, 41, "d")
        },
        {
          details: "Apply Early Panicle Initiation fertilizer",
          start: addDate(sched.end, 53, "d"),
          end: addDate(sched.end, 56, "d")
        },
        {
          details: "Check for weeds in your rice field",
          start: addDate(sched.end, 58, "d"),
          end: addDate(sched.end, 59, "d")
        },
        {
          details: "Apply Flowering fertilizer",
          start: addDate(sched.end, 80, "d"),
          end: addDate(sched.end, 83, "d")
        },
        {
          details: "Check if the rice is ready to harvest. The crop should be cut when 80−85% of the grains are straw.",
          start: addDate(sched.end, 120, "d"),
          end: addDate(sched.end, 135, "d")
        }
      ]
      console.log(schedules)
    }
  }
})
