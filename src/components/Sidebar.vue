<template>
  <v-card class="mr-3" elevation="12">
    <v-navigation-drawer flat floating permanent>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="item in items" :key="item.title" :to="item.route">
            <v-list-item-icon>
              <v-icon small color="primary">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-light primary--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Dashboard", icon: "fa-tachometer-alt", route: "/Dashboard" },
      { title: "Production", icon: "fa-leaf", route: "/Production" },
      { title: "Geolocation", icon: "fa-map-marked-alt", route: "/Geolocation" },
      { title: "Schedules", icon: "fa-calendar-alt", route: "/Events" }
    ]
  })
}
</script>

<style></style>
