<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="relative bg-black/90 backdrop-blur-lg py-12 border-pink-400/20 border-t overflow-hidden">
    <!-- Floating Elements -->
    <div class="-bottom-20 -left-20 absolute bg-pink-500/10 blur-3xl rounded-full w-64 h-64"></div>
    <div class="-top-20 -right-20 absolute bg-purple-500/10 blur-3xl rounded-full w-64 h-64"></div>

    <!-- Grid Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-bg w-full h-full"></div>
    </div>

    <div class="z-10 relative mx-auto px-4 container">
      <!-- Main Footer Content -->
      <div class="flex md:flex-row flex-col justify-between items-center">
        <!-- Logo & Copyright -->
        <div class="mb-6 md:mb-0">
          <div class="flex justify-center md:justify-start items-center space-x-2">
            <div
              class="flex justify-center items-center bg-gradient-to-r from-pink-400 to-purple-500 rounded-full w-8 h-8 neon-logo"
            >
              <i class="text-white text-xs fas fa-code"></i>
            </div>
          </div>
          <p class="mt-3 text-gray-500 text-sm">
            © {{ new Date().getFullYear() }} FiveM Script Archive. Tous droits réservés.
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex flex-col items-center md:items-end space-y-4">
          <div class="flex space-x-6">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.url"
              target="_blank"
              class="group relative text-gray-400 hover:text-pink-400 text-xl transition-colors"
              :aria-label="social.name"
            >
              <i :class="social.icon"></i>
              <span class="social-tooltip">{{ social.name }}</span>
            </a>
          </div>

          <!-- Back to Top Button -->
          <button
            @click="scrollToTop"
            class="group flex items-center mt-4 md:mt-0 text-gray-400 hover:text-pink-400 transition-colors"
          >
            <span class="mr-2 text-sm">Haut de page</span>
            <i class="text-xs transition-transform group-hover:-translate-y-1 fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = [
  { name: 'GitHub', icon: 'fab fa-github', url: '#' },
  { name: 'Discord', icon: 'fab fa-discord', url: '#' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
  { name: 'FiveM', icon: 'fas fa-gamepad', url: '#' },
];

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
/* Grid Background */
.grid-bg {
  background-image:
    linear-gradient(to right, rgba(255, 0, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 0, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Logo Animation */
.neon-logo {
  animation: pulse 4s infinite alternate;
  box-shadow:
    0 0 5px rgba(236, 72, 153, 0.5),
    0 0 10px rgba(236, 72, 153, 0.3);
}

@keyframes pulse {
  0% {
    box-shadow:
      0 0 5px rgba(236, 72, 153, 0.5),
      0 0 10px rgba(236, 72, 153, 0.3);
  }
  100% {
    box-shadow:
      0 0 10px rgba(236, 72, 153, 0.8),
      0 0 20px rgba(236, 72, 153, 0.5),
      0 0 30px rgba(236, 72, 153, 0.2);
  }
}

/* Social Tooltips */
.social-tooltip {
  @apply invisible absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.group:hover .social-tooltip {
  @apply visible;
  opacity: 1;
}

/* Border Animation */
footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.4), transparent);
  animation: borderGlow 3s infinite;
}

@keyframes borderGlow {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
