<template>
  <v-layout align-center justify-center fill-height>
    <v-flex xs12 sm8>
      <v-card class="pa-2">
        <v-layout justify-center><h1 class="headline primary white--text pa-1">AGRIBOOK</h1></v-layout>
        <v-layout row>
          <v-flex xs12 md6 class="pa-2">
            <v-layout justify-center>
              <v-flex lg9 md10 xs12>
                <v-img src="@/assets/img/gardening.svg"></v-img>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md6 class="pa-5">
            <v-toolbar flat>
              <v-toolbar-title class="title">Register to access exclusive content</v-toolbar-title>
            </v-toolbar>
            <v-alert v-if="error" text dense outlined color="deep-orange" type="error">
              {{ error }}
            </v-alert>
            <v-form>
              <v-text-field v-model="user.email" dense label="Email" prepend-icon="fa-at" type="text"></v-text-field>
              <v-text-field v-model="user.displayName" dense label="Complete Name" prepend-icon="fa-signature" type="text"></v-text-field>
              <v-text-field
                v-model="user.password"
                dense
                :append-icon="show.p ? 'fa-eye-slash' : 'fa-eye'"
                :type="show.p ? 'text' : 'password'"
                label="Password"
                prepend-icon="fa-lock"
                @click:append="show.p = !show.p"
              >
              </v-text-field>
              <v-text-field
                v-model="user.confirm_password"
                dense
                :append-icon="show.c ? 'fa-eye-slash' : 'fa-eye'"
                :type="show.c ? 'text' : 'password'"
                label="Confirm Password"
                prepend-icon="fa-key"
                @click:append="show.c = !show.c"
              >
              </v-text-field>
            </v-form>
            <v-layout>
              <span class="subtitle">Already have an account? <router-link to="/login">Log in here.</router-link></span>
              <v-spacer></v-spacer>
              <v-btn :loading="loading" outlined text color="success" @click.prevent="register(user)">register</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "@/firebase"
import "firebase/auth"
const auth = firebase.auth()
export default {
  data: () => {
    return {
      show: { c: false, p: false },
      user: {},
      loading: false,
      error: null
    }
  },
  methods: {
    async register(user) {
      this.error = null
      if (user.password !== user.confirm_password) {
        return (this.error = "The password you entered don't match")
      }
      try {
        this.loading = true
        const res = await auth.createUserWithEmailAndPassword(user.email, user.password)
        res.user.updateProfile(user)
        this.$router.push("dashboard")
      } catch (e) {
        this.error = e.message.toLowerCase()
      }
      this.loading = false
    }
  }
}
</script>

<style></style>script
