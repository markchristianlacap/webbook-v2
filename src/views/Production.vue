<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-container>
        <v-toolbar flat color="white" class="pt-2">
          <p class="title grey--text">Production's Record</p>
          <v-btn color="primary" small dark depressed @click="new_farmer">
            <span class="text-none">Create</span>
          </v-btn>
          <v-spacer></v-spacer>
          <v-flex xs4 sm4 md 4>
            <v-text-field v-model="search" label="Search"></v-text-field>
          </v-flex>
        </v-toolbar>
        <v-dialog v-model="dialog">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Name" prepend-inner-icons="person" label="Farmer's Name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select v-model="editedItem.Gender" :items="gender" prepend-inner-icons="wc" label="Gender"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Location" prepend-inner-icons="map" label="Location"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Hectares" prepend-inner-icons="landscape" label="Hectares" suffix="ha"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select v-model="editedItem.Crop" :items="crops" prepend-inner-icons="spa" label="Crop"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select v-model="editedItem.Season" :items="seasons" prepend-inner-icons="toys" label="Season"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Variety" prepend-inner-icons="description" label="Variety"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Type_of_soil" prepend-inner-icons="waves" label="Type of Soil"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Fertilizer_Req" prepend-inner-icons="grain" label="Fertilizer Requested"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Cost" prepend-inner-icons="money" label="Cost" prefix="Php"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.Income" prepend-inner-icons="money" label="Income" prefix="Php"></v-text-field>
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
        <v-data-table :headers="headers" :items="farmers" :search="search" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.Name }}</td>
            <td class="text-xs-left">{{ props.item.Gender }}</td>
            <td class="text-xs-left">{{ props.item.Location }}</td>
            <td class="text-xs-left">{{ props.item.Hectares }} ha</td>
            <td class="text-xs-left">{{ props.item.Crop }}</td>
            <td class="text-xs-left">{{ props.item.Season }}</td>
          </template>
          <template v-slot:no-data>
            <p>No data</p>
          </template>
        </v-data-table>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script>
import sidebar from "@/components/Sidebar"
import firebase from "@/firebase"
import "firebase/firestore"
import "firebase/auth"
const db = firebase.firestore()
const auth = firebase.auth()
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
    menu: false,
    menu1: false,
    dialog: false,
    headers: [
      { text: "Name", value: "Name" },
      { text: "Gender", value: "Gender" },
      { text: "Location", value: "Location" },
      { text: "Hectares", value: "Hectares" },
      { text: "Crop", value: "Crop" },
      { text: "Season", value: "Season" }
    ],
    farmers: [],
    selected: [],
    editedIndex: -1,
    editedItem: {
      Name: "",
      Gender: "",
      Location: "",
      Hectares: 0,
      Crop: "",
      Season: "",
      Variety: "",
      Type_of_soil: "",
      Fertilizer_Req: "",
      Cost: 0,
      Income: 0
    },
    defaultItem: {
      Name: "",
      Gender: "",
      Location: "",
      Hectares: 0,
      Crop: "",
      Season: "",
      Variety: "",
      Type_of_soil: "",
      Fertilizer_Req: "",
      Cost: 0,
      Income: 0
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Farmer Record" : "Edit Farmer Record"
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  created() {
    db.collection("farmers").onSnapshot(snapchat => {
      this.farmers = []
      snapchat.docs.forEach(doc => {
        this.farmers.push({
          ...doc.data(),
          id: doc.id
        })
      })
    })
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.farmers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(farmer) {
      var ans = confirm("Are you sure you want to delete this record?")
      if (ans == true) {
        db.collection("farmers")
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
    save(editedItem) {
      this.loading = true
      const inputFarmer = {
        AuthID: auth.currentUser.uid,
        Name: editedItem.Name,
        Gender: editedItem.Gender,
        Location: editedItem.Location,
        Hectares: parseInt(editedItem.Hectares),
        Season: editedItem.Season,
        Variety: editedItem.Variety,
        Type_of_soil: editedItem.Type_of_soil,
        Fertilizer_Req: editedItem.Fertilizer_Req,
        Crop: editedItem.Crop,
        Cost: parseInt(editedItem.Cost),
        Income: parseInt(editedItem.Income)
      }
      if (this.editedIndex > -1) {
        db.collection("farmers")
          .doc(editedItem.id)
          .set(inputFarmer)
          .then(() => {
            this.close()
            this.loading = false
          })
      } else {
        db.collection("farmers")
          .add(inputFarmer)
          .then(() => {
            this.close()
            this.loading = false
          })
      }
    }
  }
}
</script>
