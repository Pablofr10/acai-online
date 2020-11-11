<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" :abrirModal="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <slot></slot>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="fecharModal">
            Fechar
          </v-btn>
          <v-btn color="blue darken-1" text @click="fecharModal">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CardDialogs extends Vue {
  @Prop() title!: string;
  @Prop() dialog!: boolean;

  fecharModal() {
    this.$emit("abrirModal", false);
  }
}
</script>

<style scoped>
</style>
