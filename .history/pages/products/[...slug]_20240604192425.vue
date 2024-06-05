<!-- pages/products/[...slug].vue -->
<template>
  <div>
    <h1>Product Category: {{ category?.name }}</h1>
    <div v-if="category">
      <ul>
        <li v-for="product in category.products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Category not found</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCategoriesStore } from "~/store/categories";

interface Category {
  id: number;
  name: string;
  slug: string;
  products: { id: number; name: string }[];
}

const route = useRoute();
const store = useCategoriesStore();
const { fetchCategories } = store; // have all non reactive stuff here
const { categories } = storeToRefs<Category[]>(store); // have all reactive states here

onMounted(async () => {
  await fetchCategories();
});

const slug = computed(() => route.params.slug);
const category = computed(() =>
  categories.value.find((cat) => cat.slug === slug.value)
);
</script>
