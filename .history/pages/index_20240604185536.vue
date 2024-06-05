<template>
  <div>
    <h1>Todos:</h1>
    <!-- {{ categories }} -->
    <ul v-for="category in categories" :key="category.id">
      <li>
        <p>{{ category.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from gories";

interface Category {
  name: string;
}

const store = useCategoriesStore();
const { fetchCategories } = store; // have all non reactive stuff here
const { categories } = storeToRefs<Category>(store); // have all reactive states here

await fetchCategories();
</script>
