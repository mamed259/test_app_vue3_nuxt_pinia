<!-- pages/products/[...slug].vue -->
<template>
  <div>
    <h1>Product Category: {{ categories }}</h1>
    <!-- <div v-if="category">
      <ul>
        <li v-for="product in category.products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Category not found</p>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "~/store/categories";

interface Category {
  id: string;
  name: string;
  slug: string;
}

const store = useCategoriesStore();
const { fetchCategories } = store; // have all non reactive stuff here
const { categories } = storeToRefs<Category[]>(store); // have all reactive states here

await fetchCategories();
</script>
