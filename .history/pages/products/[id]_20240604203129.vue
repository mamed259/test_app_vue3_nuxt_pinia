<!-- pages/products/[...slug].vue -->
<template>
  <div>
    <div v-if="category">
      <ul>
        <li v-for="product in category.products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading category... {{ slug }}</p>
    </div>
    <span>{{ category }}</span>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);
</script>
