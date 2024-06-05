// stores/categoriesStore.ts
import axios from "axios";
import { defineStore } from "pinia";
import { CategoriesState, Category } from "~/types";

export const useCategoriesStore = defineStore("categories", {
  state: (): CategoriesState => ({
    categories: [],
    slugVariable: "",
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
        this.categories = response.data.data.filter(
          (category: Category) => category.products.length > 0
        );
        this.slug = response.data.data.filter(
          (category: Category) => category.slug === this.slug
        );
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.loading = false;
      }
    },
  },
});
