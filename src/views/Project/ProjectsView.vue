<template>
  <div class="overflow-hidden relative py-14 min-h-screen bg-gray-900/80">
    <div class="container relative z-10 px-5 mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.id"
          @click="goToProject(project.id)"
          class="overflow-hidden relative rounded-xl border-2 backdrop-blur-sm transition-all duration-500 cursor-pointer group bg-gray-900/70 hover:shadow-lg hover:shadow-pink-400/20 border-pink-400/10 hover:border-pink-400/30"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 from-pink-400/10 to-purple-400/10 group-hover:opacity-100"
          ></div>

          <div class="overflow-hidden relative h-48">
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
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div
              v-else
              class="flex justify-center items-center w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
            >
              <i class="text-4xl text-pink-400/50 fas fa-code"></i>
            </div>
            <div class="absolute right-0 bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div class="p-6">
            <h2 class="mb-2 text-xl font-bold text-white transition-colors group-hover:text-pink-400">
              {{ project.name }}
            </h2>
            <p class="mb-4 text-sm text-gray-300 line-clamp-2">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <div v-for="(tech, index) in project.technologies" :key="index" class="relative group">
                <div
                  class="flex items-center px-2 py-1 text-xs text-gray-300 rounded-md border border-gray-700 bg-gray-800/80"
                >
                  <i :class="tech.icon" class="mr-1 text-pink-400"></i>
                  {{ tech.name }}
                </div>
              </div>
            </div>

            <div class="flex justify-between items-center pt-4 border-t border-gray-800">
              <div class="flex space-x-3">
                <a
                  v-if="project.github"
                  :href="project.github"
                  @click.stop
                  target="_blank"
                  class="text-gray-400 transition-colors hover:text-pink-400"
                  :title="$t('projectsList.gitHubRepo')"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  v-if="project.tebex"
                  :href="project.tebex"
                  @click.stop
                  target="_blank"
                  class="text-gray-400 transition-colors hover:text-pink-400"
                  :title="$t('projectsList.tebexStore')"
                >
                  <i class="fas fa-shopping-cart"></i>
                </a>
              </div>
              <button
                class="px-3 py-1 text-xs text-pink-400 rounded-md border transition-colors bg-pink-400/10 hover:bg-pink-400/20 border-pink-400/20"
                @click.stop="goToProject(project.id)"
              >
                {{ $t('projectsList.viewDetails') }} <i class="ml-1 fa-arrow-right fas"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationFailure } from 'vue-router';
import { useRouter } from 'vue-router';
import file from '@assets/projects.json';

const projects = file as Project[];
const gallery = Object.values(
  import.meta.glob('@assets/servers/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
) as string[];

const hasImage = (name: string): string | null => {
  const normalizedName = name.toLowerCase();
  return gallery.find((img) => img.toLowerCase().includes(normalizedName)) ?? null;
};

projects.forEach((project: Project) => {
  const projectImage = hasImage(project.label);
  if (projectImage) project.cover = projectImage;
});

const router = useRouter();
const goToProject = (id: number): Promise<void | NavigationFailure> => {
  return router.push(`/projects/${id}`);
};
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
  opacity: 1;
}

/* Line Clamp */
.line-clamp-2 {
  display: -webkit-box;
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
