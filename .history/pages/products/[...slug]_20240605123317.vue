<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="category">
      <ul>
        <li v-for="product in category.products" :key="product.id">
          {{ product.name }}
          <nuxt-link :to="`/product-detail/${product.id}`"
            >View Details</nuxt-link
          >
        </li>
      </ul>
      <nuxt-link
        :to="`/products/${category.slug}`"
        v-for="category in categories"
        :key="category.id"
      >
        <CategoryItem :name="category.name" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Category } from "@/types";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useCategoriesStore } from "~/store/categoriesStore";

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
        (cat: Pick<Category, "slug">) => cat.slug === slug.value
      )[0];
      console.log(12, categories);
    }
  },
  { immediate: true }
);
</script>
