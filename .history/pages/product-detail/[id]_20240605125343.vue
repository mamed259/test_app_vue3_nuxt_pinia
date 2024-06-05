<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: Page not found</div>
    <div v-if="product">
      <p class="font-ubuntu_bold text-2xl mb-3">{{ product.name }}</p>
      <img src="/product.svg" alt="Flag" class="mr-3" />
      <div class="flex min-h-screen">
        <div class="w-3/5 bg-gray-200 p-4">
          <!-- Content for the 60% width section -->
          <h1 class="text-xl font-bold">60% Width Section</h1>
          <p>This is the content for the 60% width section.</p>
        </div>
        <div class="w-2/5 bg-gray-300 p-4">
          <!-- Content for the 40% width section -->
          <h1 class="text-xl font-bold">40% Width Section</h1>
          <p>This is the content for the 40% width section.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "~/store/productStore";

const route = useRoute();
const productStore = useProductStore();

const { product, loading, error } = storeToRefs(productStore);

const fetchProductData = () => {
  if (route.params.id) {
    productStore.fetchProduct(route.params.id as string);
  }
};

onMounted(fetchProductData);
watch(() => route.params.id, fetchProductData);
</script>
