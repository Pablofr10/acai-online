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
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>My CRUD</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    New Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.nome"
                            label="Dessert nome"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.isDisponivel"
                            label="Calories"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text> Cancel </v-btn>
                    <v-btn color="blue darken-1" text> Save </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text>Cancel</v-btn>
                    <v-btn color="blue darken-1" text>OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
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
  dialog = false;
  dialogDelete = false;
  editedIndex = -1;
  headers = [
    {
      text: "Nome",
      align: "start",
      sortable: false,
      value: "nome",
    },
    { text: "Id", value: "id" },
    { text: "Disponível", value: "isDisponivel" },
    { text: "Actions", value: "actions", sortable: false },
  ];

  get formTitle() {
    return this.editedIndex === -1 ? "New Item" : "Edit Item";
  }

  editedItem = {
    nome: "",
    isDisponivel: "",
  };
  defaultItem = {
    nome: "",
    isDisponivel: "",
  };

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
