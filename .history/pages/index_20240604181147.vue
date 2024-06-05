<template>
  <div>
    <h1>Todos:</h1>
    <ul v-for="category in categories" :key="category">
      <li>
        <p>{{ category }}</p>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "~/store/categories";

interface Category {
  name: string;
}

const store = useCategoriesStore();
const { fetchCategories } = store; // have all non reactive stuff here
const { categories } = storeToRefs<Category>(store); // have all reactive states here

await fetchCategories();
</script>
