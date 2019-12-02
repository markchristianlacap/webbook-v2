<template>
  <v-footer color="primary darken-2 pa-4">
    <v-row>
      <v-col md6>
        <v-container class="white--text ml-2">
          <strong class="title">AGRIBOOK</strong><br />
          <strong>Contact us:</strong><br />
          <span class="caption"><v-icon small class="fa-fw" color="white">fa-envelope</v-icon> &nbsp; cycymanzano1@gmail.com</span><br />
          <span class="caption"><v-icon small class="fa-fw" color="white">fa-phone</v-icon> &nbsp;09355149849</span>
        </v-container>
      </v-col>
      <v-col>
        <v-toolbar-title class="headline">
          <v-avatar @click="$router.push('/')">
            <v-img :src="require('@/assets/img/palay.png')"></v-img>
            <!-- <v-icon color="primary">fa-tractor</v-icon> -->
          </v-avatar>
          <span class="white--text font-weight-black"> AGRIBOOK </span>
        </v-toolbar-title>
      </v-col>
    </v-row>
  </v-footer>
</template>
