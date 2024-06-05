<template>
  <span>Slug: {{ $route.params }}</span>
</template>

<script setup>
const route = useRoute();
console.log(route.params); // { id: '123' }
</script>
