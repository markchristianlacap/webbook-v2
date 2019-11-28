<template>
  <v-layout class="pa-1">
    <v-flex xs12 md2>
      <sidebar />
    </v-flex>
    <v-flex xs12>
      <v-card class="pa-2">
        <p class="display-1 font-weight-black grey--text text-center">Crop monitoring analytics</p>
        <v-row>
          <v-col>
            <v-select v-model="crop" :items="crops" label="Crops"></v-select>
          </v-col>
          <v-col>
            <v-select v-model="season" :items="seasons" label="Seasons"></v-select>
          </v-col>
          <v-col>
            <v-select v-model="year" :items="years" label="Year"></v-select>
          </v-col>
          <v-col>
            <v-select v-model="location" :items="locations" label="Locations" multiple>
              <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item | truncate(9) }}</span>
                <span v-if="index === 1" class="grey--text caption">(+{{ location.length - 1 }})</span>
              </template>
            </v-select>
          </v-col>
          <v-col>
            <v-select v-model="variety" :items="varieties" label="Variety" multiple>
              <template v-slot:selection="{ item, index }">
                <p class=" text-truncate">
                  <span v-if="index === 0">{{ item | truncate(9) }}</span>
                  <span v-if="index === 1" class="grey--text caption">(+{{ variety.length - 1 }})</span>
                </p>
              </template>
            </v-select>
          </v-col>
          <v-col>
            <v-select v-model="chemical" :items="chemicals" label="Chemicals" multiple>
              <template v-slot:selection="{ item, index }">
                <p class=" text-truncate">
                  <span v-if="index === 0">{{ item | truncate(9) }}</span>
                  <span v-if="index === 1" class="grey--text caption">(+{{ chemical.length - 1 }})</span>
                </p>
              </template>
            </v-select>
          </v-col>
          <v-col>
            <v-select v-model="fertilizer" :items="fertilizers" label="Fertilizers" multiple>
              <template v-slot:selection="{ item, index }">
                <p class=" text-truncate">
                  <span v-if="index === 0">{{ item | truncate(9) }}</span>
                  <span v-if="index === 1" class="grey--text caption">(+{{ fertilizer.length - 1 }})</span>
                </p>
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-card class="pt-3">
          <v-layout>
            <v-flex xs12 sm12 md12 lg6>
              <apexchart type="bar" :options="graphOptions" :series="graph" />
            </v-flex>
            <v-flex xs12 sm12 md12 lg6>
              <apexchart type="pie" :options="pieOptions" :series="pie" />
            </v-flex>
          </v-layout>
          <span class="subheading primary--text ma-1">*Note: Locations that are not included in the list has no existing record in the database.</span>
          <v-row>
            <v-col md="6" lg="6">
              <apexchart type="bar" height="350" :options="chemicalsChartOptions" :series="chemicalsData" />
            </v-col>
            <v-col md="6" lg="6">
              <apexchart type="bar" height="350" :options="fertilizersChartOptions" :series="fertilizersData" />
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sidebar from "@/components/Sidebar"
const format = val => {
  let total = parseInt(val)
    .toString()
    .split(".")
  total[0] = total[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  total = total.join(".")
  return total
}
export default {
  components: { sidebar },
  data: () => ({
    seasons: ["All", "Main Crop", "Second Crop"],
    crop: "All",
    season: "All",
    year: "All",
    location: [],
    variety: [],
    chemical: [],
    fertilizer: []
  }),
  computed: {
    years() {
      const years = ["All"]
      years.push(...this.$store.getters.years)
      return years
    },
    crops() {
      const crops = ["All"]
      crops.push(...this.$store.state.crops)
      return crops
    },
    cropGraph() {
      return this.farmers
        .map(l => l.Crop)
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort()
    },
    varieties() {
      return this.$store.getters.varieties
    },
    chemicals() {
      return this.$store.getters.chemicals
    },
    fertilizers() {
      return this.$store.getters.fertilizers
    },
    farmers() {
      let farmers = this.$store.state.farmers
      if (this.crop !== "All") farmers = farmers.filter(farmer => farmer.Crop == this.crop)
      if (this.season !== "All") farmers = farmers.filter(farmer => farmer.Season == this.season)
      if (this.year !== "All") farmers = farmers.filter(farmer => farmer.Year == this.year)
      if (this.variety.length) {
        let newFamers = []
        this.variety.forEach(variety => {
          let filter = farmers.filter(farmer => farmer.Variety == variety)
          newFamers.push(...filter)
        })
        farmers = newFamers
      }
      if (this.location.length) {
        let newFamers = []
        this.location.forEach(location => {
          let filter = farmers.filter(farmer => farmer.Location == location)
          newFamers.push(...filter)
        })
        farmers = newFamers
      }
      this.chemical.forEach(chemical => {
        farmers = farmers.filter(farmer => farmer.Chemicals.includes(chemical))
      })
      this.fertilizer.forEach(fertilizer => {
        farmers = farmers.filter(farmer => farmer.Fertilizers.includes(fertilizer))
      })
      return farmers
    },
    locations() {
      return this.$store.getters.locations
    },
    pie() {
      let data = []
      this.locations.forEach(loc => {
        let num = this.farmers.filter(farmer => farmer.Location === loc).map(farmer => farmer.Hectares)
        num = num.length ? num.reduce((a, b) => a + b) : 0
        data.push(num)
      })
      return data
    },
    pieOptions() {
      return {
        labels: this.locations,
        title: {
          text: "Current numbers of hectares per location",
          align: "left"
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return format(val) + " hectares"
            }
          }
        }
      }
    },
    fertilizersData() {
      let data = []
      this.fertilizers.forEach(fertilizer => {
        let count = this.farmers.filter(f => f.Fertilizers.includes(fertilizer)).map(f => f.Total)
        count = count.length ? count.reduce((a, b) => a + b) : 0
        data.push(count)
      })
      return [{ data }]
    },
    fertilizersChartOptions() {
      return {
        plotOptions: {
          bar: {
            barHeight: "100%",
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
            colors: ["#eee"]
          },
          formatter: function(val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + " bags"
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: this.fertilizers
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
          text: "Production of crops based on fertilizers used",
          align: "center",
          floating: true
        },
        tooltip: {
          theme: "dark",
          y: {
            title: {
              formatter: () => ""
            },
            formatter: function(val) {
              return format(val) + " bags"
            }
          }
        }
      }
    },
    chemicalsData() {
      let data = []
      this.chemicals.forEach(chemical => {
        let count = this.farmers.filter(f => f.Chemicals.includes(chemical)).map(f => f.Total)
        count = count.length ? count.reduce((a, b) => a + b) : 0
        data.push(count)
      })
      return [{ data }]
    },
    chemicalsChartOptions() {
      return {
        plotOptions: {
          bar: {
            barHeight: "100%",
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
            colors: ["#eee"]
          },
          formatter: function(val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + " bags"
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: this.chemicals
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
          text: "Production of crops based on chemicals used",
          align: "center",
          floating: true
        },
        tooltip: {
          theme: "dark",
          y: {
            title: {
              formatter: () => ""
            },
            formatter: function(val) {
              return format(val) + " bags"
            }
          }
        }
      }
    },
    graph() {
      let result = []
      this.cropGraph.forEach(crop => {
        let d = {}
        d.name = crop
        const arr = []
        const locations = this.location.length ? this.location : this.locations
        locations.forEach(loc => {
          const arrLoc = this.farmers.filter(farmer => farmer.Crop === crop && farmer.Location === loc).map(farmer => farmer.Total)
          const num = arrLoc.length ? arrLoc.reduce((a, b) => a + b) : 0
          arr.push(num)
        })
        d.data = arr
        result.push(d)
      })
      return result
    },
    graphOptions() {
      return {
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return format(val) + " bags"
          }
        },
        title: {
          text: "Statistics of harvested crops per location",
          align: "center"
        },

        xaxis: {
          categories: this.locations
        },
        yaxis: {
          title: {
            text: "(bags of crop)"
          }
        },
        fill: {
          opacity: 1
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
    }
  },
  async created() {
    if (!this.$store.state.location.length) await this.$store.dispatch("get", "location")
    if (!this.$store.state.farmers.length) await this.$store.dispatch("get", "farmers")
  }
}
</script>
