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
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useCategoriesStore } from "~/store/categoriesStore";

const categoriesStore = useCategoriesStore();
const { loading, error } = storeToRefs(categoriesStore);

const route = useRoute();

const category;

categoriesStore.fetchCategories().then((_) => {
  const slug = route.params.slug[0];
  console.log(slug);
  category = categoriesStore.getOneCategoryBySlug(slug);
});
</script>
