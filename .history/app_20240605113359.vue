<template>
  <div class="main">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style>
.main {
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
