<template>
  <v-container grid-list-md text-center style="margin-top: 1em;">
    <v-layout
      align-center
      justify-center
      row
      fill-height
      fill-width
      text-center
      style="margin: 0;"
    >
      <v-flex
        xs10
        text-center
        style="padding: 0 !important; min-width: 360px !important;"
      >
        <v-row align="center" justify="center">
          <v-flex lg3 md3 sm12 xs12>
            <v-text-field
              v-model="languageName"
              label="Language"
              outlined
            ></v-text-field>
          </v-flex>

          <v-flex lg3 md3 sm12 xs12>
            <v-text-field
              v-model="repositoryName"
              label="Repository name"
              outlined
            ></v-text-field>
          </v-flex>

          <v-flex lg3 md3 sm12 xs12>
            <v-select
              v-model="sortBy"
              :items="sortByOptions"
              item-text="name"
              item-value="value"
              label="Sort by"
              outlined
            ></v-select>
          </v-flex>

          <v-flex lg1 md3 sm12 style="margin-bottom: 1.8em">
            <v-btn
              @click="searchRepos()"
              :loading="isLoading"
              color="secondary"
              outlined
              dark
              large
              >Search</v-btn
            >
          </v-flex>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SortByEnum } from "../interfaces/sort-by.interface";
import http from "../services/http";
import { AxiosResponse } from "axios";

@Component
export default class SearchForm extends Vue {
  private readonly sortByOptions: object[] = [
    {
      name: "Stars",
      value: SortByEnum.STARS
    },
    {
      name: "Forks",
      value: SortByEnum.FORKS
    },
    {
      name: "Help wanted issues",
      value: SortByEnum.HELP_WANTED_ISSUES
    }
  ];

  private languageName = "JavaScript";
  private repositoryName = "";
  private sortBy: SortByEnum = SortByEnum.STARS;
  private isLoading = false;

  private searchRepos(): void {
    this.isLoading = true;

    http
      .get("/search", {
        params: {
          language: this.languageName,
          name: this.repositoryName,
          sort: this.sortBy,
        },
      })
      .then((axiosResponse: AxiosResponse) => {
        this.$emit("changeData", axiosResponse.data);

        this.isLoading = false;
      });
  }
}
</script>
