import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    product: [],
  }),
  actions: {
    async fetchCategories() {
      const { data }: any = await useFetch(
        `https://api.profikalkulator.rigips.cz/products/${productID}`
      );
      if (data.value) {
        this.product = data.value.data.filter(
          (category: object) => category.products.length > 0
        );
      }
    },
  },
});
