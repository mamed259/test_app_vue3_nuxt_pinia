<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: Page not found</div>
    <div v-if="product">
      <p class="font-ubuntu_bold text-2xl mb-3">{{ category.name }}</p>
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
