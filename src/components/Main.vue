<template>
  <v-container>
    <SearchForm @changeData="getItems($event)" />

    <RepositoryList :items="items" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchForm from "./SearchForm.vue";
import RepositoryList from "./RepositoryList.vue";
import {
  SearchResponse,
  SearchResponseItem
} from "../interfaces/serach-response.interface";

@Component({
  components: {
    SearchForm,
    RepositoryList
  }
})
export default class Main extends Vue {
  private items: SearchResponseItem[] = [];

  private getItems(data: SearchResponse): void {
    if (data.items) this.items = data.items;
  }
}
</script>
