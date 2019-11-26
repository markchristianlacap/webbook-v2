import Vue from "vue"
import Vuex from "vuex"
import firebase from "@/firebase"
import "firebase/auth"
import "firebase/firestore"
import router from "../router"
// import farmers from "@/assets/JSON/farmers.json"
import corn from "@/assets/JSON/corn.json"
import rice from "@/assets/JSON/rice.json"
import moment from "moment"
const auth = firebase.auth()
const db = firebase.firestore()
Vue.use(Vuex)

function compare(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return order === "desc" ? comparison * -1 : comparison
  }
}
export default new Vuex.Store({
  state: {
    user: null,
    location: [],
    crops: ["Rice", "Corn"],
    schedules: [],
    farmers: [],
    corn,
    rice,
    tips: [],
    "public-tips": []
  },
  getters: {
    schedules(state) {
      if (!state.schedules.length) return []
      let data = []
      const format = "YYYY-MM-DD"
      const addDate = (d, n, i) => {
        return moment(d)
          .add(n, i)
          .format(format)
      }
      let schedules = {
        Rice: [
          {
            details: "Prepare soil for transplanting",
            start: 1,
            end: 5
          },
          {
            details: "Time to transplant the seeds",
            start: 18,
            end: 21
          },
          {
            details: "Time to fertilize your rice",
            start: 22,
            end: 23
          },
          {
            details: "Apply Mid-tillering fertilizer",
            start: 38,
            end: 41
          },
          {
            details: "Apply Early Panicle Initiation fertilizer",
            start: 53,
            end: 56
          },
          {
            details: "Check for weeds in your rice field",
            start: 58,
            end: 59
          },
          {
            details: "Apply Flowering fertilizer",
            start: 80,
            end: 83
          },
          {
            details: "Check if the rice is ready to harvest. The crop should be cut when 80−85% of the grains are straw.",
            start: 120,
            end: 135
          }
        ],
        Corn: [
          {
            details: "Spray glyphosate herbicide and make sure that the soil is moist before planting",
            start: 1,
            end: 3
          },
          {
            details: "Apply fertilizer during this perion check the Guide page for more info. ",
            start: 6,
            end: 11
          },
          {
            details: "Irrigate the corn",
            start: 13,
            end: 15
          },
          {
            details: "Irrigate the corn",
            start: 45,
            end: 55
          },
          {
            details: "Irrigate the corn",
            start: 65,
            end: 80
          },
          {
            details: "Shallow cultivation, off-baring, spot weeding.",
            start: 12,
            end: 20
          },
          {
            details: "Shallow cultivation, off-baring, spot weeding.",
            start: 35,
            end: 37
          },
          {
            details: "Check if the corn is ready to harvest. The leaves should be dry.",
            start: 120,
            end: 135
          }
        ]
      }
      state.schedules.forEach(schedule => {
        data.push(schedule)
        const sched = schedules[schedule.name].map(sched => {
          const obj = {}
          obj.start = addDate(schedule.end, sched.start, "d")
          obj.end = addDate(schedule.end, sched.end, "d")
          obj.color = schedule.color
          obj.name = schedule.name
          obj.details = sched.details
          obj.id = schedule.id
          return obj
        })
        sched.forEach(d => data.push(d))
      })
      return data
    }
  },
  actions: {
    async get({ state }, payload) {
      return new Promise(res => {
        db.collection(payload)
          .where("AuthID", "==", state.user.uid)
          .onSnapshot(snapchat => {
            state[payload] = []
            snapchat.docs.forEach(doc => {
              state[payload].push({
                ...doc.data(),
                id: doc.id
              })
            })
            state[payload].sort(compare("name"))
            res(snapchat)
          })
      })
    },
    async getPublic({ state }, payload) {
      return new Promise(res => {
        db.collection(payload).onSnapshot(snapchat => {
          state[`public-${payload}`] = []
          snapchat.docs.forEach(doc => {
            state[`public-${payload}`].push({
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
