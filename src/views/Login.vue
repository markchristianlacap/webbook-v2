<template>
  <v-layout align-center justify-center fill-height>
    <v-flex xs12 sm8>
      <v-card class="pa-2">
        <v-layout justify-center><h1 class="headline primary white--text pa-1">AGRIBOOK</h1></v-layout>
        <v-layout row>
          <v-flex xs12 md6 class="pa-2">
            <v-img src="@/assets/img/flowers.svg"> </v-img>
          </v-flex>
          <v-flex xs12 md6 class="pa-5">
            <v-toolbar flat>
              <v-toolbar-title class="title">Login to your account</v-toolbar-title>
            </v-toolbar>
            <v-alert v-if="error" text dense outlined color="deep-orange" type="error">
              {{ error }}
            </v-alert>
            <v-form>
              <v-text-field v-model="user.email" dense label="Username" prepend-icon="fa-at" type="text"></v-text-field>
              <v-text-field
                v-model="user.password"
                dense
                :append-icon="show ? 'fa-eye-slash' : 'fa-eye'"
                :type="show ? 'text' : 'password'"
                label="Password"
                prepend-icon="fa-lock"
                @click:append="show = !show"
              >
              </v-text-field>
            </v-form>
            <v-layout>
              <span class="subtitle">I don't have an account yet. <router-link to="/Register"> How do I get one?</router-link></span>
              <v-spacer></v-spacer>
              <v-btn :loading="loading" outlined right text color="success" @click.prevent="login(user)">Login</v-btn>
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
      show: false,
      user: {},
      loading: false,
      error: null
    }
  },
  methods: {
    async login(user) {
      try {
        this.error = null
        this.loading = true
        await auth.signInWithEmailAndPassword(user.email, user.password)
        this.$router.push("dashboard")
      } catch (e) {
        this.error = e.message.toLowerCase()
      }
      this.loading = false
    }
  }
}
</script>
