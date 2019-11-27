<template>
  <v-layout align-center justify-center>
    <v-flex lg4 md4 sm6>
      <div v-if="user">
        <v-card class="pa-3 mt-5">
          <h3 class="text-center">You need to verify your email first.</h3>
          <h5 class="text-center grey--text">Please check your email for verification link.</h5>
          <v-alert v-if="success" text dense outlined color="success" type="success">
            {{ success }}
          </v-alert>
          <v-alert v-if="error" text dense outlined color="deep-orange" type="error">
            {{ error }}
          </v-alert>
          <v-btn :loading="loading" color="primary" text @click="send()">Re-send verification</v-btn>
          <v-btn color="deep-orange" text @click="logout()">Logout</v-btn>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    success: null,
    error: null,
    loading: false
  }),
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  async created() {
    await this.$store.dispatch("user")
    if (!this.user) this.$router.push("/")
  },
  methods: {
    async send() {
      try {
        this.loading = true
        await this.user.sendEmailVerification()
        this.success = `An email has been sent to ${this.user.email} for verification. Please check your inbox and click on verification link. Thank you`
      } catch (e) {
        this.error = e.message
      }
      this.loading = false
    },
    async logout() {
      this.$store.dispatch("logout")
    }
  }
}
</script>

<style></style>
