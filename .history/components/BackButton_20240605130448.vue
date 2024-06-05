<template>
  <button
    @click="goBack"
    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="10"
      viewBox="0 0 4 10"
      fill="none"
    >
      <path d="M3 0.5L1.07143 5L3 9.5" stroke="#005EB8" />
    </svg>
    zpět
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
