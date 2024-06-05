// stores/productStore.ts
import axios from "axios";
import { defineStore } from "pinia";
import { type IResponse, type Product, type ProductState } from "~/types";

export const useProductStore = defineStore("product", {
  state: (): ProductState => ({
    product: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProduct(id: string) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<IResponse<Product>>(
          `https://api.profikalkulator.rigips.cz/products/${id}`
        );
        this.product = response.data;
        console.log(response);
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.loading = false;
      }
    },
  },
});
