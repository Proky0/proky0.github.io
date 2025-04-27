<template>
  <div class="relative bg-gray-900/80 min-h-screen overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <i class="absolute text-pink-400/10 text-6xl fa-brands fa-discord" style="top: 20%; left: 10%"></i>
      <i class="absolute text-purple-400/10 text-7xl fa-brands fa-github" style="top: 30%; right: 15%"></i>
      <i class="absolute text-orange-400/10 text-5xl fas fa-gamepad" style="bottom: 25%; left: 20%"></i>
      <i class="absolute text-cyan-400/10 text-6xl fa-brands fa-twitter" style="bottom: 15%; right: 25%"></i>
    </div>

    <div class="-top-20 -left-20 absolute bg-pink-500/10 blur-3xl rounded-md w-64 h-64"></div>
    <div class="-right-20 -bottom-20 absolute bg-purple-500/10 blur-3xl rounded-md w-64 h-64"></div>

    <div class="z-10 relative flex flex-col justify-center items-center px-4 py-20 min-h-screen">
      <div class="gap-6 grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl">
        <div
          class="group relative bg-gray-900/70 backdrop-blur-md border border-indigo-400/20 hover:border-indigo-400/40 rounded-xl overflow-hidden transition-all duration-500"
          @mouseenter="startPulse('discord')"
          @mouseleave="stopPulse('discord')"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div
                id="discord-icon"
                class="flex justify-center items-center bg-indigo-500/10 mr-4 border border-indigo-400/20 rounded-md w-12 h-12"
              >
                <i class="text-indigo-400 text-2xl fab fa-discord"></i>
              </div>
              <h2 class="font-bold text-pink-400 text-xl">{{ $t('contact.discordTitle') }}</h2>
            </div>
            <p class="mb-4 text-gray-300">{{ $t('contact.discordDescription') }}</p>
            <div
              class="bg-indigo-900/20 hover:bg-indigo-900/30 p-3 border border-indigo-400/10 hover:border-indigo-400/20 rounded-lg font-mono text-indigo-200 hover:text-white text-center transition-all duration-300 cursor-pointer"
            >
              proky.
              <div
                class="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span class="bg-indigo-900/80 px-2 py-1 rounded text-xs">{{ $t('contact.copyUsername') }}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="group relative bg-gray-900/70 backdrop-blur-md border border-purple-400/20 hover:border-purple-400/40 rounded-xl overflow-hidden transition-all duration-500"
          @mouseenter="startPulse('github')"
          @mouseleave="stopPulse('github')"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div
                id="github-icon"
                class="flex justify-center items-center bg-purple-500/10 mr-4 border border-purple-400/20 rounded-md w-12 h-12"
              >
                <i class="text-purple-400 text-2xl fab fa-github"></i>
              </div>
              <h2 class="font-bold text-pink-400 text-xl">{{ $t('contact.githubTitle') }}</h2>
            </div>
            <p class="mb-4 text-gray-300">{{ $t('contact.githubDescription') }}</p>
            <a
              href="https://github.com/Proky0"
              target="_blank"
              class="block bg-purple-900/20 hover:bg-purple-900/30 p-3 border border-purple-400/10 hover:border-purple-400/20 rounded-lg font-mono text-purple-200 hover:text-white text-center transition-all duration-300"
            >
              github.com/Proky0
            </a>
          </div>
        </div>

        <div
          class="group relative bg-gray-900/70 backdrop-blur-md border border-orange-400/20 hover:border-orange-400/40 rounded-xl overflow-hidden transition-all duration-500"
          @mouseenter="startPulse('fivem')"
          @mouseleave="stopPulse('fivem')"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div
                id="fivem-icon"
                class="flex justify-center items-center bg-orange-500/10 mr-4 border border-orange-400/20 rounded-md w-12 h-12"
              >
                <i class="text-orange-400 text-2xl fas fa-gamepad"></i>
              </div>
              <h2 class="font-bold text-pink-400 text-xl">{{ $t('contact.fivemTitle') }}</h2>
            </div>
            <p class="mb-4 text-gray-300">{{ $t('contact.fivemDescription') }}</p>
            <a
              href="https://forum.cfx.re/u/proky"
              target="_blank"
              class="block bg-orange-900/20 hover:bg-orange-900/30 p-3 border border-orange-400/10 hover:border-orange-400/20 rounded-lg font-mono text-orange-200 hover:text-white text-center transition-all duration-300"
            >
              forum.cfx.re
            </a>
          </div>
        </div>

        <div
          class="group relative bg-gray-900/70 backdrop-blur-md border border-cyan-400/20 hover:border-cyan-400/40 rounded-xl overflow-hidden transition-all duration-500"
          @mouseenter="startPulse('twitter')"
          @mouseleave="stopPulse('twitter')"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div
                id="twitter-icon"
                class="flex justify-center items-center bg-cyan-500/10 mr-4 border border-cyan-400/20 rounded-md w-12 h-12"
              >
                <i class="text-cyan-400 text-2xl fab fa-twitter"></i>
              </div>
              <h2 class="font-bold text-pink-400 text-xl">{{ $t('contact.twitterTitle') }}</h2>
            </div>
            <p class="mb-4 text-gray-300">{{ $t('contact.twitterDescription') }}</p>
            <a
              href="https://x.com/Proky0"
              target="_blank"
              class="block bg-cyan-900/20 hover:bg-cyan-900/30 p-3 border border-cyan-400/10 hover:border-cyan-400/20 rounded-lg font-mono text-cyan-200 hover:text-white text-center transition-all duration-300"
            >
              @Proky0
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const startPulse = (id: string): void => {
  const icon = document.getElementById(`${id}-icon`);
  if (icon) {
    icon.classList.add('animate-pulse');
  }
};

const stopPulse = (id: string): void => {
  const icon = document.getElementById(`${id}-icon`);
  if (icon) {
    icon.classList.remove('animate-pulse');
  }
};

onMounted(() => {
  // Add any initialization code here
});
</script>

<style scoped>
/* Grid Background */
.grid-bg {
  background-image:
    linear-gradient(to right, rgba(255, 0, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 0, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Animated Gradient */
.animate-gradient {
  background-size: 300% 300%;
  animation: gradient 8s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Pulse Animation */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
  }
}

.animate-pulse {
  animation: pulse 1.5s infinite;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>
