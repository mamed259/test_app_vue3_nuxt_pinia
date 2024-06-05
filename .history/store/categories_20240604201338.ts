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
        this.response = data.value.data;
        this.categories = response.value.filter(
          (category) => category.products.length > 0
        );
      }
    },
  },
});
