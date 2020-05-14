<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h3>Github Repository Search</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon @click="changeTheme()">
        <v-icon dark>
          {{ getChangeThemeButtonIcon() }}
        </v-icon>
      </v-btn>

      <v-btn
        href="https://github.com/Kidoncio/github-repository-search-vue"
        target="_blank"
        text
        fab
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Main />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "./components/Main.vue";

export default Vue.extend({
  name: "App",

  components: {
    Main
  },

  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    getChangeThemeButtonIcon() {
      return this.$vuetify.theme.dark
        ? "mdi-white-balance-sunny"
        : "mdi-weather-night";
    }
  },

  data() {
    return {
      $vuetify: {
        theme: {
          dark: true
        }
      }
    };
  },
});
</script>
