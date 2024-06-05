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
        this.slugVariable = response.data.data.filter(
          (category: Category) => category.slug === this.slugVariable
        );
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.loading = false;
      }
    },
    async productFilterBySlug(slug) {
      category.value = categories.value.filter(
        (cat: Pick<Category, "slug">) => cat.slug === slug.value
      )[0];
    },
  },
});
