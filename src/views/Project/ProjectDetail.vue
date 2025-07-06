<template>
  <div class="overflow-hidden relative py-14 min-h-screen bg-gray-900/80">
    <div class="overflow-hidden fixed inset-0 opacity-10">
      <div class="absolute inset-0 grid-bg"></div>
    </div>

    <div class="container relative z-10 px-4 mx-auto">
      <button
        @click="goBack"
        class="flex gap-3 items-center mb-12 text-pink-400 transition-colors group hover:text-purple-400"
      >
        <i class="text-xl transition-transform fa-arrow-left group-hover:-translate-x-1 fas"></i>
        <span class="text-lg font-medium">{{ $t('projectDetails.backToProjects') }}</span>
      </button>

      <div class="mb-16 text-center">
        <h1
          class="mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 md:text-6xl"
        >
          {{ project?.name || $t('projectDetails.projectNotFound') }}
        </h1>
        <p class="mx-auto max-w-3xl text-xl text-gray-300">
          {{ project?.description || $t('projectDetails.noDescription') }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="space-y-12 lg:col-span-2">
          <div v-if="project?.video" class="overflow-hidden rounded-xl border bg-gray-900/70 border-pink-400/20">
            <div class="aspect-h-9 aspect-w-16">
              <iframe
                v-if="project.video.active"
                :src="project.video.url"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div v-else class="flex flex-col justify-center items-center h-full text-pink-400 bg-gray-800/50">
                <i class="mb-4 text-5xl fas fa-video-slash"></i>
                <p>{{ $t('projectDetails.videoNotAvailable') }}</p>
              </div>
            </div>
          </div>

          <div v-else class="overflow-hidden rounded-xl border bg-gray-900/70 border-pink-400/20">
            <div class="aspect-h-9 aspect-w-16">
              <img
                v-if="project?.cover"
                :src="project?.cover"
                :alt="project?.cover"
                class="object-cover w-full h-full"
              />
              <div v-else class="flex flex-col justify-center items-center h-full text-pink-400 bg-gray-800/50">
                <i class="mb-4 text-5xl fas fa-image"></i>
                <p>{{ $t('projectDetails.photoNotAvailable') }}</p>
              </div>
            </div>
          </div>
          <div v-if="project?.images?.length" class="space-y-6">
            <h2 class="flex items-center text-2xl font-bold text-pink-400">
              <i class="mr-3 fas fa-images"></i>
              {{ $t('projectDetails.projectGallery') }}
            </h2>
            <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div
                v-for="(image, index) in project.images"
                :key="index"
                class="relative cursor-pointer group"
                @click="openLightbox(image)"
              >
                <img
                  :src="image"
                  :alt="`Screenshot ${index + 1}`"
                  class="object-cover w-full h-40 rounded-lg border border-gray-700 transition-all group-hover:border-pink-400/50"
                />
                <div
                  class="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity bg-black/30 group-hover:opacity-100"
                >
                  <i class="text-2xl text-white fas fa-expand"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div class="p-6 rounded-xl border bg-gray-900/70 border-pink-400/20">
            <h2 class="flex items-center mb-4 text-xl font-bold text-pink-400">
              <i class="mr-2 fas fa-code"></i>
              Technologies
            </h2>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="(tech, index) in project?.technologies"
                :key="index"
                class="flex items-center px-3 py-2 rounded-lg border border-gray-700 bg-gray-800/50"
              >
                <i :class="tech.icon" class="mr-2 text-pink-400"></i>
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-xl border bg-gray-900/70 border-pink-400/20">
            <h2 class="flex items-center mb-4 text-xl font-bold text-pink-400">
              <i class="mr-2 fas fa-clock"></i>
              Durée du projet
            </h2>
            <div class="flex items-center">
              <i class="mr-2 text-pink-400 fas fa-calendar-alt"></i>
              <span>{{ project?.duration }}</span>
            </div>
          </div>

          <div class="p-6 rounded-xl border bg-gray-900/70 border-pink-400/20">
            <h2 class="flex items-center mb-4 text-xl font-bold text-pink-400">
              <i class="mr-2 fas fa-list-check"></i>
              Ce que j'ai réalisé
            </h2>
            <ul class="space-y-3">
              <li v-for="(activity, index) in project?.activities" :key="index" class="flex items-start">
                <i class="mt-1 mr-3 text-sm text-pink-400 fas fa-check-circle"></i>
                <span>{{ activity }}</span>
              </li>
            </ul>
          </div>

          <div
            v-if="project?.github || project?.tebex"
            class="p-6 space-y-4 rounded-xl border bg-gray-900/70 border-pink-400/20"
          >
            <h2 class="flex items-center mb-2 text-xl font-bold text-pink-400">
              <i class="mr-2 fas fa-external-link-alt"></i>
              {{ $t('projectDetails.links') }}
            </h2>
            <a
              v-if="project?.github"
              :href="project.github"
              target="_blank"
              class="flex justify-between items-center px-4 py-3 bg-gray-800 rounded-lg transition-colors hover:bg-gray-700"
            >
              <div class="flex items-center">
                <i class="mr-3 text-xl text-gray-300 fab fa-github"></i>
                <span>{{ $t('projectDetails.github') }}</span>
              </div>
              <i class="text-gray-400 fa-chevron-right fas"></i>
            </a>
            <a
              v-if="project?.tebex"
              :href="project.tebex"
              target="_blank"
              class="flex justify-between items-center px-4 py-3 bg-gray-800 rounded-lg transition-colors hover:bg-gray-700"
            >
              <div class="flex items-center">
                <i class="mr-3 text-xl text-gray-300 fas fa-shopping-cart"></i>
                <span>{{ $t('projectDetails.tebexStore') }}</span>
              </div>
              <i class="text-gray-400 fa-chevron-right fas"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="lightboxImage"
        class="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black/90"
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
            class="flex absolute top-4 right-4 justify-center items-center w-10 h-10 text-xl text-white rounded-md transition-colors bg-black/50 hover:bg-black/70"
          >
            <i class="fas fa-times"></i>
          </button>
          <button
            v-if="hasPreviousImage"
            @click.stop="showPreviousImage"
            class="flex absolute left-4 top-1/2 justify-center items-center w-10 h-10 text-xl text-white rounded-md transition-colors -translate-y-1/2 bg-black/50 hover:bg-black/70"
          >
            <i class="fa-chevron-left fas"></i>
          </button>
          <button
            v-if="hasNextImage"
            @click.stop="showNextImage"
            class="flex absolute right-4 top-1/2 justify-center items-center w-10 h-10 text-xl text-white rounded-md transition-colors -translate-y-1/2 bg-black/50 hover:bg-black/70"
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

import file from '@assets/projects.json';

const projects = file as Project[];

const router = useRouter();
const route = useRoute();

// Get project data
const project = computed(() => {
  return projects.find((p) => p.id === Number(route.params.id));
});

// Lightbox functionality
const lightboxImage = ref('');
const currentImageIndex = ref(0);

const openLightbox = (image: string): void => {
  currentImageIndex.value = project.value?.images?.indexOf(image) || 0;
  lightboxImage.value = image;
};

const closeLightbox = (): void => {
  lightboxImage.value = '';
};

const hasPreviousImage = computed(() => {
  return project.value?.images && currentImageIndex.value > 0;
});

const hasNextImage = computed(() => {
  return project.value?.images && currentImageIndex.value < project.value?.images.length - 1;
});

const showPreviousImage = (): void => {
  if (hasPreviousImage.value && project.value?.images) {
    currentImageIndex.value--;
    lightboxImage.value = project.value.images[currentImageIndex.value];
  }
};

const showNextImage = (): void => {
  if (hasNextImage.value && project.value?.images) {
    currentImageIndex.value++;
    lightboxImage.value = project.value.images[currentImageIndex.value];
  }
};

// Navigation
const goBack = (): void => {
  if (window.history.length > 1) return router.go(-1);
  router.push('/projects');
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
  padding-bottom: 56.25%;
  /* 16:9 Aspect Ratio */
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
