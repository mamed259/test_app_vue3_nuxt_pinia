<template>
  <nuxt-link
    :to="href"
    class="flex items-center relative rounded-xl pl-3 pr-5 py-4 shadow-[0px_10px_20px_10px_rgba(0,_0,_0,_0.20)] mb-3 cursor-pointer"
  >
    <img src="/flag.svg" alt="Flag" class="mr-3" />
    <span class="font-din_alternate text-sm text-left">{{ name }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="16"
      viewBox="0 0 5 16"
      fill="none"
      class="absolute right-3"
    >
      <path d="M1 15L4 8L1 1" stroke="#005EB8" />
    </svg>
  </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  href: string;
}
defineProps<Props>();
</script>
