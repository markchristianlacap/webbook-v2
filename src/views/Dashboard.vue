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
      <v-card v-else class="pa-2">
        <v-row>
          <v-col md="3" lg="3" sm="6" xs="12">
            <v-card shaped>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-subtitle class="headline">Farmers</v-card-subtitle>
                  <v-card-title class="display-2 primary--text" v-text="getCount('farmers')"></v-card-title>
                </div>

                <v-avatar class="ma-1" size="100" tile>
                  <v-img src="@/assets/img/farmer.svg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col md="4" lg="3" sm="6" xs="12">
            <v-card shaped>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-subtitle class="headline">Locations</v-card-subtitle>
                  <v-card-title class="display-2 primary--text" v-text="getCount('location')"></v-card-title>
                </div>

                <v-avatar class="ma-1" size="100" tile>
                  <v-img src="@/assets/img/location.svg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col md="3" lg="3" sm="6" xs="12">
            <v-card shaped>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-subtitle class="headline">Variety</v-card-subtitle>
                  <v-card-title class="display-2 primary--text" v-text="2"></v-card-title>
                </div>

                <v-avatar class="ma-1" size="100" tile>
                  <v-img src="@/assets/img/palay.png"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col md="3" lg="3" sm="6" xs="12">
            <v-card shaped>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-subtitle class="headline">Tips</v-card-subtitle>
                  <v-card-title class="display-2 primary--text" v-text="getCount('tips')"></v-card-title>
                </div>

                <v-avatar class="ma-1" size="100" tile>
                  <v-img src="@/assets/img/tips.png"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="6" md="6" sm="12">
            <v-card dark color="primary">
              <div id="chart">
                <apexchart type="bar" :options="chartOptions" :series="series" />
              </div>
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
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
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
          show: false
        },
        y: {
          title: {
            formatter: function() {
              return ""
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
      this.locationNames.forEach(location => {
        let total = 0
        let count = 0
        this.$store.state.farmers.forEach(f => {
          if (f.Location == location) {
            total++
          }
        })
        count++
        this.series[0].data[count] = total
      })
      console.log(this.series)
    }
  }
}
</script>
