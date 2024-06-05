<!-- components/Header.vue -->
<template>
  <header class="bg-white text-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/logo.svg" alt="Logo" class="" />
        <span class="text-xl font-bold">Your Company</span>
      </div>

      <!-- Search Icon -->
      <div>
        <button class="text-white hover:text-gray-400 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16l4-4m0 0l4-4m-4 4h16M4 4v16m0-16h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Add any scoped styles here */
</style>
