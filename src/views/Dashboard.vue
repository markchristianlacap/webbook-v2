<template>
  <v-layout class="pa-3">
    <v-navigation-drawer color="dark ligten-2" flat floating permanent>
      <v-list dense rounded>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon small>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-layout class="pa-1">
      <v-flex>
        <v-card class="mx-auto text-center">
          <v-card-text>
            <v-sheet color="primary">
              <v-sparkline auto-draw :value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24" stroke-linecap="round" smooth>
                <template v-slot:label="item">
                  ${{ item.value }}
                </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="display-1 font-weight-thin">Sales Last 24h</div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn block text>Go to Report</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    items: [{ title: "Home", icon: "fa-tachometer-alt" }, { title: "About", icon: "fa-question" }],
    value: [423, 446, 675, 510, 590, 610, 760]
  })
}
</script>
