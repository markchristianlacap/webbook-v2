<template>
  <v-layout class="pa-1">
    <!-- <v-btn @click="s">save</v-btn> -->
    <v-flex xs12 md2>
      <sidebar />
    </v-flex>
    <v-flex xs12>
      <v-sheet v-if="loading" class="pa-5">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-sheet>
      <v-card v-else elevation="3" class="pl-3 pr-3">
        <v-row>
          <v-col v-for="item in cards" :key="item.label" md="3" lg="3" sm="6" xs="12">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-card hover outlined elevation="3" shaped :to="item.route" v-on="on">
                  <v-row class="mx-auto">
                    <v-col class="mx-auto my-auto">
                      <v-avatar tile height="100" width="80">
                        <v-img :src="item.img"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col class="mx-auto my-auto">
                      <v-row>
                        <p :class="`headline font-weight-bold primary--text`">{{ item.label }}</p>
                      </v-row>
                      <v-row>
                        <p :class="`display-1 primary--text`" v-text="item.value"></p>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
              <span class="primary--text"><v-icon color="primary" small>fa-leaf</v-icon> View {{ item.label }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="6" md="6">
            <v-card elevation="4" class="pa-2">
              <apexchart type="line" :options="statOptions" :series="stat" />
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="5" class="mx-auto">
              <v-toolbar dense flat>
                <v-toolbar-title><v-btn text color="primary" to="/Events">Upcoming Schedules</v-btn></v-toolbar-title>
              </v-toolbar>
              <v-list three-line class="scroll" height="48.5vh">
                <template v-for="(item, i) in schedules">
                  <v-list-item :key="i">
                    <v-list-item-avatar>
                      <v-img :src="require(`@/assets/img/${item.name == 'Rice' ? 'palay.png' : 'corn.svg'}`)"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.name"></v-list-item-title>
                      <v-list-item-subtitle v-text="item.details"></v-list-item-subtitle>
                      <span class="caption font-weight-black primary--text">{{ item.start }} to {{ item.end }}</span>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import sidebar from "@/components/Sidebar"
import moment from "moment"
const now = moment()
const format = val => {
  let total = parseInt(val)
    .toString()
    .split(".")
  total[0] = total[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  total = total.join(".")
  return total
}
function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const startA = moment(a.start)
  const startB = moment(b.start)

  let comparison = 0
  if (startA > startB) {
    comparison = 1
  } else if (startA < startB) {
    comparison = -1
  }
  return comparison
}
export default {
  components: {
    sidebar
  },
  data: () => ({
    loading: true
  }),
  computed: {
    schedules() {
      const schedules = this.$store.getters.schedules.filter(sched => moment(sched.end) > now || moment(sched.end) == now).sort(compare)
      return schedules
    },
    cards() {
      return [
        {
          label: "Farmers",
          value: format(this.farmers.filter((f, i, a) => i === a.findIndex(t => t.Name === f.Name && t.Location === f.Location && t.Crop === f.Crop)).length),
          img: require("@/assets/img/farmer.svg"),
          route: "Production"
        },
        { label: "Places", value: format(this.$store.state.location.length), img: require("@/assets/img/location.svg"), route: "Geolocation" },
        { label: "Tips", value: format(this.$store.state.tips.length), img: require("@/assets/img/palay.png"), route: "Tips" },
        {
          label: "Areas",
          value: format(
            this.farmers
              .filter((f, i, a) => i === a.findIndex(t => t.Name === f.Name && t.Location === f.Location && t.Crop === f.Crop))
              .map(f => f.Hectares)
              .reduce((a, b) => a + b)
          ),
          img: require("@/assets/img/soil.svg"),
          route: "Analytics"
        }
      ]
    },
    years() {
      return this.$store.getters.years
    },
    stat() {
      let count = 0
      let result = []
      this.$store.state.crops.forEach(crop => {
        let record = { name: crop }
        let arr = []
        this.years.forEach(year => {
          let res = this.farmers.filter(d => d.Crop == crop && d.Year == year).map(d => d.Total)
          let num = res.length ? res.reduce((a, b) => a + b) : 0
          arr.push(parseFloat(Math.round(num * 100) / 100).toFixed(2))
        })
        record.data = arr
        result[count] = record
        count++
      })
      return result
    },
    statOptions() {
      return {
        title: {
          text: "Crop production Statistics",
          align: "left"
        },
        xaxis: {
          categories: this.years
        },
        tooltip: {
          theme: "dark",
          y: {
            formatter: function(val) {
              return format(val) + " bags"
            }
          }
        }
      }
    },
    locations() {
      return this.$store.getters.locations
    },
    farmers() {
      return this.$store.state.farmers
    }
  },
  async created() {
    if (!this.$store.state.location.length) await this.$store.dispatch("get", "location")
    if (!this.$store.state.tips.length) await this.$store.dispatch("get", "tips")
    if (!this.$store.state.farmers.length) await this.$store.dispatch("get", "farmers")
    if (!this.$store.state.schedules.length) await this.$store.dispatch("get", "schedules")
    this.loading = false
  },
  methods: {
    // s() {
    //   try {
    //     this.$store.state.farmers.forEach(async farmer => {
    //       await db.collection("farmers").add(farmer)
    //       console.log("a")
    //     })
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  }
}
</script>
