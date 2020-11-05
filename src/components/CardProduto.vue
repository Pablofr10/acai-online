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
        <v-btn color="primary" @click="dialog = true" fab small dark>
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn color="primary" fab small dark>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn color="error" fab small dark>
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">
            {{ produto.nome }}
          </v-card-title>
          <v-card-text> {{ produto.descricao }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="silver darken-1" text @click="dialog = false">
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Produto } from "@/models/Produto";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() produto!: Produto;
  show = false;
  dialog = false;
}
</script>

<style scoped>
</style>
