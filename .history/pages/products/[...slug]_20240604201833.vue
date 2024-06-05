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
    <h1>Product Category: {{ category }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useCategoriesStore } from "~/store/categories";

interface Product {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  products: Product[];
}

const route = useRoute();
const store = useCategoriesStore();
const { fetchCategories } = store;
const { categories } = storeToRefs(store);

// Reactive reference for category
const category = ref<Category | null>(null);

// Extract slug from route parameters
const slug = computed(() => route.params.slug[0]);

// Fetch categories if not already fetched
await fetchCategories();

// Watch for changes in categories or slug
// Watch for changes in categories or slug
watch(
  [categories, slug],
  () => {
    if (categories.value.length) {
      category.value = categories.value.filter(
        (cat) => cat.slug === slug.value
      )[0];
    }
  },
  { immediate: true }
);
</script>
