<template>
  <v-layout class="pa-1">
    <v-flex xs12 md2>
      <sidebar />
    </v-flex>
    <v-flex xs12 md6>
      <v-sheet color="primary">
        <v-sparkline auto-draw :value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24" stroke-linecap="round" smooth>
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-flex>
  </v-layout>
</template>
<script>
import sidebar from "@/components/Sidebar"

export default {
  components: {
    sidebar
  },
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760]
  })
}
</script>
