<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-sheet v-if="!location.length" class="pa-5">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-sheet>
      <v-card v-else class="pa-2">
        <h1 class="title grey--text text-center text-capitalize">Geolocation Mapper</h1>
        <modal />
        <v-row no-gutters>
          <v-col class="pa-1" cols="3">
            <v-expansion-panels light popout>
              <v-expansion-panel v-for="(place, i) in location" :key="place.id">
                <v-expansion-panel-header
                  >{{ place.name }}
                  <template v-slot:actions>
                    <v-icon small color="primary">fa-chevron-arrow-down</v-icon>
                  </template></v-expansion-panel-header
                >
                <v-expansion-panel-content class="caption">
                  <p><strong>Latitude: </strong> {{ place.coordinates[0] }}</p>
                  <p><strong>Longtitude: </strong> {{ place.coordinates[1] }}</p>
                  <v-btn-toggle>
                    <v-btn title="delete" text small @click.prevent="del(place.id)"><v-icon small color="red">fa-trash</v-icon></v-btn>
                    <v-btn title="view" text small @click.prevent="view(i, place.coordinates)"><v-icon small color="warning">fa-eye</v-icon></v-btn>
                  </v-btn-toggle>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col>
            <v-card class="pa-3" elevation="2">
              <GMap ref="gmap" :center="center" />
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import GMap from "@/components/GMap"
import sidebar from "@/components/Sidebar"
import modal from "@/components/geoLocationModal"
import firebase from "@/firebase"
import "firebase/firestore"
const db = firebase.firestore()
export default {
  components: {
    GMap,
    sidebar,
    modal
  },
  data: () => ({
    center: []
  }),
  computed: {
    location() {
      return this.$store.state.location
    }
  },
  async created() {
    if (!this.location.length) await this.$store.dispatch("get", "location")
  },
  methods: {
    async del(id) {
      var ans = confirm("Are you sure you want to delete this record?")
      if (ans == true) {
        await db
          .collection("location")
          .doc(id)
          .delete()
      }
    },
    view(i, coor) {
      this.center = coor
      this.$refs.gmap.view(i)
    }
  }
}
</script>
