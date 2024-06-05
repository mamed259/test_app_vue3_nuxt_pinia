<template>
  <div>
    <SearchCategory class="mb-[1.7rem]" />
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="getCategoriesWithProduct.length">
      <nuxt-link
        :to="`/products/${category.slug}`"
        v-for="category in getCategoriesWithProduct"
        :key="category.id"
      >
      </nuxt-link>

      <CategoryItem :name="category.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useCategoriesStore } from "~/store/categoriesStore";

const categoriesStore = useCategoriesStore();
const { getCategoriesWithProduct, loading, error } =
  storeToRefs(categoriesStore);

const fetchCategoriesData = async () => {
  await categoriesStore.fetchCategories();
};

onMounted(fetchCategoriesData);
</script>
