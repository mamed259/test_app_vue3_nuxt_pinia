<template>
  <div>
    <h1>Todos:</h1>
    <ul v-for="todo in categories" :key="todo">
      <li>{{ todo }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "~/store/categories";

const store = useCategoriesStore();
const { fetchCategories } = store; // have all non reactiave stuff here
const { categories } = storeToRefs(store); // have all reactive states here

await fetchCategories();
</script>
