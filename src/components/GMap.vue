<template>
  <div class="map">
    <h1>Map</h1>
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
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.myMap.mapObject.getCenter()
    })
  }
}
</script>

<style scoped>
#map {
  height: 70vh;
}
</style>
