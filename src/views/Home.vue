<template>
  <div>
    <section>
      <v-parallax src="@/assets/img/cover.jpg" height="300">
        <v-layout column align-center justify-center>
          <img src="@/assets/img/corn.svg" alt="Vuetify.js" height="150" />
          <h1 class="shadow display-1 font-weight-bold">Web Based Analytical Farm Record for Agricrop Production</h1>
          <div class="shadow title mb-4 text-center">KEEP TRACK OF YOUR AGRICROP</div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">The best way to keep records</h2>
            <span class="subheading">
              Agriculture is more than just farming.
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap justify-center align-center>
              <v-flex xs7 sm6 md4>
                <v-card elevation="3" outlined>
                  <v-card-text class="text-center">
                    <v-icon x-large class="primary--text">fa-map-marked-alt</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Geolocation</div>
                  </v-card-title>
                  <v-card-text>
                    Precision agriculture mapping entails timely collection of geospatial information regarding farmers, and later applying and prescribing site-specific treatments to increase produce
                    while protecting the environment at the same time.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs7 sm6 md4>
                <v-card elevation="3" outlined>
                  <v-card-text class="text-center">
                    <v-icon x-large class="primary--text">fa-chart-line</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Visualization</div>
                  </v-card-title>
                  <v-card-text>
                    Visual representations help us to understand data quickly. When you show an effective graph or chart, your report or presentation gains clarity and authority, whether you're
                    comparing sales figures or highlighting a trend.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs7 sm6 md4>
                <v-card elevation="3" outlined>
                  <v-card-text class="text-center">
                    <v-icon x-large class="primary--text">fa-sync-alt</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Real-time Data Sync</div>
                  </v-card-title>
                  <v-card-text>
                    Real-Time Data Analytics touches almost every part of a business – from the data managers and enterprise architects, to marketing and sales managers – they all need to collect,
                    use,and analyze data to shape their roles and strategies.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm3>
            <v-img src="@/assets/img/environment.svg"></v-img>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout">
                <div class="headline primary dark--text pa-1">AGRIBOOK INFO</div>
              </v-card-title>
              <v-card-text>
                Agriculture in the Philippines has always been associated with manual labor and backward traditional farming methods. For the Department of Agriculture (DA), the stigma of farming
                being a poor man’s job doesn’t make it easier to fulfill its mandate of reaching food security or attracting more people to join the sector. However, progress is already creeping into
                the sector slowly but surely.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section>
      <v-layout column wrap class="my-6" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline text-center ">Meet our Team</h2>
            <span class="subheading">
              Peoples behind the Agribook.
            </span>
          </div>
        </v-flex>
        <v-flex xs12 class="mb-12">
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex v-for="(person, i) in team" :key="person.name" xs12 sm6 md4>
                <v-card class="pa-2 mx-2">
                  <v-list-item>
                    <v-list-item-avatar size="90" color="primary">
                      <v-img :src="require(`@/assets/img/team/${i + 1}.jpg`)"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold">{{ person.name }}</v-list-item-title>
                      <p class="caption">{{ person.role }}</p>
                      <p class="caption">Email: {{ person.email }}</p>
                      <p class="caption">Number: {{ person.number }}</p>
                      <p class="caption">Birtdate: {{ person.birth }}</p>
                      <p class="caption">Age: {{ person.age }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <Footer />
  </div>
</template>

<script>
import team from "@/assets/JSON/team.json"
import Footer from "@/components/Footer"
export default {
  name: "Home",
  components: { Footer },
  data: () => ({
    team
  }),
  async created() {
    await this.$store.dispatch("user")
  }
}
</script>
