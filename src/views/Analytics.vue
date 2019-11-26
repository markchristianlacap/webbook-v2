<template>
  <v-layout class="pa-1">
    <v-flex xs12 md2>
      <sidebar />
    </v-flex>
    <v-flex xs12>
      <v-card>
        <apexchart type="bar" :options="chartOptions2" :series="series2" />
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
  }
}
</script>
