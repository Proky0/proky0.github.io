<template>
  <div class="relative flex flex-col bg-cover bg-center bg-fixed min-h-screen" :style="backgroundStyle">
    <Header />

    <!-- Contenu avec fade-in progressif -->
    <transition name="text-fade" mode="out-in">
      <router-view v-if="!isLoading" class="flex-grow" v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </transition>

    <AudioPlayer />

    <Footer v-if="!isLoading" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import BackgroundImage from './assets/images/background.jpg';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AudioPlayer from './components/AudioPlayer.vue';

const router = useRouter();
const isLoading = ref(false);

router.beforeEach(() => (isLoading.value = true));
router.afterEach(() => setTimeout(() => (isLoading.value = false), 850));

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${BackgroundImage})`, // Chemin vers votre image
}));
</script>

<style>
body {
  background-color: #0d0d0d;
  color: white;
}

/* Loader pleine page */
.fade-loader-enter-active,
.fade-loader-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-loader-enter,
.fade-loader-leave-to {
  opacity: 0;
}

.text-fade-enter-active,
.text-fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.text-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.text-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
