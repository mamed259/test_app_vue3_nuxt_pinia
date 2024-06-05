// stores/categoriesStore.ts
import axios from "axios";
import { defineStore } from "pinia";
import { type CategoriesState } from "~/types";

export const useCategoriesStore = defineStore("categories", {
  state: (): CategoriesState => ({
    categories: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          "https://api.profikalkulator.rigips.cz/price-list/init"
        );
        this.categories = response.data.
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getUserById: (state) => {
      return (slug: string) =>
        state.categories.find((category) => category.slug === slug);
    },
  },
});
