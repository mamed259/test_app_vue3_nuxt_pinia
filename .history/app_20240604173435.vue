<script setup lang="ts">
const router = useRouter();

const nav = [{ label: "Home", to: "/" }];
</script>

<template>
  <NuxtExample dir="routing/pages" :nav="nav" current-route>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtExample>
</template>
