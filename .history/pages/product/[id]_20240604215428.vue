<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
    </div>
    {{ product }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "~/store/productStore";

const route = useRoute();
const productStore = useProductStore();

const fetchProductData = () => {
  if (route.params.id) {
    productStore.fetchProduct(route.params.id as string);
  }
};

onMounted(fetchProductData);
watch(() => route.params.id, fetchProductData);

const { product, loading, error } = productStore;

console.log(productStore);
</script>
