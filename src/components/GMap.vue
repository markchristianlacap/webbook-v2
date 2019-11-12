<template>
  <div class="map">
    <h1>Map</h1>
    <modal />
    <div>
      <LMap id="map" ref="myMap" :zoom="13">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></LTileLayer>
        <LMarker></LMarker>
      </LMap>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet"
import modal from "./geoLocationModal"
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    modal
  },
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$refs.myMap.mapObject.setView([12.852546, 120.938418])
    })
  }
}
</script>

<style scoped>
#map {
  height: 70vh;
  z-index: 1;
}
</style>
