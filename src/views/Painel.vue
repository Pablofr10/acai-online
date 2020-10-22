<template>
  <div>
    <h1 class="display-2">Painel</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas fugiat
      delectus veniam! Facere, dolores corrupti repellendus blanditiis quo porro
      magni optio itaque omnis fugiat labore illum sequi ipsum, modi vitae.
    </p>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" xs="12" lg="9" md="9">
          <TablePedidos />
        </v-col>
        <v-col cols="12" sm="12" xs="12" lg="3" md="3">
          <CardInfo />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TablePedidos from "@/components/TablePedidos.vue";
import CardInfo from "@/components/CardInfo.vue";
import NovoPedido from "@/components/NovoPedido.vue";

@Component({
  components: {
    TablePedidos,
    CardInfo,
    NovoPedido,
  },
})
export default class Painel extends Vue {}
</script>

<style scoped>
</style>
