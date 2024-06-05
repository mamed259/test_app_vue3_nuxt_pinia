// stores/categoriesStore.ts
import axios from "axios";
import { defineStore } from "pinia";
import { type CategoriesState, type Category, type IResponse } from "~/types";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    category: {
      categories: [],
      loading: false,
      error: null,
    } as CategoriesState,
  }),
  actions: {
    async fetchCategories() {
      this.category.loading = true;
      this.category.error = null;
      try {
        const response = await axios.get<IResponse<Category[]>>(
          "https://api.profikalkulator.rigips.cz/price-list/init"
        );

        this.category.categories = response.data.data as Category[];
      } catch (error) {
        this.category.error = error as Error;
      } finally {
        this.category.loading = false;
      }
    },
  },
  getters: {
    getCategoriesWithProduct: (state) => {
      return (): Category[] =>
        state.category.categories.filter(
          (category: Category) => category.products.length > 0
        ) as Category[];
    },
  },
});
