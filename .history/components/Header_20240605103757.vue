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
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_1279_57)">
              <path
                d="M14.3698 12.79L10.3398 8.76002C11.0273 7.72043 11.3334 6.47468 11.2058 5.23486C11.0781 3.99503 10.5247 2.83776 9.63984 1.96002C9.13832 1.45086 8.54054 1.04653 7.8813 0.770536C7.22206 0.494547 6.51455 0.352417 5.79987 0.352417C5.08519 0.352417 4.37757 0.494547 3.71833 0.770536C3.05909 1.04653 2.46131 1.45086 1.95979 1.96002C1.02375 2.91185 0.47116 4.17514 0.407541 5.5086C0.343922 6.84205 0.773767 8.15221 1.61494 9.18883C2.45611 10.2255 3.64963 10.9159 4.9676 11.1282C6.28557 11.3406 7.63564 11.06 8.75984 10.34L12.7899 14.37L14.3698 12.79ZM3.00984 8.58002C2.27253 7.8414 1.85887 6.84013 1.85981 5.79649C1.86075 4.75285 2.27621 3.75233 3.01484 3.01502C3.75347 2.27772 4.75477 1.86404 5.79841 1.86497C6.84205 1.86591 7.84248 2.2814 8.57978 3.02002C9.31708 3.75865 9.73087 4.75992 9.72993 5.80356C9.72899 6.8472 9.31341 7.84772 8.57478 8.58502C7.83615 9.32232 6.83497 9.73601 5.79133 9.73507C4.74769 9.73413 3.74714 9.31865 3.00984 8.58002Z"
                fill="#005EB8"
              />
            </g>
            <defs>
              <clipPath id="clip0_1279_57">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Add any scoped styles here */
</style>
