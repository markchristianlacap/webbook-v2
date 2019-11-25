<template>
  <div>
    <v-layout justify-center>
      <v-btn small text color="primary" class="ma-2" @click.stop="dialog = true">Add new location</v-btn>
    </v-layout>
    <v-dialog v-model="dialog" dense width="400">
      <v-card dense small>
        <v-card-title class="headline grey lighten-2" primary-title>
          Add new location
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-text-field v-model="query" label="Search location in API"></v-text-field>
            <v-btn :loading="loading" class="mt-3 ml-2" color="primary" @click.prevent="search(query)">Find</v-btn>
          </v-row>
          <v-divider></v-divider>
          <div v-if="noRes">
            <p class="subtitle">No results found.</p>
          </div>
          <v-container v-if="results.length">
            <v-list>
              <v-list-item-group>
                <v-list-item v-for="place in results" :key="place.properties.osm_id" two-line @click="add(place)">
                  <v-list-item-content>
                    <v-list-item-title>{{ place.place_name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{
                        `Latitude: ${place.geometry.coordinates[0]},
                        Longtitude: ${place.geometry.coordinates[1]}`
                      }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import firebase from "@/firebase"
import "firebase/firestore"
const db = firebase.firestore()
export default {
  data: () => ({ dialog: false, query: null, loading: false, results: [], noRes: null }),
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    async search(query) {
      this.loading = true
      this.noRes = false
      const r = await fetch(`https://api.maptiler.com/geocoding/${query}.json?key=kJOMFOp5jsVf1rlQnFZR`).then(r => r.json())
      this.results = r.features
      if (!this.results.length) this.noRes = true
      this.loading = false
    },
    async add(place) {
      var ans = confirm(`Do you want to add ${place.place_name}?`)
      if (ans == true) {
        const location = {
          AuthID: this.user.uid,
          name: place.place_name,
          coordinates: place.geometry.coordinates
        }
        await db.collection("location").add(location)
      }
    }
  }
}
</script>
