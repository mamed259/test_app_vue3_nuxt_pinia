<!-- pages/products/[...slug].vue -->
<template>
  <div>
    <div v-if="category">
      <ul>
        <li v-for="product in category.products" :key="category.products.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>siktir</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useCategoriesStore } from "~/store/categoriesStore";

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
~/store/categoriesStore
