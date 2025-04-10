<template>
  <div class="relative bg-gray-900/80 py-14 min-h-screen overflow-hidden">
    <div class="z-10 relative mx-auto px-5 container">
      <!-- Projects Grid -->
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <!-- Project Card -->
        <div
          v-for="project in projects"
          :key="project.id"
          @click="goToProject(project.id)"
          class="group relative bg-gray-900/70 hover:shadow-lg hover:shadow-pink-400/20 backdrop-blur-sm border-2 border-pink-400/10 hover:border-pink-400/30 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer"
        >
          <!-- Glow Effect -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>

          <!-- Media Preview -->
          <div class="relative h-48 overflow-hidden">
            <div v-if="project.video?.active" class="w-full h-full aspect-video">
              <iframe
                :src="project.video.url"
                class="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <img
              v-else-if="project.cover"
              :src="project.cover"
              :alt="project.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              v-else
              class="flex justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900 w-full h-full"
            >
              <i class="text-pink-400/50 text-4xl fas fa-code"></i>
            </div>
            <div class="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black to-transparent p-4"></div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h2 class="mb-2 font-bold text-white group-hover:text-pink-400 text-xl transition-colors">
              {{ project.name }}
            </h2>
            <p class="mb-4 text-gray-300 text-sm line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <div v-for="(tech, index) in project.technologies" :key="index" class="group relative">
                <div
                  class="flex items-center bg-gray-800/80 px-2 py-1 border border-gray-700 rounded-full text-gray-300 text-xs"
                >
                  <i :class="tech.icon" class="mr-1 text-pink-400"></i>
                  {{ tech.name }}
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="flex justify-between items-center pt-4 border-gray-800 border-t">
              <div class="flex space-x-3">
                <a
                  v-if="project.github"
                  :href="project.github"
                  @click.stop
                  target="_blank"
                  class="text-gray-400 hover:text-pink-400 transition-colors"
                  title="GitHub Repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  v-if="project.tebex"
                  :href="project.tebex"
                  @click.stop
                  target="_blank"
                  class="text-gray-400 hover:text-pink-400 transition-colors"
                  title="Tebex Store"
                >
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <div v-if="project.downloads" class="flex items-center text-gray-400 text-xs" title="Downloads">
                  <i class="mr-1 fas fa-download"></i>
                  {{ project.downloads.toLocaleString() }}
                </div>
              </div>
              <button
                class="bg-pink-400/10 hover:bg-pink-400/20 px-3 py-1 border border-pink-400/20 rounded-full text-pink-400 text-xs transition-colors"
                @click.stop="goToProject(project.id)"
              >
                View Details <i class="fa-arrow-right ml-1 fas"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import projects from '@assets/projects.json';

const router = useRouter();
const goToProject = (id: number): void => router.push(`/projects/${id}`);
</script>

<style scoped>
/* Grid Background */
.grid-bg {
  background-image:
    linear-gradient(to right, rgba(255, 0, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 0, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

.group:hover {
  @apply visible;
  opacity: 1;
}

/* Line Clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Aspect Ratio */
.aspect-video {
  aspect-ratio: 16/9;
}

/* Smooth Transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Glow Effect */
.glow-effect {
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
}
</style>
