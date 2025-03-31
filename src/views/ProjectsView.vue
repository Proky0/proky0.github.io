<template>
  <div class="bg-black/80 backdrop-blur-sm py-28 min-h-screen text-white">
    <div class="mx-auto px-4 container">
      <!-- Grille des projets -->
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <!-- Carte de projet -->
        <div
          v-for="project in projects"
          @click="goToProject(project.id)"
          :key="project.id"
          class="flex flex-col bg-gray-900/70 shadow-lg hover:shadow-pink-400/10 p-6 border-2 border-pink-400/20 hover:border-pink-400/50 rounded-lg transition-all"
        >
          <!-- Nom du projet -->
          <h2 class="mb-4 font-bold text-pink-400 text-2xl neon-text">
            {{ project.name }}
          </h2>

          <!-- Description du projet -->
          <p class="mb-6 text-gray-300 line-clamp-3">
            {{ project.description }}
          </p>

          <!-- Vidéo ou image de couverture -->
          <div class="flex-grow mb-6">
            <div v-if="project.video" class="relative rounded-lg aspect-video overflow-hidden">
              <iframe
                v-if="project.video.active"
                :src="project.video.url"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
              <div v-else class="flex justify-center items-center bg-gray-800/50 w-full h-full">
                <i class="text-pink-400 text-4xl fas fa-video-slash"></i>
              </div>
            </div>

            <img
              v-if="project.cover"
              :src="project.cover"
              alt="Project Cover"
              class="rounded-lg w-full h-full object-cover"
            />
          </div>

          <!-- Technologies utilisées avec tooltip -->
          <div class="flex flex-wrap gap-3">
            <div
              v-for="(tech, index) in project.technologies"
              :key="index"
              class="group relative text-pink-400 hover:text-purple-400 text-2xl transition-colors"
            >
              <i :class="tech.icon"></i>
              <!-- Tooltip pour la technologie -->
              <span class="tooltip">
                {{ tech.name }}
              </span>
            </div>
          </div>

          <!-- Séparateur -->
          <div class="my-4 border-pink-400/20 border-t-2"></div>

          <!-- Liens GitHub, Tebex et détails avec tooltip -->
          <div class="flex justify-between items-center">
            <!-- Liens GitHub et Tebex -->
            <div class="flex gap-4">
              <!-- Bouton GitHub -->
              <div
                class="group relative text-pink-400 transition-colors"
                :class="{ 'opacity-50 cursor-not-allowed': !project.github, 'hover:text-purple-400': project.github }"
              >
                <a v-if="project.github" :href="project.github" target="_blank" class="inline-block">
                  <i class="text-2xl fab fa-github"></i>
                </a>
                <i v-else class="text-2xl fab fa-github"></i>
                <!-- Tooltip -->
                <span class="tooltip">
                  {{ project.github ? 'View on GitHub' : 'GitHub link not available' }}
                </span>
              </div>

              <!-- Bouton Tebex -->
              <div
                class="group relative text-pink-400 transition-colors"
                :class="{ 'opacity-50 cursor-not-allowed': !project.tebex, 'hover:text-purple-400': project.tebex }"
              >
                <a v-if="project.tebex" :href="project.tebex" target="_blank" class="inline-block">
                  <i class="text-2xl fas fa-shopping-cart"></i>
                </a>
                <i v-else class="text-2xl fas fa-shopping-cart"></i>
                <!-- Tooltip -->
                <span class="tooltip">
                  {{ project.tebex ? 'View on Tebex' : 'Tebex link not available' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationFailure } from 'vue-router';
import projects from '@/assets/projects.json'; // Import the JSON file
import router from '@/router';

const goToProject = (id: number): Promise<NavigationFailure | void | undefined> =>
  router.push({ path: `/projects/${id}` });
</script>

<style lang="scss" scoped>
/* Limiter la description à 3 lignes */
.line-clamp-3 {
  display: -webkit-box;
  overflow: hidden;
}

/* Style pour les iframes vidéo */
.aspect-video {
  aspect-ratio: 16 / 9;
}

/* Styles pour les tooltips */
.tooltip {
  @apply invisible absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.group:hover .tooltip {
  @apply visible;
  opacity: 1;
}

/* Ajustement pour les images */
.flex-grow {
  flex-grow: 1;
}

img {
  width: 100%;
  object-fit: cover;
}

/* Style pour les boutons désactivés */
.opacity-50 {
  opacity: 0.5;
}

.cursor-not-allowed {
  cursor: not-allowed;
}
</style>
