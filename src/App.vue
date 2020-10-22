<template>
  <v-app light>
    <Navbar />
    <v-main class="ml-2 mr-2">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
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

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-enter-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
