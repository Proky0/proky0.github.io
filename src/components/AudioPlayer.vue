<template>
  <div>
    <!-- Icône pour afficher/masquer le lecteur audio -->
    <button
      @click="togglePlayer"
      class="top-4 right-6 z-50 fixed text-pink-400 hover:text-purple-400 transition-colors neon-icon"
      :title="isPlayerVisible ? 'Hide Audio Player' : 'Show Audio Player'"
    >
      <i class="text-2xl fas fa-music"></i>
    </button>

    <!-- Lecteur audio -->
    <div
      class="top-20 right-5 fixed flex items-center gap-4 bg-gray-900/80 shadow-lg backdrop-blur-md p-4 neon-border rounded-md transition-transform duration-300 ease-in-out transform"
      :class="{ 'translate-x-0': isPlayerVisible, 'translate-x-72': !isPlayerVisible }"
    >
      <!-- Bouton Play/Pause -->
      <button
        @click="togglePlay"
        class="text-pink-400 hover:text-purple-400 transition-colors neon-icon"
        :title="isPlaying ? 'Pause' : 'Play'"
      >
        <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'" class="text-2xl"></i>
      </button>

      <!-- Bouton Mute/Unmute -->
      <button
        @click="toggleMute"
        class="text-pink-400 hover:text-purple-400 transition-colors neon-icon"
        :title="isMuted ? 'Unmute' : 'Mute'"
      >
        <i :class="isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'" class="text-xl"></i>
      </button>

      <!-- Barre de volume horizontale -->
      <input
        type="range"
        v-model="volume"
        min="0"
        max="1"
        step="0.1"
        class="volume-slider neon-slider"
        :title="`Volume: ${Math.round(volume * 100)}%`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Music from '@/assets/audio/Zombie Hyperdrive - Red Eyes.mp3';

// Références
const isPlayerVisible = ref(false); // Contrôle la visibilité du lecteur
const isPlaying = ref(false);
const isMuted = ref(false);
const volume = ref(0.1); // Volume par défaut à 50%

let audio: HTMLAudioElement;

// Initialisation de l'audio
onMounted(() => {
  audio = new Audio(Music); // Remplacez par le chemin de votre fichier audio
  audio.loop = true; // La musique se répète
  audio.volume = volume.value; // Définir le volume initial
});

// Nettoyage lors de la destruction du composant
onUnmounted(() => {
  if (audio) {
    audio.pause();
    audio.remove();
  }
});

// Afficher/masquer le lecteur audio
const togglePlayer = (): void => {
  isPlayerVisible.value = !isPlayerVisible.value;
};

// Jouer ou mettre en pause la musique
const togglePlay = (): void => {
  if (isPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }

  isPlaying.value = !isPlaying.value;
};

// Activer/désactiver le mute
const toggleMute = (): void => {
  isMuted.value = !isMuted.value;
  audio.muted = isMuted.value;
};
</script>
