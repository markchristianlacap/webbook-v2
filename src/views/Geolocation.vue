<template>
  <v-layout class="ma-1">
    <v-flex xs6 md2> <sidebar /> </v-flex>
    <v-flex>
      <v-card class="pa-2">
        <GMap />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import GMap from "@/components/GMap"
import sidebar from "@/components/Sidebar"

export default {
  components: {
    GMap,
    sidebar
  }
}
</script>
