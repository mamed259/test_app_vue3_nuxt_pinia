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
        this.categories = data.value.data;
      }
    },
  },
  getters: {
    getUserById: (state) => {
      return (slug: any) =>
        state.categories.find(
          (category): category is { slug: string } => category.slug === slug
        );
    },
  },
});
