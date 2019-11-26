<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-card class="pa-2">
        <v-toolbar flat class="pt-2">
          <h1 class="heading font-weight-black grey--text">Production's Record</h1>
          <v-spacer></v-spacer>
          <v-flex xs4 sm4 md 4>
            <v-text-field v-model="search" dense label="Search"></v-text-field>
          </v-flex>
          <v-btn class="mr-3 ml-3" color="primary" small text @click="new_farmer">
            <span class="text-none">New Record</span>
          </v-btn>
        </v-toolbar>
        <v-dialog v-model="dialog" width="800">
          <v-card>
            <v-card-title>
              <span class="title font-weight-black">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="editedItem.Name" label="Farmer's Name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select v-model="editedItem.Location" :items="location" label="Location"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Hectares" label="Hectares" suffix="ha"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select v-model="editedItem.Crop" :items="crops" label="Crop"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select v-model="editedItem.Season" :items="seasons" label="Season"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Variety" label="Variety"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Soil" label="Type of Soil"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Fertilizer" label="Fertilizer Requested"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Year" label="Year"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Total" label="Total Harvested" suffix="bags"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="warning" @click="close">
                <span>Cancel</span>
              </v-btn>
              <v-btn text :loading="loading" color="primary" @click="save(editedItem)">
                <span>Save</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-card flat dense class="pa-1">
          <v-data-table light multi-sort :headers="headers" :items="farmers" class="elevation-2" :search="search">
            <template v-slot:item.action="{ item }">
              <v-icon small color="warning" class="mr-2" @click="editItem(item)">
                fa-edit
              </v-icon>
              <v-icon small color="red" @click="deleteItem(item)">
                fa-trash
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="$store.dispatch('get', 'farmers')">Refresh</v-btn>
            </template>
          </v-data-table>
        </v-card>
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
  components: {
    sidebar
  },
  data: () => ({
    loading: false,
    locations: [],
    seasons: ["Main Crop", "Second Crop"],
    crops: ["Rice", "Corn"],
    search: "",
    dialog: false,
    editedIndex: -1,
    editedItem: {},
    headers: [
      { text: "Name", value: "Name" },
      { text: "Crop", value: "Crop" },
      { text: "Location", value: "Location" },
      { text: "Hectares", value: "Hectares" },
      { text: "Season", value: "Season" },
      { text: "Year", value: "Year" },
      { text: "Variety", value: "Variety" },
      { text: "Fertilizer", value: "Fertilizer" },
      { text: "Total", value: "Total" },
      { text: "Actions", value: "action", align: "center", sortable: false }
    ],
    defaultItem: {}
  }),
  computed: {
    farmers() {
      return this.$store.state.farmers
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Farmer Record" : "Edit Farmer Record"
    },
    user() {
      return this.$store.state.user
    },
    location() {
      const location = []
      this.$store.state.location.forEach(l => {
        location.push(l.name)
      })
      return location
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  async created() {
    if (!this.farmers.length) this.$store.dispatch("get", "farmers")
    if (!this.location.length) this.$store.dispatch("get", "location")
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.farmers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    async deleteItem(farmer) {
      var ans = confirm("Are you sure you want to delete this record?")
      if (ans == true) {
        await db
          .collection("farmers")
          .doc(farmer.id)
          .delete()
        this.editedIndex = this.farmers.indexOf(farmer)
      }
      this.close()
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    new_farmer() {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.dialog = true
      this.editedIndex = -1
    },
    async save(editedItem) {
      this.loading = true
      editedItem.AuthID = this.user.uid
      editedItem.Hectares = parseFloat(editedItem.Hectares)
      editedItem.Total = parseFloat(editedItem.Total)
      if (this.editedIndex > -1) {
        await db
          .collection("farmers")
          .doc(editedItem.id)
          .set(editedItem)
      } else {
        await db.collection("farmers").add(editedItem)
      }
      this.loading = false
      this.close()
    }
  }
}
</script>
