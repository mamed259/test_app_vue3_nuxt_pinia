<template>
  <button
    @click="goBack"
    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Back
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
