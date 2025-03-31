<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="z-50 bg-black/80 shadow-lg backdrop-blur-sm px-4 py-4 border-pink-400/20 border-b w-full">
    <div class="flex md:flex-row flex-col justify-between items-center px-10">
      <div class="mb-4 md:mb-0 md:text-left">
        <p class="text-pink-400">&copy; 2025 My Portfolio. All rights reserved.</p>
      </div>

      <div class="md:left-1/2 md:absolute flex space-x-6 mb-4 md:mb-0 md:-translate-x-1/2 md:transform">
        <a href="#" class="text-pink-400 hover:text-purple-400 transition-colors">
          <i class="text-2xl fab fa-github"></i>
        </a>
        <a href="#" class="text-pink-400 hover:text-purple-400 transition-colors">
          <i class="text-2xl fab fa-discord"></i>
        </a>
        <a href="#" class="text-pink-400 hover:text-purple-400 transition-colors">
          <i class="text-2xl fab fa-twitter"></i>
        </a>
        <a href="#" class="text-pink-400 hover:text-purple-400 transition-colors">
          <i class="text-2xl fab fa-linkedin"></i>
        </a>
      </div>

      <div class="md:text-right">
        <button @click="scrollToTop" class="text-pink-400 hover:text-purple-400 transition-colors">
          <i class="text-2xl fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
footer {
  border-top: 1px solid rgba(255, 0, 255, 0.1);
}
</style>
