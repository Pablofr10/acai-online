<template>
  <div class="text-center align-content-center">
    <v-progress-circular
      :size="200"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Loading extends Vue {}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
