<template>
  <div class="bg-black/80 py-20 min-h-screen text-white">
    <div class="mx-auto px-4 container">
      <!-- Bouton de retour -->
      <button @click="onClick" class="flex items-center gap-2 mb-8 font-bold hover:text-pink-400 text-lg">
        <i class="fa-arrow-left text-2xl fas"></i>
        Retour aux Projets
      </button>

      <!-- Titre du projet -->
      <h1 class="mb-8 font-bold text-pink-400 text-5xl md:text-6xl text-center">
        {{ project?.name || 'Projet non trouvé' }}
      </h1>

      <!-- Description du projet -->
      <p class="mx-auto mb-12 max-w-3xl text-gray-300 text-lg text-center">
        {{ project?.description || 'Aucune description disponible.' }}
      </p>

      <!-- Informations supplémentaires (technologies, durée) -->
      <div class="bg-gray-900/50 mb-12 p-6 rounded-lg">
        <!-- Technologies utilisées -->
        <div v-if="project?.technologies?.length" class="mb-6">
          <h2 class="mb-4 font-bold text-pink-400 text-2xl">Technologies utilisées</h2>
          <div class="flex flex-wrap gap-4">
            <div v-for="(tech, index) in project.technologies" :key="index" class="flex items-center gap-2">
              <i :class="tech.icon" class="text-pink-400 text-xl"></i>
              <span class="text-lg">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- Durée du projet -->
        <div v-if="project?.duration" class="mb-6">
          <h2 class="mb-4 font-bold text-pink-400 text-2xl">Durée du projet</h2>
          <p class="text-lg">
            Du {{ new Date(project.duration.start).toLocaleDateString() }} au
            {{ new Date(project.duration.end).toLocaleDateString() }}
          </p>
        </div>

        <!-- Lien GitHub -->
        <div v-if="project?.github" class="mt-6">
          <a
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 text-lg transition-colors"
          >
            <i class="text-2xl fab fa-github"></i>
            Voir le code source sur GitHub
          </a>
        </div>
      </div>

      <!-- Galerie d'images avec Swiper -->
      <div v-if="project?.images?.length" class="mb-12">
        <h2 class="mb-6 font-bold text-pink-400 text-2xl">Galerie</h2>
        <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :pagination="{ type: 'fraction' }"
          :modules="[Pagination, Navigation]"
        >
          <swiper-slide v-for="(image, index) in project.images" :key="index">
            <img :src="image" class="rounded-lg w-full h-72 object-cover cursor-pointer" @click="openModal(image)" />
          </swiper-slide>
        </swiper>
      </div>

      <!-- Vidéo du projet -->
      <div v-if="project?.video" class="mb-12">
        <h2 class="mb-6 font-bold text-pink-400 text-2xl">Vidéo du projet</h2>
        <div class="relative bg-gray-700/50 rounded-lg aspect-video overflow-hidden">
          <iframe
            v-if="project.video.active"
            :src="project.video.url"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
          <div v-else class="flex justify-center items-center w-full h-full">
            <i class="text-pink-400 text-4xl fas fa-video-slash"></i>
          </div>
        </div>
      </div>

      <!-- Modale pour l'image agrandie -->
      <transition name="fade">
        <div
          v-if="isModalOpen"
          class="z-[99] fixed inset-0 flex justify-center items-center bg-black/90 p-4"
          @click.self="closeModal"
        >
          <div class="relative max-w-full max-h-full">
            <img :src="selectedImage" alt="Image agrandie" class="rounded-lg max-w-full max-h-[90vh] object-contain" />
            <button
              @click="closeModal"
              class="top-4 right-4 absolute flex justify-center items-center bg-black/50 rounded-full w-10 h-10 text-white hover:text-pink-400 text-2xl"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

import projects from '@/assets/projects.json';

const props = defineProps<{ id: number }>();

const router = useRouter();
const project = projects.find((item) => Number(item.id) === Number(props.id));

// Gestion de la modale
const isModalOpen = ref(false);
const selectedImage = ref('');

const openModal = (image: string): void => {
  selectedImage.value = image;
  isModalOpen.value = true;
};

const closeModal = (): void => {
  isModalOpen.value = false;
  selectedImage.value = '';
};

const onClick = (): void => {
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push('/projects');
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
