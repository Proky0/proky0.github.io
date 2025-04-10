<template>
  <div class="relative bg-gray-900/80 min-h-screen overflow-hidden">
    <!-- Floating Tech Icons -->
    <div class="absolute inset-0 overflow-hidden">
      <i class="absolute text-pink-400/10 text-6xl fa-brands fa-vuejs" style="top: 20%; left: 10%"></i>
      <i class="absolute text-purple-400/10 text-7xl fa-brands fa-js" style="top: 30%; right: 15%"></i>
      <i class="absolute text-blue-400/10 text-5xl fa-brands fa-laravel" style="bottom: 25%; left: 20%"></i>
      <i class="absolute text-green-400/10 text-6xl fa-brands fa-node-js" style="bottom: 15%; right: 25%"></i>
    </div>

    <!-- Main Content -->
    <div class="z-10 relative flex flex-col justify-center items-center px-4 py-20 min-h-screen text-center">
      <!-- Animated Title -->
      <h1 class="mb-6 font-bold text-5xl md:text-7xl tracking-tight">
        <span
          class="bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent animate-gradient"
        >
          PORTFOLIO FIVEM
        </span>
      </h1>

      <!-- Subtitle with Typing Effect -->
      <div class="mb-12 max-w-3xl">
        <p class="font-mono text-gray-300 text-xl typing-effect">
          > Développeur Full-Stack spécialisé dans l'écosystème FiveM
        </p>
        <p class="mt-4 font-mono text-pink-400/80 text-lg md:text-xl">
          Création de scripts sur-mesure • Optimisation • UI/UX innovantes
        </p>
      </div>

      <!-- Animated CTA Button -->
      <router-link
        to="/projects"
        class="group relative bg-gradient-to-r from-pink-600 hover:from-pink-500 to-purple-600 hover:to-purple-500 shadow-lg hover:shadow-pink-400/30 px-8 py-4 rounded-full overflow-hidden font-bold text-white tracking-wider transition-all duration-300"
      >
        <span class="z-10 relative">EXPLORER MES PROJETS</span>
        <span
          class="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></span>
        <span
          class="absolute -inset-2 border-2 border-pink-400/30 group-hover:border-pink-400/50 rounded-full transition-all animate-pulse duration-500"
        ></span>
      </router-link>
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
