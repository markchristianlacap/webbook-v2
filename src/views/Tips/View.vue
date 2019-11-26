<template>
  <v-container align-content-center class="white">
    <v-img class="" height="300" :src="tip.src"></v-img>
    <br />
    <div class="headline primary--text font-weight-black">{{ tip.Title }}</div>
    <div class="grey--text"><span class="font-weight-bold">Written by:</span> {{ tip.Author }}</div>
    <div class="grey--text"><span class="font-weight-bold">Date:</span> {{ tip.Date }}</div>
    <template v-if="user">
      <v-btn v-if="user.uid === tip.authID" text class="green--text text--darken-2" @click="update">Edit</v-btn>
      <v-btn v-if="user.uid === tip.authID" text class="red--text text--darken-2" @click="deleteTip(tip.path)">Delete</v-btn>
      <br />
    </template>
    <article>
      <p class="text-justify body-1" style="text-indent:5%">{{ tip.Content }}</p>
    </article>

    <!-- Edit Tips Dialog -->
    <v-dialog v-model="dialogTips" persistent>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Edit Tips</v-toolbar-title>
        </v-toolbar>
        <v-form ref="form" class="px-3">
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="tip.Title" label="Title*"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea v-model="tip.Content" label="Content*"></v-textarea>
              </v-flex>
              <v-btn class="primary" dark @click="onPickFile">Upload Cover Image</v-btn>
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
            <v-btn text class="mb-3" color="warning darken-1" @click="close">
              <span>Cancel</span>
            </v-btn>
            <v-btn text :loading="loadingBtn" class="mb-3 mr-2" color="success darken-1" @click="save(tip)">
              <span>Save</span>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import fb from "@/firebase"
import "firebase/firestore"
import "firebase/storage"
export default {
  data: function() {
    return {
      tip: [],
      dialogTips: false,
      imageRequired: "",
      imageURL: "",
      loadingBtn: false,
      imageChanged: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    user() {
      return this.$store.state.user
    }
  },
  async created() {
    await fb
      .firestore()
      .collection("tips")
      .doc(this.id)
      .onSnapshot(doc => {
        this.tip = doc.data()
      })
    if (!this.user) await this.$store.dispatch("user")
  },
  methods: {
    deleteTip(path) {
      var ans = confirm("Are you sure you want to delete this tip?")
      if (ans == true) {
        fb.firestore()
          .collection("tips")
          .doc(this.id)
          .delete()
          .then(() => {
            fb.storage()
              .ref()
              .child(path)
              .delete()
              .then(() => {
                return this.$router.push("/Tips")
              })
          })
      }
    },
    update() {
      this.dialogTips = true
      this.imageURL = this.tip.src
    },
    async save(tip) {
      if (!this.image && this.imageChanged === true) {
        return (this.imageRequired = "*Cover image is required")
      }
      if (tip.Title !== "" && tip.Content !== "") {
        this.loadingBtn = true
        const inputTip = {
          Title: tip.Title,
          Author: this.user.displayName,
          Content: tip.Content,
          Date: Date(Date.now())
        }
        try {
          await fb
            .firestore()
            .collection("tips")
            .doc(this.id)
            .update(inputTip)
          if (this.imageChanged === true) {
            const filename = this.image.name
            const ext = filename.slice(filename.lastIndexOf("."))
            const filedata = await fb
              .storage()
              .ref()
              .child("tips/" + this.id + ext)
              .put(this.image)
            const url = await fb
              .storage()
              .ref()
              .child(filedata.metadata.fullPath)
              .getDownloadURL()
            await fb
              .firestore()
              .collection("tips")
              .doc(this.id)
              .update({ src: url, path: filedata.metadata.fullPath })
          }
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
      this.imageChanged = true
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
      this.dialogTips = false
      this.image = null
      this.imageURL = ""
      this.loadingBtn = false
      this.imageRequired = ""
    }
  }
}
</script>
