import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      const { data }: any = await useFetch(
        "https://api.profikalkulator.rigips.cz/price-list/init"
      );
      if (data.value) {
        this.categories = data.value;
      }
    },
  },
});