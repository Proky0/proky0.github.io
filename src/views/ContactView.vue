<template>
<div class="flex flex-col justify-center items-center bg-black/80 p-8 min-h-screen text-white">
    <div class="mx-auto px-4 container">
      <h1 class="mb-12 font-bold text-4xl text-center neon-text">Me Contacter</h1>

      <!-- Grille de 4 cartes -->
      <div class="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-2xl">
        <!-- Discord -->
        <div class="bg-gray-800/50 shadow-lg hover:shadow-indigo-500/30 p-6 border hover:border-indigo-400 border-transparent rounded-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <i class="mr-4 text-indigo-400 text-3xl fab fa-discord pulse"></i>
            <h2 class="font-bold text-pink-400 text-xl">Discord</h2>
          </div>
          <p class="mb-4 text-gray-300">Rejoignez mon serveur pour discuter</p>
          <div class="bg-indigo-900/30 p-3 rounded-lg font-mono text-indigo-200 hover:text-white text-center transition-colors">
            username#1234
          </div>
        </div>

        <!-- GitHub -->
        <div class="bg-gray-800/50 shadow-lg hover:shadow-purple-500/30 p-6 border hover:border-purple-400 border-transparent rounded-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <i class="mr-4 text-purple-400 text-3xl fab fa-github pulse"></i>
            <h2 class="font-bold text-pink-400 text-xl">GitHub</h2>
          </div>
          <p class="mb-4 text-gray-300">Mes projets FiveM open-source</p>
          <a href="https://github.com/votreusername" target="_blank" class="block bg-purple-900/30 p-3 rounded-lg font-mono text-purple-200 hover:text-white text-center transition-colors">
            github.com/votreusername
          </a>
        </div>

        <!-- FiveM -->
        <div class="bg-gray-800/50 shadow-lg hover:shadow-orange-500/30 p-6 border hover:border-orange-400 border-transparent rounded-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <i class="mr-4 text-orange-400 text-3xl fas fa-gamepad pulse"></i>
            <h2 class="font-bold text-pink-400 text-xl">FiveM</h2>
          </div>
          <p class="mb-4 text-gray-300">Mes ressources et scripts</p>
          <a href="https://forum.cfx.re/u/votreusername" target="_blank" class="block bg-orange-900/30 p-3 rounded-lg font-mono text-orange-200 hover:text-white text-center transition-colors">
            forum.cfx.re
          </a>
        </div>

        <!-- Twitter/X -->
        <div class="bg-gray-800/50 shadow-lg hover:shadow-cyan-500/30 p-6 border hover:border-cyan-400 border-transparent rounded-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <i class="mr-4 text-cyan-400 text-3xl fab fa-twitter pulse"></i>
            <h2 class="font-bold text-pink-400 text-xl">Twitter/X</h2>
          </div>
          <p class="mb-4 text-gray-300">Mes annonces et updates</p>
          <a href="https://twitter.com/votrehandle" target="_blank" class="block bg-cyan-900/30 p-3 rounded-lg font-mono text-cyan-200 hover:text-white text-center transition-colors">
            @votrehandle
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
