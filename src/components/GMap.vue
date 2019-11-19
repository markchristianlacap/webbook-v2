<template>
  <div class="map">
    <div>
      <LMap v-if="location.length" id="map" ref="myMap" :zoom="10" :center="getCenter">
        <LTileLayer :url="url" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></LTileLayer>
        <LMarker v-for="place in location" :key="place.id" :lat-lng="getLatLng(place.coordinates)">
          <LTooltip>{{ place.name }}</LTooltip>
          <LPopup><v-btn small text color="primary">View Records</v-btn></LPopup>
        </LMarker>
      </LMap>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip, LPopup } from "vue2-leaflet"

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup
  },
  props: {
    center: {
      default: () => [],
      type: Array
    }
  },
  data: () => ({
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  }),
  computed: {
    location() {
      return this.$store.state.location
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
