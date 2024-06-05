<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="category">
      <ul>
        <li v-for="product in category.products" :key="product.id">
          {{ product.name }}
          <nuxt-link :to="`/product/${product.id}`">View Details</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useCategoriesStore } from "~/store/categoriesStore";
// import { Category, Product } from "~/types";

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
const { categories, loading, error } = storeToRefs(store);

// Reactive reference for category
const category = ref<Category | null>(null);

// Extract slug from route parameters
const slug = computed(() => route.params.slug[0]);

// Fetch categories if not already fetched
onMounted(async () => {
  if (!categories.value.length) {
    await fetchCategories();
  }
});
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
