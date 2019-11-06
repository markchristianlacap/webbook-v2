import Vue from "vue"
import Vuetify from "vuetify/lib"
import "@fortawesome/fontawesome-free/css/all.css"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#27ae60"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
})
