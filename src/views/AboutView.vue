<template>
  <div class="overflow-hidden relative min-h-screen bg-gray-900/80">
    <div class="container px-4 py-16 mx-auto">
      <!-- Section profil -->
      <div class="flex flex-col items-center mb-16">
        <div class="relative mb-8 w-52 h-52">
          <img
            :src="ProfileImage"
            alt="Photo de profil"
            class="object-cover w-full h-full rounded-full border-4 shadow-2xl transition-all duration-500 ease-out border-purple-500/30 hover:scale-105"
          />
          <div
            class="absolute -right-2 -bottom-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg animate-pulse"
          ></div>
        </div>
        <h1 class="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Mon Expérience
        </h1>
        <p class="text-xl font-light text-gray-300">Développeur & Administrateur Système</p>
      </div>

      <div class="p-8 mb-10 rounded-xl backdrop-blur-sm transition-all duration-300 bg-white/5">
        <h2 class="flex items-center mb-6 text-3xl font-medium text-white">
          <span class="mr-4 text-2xl">📋</span> Mon Parcours
        </h2>

        <p class="text-lg leading-relaxed text-gray-200">
          Depuis 2018, je me suis immergé dans l'univers des plateformes de modification pour Grand Theft Auto V,
          notamment FiveM, AltV et RageMP. Au fil des années, j'ai développé une expertise solide avec plus de
          <span class="px-3 py-1 font-semibold text-purple-300 rounded-full bg-purple-500/10">11 197 heures</span> de
          jeu, ce qui représente une expérience considérable dans le domaine. J'ai eu l'occasion de collaborer
          bénévolement avec plus de 9 serveurs différents, occupant des rôles clés en tant que développeur et
          administrateur système. Tout ce travail a été réalisé sur la base du volontariat, reflétant ma passion et mon
          engagement pour ce domaine.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="p-8 rounded-xl backdrop-blur-sm transition-all duration-300 bg-white/5">
          <h3 class="flex items-center mb-6 text-2xl font-medium text-white">
            <span class="mr-4 text-2xl">🎮</span> Expérience
          </h3>
          <ul class="space-y-4 text-lg text-gray-200">
            <li class="flex items-center">
              <span class="mr-3 w-2 h-2 bg-purple-400 rounded-full"></span>Plus de 9 serveurs rejoints
            </li>
            <li class="flex items-center">
              <span class="mr-3 w-2 h-2 bg-purple-400 rounded-full"></span>Plus de 11 197 heures de jeu
            </li>
            <li class="flex items-center">
              <span class="mr-3 w-2 h-2 bg-purple-400 rounded-full"></span>Rôles principaux :
              <ul class="mt-3 ml-8 space-y-2 text-gray-300">
                <li class="flex items-center">
                  <span class="mr-3 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>Développeur de scripts
                </li>
                <li class="flex items-center">
                  <span class="mr-3 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>Administrateur système
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="p-8 rounded-xl backdrop-blur-sm transition-all duration-300 bg-white/5">
          <h3 class="flex items-center mb-6 text-2xl font-medium text-white">
            <span class="mr-4 text-2xl">💻</span> Compétences
          </h3>
          <ul class="space-y-4 text-lg text-gray-200">
            <li class="flex items-start">
              <span class="mt-2 mr-3 w-2 h-2 bg-purple-400 rounded-full"></span>
              <div>
                Développement de scripts
                <ul class="mt-3 ml-5 space-y-2 text-gray-300">
                  <li class="flex items-center">
                    <span class="mr-3 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>Front-end: Vue3, Tailwind CSS,
                    Svelte, Sass, TypeScript, React
                  </li>
                  <li class="flex items-center">
                    <span class="mr-3 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>Back-end: LUA (principalement), MySQL
                    / MariaDB
                  </li>
                </ul>
              </div>
            </li>
            <li class="flex items-start">
              <span class="mt-2 mr-3 w-2 h-2 bg-purple-400 rounded-full"></span>
              <div>
                Administration serveur
                <ul class="mt-3 ml-5 space-y-2 text-gray-300">
                  <li class="flex items-center">
                    <span class="mr-3 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>Configuration serveur
                  </li>
                  <li class="flex items-center">
                    <span class="mr-3 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>Gestion des ressources
                  </li>
                  <li class="flex items-center">
                    <span class="mr-3 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>Optimisation des performances
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProfileImage from '@assets/images/profile.jpg';
</script>
