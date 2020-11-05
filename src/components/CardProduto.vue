<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title> {{ produto.nome }}</v-card-title>

      <v-card-subtitle> {{ produto.descricao }}</v-card-subtitle>

      <v-card-actions>
        <v-btn color="primary" @click="dialogVisualizar" fab small dark>
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn color="primary" fab small dark @click="dialogEditar">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn color="error" fab small dark>
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <CardDialogs :dialog="dialog" :title="titulo" @abrirModal="fecharModal">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-hover v-slot="{ hover }" open-delay="200">
                <v-avatar
                  :class="{ 'show-hover': hover && !visualizar }"
                  color="grey"
                  width="100%"
                  height="100%"
                  tile
                >
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  >
                    <div
                      v-if="hover && !visualizar"
                      class="mt-16 mx-auto pa-16"
                    >
                      <v-file-input
                        class="full-wdg"
                        label="File input"
                        dark
                        size="70"
                        full-width
                        hide-input
                        filled
                        prepend-icon="mdi-download"
                      ></v-file-input>
                    </div>
                  </v-img>
                </v-avatar>
              </v-hover>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="Nome do Produto *"
                :readonly="visualizar"
                v-model="produto.nome"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Descrição*"
                required
                :readonly="visualizar"
                v-model="produto.descricao"
              ></v-text-field>
            </v-col>
            <v-col cols="8" sm="8">
              <v-radio-group row v-model="produto.isDisponivel">
                <v-radio
                  label="Disponível"
                  :readonly="visualizar"
                  :value="true"
                ></v-radio>
                <v-radio
                  label="Indisponível"
                  :readonly="visualizar"
                  :value="false"
                ></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4" sm="4">
              <v-text-field
                label="Descrição*"
                required
                :readonly="visualizar"
                v-model="produto.preco"
                v-money="money"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="categorias"
                label="Categorias"
                :readonly="visualizar"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
    </CardDialogs>
  </div>
</template>

<script lang="ts">
import { Produto } from "@/models/Produto";
import CardDialogs from "@/components/CardDialogs.vue";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { VMoney } from "v-money";

@Component({
  components: {
    CardDialogs,
  },
  directives: {
    money: VMoney,
  },
})
export default class extends Vue {
  @Prop() produto!: Produto;

  dialog = false;
  preco = this.produto.preco;
  titulo = "";
  visualizar = false;
  categorias = [
    "Skiing",
    "Ice hockey",
    "Soccer",
    "Basketball",
    "Hockey",
    "Reading",
    "Writing",
    "Coding",
    "Basejump",
  ];

  @Watch("produto.preco")
  watchCount(newValue, oldValue) {
    console.log(newValue);
    this.preco = newValue;
  }

  fecharModal(env: boolean) {
    this.visualizar = false;
    this.dialog = env;
  }

  dialogVisualizar() {
    this.titulo = "Visualizar Produto";
    this.visualizar = true;
    this.dialog = true;
  }

  dialogEditar() {
    this.titulo = "Editar Produto";
    this.visualizar = false;
    this.dialog = true;
  }

  money = {
    decimal: ",",
    thousands: ".",
    prefix: "R$ ",
    precision: 2,
  };
}
</script>

<style scoped>
.v-avatar {
  opacity: 0.6;
  transition: opacity 0.4s ease-in-out;
}

.v-avatar:not(.show-hover) {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
