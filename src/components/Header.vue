<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="top-0 z-50 sticky bg-black/90 backdrop-blur-lg border-pink-400/30 border-b neon-header">
    <div class="mx-auto px-4 container">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="group flex items-center space-x-2" aria-label="Accueil">
          <div
            class="flex justify-center items-center bg-gradient-to-r from-pink-400 to-purple-500 rounded-md w-8 h-8 neon-logo">
            <i class="text-white text-sm fas fa-code"></i>
          </div>
          <h1
            class="bg-clip-text bg-gradient-to-r group-hover:bg-gradient-to-r from-pink-400 group-hover:from-pink-300 to-purple-400 group-hover:to-purple-300 font-bold text-transparent text-2xl transition-all duration-300">
          </h1>
        </router-link>

        <nav class="hidden md:flex items-center space-x-6">
          <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
            class="group relative py-1 font-medium text-gray-300 hover:text-white text-sm uppercase tracking-wider transition-colors"
            active-class="text-pink-400">
            {{ $t(`header.${link.name.toLowerCase()}`) }}
            <span
              class="bottom-0 left-0 absolute bg-pink-400 w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
          </router-link>
        </nav>

        <button @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden focus:outline-none text-gray-300 hover:text-pink-400" aria-label="Menu mobile">
          <i class="text-xl fas fa-bars"></i>
        </button>
      </div>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-show="isMobileMenuOpen" class="md:hidden space-y-4 mt-2 py-4 border-pink-400/20 border-t">
          <router-link v-for="link in navLinks" :key="link.path"
            :to="{ name: link.nameRoute, params: { locale: $i18n.locale } }"
            class="block hover:bg-gray-800/50 px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white text-base transition-colors"
            active-class="text-pink-400 bg-gray-800/50" @click="isMobileMenuOpen = false">
            {{ $t(`header.${link.name.toLowerCase()}`) }}
          </router-link>

          <button
            class="flex items-center bg-gradient-to-r from-pink-500 hover:from-pink-400 to-purple-600 hover:to-purple-500 ml-4 px-4 py-2 rounded-lg font-bold text-white text-sm tracking-wider transition-all duration-300">
            <i class="mr-2 fas fa-book-open"></i>
            {{ $t('header.docs') }}
          </button>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Scripts', path: '/scripts' },
  { name: 'Contact', path: '/contact' },
];
</script>

<style scoped>
/* Effet néon pour le header */
.neon-header {
  box-shadow:
    0 0 10px rgba(236, 72, 153, 0.3),
    0 0 20px rgba(236, 72, 153, 0.2),
    0 0 30px rgba(236, 72, 153, 0.1);
}

/* Animation du logo */
.neon-logo {
  animation: pulse 2s infinite alternate;
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

/* Effet de survol pour les liens */
.router-link-active {
  position: relative;
}

/* Transition pour le menu mobile */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
