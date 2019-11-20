<template>
  <v-layout class="pa-1">
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
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-subtitle :class="`headline font-weight-bold ${item.color}--text`">{{ item.label }}</v-card-subtitle>
                      <v-card-title :class="`display-2 ${item.color}--text`" v-text="getCount(item.table)"></v-card-title>
                    </div>

                    <v-avatar class="ma-1" size="100" tile>
                      <v-img :src="item.img"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </template>
              <span> <v-icon :color="item.color" small>fa-leaf</v-icon> View {{ item.label }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="6" md="6" sm="12">
            <v-card hover color="primary lighten-1" elevation="3" class="pa-1">
              <apexchart type="bar" :options="chartOptions" :series="series" />
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import sidebar from "@/components/Sidebar"
export default {
  components: {
    sidebar
  },
  data: () => ({
    loading: true,
    cards: [
      { label: "Farmers", table: "farmers", img: require("@/assets/img/farmer.svg"), color: "primary", route: "Production" },
      { label: "Locations", table: "location", img: require("@/assets/img/location.svg"), color: "blue", route: "Geolocation" },
      { label: "Tips", table: "tips", img: require("@/assets/img/palay.png"), color: "orange", route: "Tips" }
    ],
    series: [
      {
        data: []
      }
    ],
    chartOptions: {
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom"
          }
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        formatter: function(val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + " :  " + val
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },

      stroke: {
        width: 0.5,
        colors: ["#fff"]
      },
      xaxis: {
        categories: []
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
        text: "OVERALL FARMERS",
        align: "center",
        floating: true
      },
      subtitle: {
        text: "Category are divided in every barangay",
        align: "center"
      },
      tooltip: {
        theme: "dark",
        x: {
          show: true
        },
        y: {
          title: {
            formatter: function() {
              return "Count: "
            }
          }
        }
      }
    }
  }),
  computed: {
    getCost() {
      let total = 0
      this.$store.state.farmers.forEach(f => (total += f.Cost))
      return total
    },
    locationNames() {
      let names = []
      this.$store.state.location.forEach(l => names.push(l.name))
      return names
    },
    getIncome() {
      let total = 0
      this.$store.state.farmers.forEach(f => (total += f.Income))
      return total
    },
    getTotal() {
      return this.getIncome - this.getCost
    }
  },
  async created() {
    await this.$store.dispatch("get", "farmers")
    await this.$store.dispatch("get", "location")
    await this.$store.dispatch("get", "tips")
    this.chartOptions.xaxis.categories = this.locationNames
    this.getLocationCount()
    this.loading = false
  },
  methods: {
    getCount(payload) {
      return this.$store.state[payload].length
    },
    getLocationCount() {
      let count = 0
      this.locationNames.forEach(location => {
        let total = 0
        this.$store.state.farmers.forEach(f => {
          if (f.Location == location) {
            total++
          }
        })
        this.series[0].data[count] = total
        count++
      })
    }
  }
}
</script>
