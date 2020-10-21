<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-main> </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/NavBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
});
</script>
