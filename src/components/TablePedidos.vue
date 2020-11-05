<template>
  <div>
    <div class="d-flex mb-4 justify-end">
      <NovoPedido />
    </div>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-card flat v-for="(project, index) in desserts" :key="index">
        <v-row :class="`pa-2 project ${project.status}`">
          <v-col md="6" xs="12" cols="12">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.nome }}</div>
          </v-col>
          <v-col xs="12" sm="4" md="2" cols="12">
            <div class="caption grey--text">Person</div>
            <div>{{ project.total }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2" cols="12">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.status }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2" cols="12">
            <div class="text-right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2 text-capitalize`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NovoPedido from "@/components/NovoPedido.vue";

@Component({
  components: {
    NovoPedido,
  },
})
export default class TabelaPedidos extends Vue {
  search = "";
  headers = [
    {
      text: "Nome",
      filterable: false,
      value: "nome",
    },
    { text: "Horário do pedido", value: "horaPedido" },
    { text: "Total do Pedido", value: "total" },
    { text: "Status", value: "status" },
  ];
  desserts = [
    {
      nome: "Lucas da Silva Souza",
      horaPedido: "12:40",
      total: 10.0,
      status: "pendente",
    },
    {
      nome: "Lucas da Silva Souza",
      horaPedido: "17:40",
      total: 12.0,
      status: "confirmado",
    },
    {
      nome: "Lucas da Silva Souza",
      horaPedido: "12:40",
      total: 10.0,
      status: "fazendo",
    },
    {
      nome: "Lucas da Silva Souza",
      horaPedido: "12:40",
      total: 10.0,
      status: "pronto",
    },
    {
      nome: "Lucas da Silva Souza",
      horaPedido: "12:40",
      total: 10.0,
      status: "entrege",
    },
    {
      nome: "Lucas da Silva Souza",
      horaPedido: "12:40",
      total: 10.0,
      status: "caminho",
    },
  ];
}
</script>

<style>
.blue {
  background: lightcoral;
}

.v-chip.pendente {
  background: #fed330 !important;
}
.v-chip.confirmado {
  background: #94e2e4 !important;
}
.v-chip.fazendo {
  background: #a020f0 !important;
}
.v-chip.pronto {
  background: #808000 !important;
}
.v-chip.entrege {
  background: #2e8b57 !important;
}
.v-chip.caminho {
  background: #1ad1ce !important;
}
</style>
