<template>
  <div>
    <h1>Todos:</h1>
    <ul>
      <li v-for="category in filteredCategories" :key="category.id">
        <div>
          <p>{{ category.name }}</p>
          <nuxt-link :to="`/products/${category.slug}`"
            >View Products</nuxt-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "~/store/categories";

interface Category {
  id: string;
  name: string;
  slug: string;
  products: any[]; // Assuming products is an array
}

const store = useCategoriesStore();
const { fetchCategories } = store; // have all non reactive stuff here
const { categories } = storeToRefs<Category[]>(store); // have all reactive states here

await fetchCategories();

const filteredCategories = categories.filter(
  (category) => category.products.length > 0
);
</script>
