import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import VueApexCharts from "vue-apexcharts"

Vue.component("apexchart", VueApexCharts)

Vue.config.productionTip = false
Vue.filter("currency", function(value) {
  var DecimalSeparator = Number("1.2")
    .toLocaleString()
    .substr(1, 1)

  var AmountWithCommas = value.toLocaleString()
  var arParts = String(AmountWithCommas).split(DecimalSeparator)
  var intPart = arParts[0]
  var decPart = arParts.length > 1 ? arParts[1] : ""
  decPart = (decPart + "00").substr(0, 2)

  return "Php " + intPart + DecimalSeparator + decPart
})

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app")
