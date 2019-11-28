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
                  <v-row class="mx-auto">
                    <v-col class="mx-auto my-auto">
                      <v-avatar tile height="100" width="80">
                        <v-img :src="item.img"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col class="mx-auto my-auto">
                      <v-row>
                        <p :class="`headline font-weight-bold ${item.color}--text`">{{ item.label }}</p>
                      </v-row>
                      <v-row>
                        <p :class="`display-1 ${item.color}--text`" v-text="item.table ? getCount(item.table) : item.value"></p>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
              <span> <v-icon :color="item.color" small>fa-leaf</v-icon> View {{ item.label }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="6">
            <apexchart type="bar" :options="chartOptions" :series="series" />
          </v-col>
          <v-col lg="6">
            <apexchart type="line" height="350" :options="chartOptions2" :series="graph" />
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
    years: [2014, 2015, 2016, 2017, 2018, 2019],
    cards: [
      { label: "Farmers", value: 0, img: require("@/assets/img/farmer.svg"), color: "primary", route: "Production" },
      { label: "Places", table: "location", img: require("@/assets/img/location.svg"), color: "primary", route: "Geolocation" },
      { label: "Tips", table: "tips", img: require("@/assets/img/palay.png"), color: "primary", route: "Tips" },
      { label: "Areas", value: 0, img: require("@/assets/img/soil.svg"), color: "primary", route: "Analytics" }
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
          colors: ["black"]
        },
        formatter: function(val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + " :  " + val
        },
        offsetX: 0,
        dropShadow: {
          enabled: false
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
    graph() {
      const data = this.farmers
      data.push(...this.$store.state.corn)
      data.push(...this.$store.state.rice)
      const crops = ["Rice", "Corn"]
      let count = 0
      let result = []
      crops.forEach(crop => {
        let record = { name: crop }
        let arr = []
        this.years.forEach(year => {
          let res = data.filter(d => d.Crop == crop && d.Year == year).map(d => d.Total)
          let num = res.length
            ? Math.round(
                res.reduce((a, b) => parseFloat(a) + parseFloat(b)),
                2
              )
            : 0
          arr.push(parseFloat(Math.round(num * 100) / 100).toFixed(2))
        })
        record.data = arr
        result[count] = record
        count++
      })
      return result
    },
    chartOptions2() {
      return {
        dataLabels: {
          enabled: true
        },
        stroke: {
          width: [5, 7, 5],
          curve: "straight"
        },
        title: {
          text: "Crop production Statistic",
          align: "left"
        },
        markers: {
          size: 0,

          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: this.years
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function(val) {
                  return val + " total production"
                }
              }
            },
            {
              title: {
                formatter: function(val) {
                  return val + " total production"
                }
              }
            }
          ]
        },
        grid: {
          borderColor: "#f1f1f1"
        }
      }
    },
    locationNames() {
      return this.$store.getters.locations
    },
    farmers() {
      return this.$store.state.farmers.filter((thing, index, self) => index === self.findIndex(t => t.Name === thing.Name && t.Location === thing.Location && t.Crop === thing.Crop))
    }
  },
  async created() {
    if (!this.$store.state.location.length) await this.$store.dispatch("get", "location")
    if (!this.$store.state.tips.length) await this.$store.dispatch("get", "tips")
    if (!this.$store.state.farmers.length) await this.$store.dispatch("get", "farmers")
    this.init()
    this.loading = false
  },
  methods: {
    init() {
      function compare(a, b) {
        const yearA = a.Year
        const yearB = b.Year
        return yearA > yearB ? -1 : 1
      }
      this.$store.state.farmers.sort(compare)
      this.chartOptions.xaxis.categories = this.locationNames
      this.cards[0].value = this.farmers.length
      let total = 0
      this.farmers.forEach(f => (total += f.Hectares))
      total = parseInt(total)
        .toString()
        .split(".")
      total[0] = total[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      this.cards[3].value = total.join(".")
      let count = 0
      this.locationNames.forEach(location => {
        let total = this.farmers.filter(farmer => farmer.Location == location).length
        this.series[0].data[count] = total
        count++
      })
    },
    getCount(payload) {
      return this.$store.state[payload].length
    }
  }
}
</script>
