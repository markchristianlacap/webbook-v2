<template>
  <div>
    <section>
      <v-parallax src="@/assets/img/rice.jpg" height="220">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/palay.png" alt="Vuetify.js" height="100" />
          <h1 class="shadow font-weight-bold">Production's Guide</h1>
          <div class="shadow subheading text-center">
            Use this planting guide to get started with your planting. If you've never planted before, now is the time! Planting is like every other skill set: you just have to learn the basics. So,
            use this planting guide for the essential elements for getting started and growing successfully.
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <v-layout>
      <v-flex v-for="(product, i) in products" :key="i" md4 class="mx-auto my-1">
        <v-card class="pa-1" :to="product.route" hover flat>
          <v-img :src="product.img" max-height="100">
            <v-card color="rgb(0,0,0,0.4)" class="pa-1" justify-end>
              <div class="font-weight-regular display-1 white--text">{{ product.crop }}</div>
            </v-card>
          </v-img>
          <v-card-subtitle max-height="100" style="overflow: hidden">
            <div class="caption text-justify">{{ product.text | truncate(300) }}</div>
          </v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        crop: "Corn",
        img: "https://www.newsfirst.lk/wp-content/uploads/2018/11/corn-farm-edit.jpg",
        text:
          "Bago magtanim, maglagay ng pantay-pantay na dami ng abono sa bawat tudling at tabunan ng 2-3 cm. na lupa upang maiwasang madikit ito sa binhi sa oras ng pagtatanim. Ang dami ng abono ay sang-ayon sa resulta ng pagsusuri ng lupa o pagsunod ng rekomendadong Antas ng Pag-aabono.",
        route: "/Guide/corn"
      },
      {
        crop: "Rice",
        img: "https://media.dhakatribune.com/uploads/2016/09/farmers-agriculture-1.jpg",
        text:
          "PAGPAPLANO. Alamin ang mga kakailanganin sa pagtatanim. Mahalaga dito ang mga dokumento o papeles kung may balak kayong humiram ng kapital sa bangko. PAGSUSURI NG LUPA. Ipasuri ang inyong lupa sa Bureau of Soils Regional Office upang malaman ang katabaan at kaasiman nito (fertilization and acidity level) at mabatid ang sapat na dami ng abonong gagamitin o kung sakaling mangangailangan pa ng apog.",
        route: "/Guide/rice"
      }
    ]
  })
}
</script>

<style></style>
