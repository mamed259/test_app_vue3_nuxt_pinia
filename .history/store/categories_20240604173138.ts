import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      const { data }: any = await useFetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (data.value) {
        this.categories = data.value;
      }
    },
  },
});
