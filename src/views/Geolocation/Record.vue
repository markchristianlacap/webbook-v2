<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-card class="pa-2">
        <v-layout>
          <h1 class="title grey--text">Records of {{ brgy }}</h1>
          <v-spacer></v-spacer>
          <v-btn color="primary" small @click="download(farmers)"><v-icon class="fa-fw" small>fa-file-download</v-icon>Download record</v-btn>
        </v-layout>
        <span class="body-2"><strong>Total Hectares</strong>: {{ totalHectares | accounting }} ha</span><br />
        <span class="body-2"><strong>Total Corn Production</strong>: {{ totalCorn | accounting }} bags</span><br />
        <span class="body-2"><strong>Total Rice Production</strong>: {{ totalRice | accounting }} bags</span><br />
        <span class="body-2"><strong>Overall Production</strong>: {{ getTotal | accounting }} bags</span><br />

        <v-simple-table v-if="farmers.length">
          <template v-slot:default>
            <thead>
              <tr>
                <th v-for="name in headers" :key="name" class="text-left">{{ name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(person, i) in farmers" :key="i">
                <td v-for="head in headers" :key="head">{{ person[head] }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sidebar from "@/components/Sidebar"
import XLSX from "xlsx"
export default {
  components: { sidebar },
  props: {
    brgy: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    headers: ["Name", "Crop", "Hectares", "Season", "Variety", "Chemicals", "Fertilizers", "Year", "Total"]
  }),
  computed: {
    farmers() {
      return this.$store.state.farmers.filter(farmer => farmer.Location == this.brgy)
    },
    totalRice() {
      return this.farmers.length
        ? this.farmers
            .filter(farmer => farmer.Crop == "Rice")
            .map(farmer => farmer.Total)
            .reduce((a, b) => a + b)
        : 0
    },
    totalCorn() {
      return this.farmers.length
        ? this.farmers
            .filter(farmer => farmer.Crop == "Corn")
            .map(farmer => farmer.Total)
            .reduce((a, b) => a + b)
        : 0
    },
    totalHectares() {
      return this.farmers.length ? this.farmers.map(farmer => farmer.Hectares).reduce((a, b) => a + b) : 0
    },
    getTotal() {
      return parseFloat(this.totalRice) + parseFloat(this.totalCorn)
    }
  },
  async created() {
    if (!this.$store.state.farmers.length) await this.$store.dispatch("get", "farmers")
  },
  methods: {
    download(data) {
      data = data.filter(value => {
        delete value.id
        delete value.AuthID
        return value
      })
      let record = []
      data.forEach(d => {
        const obj = {}
        this.headers.forEach(h => {
          obj[h] = d[h]
        })
        record.push(obj)
      })
      const wb = XLSX.utils.book_new()
      let o = `${this.brgy}.xlsx`
      const Heading = [
        [this.brgy],
        ["Total Hectares:", this.$options.filters.accounting(this.totalHectares)],
        ["Total Corn Production:", this.$options.filters.accounting(this.totalCorn)],
        ["Total Rice Production:", this.$options.filters.accounting(this.totalRice)],
        ["Overall Production:", this.$options.filters.accounting(this.getTotal)]
      ]
      console.log(record)
      var ws = XLSX.utils.aoa_to_sheet(Heading)
      XLSX.utils.sheet_add_json(ws, record, {
        origin: 5
      })
      XLSX.utils.book_append_sheet(wb, ws, "Production")
      XLSX.writeFile(wb, o)
    },
    editItem(item) {
      this.editedIndex = this.farmers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.Chemicals = this.editedItem.Chemicals.split(",")
      this.editedItem.Fertilizers = this.editedItem.Fertilizers.split(",")
      this.dialog = true
    }
  }
}
</script>

<style></style>
