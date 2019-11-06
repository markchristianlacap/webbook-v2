<template>
  <v-app-bar app hide-on-scroll>
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
    <v-btn color="primary" text to="/Forum">
      <span class="pa-1">Forum</span>
    </v-btn>
    <div v-if="show">
      <v-btn v-if="user" color="primary" text @click="$store.dispatch('logout')">
        <span class="pa-1">Logout</span>
      </v-btn>
      <v-btn v-if="!user" color="primary" text to="/Login">
        <span class="pa-1">Login</span>
      </v-btn>
      <v-btn v-if="!user" color="primary" text to="/Register">
        <span class="pa-1">Register</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    show: false
  }),
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  async created() {
    await this.$store.dispatch("user")
    this.show = true
  }
}
</script>
