<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-card class="pa-2">
        <div>
          <h1 class="title grey--text">Records of {{ brgy }}</h1>
          <p class="caption"><strong>Total Hectares</strong>: {{ totalHectares }}</p>
          <p class="caption"><strong>Total Cost</strong>: {{ totalCost | currency }}</p>
          <p class="caption"><strong>Total Income</strong>: {{ totalIncome | currency }}</p>
          <p class="caption"><strong>Overall Income</strong>: {{ getTotal | currency }}</p>
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
import firebase from "@/firebase"
import "firebase/firestore"
const db = firebase.firestore()
export default {
  components: { sidebar },
  props: {
    brgy: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    farmers: [],
    headers: ["Name", "Crop", "Gender", "Hectares", "Season", "Variety", "Cost", "Income"]
  }),
  computed: {
    totalHectares() {
      let total = 0
      this.farmers.forEach(farm => {
        total += farm.Hectares
      })
      return total
    },
    totalCost() {
      let total = 0
      this.farmers.forEach(farm => {
        total += farm.Cost
      })
      return total
    },
    totalIncome() {
      let total = 0
      this.farmers.forEach(farm => {
        total += farm.Income
      })
      return total
    },
    getTotal() {
      return this.totalIncome - this.totalCost
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    async initialize() {
      await db
        .collection("farmers")
        .where("Location", "==", this.brgy)
        .onSnapshot(snapchat => {
          this.farmers = []
          snapchat.docs.forEach(doc => {
            this.farmers.push({
              ...doc.data(),
              id: doc.id
            })
          })
        })
    }
  }
}
</script>

<style></style>
