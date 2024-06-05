<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: Page not found</div>
    <div v-if="product">
      <BackButton />
      <p class="font-ubuntu_bold text-2xl mb-3">{{ product.name }}</p>
      <div class="flex min-h-screen gap-5">
        <div class="w-3/5">
          <p class="font-roboto_regular text-xs">
            {{ product.description }}
          </p>
        </div>
        <div class="w-2/5">
          <img src="/product.svg" alt="Flag" class="w-full max-w-40 mx-auto" />
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
