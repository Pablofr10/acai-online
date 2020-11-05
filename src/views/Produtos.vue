<template>
  <div class="mt-5">
    <div colas>
      <v-container class="grey lighten-5 mb-6">
        <v-row align="start">
          <v-col v-for="produto in produtos" :key="produto.id">
            <CardProduto :produto="produto"></CardProduto>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { api } from "@/services/services";
import { Produto } from "@/models/Produto";

import CardProduto from "@/components/CardProduto.vue";

@Component({
  components: {
    CardProduto,
  },
})
export default class Produtos extends Vue {
  produtos: Produto[] = [];

  async getPedidos() {
    const response = await api.get("produto");
    this.produtos = response.data;
    console.log(this.produtos);
  }

  created() {
    this.getPedidos();
  }
}
</script>

<style scoped>
</style>
