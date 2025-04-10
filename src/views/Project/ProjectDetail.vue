<template>
  <div class="relative bg-gray-900/80 py-14 min-h-screen overflow-hidden">
    <!-- Animated Grid Background -->
    <div class="fixed inset-0 opacity-10 overflow-hidden">
      <div class="absolute inset-0 grid-bg"></div>
    </div>

    <!-- Main Content -->
    <div class="z-10 relative mx-auto px-4 container">
      <!-- Back Button -->
      <button
        @click="goBack"
        class="group flex items-center gap-3 mb-12 text-pink-400 hover:text-purple-400 transition-colors"
      >
        <i class="fa-arrow-left text-xl transition-transform group-hover:-translate-x-1 fas"></i>
        <span class="font-medium text-lg">Retour aux projets</span>
      </button>

      <!-- Project Header -->
      <div class="mb-16 text-center">
        <h1
          class="bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6 font-bold text-transparent text-4xl md:text-6xl"
        >
          {{ project?.name || 'Projet non trouvé' }}
        </h1>
        <p class="mx-auto max-w-3xl text-gray-300 text-xl">
          {{ project?.description || 'Aucune description disponible.' }}
        </p>
      </div>

      <!-- Project Content -->
      <div class="gap-12 grid grid-cols-1 lg:grid-cols-3">
        <!-- Left Column - Project Info -->
        <div class="space-y-12 lg:col-span-2">
          <!-- Video Preview -->
          <div v-if="project?.video" class="bg-gray-900/70 border border-pink-400/20 rounded-xl overflow-hidden">
            <div class="aspect-h-9 aspect-w-16">
              <iframe
                v-if="project.video.active"
                :src="project.video.url"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div v-else class="flex flex-col justify-center items-center bg-gray-800/50 h-full text-pink-400">
                <i class="mb-4 text-5xl fas fa-video-slash"></i>
                <p>Vidéo non disponible</p>
              </div>
            </div>
          </div>

          <!-- Image Prevriw -->
          <div v-else class="bg-gray-900/70 border border-pink-400/20 rounded-xl overflow-hidden">
            <div class="aspect-h-9 aspect-w-16">
              <img
                v-if="project?.preview"
                :src="project?.preview"
                :alt="project?.preview"
                class="w-full h-full object-cover"
              />
              <div v-else class="flex flex-col justify-center items-center bg-gray-800/50 h-full text-pink-400">
                <i class="mb-4 text-5xl fas fa-image"></i>
                <p>Photo non disponible</p>
              </div>
            </div>
          </div>
          <!-- Image Gallery -->
          <div v-if="project?.images?.length" class="space-y-6">
            <h2 class="flex items-center font-bold text-pink-400 text-2xl">
              <i class="mr-3 fas fa-images"></i>
              Galerie du projet
            </h2>
            <div class="gap-4 grid grid-cols-2 md:grid-cols-3">
              <div
                v-for="(image, index) in project.images"
                :key="index"
                class="group relative cursor-pointer"
                @click="openLightbox(image)"
              >
                <img
                  :src="image"
                  :alt="`Screenshot ${index + 1}`"
                  class="border border-gray-700 group-hover:border-pink-400/50 rounded-lg w-full h-40 object-cover transition-all"
                />
                <div
                  class="absolute inset-0 flex justify-center items-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <i class="text-white text-2xl fas fa-expand"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Details -->
          <div v-if="project?.details" class="bg-gray-900/70 p-6 border border-gray-700 rounded-xl">
            <h2 class="flex items-center mb-6 font-bold text-pink-400 text-2xl">
              <i class="mr-3 fas fa-info-circle"></i>
              Détails techniques
            </h2>
            <div class="prose-invert max-w-none prose">
              <p v-for="(detail, index) in project.details" :key="index" class="mb-4 last:mb-0">
                {{ detail }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column - Meta Info -->
        <div class="space-y-8">
          <!-- Quick Stats -->
          <div class="bg-gray-900/70 p-6 border border-pink-400/20 rounded-xl">
            <h2 class="flex items-center mb-4 font-bold text-pink-400 text-xl">
              <i class="mr-2 fas fa-chart-bar"></i>
              Statistiques
            </h2>
            <div class="space-y-4">
              <div v-if="project?.duration" class="flex justify-between items-center">
                <span class="text-gray-400">Durée</span>
                <span class="font-mono text-purple-400">
                  {{ formatDate(project.duration.start) }} - {{ formatDate(project.duration.end) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Technologies -->
          <div class="bg-gray-900/70 p-6 border border-pink-400/20 rounded-xl">
            <h2 class="flex items-center mb-4 font-bold text-pink-400 text-xl">
              <i class="mr-2 fas fa-code"></i>
              Technologies
            </h2>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="(tech, index) in project?.technologies"
                :key="index"
                class="flex items-center bg-gray-800/50 px-3 py-2 border border-gray-700 rounded-lg"
              >
                <i :class="tech.icon" class="mr-2 text-pink-400"></i>
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <!-- Links -->
          <div
            v-if="project?.github || project?.tebex"
            class="space-y-4 bg-gray-900/70 p-6 border border-pink-400/20 rounded-xl"
          >
            <h2 class="flex items-center mb-2 font-bold text-pink-400 text-xl">
              <i class="mr-2 fas fa-external-link-alt"></i>
              Liens
            </h2>
            <a
              :href="project.github"
              target="_blank"
              class="flex justify-between items-center bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors"
            >
              <div class="flex items-center">
                <i class="mr-3 text-gray-300 text-xl fab fa-github"></i>
                <span>GitHub</span>
              </div>
              <i class="fa-chevron-right text-gray-400 fas"></i>
            </a>
            <a
              :href="project.tebex"
              target="_blank"
              class="flex justify-between items-center bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors"
            >
              <div class="flex items-center">
                <i class="mr-3 text-gray-300 text-xl fas fa-shopping-cart"></i>
                <span>Tebex Store</span>
              </div>
              <i class="fa-chevron-right text-gray-400 fas"></i>
            </a>
            <a
              v-if="project?.documentation"
              :href="project.documentation"
              target="_blank"
              class="flex justify-between items-center bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors"
            >
              <div class="flex items-center">
                <i class="mr-3 text-gray-300 text-xl fas fa-book"></i>
                <span>Documentation</span>
              </div>
              <i class="fa-chevron-right text-gray-400 fas"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div
        v-if="lightboxImage"
        class="z-50 fixed inset-0 flex justify-center items-center bg-black/90 p-4"
        @click.self="closeLightbox"
      >
        <div class="relative w-full max-w-6xl">
          <img
            :src="lightboxImage"
            class="rounded-lg max-w-full max-h-[90vh] object-contain"
            :alt="`Project screenshot`"
          />
          <button
            @click="closeLightbox"
            class="top-4 right-4 absolute flex justify-center items-center bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 text-white text-xl transition-colors"
          >
            <i class="fas fa-times"></i>
          </button>
          <button
            v-if="hasPreviousImage"
            @click.stop="showPreviousImage"
            class="top-1/2 left-4 absolute flex justify-center items-center bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 text-white text-xl transition-colors -translate-y-1/2"
          >
            <i class="fa-chevron-left fas"></i>
          </button>
          <button
            v-if="hasNextImage"
            @click.stop="showNextImage"
            class="top-1/2 right-4 absolute flex justify-center items-center bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 text-white text-xl transition-colors -translate-y-1/2"
          >
            <i class="fa-chevron-right fas"></i>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import projects from '@assets/projects.json';

const router = useRouter();
const route = useRoute();

// Get project data
const project = projects.find((p) => p.id === Number(route.params.id));

// Lightbox functionality
const lightboxImage = ref('');
const currentImageIndex = ref(0);

const openLightbox = (image: string): void => {
  currentImageIndex.value = project?.images?.indexOf(image) || 0;
  lightboxImage.value = image;
};

const closeLightbox = (): void => {
  lightboxImage.value = '';
};

const hasPreviousImage = computed(() => {
  return project?.images && currentImageIndex.value > 0;
});

const hasNextImage = computed(() => {
  return project?.images && currentImageIndex.value < project.images.length - 1;
});

const showPreviousImage = (): void => {
  if (hasPreviousImage.value && project?.images) {
    currentImageIndex.value--;
    lightboxImage.value = project.images[currentImageIndex.value];
  }
};

const showNextImage = (): void => {
  if (hasNextImage.value && project?.images) {
    currentImageIndex.value++;
    lightboxImage.value = project.images[currentImageIndex.value];
  }
};

// Navigation
const goBack = (): void => {
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push('/projects');
  }
};

// Helper function
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
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

/* Aspect Ratio */
.aspect-w-16 {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-w-16 > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Prose styling for details */
.prose-invert {
  color: #d1d5db;
}

.prose-invert a {
  color: #ec4899;
}

.prose-invert a:hover {
  color: #d946ef;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>
