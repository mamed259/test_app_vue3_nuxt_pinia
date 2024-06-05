<template>
  <div>
    <SearchCategory class="mb-[1.7rem]" />

    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="categories.length">
      <nuxt-link
        :to="`/products/${category.slug}`"
        v-for="category in categories"
        :key="category.id"
      >
        <CategoryItem :name="category.name" />
      </nuxt-link>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <div v-if="category.products.length">
            <p>{{ category.name }}</p>
            <nuxt-link :to="`/products/${category.slug}`"
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
