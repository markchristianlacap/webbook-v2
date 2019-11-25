<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-card class="pa-2">
        <div>
          <h1 class="title grey--text">Records of {{ brgy }}</h1>
          <p class="caption"><strong>Total Hectares</strong>: {{ totalHectares }}</p>
          <p class="caption"><strong>Total Harvested</strong>: {{ getTotal }}</p>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th v-for="name in headers" :key="name" class="text-left">{{ name }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="person in farmers" :key="person.Name">
                  <td v-for="head in headers" :key="head">{{ head === "Cost" || head === "Income" ? $options.filters.currency(person[head]) : person[head] }}</td>
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
    headers: ["Name", "Crop", "Hectares", "Season", "Variety", "Total"]
  }),
  computed: {
    farmers() {
      return this.$store.state.farmers.filter(farmer => farmer.Location == this.brgy)
    },
    totalHectares() {
      let total = 0
      this.farmers.forEach(farm => {
        total += farm.Hectares
      })
      return total
    },
    getTotal() {
      return this.farmers.reduce((a, b) => a + b)
    }
  },
  async created() {
    if (!this.$store.state.farmers.length) await this.$store.dispatch("get", "farmers")
  },
  methods: {}
}
</script>

<style></style>
