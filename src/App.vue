<template>
  <v-app>
    <Appbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar"
export default {
  name: "App",
  components: {
    Appbar
  }
}
</script>
<style>
.shadow {
  text-shadow: 2px 2px rgb(0, 0, 0);
}
</style>
