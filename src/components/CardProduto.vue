<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title> {{ produto.nome }} </v-card-title>

      <v-card-subtitle> {{ produto.descricao }}</v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text> Explore </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Produto } from "@/models/Produto";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() produto!: Produto;
  show = false;
}
</script>

<style scoped>
</style>
