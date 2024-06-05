<template>
  <span>Slug: {{ $route.params.slug[0] }}</span>
</template>

<script setup>
const route = useRoute();
console.log(route.params); // { id: '123' }
</script>
