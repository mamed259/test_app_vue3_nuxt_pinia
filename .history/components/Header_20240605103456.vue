<!-- components/Header.vue -->
<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/logo.svg" alt="Logo" class="h-8 w-8 mr-2" />
        <span class="text-xl font-bold">Your Company</span>
      </div>
      <!-- Navigation -->
      <nav>
        <ul class="flex space-x-4">
          <li><NuxtLink to="/" class="hover:text-gray-400">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/about" class="hover:text-gray-400">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-gray-400"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>
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
