<template>
  <v-app style="background-color: #F5F5F5;">
    <v-main class="grey lighten-4 mx-4 mb-4"> <!-- m -> margein, x -> left & right, 4 -> spacer -->
      <Navbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
