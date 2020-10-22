<template>
  <nav>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer class="primary" v-model="drawer" absolute temporary>
      <v-row justify="center">
        <v-col cols="6" class="mt-5">
          <v-avatar size="100">
            <img src="/img/avatar-1.png" />
          </v-avatar>
          <p class="white--text subheading mt-1">Pablo Araújo</p>
        </v-col>
      </v-row>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="white--text text--accent-4"
        >
          <v-list-item
            v-for="menu in menus"
            :key="menu.id"
            router
            :to="{ name: menu.route }"
          >
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">{{
              menu.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  drawer = false;
  group = null;
  menus = [
    { id: 1, icon: "mdi-view-dashboard", text: "Painel", route: "painel" },
    { id: 2, icon: "mdi-account", text: "Produtos", route: "produtos" },
  ];
}
</script>

<style scoped>
</style>
