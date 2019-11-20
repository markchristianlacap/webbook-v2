<template>
  <v-layout class="pa-1">
    <v-flex xs12 md2>
      <sidebar />
    </v-flex>
    <v-flex>
      <v-card small>
        <v-layout justify-center class="pa-1"><h1 class="headline primary white--text pa-1">AGRIBOOK</h1></v-layout>
        <v-layout row>
          <v-flex xs12 md6 class="pa-2">
            <v-img src="@/assets/img/authentication.svg"> </v-img>
          </v-flex>
          <v-flex xs12 md6 class="pa-5">
            <v-toolbar flat dense>
              <v-toolbar-title class="title grey--text">Change Password</v-toolbar-title>
            </v-toolbar>
            <v-form ref="form" class="px-3">
              <v-card-text>
                <v-alert v-if="ErrorMsg" text dense outlined color="deep-orange" type="error">
                  {{ ErrorMsg }}
                </v-alert>
                <div class="subtitle ma-2 primary--text">{{ SuccessMsg }}</div>
                <v-text-field
                  ref="oldPass"
                  v-model="oldPass"
                  dense
                  label="Current Password*"
                  :append-icon="visible ? 'fa-eye-slash' : 'fa-eye'"
                  :type="visible ? 'text' : 'password'"
                  @click:append="() => (visible = !visible)"
                ></v-text-field>

                <v-text-field
                  ref="newPass"
                  v-model="newPass"
                  dense
                  label="New Password*"
                  :append-icon="visible1 ? 'fa-eye-slash' : 'fa-eye'"
                  :type="visible1 ? 'text' : 'password'"
                  @click:append="() => (visible1 = !visible1)"
                ></v-text-field>

                <v-text-field
                  ref="confirmPass"
                  v-model="confirmPass"
                  dense
                  label="Confirm Password*"
                  :append-icon="visible2 ? 'fa-eye-slash' : 'fa-eye'"
                  :type="visible2 ? 'text' : 'password'"
                  @click:append="() => (visible2 = !visible2)"
                ></v-text-field>

                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text class="mb-3" color="warning darken-1" to="/Dashboard">
                  <v-icon left>fa-angle-left</v-icon>
                  <span>Close</span>
                </v-btn>
                <v-btn text :loading="loadingBtn" class="mb-3 mr-2" color="success darken-1" @click="save">
                  <v-icon left>fa-check</v-icon>
                  <span>Save</span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sidebar from "@/components/Sidebar"
import firebase from "@/firebase"
import "firebase/auth"
export default {
  components: {
    sidebar
  },
  data: () => ({
    ErrorMsg: "",
    SuccessMsg: "",
    newPass: "",
    oldPass: "",
    confirmPass: "",
    visible: false,
    visible1: false,
    visible2: false,
    loadingBtn: false
  }),
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    async save() {
      this.loadingBtn = true
      const cred = await firebase.auth.EmailAuthProvider.credential(this.user.email, this.oldPass)

      try {
        await this.user.reauthenticateWithCredential(cred)
        if (this.newPass === this.oldPass) {
          this.ErrorMsg = "Please change your current password."
        } else if (this.newPass !== this.confirmPass) {
          this.ErrorMsg = "New Password does not match"
        } else {
          try {
            await this.user.updatePassword(this.newPass)
            this.SuccessMsg = "Password successfully changed."
            this.oldPass = ""
            this.newPass = ""
            this.confirmPass = ""
            this.ErrorMsg = ""
          } catch (e) {
            this.ErrorMsg = e.message
          }
        }
      } catch (e) {
        this.ErrorMsg = e.message
      }
      this.loadingBtn = false
    }
  }
}
</script>

<style></style>
