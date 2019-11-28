<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-card class="pa-2">
        <v-layout>
          <h1 class="heading font-weight-black grey--text">Production's Record</h1>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="reset()">
            <v-icon x-small>fa-close</v-icon>
            <span class="text-none"><v-icon x-small>fa-times</v-icon> Clear filters</span>
          </v-btn>
          <v-btn color="primary" text @click="download(farmers)">
            <span class="text-none"><v-icon x-small>fa-file-download</v-icon> Download current record</span>
          </v-btn>
          <v-btn color="primary" text @click="new_farmer">
            <span class="text-none"><v-icon x-small>fa-plus</v-icon> New Record</span>
          </v-btn>
        </v-layout>
        <v-row>
          <v-col>
            <v-select v-model="crop" :items="crops" label="Crops"></v-select>
          </v-col>
          <v-col>
            <v-select v-model="season" :items="seasons" label="Seasons"></v-select>
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
          <v-col>
            <v-text-field v-model="search" label="Search"></v-text-field>
          </v-col>
        </v-row>
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
                    <v-select v-model="editedItem.Location" :items="locationOptions" label="Location"></v-select>
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
                    <v-select v-model="editedItem.Variety" :items="varieties" label="Variety"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-combobox v-model="editedItem.Chemicals" :items="chemicals" label="Chemicals" multiple>
                      <template v-slot:selection="{ item, index }">
                        <span v-if="index === 0">{{ item | truncate(16) }}</span>
                        <span v-if="index === 1" class="grey--text caption">(+{{ editedItem.Chemicals.length - 1 }})</span>
                      </template>
                    </v-combobox>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-combobox v-model="editedItem.Fertilizers" :items="fertilizers" label="Fertilizers" multiple>
                      <template v-slot:selection="{ item, index }">
                        <span v-if="index === 0">{{ item | truncate(16) }}</span>
                        <span v-if="index === 1" class="grey--text caption">(+{{ editedItem.Fertilizers.length - 1 }})</span>
                      </template>
                    </v-combobox>
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
              <v-icon small color="primary" class="mr-2" @click="editItem(item)">
                fa-edit
              </v-icon>
              <v-icon small color="primary" @click="deleteItem(item)">
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
import XLSX from "xlsx"
import "firebase/firestore"
const db = firebase.firestore()
export default {
  components: {
    sidebar
  },
  data: () => ({
    loading: false,
    seasons: ["All", "Main Crop", "Second Crop"],
    crop: "All",
    season: "All",
    location: [],
    variety: [],
    chemical: [],
    fertilizer: [],
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
      { text: "Chemicals", value: "Chemicals" },
      { text: "Fertilizers", value: "Fertilizers" },
      { text: "Total Harvested(bags)", value: "Total" },
      { text: "Actions", value: "action", align: "center", sortable: false }
    ],
    defaultItem: {}
  }),
  computed: {
    farmers() {
      let farmers = this.$store.state.farmers
      if (this.crop !== "All") farmers = farmers.filter(farmer => farmer.Crop == this.crop)
      if (this.season !== "All") farmers = farmers.filter(farmer => farmer.Season == this.season)
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
    locationOptions() {
      return this.$store.state.location.map(l => l.name)
    },
    crops() {
      const crops = ["All"]
      crops.push(...this.$store.state.crops)
      return crops
    },
    varieties() {
      return this.$store.getters.varieties
    },
    locations() {
      return this.$store.getters.locations
    },
    chemicals() {
      return this.$store.getters.chemicals
    },
    fertilizers() {
      return this.$store.getters.fertilizers
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Farmer Record" : "Edit Farmer Record"
    },
    user() {
      return this.$store.state.user
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  async created() {
    if (!this.farmers.length) await this.$store.dispatch("get", "farmers")
    if (!this.location.length) await this.$store.dispatch("get", "location")
  },
  methods: {
    reset() {
      this.crop = "All"
      this.season = "All"
      this.location = []
      this.variety = "All"
      this.chemical = []
      this.fertilizer = []
      this.search = ""
    },
    download(data) {
      data = data.filter(value => {
        delete value.id
        delete value.AuthID
        return value
      })
      const wb = XLSX.utils.book_new()
      let o = "farmers.xlsx"
      const ws = XLSX.utils.json_to_sheet(data)
      XLSX.utils.book_append_sheet(wb, ws, "Production")
      XLSX.writeFile(wb, o)
    },
    editItem(item) {
      this.editedIndex = this.farmers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.Chemicals = this.editedItem.Chemicals.split(",")
      this.editedItem.Fertilizers = this.editedItem.Fertilizers.split(",")
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
      editedItem.Chemicals = editedItem.Chemicals.join()
      editedItem.Fertilizers = editedItem.Fertilizers.join()
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
