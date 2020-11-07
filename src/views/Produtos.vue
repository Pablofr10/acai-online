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
          :footer-props="{
            showFirstLastPage: true,
            itemsPerPageText: 'Total de items por página',
            itemsPerPageOptions: [5, 10, 15],
          }"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Produtos</v-toolbar-title>
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
                    Novo Produto
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
                            label="Nome"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.descricao"
                            label="Descrição"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.preco"
                            label="Preço"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-select
                            v-model="editedItem.categoria"
                            :items="categorias"
                            item-text="nome"
                            item-value="id"
                            attach
                            chips
                            label="Chips"
                            multiple
                          ></v-select>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancelar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="salvarProduto">
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >Tem certeza que deseja excluí esse produto?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >Cancel</v-btn
                    >
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
            <v-chip :color="item.isDisponivel ? 'success' : 'orange'" dark>
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

  categorias = [
    { nome: "Picolé", id: 1 },
    { nome: "Açai", id: 2 },
    { nome: "Sorvete", id: 3 },
  ];

  get formTitle() {
    return this.editedIndex === -1 ? "Novo Produto" : "Editar Produto";
  }

  editedItem: Produto = {
    nome: "",
    isDisponivel: false,
    preco: 0,
    descricao: "",
    imageUrl: "",
    categoria: [],
  };
  defaultItem = {
    nome: "",
    isDisponivel: "",
  };

  async getPedidos() {
    const response = await api.get("produto");
    this.produtos = response.data;
  }

  async adicionarPedido() {
    const response = await api
      .post("produto", this.editedItem)
      .catch((err) => console.log(err));

    this.getPedidos();
  }

  created() {
    this.getPedidos();
  }

  close() {
    this.dialog = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, null);
      this.editedIndex = -1;
    });
  }

  editItem(item) {
    console.log(item);
    this.editedIndex = this.produtos.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  salvarProduto() {
    console.log(this.editedItem);
    if (this.editedIndex > -1) {
      Object.assign(this.produtos[this.editedIndex], this.editedItem);
    } else {
      this.adicionarPedido();
    }
    this.close();
  }
}
</script>

<style scoped>
</style>
