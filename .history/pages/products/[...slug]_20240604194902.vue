<!-- pages/products/[...slug].vue -->
<template>
  <div>
    <h1>Product Category: {{ categories }}</h1>
    <div v-if="category">
      <ul>
        <li v-for="product in category.products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading category...</p>
    </div>
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
const { categories } = storeToRefs<Category[]>(store); // have all reactive states here
await fetchCategories();

// Reactive reference for category
const category = ref<Category | null>(null);

// Extract slug from route parameters
const slug = computed(() => route.params.slug);

// Fetch categories if not already fetched

// Watch for changes in categories or slug
watch(
  [categories, slug],
  () => {
    if (categories.value.length) {
      category.value =
        categories.value.find((cat) => cat.slug === slug.value) || null;
    }
  },
  { immediate: true }
);
</script>
