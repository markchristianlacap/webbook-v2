<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-card class="pa-2">
        <v-toolbar flat class="pt-2">
          <h1 class="title grey--text">Production's Record</h1>
          <v-spacer></v-spacer>
          <v-flex xs4 sm4 md 4>
            <v-text-field v-model="search" dense label="Search"></v-text-field>
          </v-flex>
          <v-btn class="mr-3 ml-3" color="primary" small dark depressed @click="new_farmer">
            <v-icon class="fa-fw" small>fa-plus</v-icon>
            <span class="text-none">New Record</span>
          </v-btn>
        </v-toolbar>
        <v-dialog v-model="dialog" width="800">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Name" label="Farmer's Name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select v-model="editedItem.Gender" :items="gender" label="Gender"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
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
                    <v-text-field v-model="editedItem.Type_of_soil" label="Type of Soil"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Fertilizer_Req" label="Fertilizer Requested"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Cost" label="Cost" prefix="Php"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Income" label="Income" prefix="Php"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="warning" @click="close">
                <span>Cancel</span>
              </v-btn>
              <v-btn :loading="loading" class="primary" @click="save(editedItem)">
                <span>Save</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-data-table :headers="headers" :items="farmers" class="elevation-1" :search="search">
          <template v-slot:item.action="{ item }">
            <v-icon dense color="warning" class="mr-2" @click="editItem(item)">
              fa-edit
            </v-icon>
            <v-icon dense color="red" @click="deleteItem(item)">
              fa-trash
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="$store.dispatch('get', 'farmers')">Refresh</v-btn>
          </template>
        </v-data-table>
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
    gender: ["Male", "Female"],
    seasons: ["Main Crop", "Second Crop"],
    crops: ["Rice", "Corn"],
    search: "",
    dialog: false,
    headers: [
      { text: "Name", value: "Name" },
      { text: "Gender", value: "Gender" },
      { text: "Location", value: "Location" },
      { text: "Hectares", value: "Hectares" },
      { text: "Crop", value: "Crop" },
      { text: "Season", value: "Season" },
      { text: "Actions", value: "action", align: "center", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {}
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Farmer Record" : "Edit Farmer Record"
    },
    farmers() {
      return this.$store.state.farmers
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
  created() {
    this.$store.dispatch("get", "farmers")
    this.$store.dispatch("get", "location")
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
      editedItem.Hectares = parseFloat(editedItem.Hectares)
      editedItem.Cost = parseFloat(editedItem.Cost)
      editedItem.Income = parseFloat(editedItem.Income)
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
