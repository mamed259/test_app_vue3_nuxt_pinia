<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="category">
      <p class="font-ubuntu_bold text-2xl mb-3">{{ category.name }}</p>
      <BackButton />
      <CategoryItem
        v-for="product in category.products"
        :name="product.name"
        :href="`/product-detail/${product.id}`"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCategoriesStore } from "~/store/categoriesStore";

const categoriesStore = useCategoriesStore();
const { loading, error } = storeToRefs(categoriesStore);

const route = useRoute();
const category = computed(() =>
  categoriesStore.getOneCategoryBySlug(route.params.slug[0])
);

const fetchCategoriesData = async () => {
  await categoriesStore.fetchCategories();
};

onMounted(fetchCategoriesData);
</script>
