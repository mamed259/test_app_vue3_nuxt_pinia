<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="category">
      <p class="font-ubuntu_bold text-2xl mb-3">{{ category.name }}</p>
      <BackButton />
      <nuxt-link
        :to="`/product-detail/${product.id}`"
        v-for="product in category.products"
        :key="product.id"
      >
        <CategoryItem :name="product.name" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useCategoriesStore } from "~/store/categoriesStore";

const route = useRoute();
const categoriesStore = useCategoriesStore();

(async () => {
  await categoriesStore.fetchCategories();
})();

const { loading, error } = storeToRefs(categoriesStore);

const category = categoriesStore.getOneCategoryBySlug(slug);

console.log("category", category);
</script>
