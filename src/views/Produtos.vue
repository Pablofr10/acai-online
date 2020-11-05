<template>
  <div class="mt-5">
    <div v-if="produtos.length">
      <v-container class="grey lighten-5 mb-6">
        <v-row align="start">
          <v-col v-for="produto in produtos" :key="produto.id">
            <CardProduto :produto="produto"></CardProduto>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div v-else>
      <Loading />
    </div>
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
