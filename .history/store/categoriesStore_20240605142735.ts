// stores/categoriesStore.ts
import axios from "axios";
import { defineStore } from "pinia";
import { type CategoriesState, type Category, type IResponse } from "~/types";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    category: {
categories: Category[],
    loading: false,
    error: null,
    } as CategoriesState,
    
  }),
  actions: {
    async fetchCategories() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<IResponse<Category[]>>(
          "https://api.profikalkulator.rigips.cz/price-list/init"
        );

        this.categories = response.data.data as Category[];
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getCategoriesWithProduct: (state) => {
      return () =>
        state.categories
    },
  },
});
