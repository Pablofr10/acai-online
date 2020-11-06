<template>
  <div class="mt-5">
    <v-container class="grey lighten-5 mb-6">
      <v-card>
        <v-card-title>
          Produtos
          <v-spacer></v-spacer>
          <v-text-field
            v-model="filtro"
            append-icon="mdi-magnify"
            label="Pesquisar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="produtos"
          :items-per-page="5"
          class="elevation-1"
          :loading="!produtos.length"
          loading-text="Carregando..."
          :search="filtro"
        >
          <template v-slot:item.isDisponivel="{ item }">
            <v-chip color="blue" dark>
              {{ item.isDisponivel ? "Disponível" : "Indisponível" }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { api } from "@/services/services";
import { Produto } from "@/models/Produto";
import Loading from "@/components/Loading.vue";

import CardProduto from "@/components/CardProduto.vue";

@Component({
  components: {
    CardProduto,
    Loading,
  },
})
export default class Produtos extends Vue {
  produtos: Produto[] = [];
  isTabelaCarregando = true;
  filtro = "";

  headers = [
    {
      text: "Nome",
      align: "start",
      sortable: false,
      value: "nome",
    },
    { text: "Id", value: "id" },
    { text: "Disponível", value: "isDisponivel" },
  ];

  async getPedidos() {
    const response = await api.get("produto");
    this.produtos = response.data;
  }

  created() {
    this.getPedidos();
  }
}
</script>

<style scoped>
</style>
