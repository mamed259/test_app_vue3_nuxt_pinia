<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="category">
      <p class="font-ubuntu_bold text-2xl mb-3">{{ category.name }}</p>
      <BackButton />
      <nuxt-link
        :to="`/product-detail/${product.id}`"
        v-for="product in category.products"
        :key="product.id"
      >
        <CategoryItem :name="product.name" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Category } from "@/types";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCategoriesStore } from "~/store/categoriesStore";

const route = useRoute();
const store = useCategoriesStore();
const { fetchCategories } = store;
const slug = computed(() => route.params.slug[0]);

const { getOneCategoryBySlug, loading, error } = storeToRefs(store);
// Reactive reference for category
const category = ref<Category | null>(null);

// Fetch categories if not already fetched
const fetchCategoriesData = async () => {
  await categoriesStore.fetchCategories();
};

onMounted(fetchCategoriesData);
// Watch for changes in categories or slug
// watch(
//   [categories, slug],
//   () => {
//     if (categories.value.length) {
//       category.value = categories.value.filter(
//         (cat: Pick<Category, "slug">) => cat.slug === slug.value
//       )[0];
//       console.log(12, categories);
//     }
//   },
//   { immediate: true }
// );
</script>
