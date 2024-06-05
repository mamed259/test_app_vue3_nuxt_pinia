// stores/categoriesStore.ts
import axios from "axios";
import { defineStore } from "pinia";
import { type CategoriesState, type Category, type IResponse } from "~/types";

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
        const response = await axios.get<IResponse<Category[]>>(
          "https://api.profikalkulator.rigips.cz/price-list/init"
        );

        this.categories = response.data.data;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getCategoriesWithProduct({ categories }): Category[] {
      return categories.filter(
        (category: Category) => category.products.length > 0
      );
    },
    getOneCategoryBySlug({ categories }) {
      return (slug: string): Category | undefined => {
        console.log("dfdfdfdfdfdfdfdfdf");

        return categories.find((category: Category) => category.slug === slug);
      };
    },
  },
});
