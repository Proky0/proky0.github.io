<template>
  <div class="relative bg-gray-900/80 min-h-screen overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <i class="absolute text-pink-400/10 text-6xl fa-brands fa-vuejs" style="top: 20%; left: 10%"></i>
      <i class="absolute text-purple-400/10 text-7xl fa-brands fa-js" style="top: 30%; right: 15%"></i>
      <i class="absolute text-blue-400/10 text-5xl fa-brands fa-css3" style="bottom: 25%; left: 20%"></i>
      <i class="absolute text-green-400/10 text-6xl fa-brands fa-html5" style="bottom: 15%; right: 25%"></i>
    </div>

    <div class="z-10 relative flex flex-col justify-center items-center px-4 py-20 min-h-screen text-center">
      <h1 class="mb-6 font-bold text-5xl md:text-7xl tracking-tight">
        <span
          class="bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent animate-gradient"
        >
          {{ $t('hero.title') }}
        </span>
      </h1>

      <div class="mb-12 max-w-3xl">
        <p class="font-mono text-gray-300 text-xl typing-effect">
          {{ $t('hero.subtitle') }}
        </p>
        <p class="mt-4 font-mono text-pink-400/80 text-lg md:text-xl">
          {{ $t('hero.description') }}
        </p>
      </div>

      <div class="flex gap-6 justify-center">
        <router-link
          to="/projects"
          class="group relative px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-br from-pink-500 to-purple-600 hover:scale-105 transition-all duration-200"
        >
          <span class="relative z-10">{{ $t('hero.cta') }}</span>
          <div
            class="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"
          ></div>
        </router-link>

        <router-link
          to="/about"
          class="group relative px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-br from-purple-500 to-blue-600 hover:scale-105 transition-all duration-200"
        >
          <span class="relative z-10">{{ $t('hero.aboutMe') }}</span>
          <div
            class="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"
          ></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// Typing effect for subtitle
onMounted(() => {
  const elements = document.querySelectorAll('.typing-effect');
  for (const el of elements) {
    const text = el.textContent;
    if (!text) continue;
    el.textContent = '';

    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
  }
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

/* Typing Effect */
.typing-effect {
  white-space: nowrap;
  overflow: hidden;
}

/* Scroll Indicator Animation */
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Pulse Animation */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.4);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(236, 72, 153, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(236, 72, 153, 0);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
