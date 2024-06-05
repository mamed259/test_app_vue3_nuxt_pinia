// stores/productStore.ts
import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: null,
    loading: false,
    error: null,
  }),
  actions: async function fetchProduct(id: string) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get(
        `https://api.profikalkulator.rigips.cz/products/${id}`
      );
      this.product = response.data;
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  },
});
