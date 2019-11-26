<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-card class="pa-2">
        <div>
          <h1 class="title grey--text">Records of {{ brgy }}</h1>
          <span class="body-2"><strong>Total Hectares</strong>: {{ totalHectares | accounting }}</span
          ><br />
          <span class="body-2"><strong>Total Corn Production</strong>: {{ totalCorn | accounting }}</span
          ><br />
          <span class="body-2"><strong>Total Rice Production</strong>: {{ totalRice | accounting }}</span
          ><br />
          <span class="body-2"><strong>Total Harvested</strong>: {{ getTotal | accounting }}</span
          ><br />
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
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sidebar from "@/components/Sidebar"
export default {
  components: { sidebar },
  props: {
    brgy: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    headers: ["Name", "Crop", "Hectares", "Season", "Variety", "Year", "Total"]
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
  methods: {}
}
</script>

<style></style>
