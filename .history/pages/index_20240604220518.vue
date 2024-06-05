<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="categories.length">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <div v-if="category.products.length">
            <p>{{ category.name }}</p>
            <nuxt-link :to="`/category-detail/${category.slug}`"
              >View Products</nuxt-link
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useCategoriesStore } from "~/store/categoriesStore";

const categoriesStore = useCategoriesStore();
const { categories, loading, error } = storeToRefs(categoriesStore);

const fetchCategoriesData = async () => {
  await categoriesStore.fetchCategories();
};

onMounted(fetchCategoriesData);
</script>
