<template>
  <div>
    <section>
      <v-parallax src="@/assets/img/rice.jpg" height="220">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/palay.png" alt="Vuetify.js" height="100" />
          <h1 class="shadow mb-2 font-weight-bold shadow">TIPS FOR PRODUCING QUALITY CROPS</h1>
          <!-- <div class="subheading mb-4 text-center">Keep track of your farm</div> -->
        </v-layout>
      </v-parallax>
    </section>
    <v-flex class="pl-3 pr-3">
      <v-layout v-if="user">
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = true">
          <v-icon left>fa-plus</v-icon>
          <span>Add tips</span>
        </v-btn>
      </v-layout>
      <v-sheet v-if="loading" class="pa-5">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-sheet>
      <v-layout v-else row wrap class="pa-2 ma-2">
        <v-flex v-for="(tip, i) in tips" :key="i" xs12 sm12 md12 class="my-1">
          <v-layout row wrap>
            <v-flex xs4 sm4 md2>
              <v-img class="mx-auto my-auto" height="100" :src="tip.src"></v-img>
            </v-flex>
            <v-flex xs8 sm8 md10>
              <v-card-title primary-title>
                <div>
                  <div class="title primary--text font-weight-black">
                    <router-link :to="`/Tips/${tip.id}`">{{ tip.Title }}</router-link>
                  </div>
                  <div class="grey--text caption"><span class="font-weight-bold">Written by:</span> {{ tip.Author }}</div>
                  <div class="grey--text caption"><span class="font-weight-bold">Date added:</span> {{ tip.Date }}</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>

    <!-- New Tips Dialog -->
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Add Tips</v-toolbar-title>
        </v-toolbar>
        <v-form ref="form" class="px-3">
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="tip.title" label="Title*"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea v-model="tip.content" data-vv-name="Content" label="Content*"></v-textarea>
              </v-flex>
              <v-btn class="primary" text @click="onPickFile">Upload Cover Image</v-btn>
              <div class="red--text">{{ imageRequired }}</div>
              <input ref="fileInput" style="display:none" data-vv-as="image" name="image_field" type="file" accept="image/*" @change="onFilePicked" />
              <v-flex>
                <img height="200" :src="imageURL" alt="" />
              </v-flex>
            </v-layout>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mb-3" text color="warning darken-1" @click="close">
              <span>Cancel</span>
            </v-btn>
            <v-btn :loading="loadingBtn" text class="mb-3 mr-2" color="success darken-1" @click="save(tip)">
              <span>Save</span>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from "@/firebase"
import "firebase/firestore"
import "firebase/storage"
const db = firebase.firestore()

export default {
  data: () => ({
    loading: true,
    dialog: false,
    tip: {},
    loadingBtn: false,
    image: null,
    imageURL: "",
    imageRequired: ""
  }),
  computed: {
    tips() {
      return this.$store.state.tips
    },
    user() {
      return this.$store.state.user
    }
  },
  async created() {
    if (!this.tips.length) await this.$store.dispatch("get", "tips")
    if (!this.user) await this.$store.dispatch("user")
    this.loading = false
    console.log(this.tips)
  },
  methods: {
    async save(tip) {
      if (tip.title !== "" && tip.content !== "") {
        this.loadingBtn = true
        const inputTip = {
          Title: tip.title,
          Author: this.user.displayName,
          Content: tip.content,
          Date: Date(Date.now()),
          authID: this.user.uid
        }
        try {
          const res = await db.collection("tips").add(inputTip)
          const id = res.id
          const filename = this.image.name
          const ext = filename.slice(filename.lastIndexOf("."))
          const filedata = await firebase
            .storage()
            .ref()
            .child("tips/" + id + ext)
            .put(this.image)
          const url = await firebase
            .storage()
            .ref()
            .child(filedata.metadata.fullPath)
            .getDownloadURL()
          await firebase
            .firestore()
            .collection("tips")
            .doc(id)
            .update({ src: url, path: filedata.metadata.fullPath })
          this.close()
        } catch (e) {
          console.log(e)
        }
      }
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please upload a valid file")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.imageURL = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    close() {
      this.dialog = false
      this.image = null
      this.imageURL = ""
      this.loadingBtn = false
      this.imageRequired = ""
      this.tip = []
    }
  }
}
</script>
