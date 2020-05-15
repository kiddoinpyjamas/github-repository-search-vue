<template>
  <v-card class="mx-auto" v-if="items && items.length > 0">
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-avatar>
          <v-img
            :src="item.owner.avatar_url"
            @click="goToUserProfile(item)"
            style="cursor: pointer"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.full_name"></v-list-item-title>

          <v-list-item-subtitle
            v-text="item.description"
          ></v-list-item-subtitle>
        </v-list-item-content>

        <v-badge
          v-if="item.open_issues > 0"
          color="secondary"
          :content="item.open_issues"
          style="margin-right: 1.2em;"
        >
          <v-icon color="primary">
            mdi-bug-outline
          </v-icon>
        </v-badge>

        <v-icon
          v-if="item.open_issues === 0"
          color="grey"
          style="margin-right: 0.82em;"
        >
          mdi-bug-outline
        </v-icon>

        <v-badge
          v-if="item.forks > 0"
          color="secondary"
          :content="item.forks"
          style="margin-right: 1.2em;"
        >
          <v-icon color="primary">
            mdi-source-fork
          </v-icon>
        </v-badge>

        <v-icon
          v-if="item.forks === 0"
          color="grey"
          style="margin-right: 0.82em;"
        >
          mdi-source-fork
        </v-icon>

        <v-badge
          v-if="item.stargazers_count > 0"
          color="secondary"
          :content="item.stargazers_count"
          style="margin-right: 1.2em;"
        >
          <v-icon color="primary">
            mdi-star
          </v-icon>
        </v-badge>

        <v-icon
          v-if="item.stargazers_count === 0"
          color="grey"
          style="margin-right: 0.82em;"
        >
          mdi-star
        </v-icon>

        <v-btn @click="goToGitHubRepository(item)" text fab>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SearchResponseItem } from "../interfaces/serach-response.interface";

@Component
export default class RepositoryList extends Vue {
  @Prop({ default: [] })
  readonly items!: Array<SearchResponseItem>;

  goToUserProfile(item: SearchResponseItem): void {
    const url: string = item.owner.html_url;

    this.openUrl(url);
  }

  goToGitHubRepository(item: SearchResponseItem): void {
    const url: string = item.html_url;

    this.openUrl(url);
  }

  private openUrl(url: string): void {
    const win: Window | null = window.open(url, "_blank");

    if (win) win.focus();
  }
}
</script>
