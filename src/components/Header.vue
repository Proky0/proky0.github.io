<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="z-50 fixed shadow-lg backdrop-blur-sm px-4 py-4 neon-border border-pink-400/20 border-b w-full">
    <nav class="flex justify-between items-center mx-auto container">
      <!-- Logo avec effet néon -->
      <h1 class="font-bold text-pink-400 text-xl hover:scale-105 transition-transform duration-300 neon-text">
        Portfolio
      </h1>

      <!-- Liens de navigation -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <router-link
            to="/"
            class="group relative font-bold text-pink-400 hover:text-purple-400 transition-colors duration-300 neon-link"
          >
            Accueil
            <span
              class="bottom-0 left-0 absolute bg-purple-400 w-0 group-hover:w-full h-0.5 neon-underline transition-all duration-300"
            ></span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/projects"
            class="group relative font-bold text-pink-400 hover:text-purple-400 transition-colors duration-300 neon-link"
          >
            Projets
            <span
              class="bottom-0 left-0 absolute bg-purple-400 w-0 group-hover:w-full h-0.5 neon-underline transition-all duration-300"
            ></span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="group relative font-bold text-pink-400 hover:text-purple-400 transition-colors duration-300 neon-link"
          >
            Contact
            <span
              class="bottom-0 left-0 absolute bg-purple-400 w-0 group-hover:w-full h-0.5 neon-underline transition-all duration-300"
            ></span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
// Vous pouvez ajouter des logiques ici si nécessaire
</script>

<style lang="scss" scoped>
/* Effet néon pour le texte */
.neon-text {
  text-shadow:
    0 0 5px rgba(236, 72, 153, 0.5),
    0 0 10px rgba(236, 72, 153, 0.5),
    0 0 20px rgba(236, 72, 153, 0.5),
    0 0 40px rgba(236, 72, 153, 0.5);
}

/* Bordure néon pour le header */
.neon-border {
  box-shadow:
    0 0 5px rgba(236, 72, 153, 0.3),
    0 0 10px rgba(236, 72, 153, 0.2),
    0 0 20px rgba(236, 72, 153, 0.1);
}

/* Effet néon pour les liens */
.neon-link {
  position: relative;
  &:hover {
    text-shadow:
      0 0 5px rgba(236, 72, 153, 0.5),
      0 0 10px rgba(236, 72, 153, 0.4),
      0 0 20px rgba(236, 72, 153, 0.3);
  }
}

/* Effet néon pour le soulignement des liens */
.neon-underline {
  box-shadow:
    0 0 5px rgba(236, 72, 153, 0.5),
    0 0 10px rgba(236, 72, 153, 0.4),
    0 0 20px rgba(236, 72, 153, 0.3);
}
</style>
