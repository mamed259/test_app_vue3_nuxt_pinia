<template>
  <span>Slug: {{ $route.params.slug[0] }}</span>
</template>

<script setup>
const route = useRoute();
console.log(route.params); // { id: '123' }

import { onMounted } from "vue";

onMounted(() => {
  console.log(121212);
});
</script>
