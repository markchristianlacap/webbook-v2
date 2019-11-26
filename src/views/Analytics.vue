<template>
  <v-layout class="pa-1">
    <v-flex xs12 md2>
      <sidebar />
    </v-flex>
    <v-flex xs12>
      <v-card class="pa-2">
        <p class="display-1 font-weight-black grey--text text-center">Crop monitoring analytics</p>
        <v-card>
          <apexchart type="bar" height="400" :options="chartOptions" :series="series" />
        </v-card>
        <v-card>
          <v-layout>
            <v-flex lg6>
              <apexchart type="pie" :options="pieOptions" :series="pie" />
            </v-flex>
            <v-flex lg6>
              <apexchart type="bar" :options="chartOptions2" :series="series2" />
            </v-flex>
          </v-layout>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sidebar from "@/components/Sidebar"
export default {
  components: { sidebar },
  data: () => ({
    chartOptions2: {
      title: {
        text: "Previous Graph",
        align: "center",
        floating: true
      },
      subtitle: {
        text: "Area(ha) per Barangay.",
        align: "center"
      },
      chart: {
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },

      plotOptions: {
        bar: {
          horizontal: false
        }
      },

      xaxis: {
        type: "year",
        categories: [2014, 2015, 2016, 2017, 2018]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    }
  }),
  computed: {
    locationNames() {
      if (!this.$store.state.location.length) return []
      return this.$store.state.location.map(loc => loc.name)
    },
    pie() {
      let data = []
      this.locationNames.forEach(loc => {
        let num = this.$store.state.farmers
          .filter(farmer => farmer.Location === loc)
          .map(farmer => farmer.Hectares)
          .reduce((a, b) => a + b)
        data.push(num)
      })
      return data
    },
    pieOptions() {
      return {
        labels: this.locationNames,
        title: {
          text: "Current numbers of hectares per barangay",
          align: "left"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    },
    series() {
      let result = []
      this.$store.state.crops.forEach(crop => {
        let d = {}
        d.name = crop
        const arr = []
        this.locationNames.forEach(loc => {
          const num = this.$store.state.farmers
            .filter(farmer => farmer.Crop === crop && farmer.Location === loc)
            .map(farmer => farmer.Total)
            .reduce((a, b) => a + b)
          arr.push(num)
        })
        d.data = arr
        result.push(d)
      })
      return result
    },
    chartOptions() {
      return {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: true
        },
        title: {
          text: "Statistic of harvested crops",
          align: "center"
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: this.locationNames
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
          y: {
            formatter: function(val) {
              return val + " bags"
            }
          }
        }
      }
    },
    series2() {
      let series = []
      const brgy = this.$store.state.corn.map(item => item.Brgy).filter((value, index, self) => self.indexOf(value) === index)
      const years = [2014, 2015, 2016, 2017, 2018]
      brgy.forEach(name => {
        let record = { name }
        let arrData = []
        years.forEach(year => {
          const corn = this.$store.state.corn.filter(d => {
            return d.Year == year && d.Brgy == name
          })
          const res = corn.map(r => r.Hectares).reduce((a, b) => a + b)
          arrData.push(res)
          record.data = arrData
        })
        series.push(record)
      })
      return series.sort()
    }
  },
  async created() {
    if (!this.$store.state.location.length) await this.$store.dispatch("get", "location")
    if (!this.$store.state.farmers.length) await this.$store.dispatch("get", "farmers")
  }
}
</script>
