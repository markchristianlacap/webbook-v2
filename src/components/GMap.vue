<template>
  <div class="map">
    <v-card>
      <LMap v-if="location.length" id="map" ref="myMap" :zoom="10" :center="getCenter">
        <LTileLayer :url="url" :attribution="attribution"></LTileLayer>
        <LMarker v-for="place in location" :key="place.id" :lat-lng="getLatLng(place.coordinates)">
          <LIcon :icon-size="place.iconSize" :icon-url="icon"></LIcon>
          <LTooltip>{{ place.name }}</LTooltip>
          <LPopup><v-btn small text color="primary" :to="`/Geolocation/${place.name}`">View Records</v-btn></LPopup>
        </LMarker>
      </LMap>
    </v-card>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip, LPopup, LIcon } from "vue2-leaflet"
import icon from "@/assets/img/farmer.svg"
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
    LIcon
  },
  props: {
    center: {
      default: () => [],
      type: Array
    }
  },
  data: () => ({
    icon,
    iconSize: [40, 40],
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }),
  computed: {
    location() {
      let location = this.$store.state.location
      location.forEach(loc => {
        loc.iconSize = this.iconSize
      })
      return location
    },
    getCenter() {
      if (this.center.length) {
        return this.getLatLng(this.center)
      } else {
        return this.location.length >= 1 ? this.getLatLng(this.location[0].coordinates) : [12.6688736, 121.135493]
      }
    }
  },
  methods: {
    getLatLng(coor) {
      const location = [coor[1], coor[0]]
      return location
    },
    view(i) {
      this.location.forEach(loc => {
        loc.iconSize = this.iconSize
      })
      this.location[i].iconSize = [80, 80]
    }
  }
}
</script>

<style scoped>
#map {
  height: 70vh;
  z-index: 1;
}
</style>
