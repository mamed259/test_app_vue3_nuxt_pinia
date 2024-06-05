<template>
  <div>
    <SearchCategory class="mb-[1.7rem]" />
    <div v-if="category.loading">Loading...</div>
    <div v-if="category.error">Error: {{ category.error.message }}</div>
    <div v-if="getCategoriesWithProduct.length">
      <nuxt-link
        :to="`/products/${category.slug}`"
        v-for="category in getCategoriesWithProduct"
        :key="category.id"
      >
        <CategoryItem :name="category.name" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useCategoriesStore } from "~/store/categoriesStore";

const categoriesStore = useCategoriesStore();
const { getCategoriesWithProduct, category } = storeToRefs(categoriesStore);

const fetchCategoriesData = async () => {
  await categoriesStore.fetchCategories();
};

onMounted(fetchCategoriesData);
</script>
