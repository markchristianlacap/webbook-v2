<template>
  <v-app-bar app dark hide-on-scroll>
    <v-toolbar-title class="headline success--text">
      <v-btn icon @click="$router.push('/')">
        <v-icon color="primary">fa-tractor</v-icon>
      </v-btn>
      <span flat class="title font-weight-black"> AGRIBOOK </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="primary" text to="/">
      <span class="pa-1">Home</span>
    </v-btn>
    <v-btn color="primary" text to="/Tips">
      <span class="pa-1">Tips</span>
    </v-btn>
    <v-btn color="primary" text to="/Guide">
      <span class="pa-1">Guide </span>
    </v-btn>
    <v-menu v-if="user" open-on-hover bottom origin="top right" transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" text v-on="on">
          Account
        </v-btn>
      </template>

      <v-card flat dense outlined>
        <v-list dense color="transparent">
          <v-list-item>
            <v-list-item-avatar color="primary" small>
              <v-icon small>fa-user</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.displayName }}</v-list-item-title>
              <v-list-item-subtitle class="font-weight-light"> {{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list dense shaped>
          <v-list-item to="/Dashboard">
            <v-list-item-icon>
              <v-icon color="primary" small>fa-tachometer-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="primary--text font-weight-light">Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/Password">
            <v-list-item-icon>
              <v-icon color="primary" small>fa-lock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="primary--text font-weight-light">Change Password</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="$store.dispatch('logout')">
            <v-list-item-icon>
              <v-icon small color="deep-orange">fa-sign-out-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="deep-orange--text font-weight-light">Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-btn v-if="!user" color="primary" text to="/Login">
      <span class="pa-1">Login</span>
    </v-btn>
    <v-btn v-if="!user" color="primary" text to="/Register">
      <span class="pa-1">Register</span>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
