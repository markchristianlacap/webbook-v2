<template>
  <div>
    <section>
      <v-parallax src="@/assets/img/cover.jpg" height="600">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/chart.png" alt="Vuetify.js" height="300" />
          <h1 class="white--text mb-2 heading display-1 text-center font-weight-bold mt-2">Web Based Analytical Farm Record for Agricrop Production</h1>
          <div class="subheading mb-4 text-center">Keep track of your farm</div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-6" align-center>
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
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card>
                  <v-card-text class="text-center">
                    <v-icon x-large class="primary--text">fa-network-wired</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Neural Network</div>
                  </v-card-title>
                  <v-card-text>
                    You can think of them as a clustering and classification layer on top of the data you store and manage. They help to group unlabeled data according to similarities among the
                    example inputs, and they classify data when they have a labeled dataset.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card>
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
              <v-flex xs12 md4>
                <v-card>
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
                <div class="headline primary white--text pa-1">AGRIBOOK INFO</div>
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
              <v-flex v-for="person in team" :key="person.name" xs12 md4>
                <v-card class="pa-2 mx-2">
                  <v-list-item>
                    <v-list-item-avatar color="primary lighten-1"></v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ person.name }}</v-list-item-title>
                      <v-list-item-subtitle>{{ person.role }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <v-footer color="primary darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-4">
            Made with
            <v-icon class="red--text">mdi-heart</v-icon>
            by using <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a> and <a class="white--text" target="__blank" href="https://vuejs.org/">VueJS</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    team: [
      { name: "CYREL GRACE L. MANZANO", role: "Web Developer", avatar: "@/assets//images/Team/avatar.png" },
      { name: "PIMENTEL, KRISTINE D.", role: "Designer", avatar: "@/assets//images/Team/avatar.png" },
      { name: "FRIAS, QUENNIE L.", role: "Researcher", avatar: "@/assets//images/Team/avatar.png" },
      { name: "SIOSARLI, MENARD", role: "Documentator", avatar: "@/assets//images/Team/avatar.png" },
      { name: "LOMBOY, JAMES KEEPER", role: "Web Developer", avatar: "@/assets//images/Team/avatar.png" },
      { name: "ABARIENTOS, MA. ERICA L.", role: "Web Developer", avatar: "@/assets//images/Team/avatar.png" }
    ]
  })
}
</script>
