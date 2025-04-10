<template>
  <div class="relative bg-gray-900/80 py-14 min-h-screen overflow-hidden">
    <!-- Main Content -->
    <div class="mx-auto px-4 container">
      <!-- Search and Filters -->
      <div class="gap-6 grid grid-cols-1 md:grid-cols-3 mb-12">
        <!-- Search -->
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher un script..."
            class="bg-gray-800/50 px-4 py-3 pl-10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 w-full text-gray-300"
          />
          <i class="top-4 left-3 absolute text-gray-500 fas fa-search"></i>
        </div>

        <!-- Category Filter -->
        <div class="relative">
          <select
            v-model="selectedCategory"
            class="bg-gray-800/50 px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 w-full text-gray-300 appearance-none"
          >
            <option value="all">Toutes catégories</option>
            <option v-for="(category, key) in categories" :key="key" :value="category">
              {{ category }}
            </option>
          </select>
          <i class="top-4 right-3 absolute text-gray-500 fas fa-chevron-down"></i>
        </div>

        <!-- Framework Filter -->
        <div class="relative">
          <select
            v-model="selectedFramework"
            class="bg-gray-800/50 px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 w-full text-gray-300 appearance-none"
          >
            <option value="all">Tous frameworks</option>
            <option v-for="(framework, key) in frameworks" :key="key" :value="framework">
              {{ framework }}
            </option>
          </select>
          <i class="top-4 right-3 absolute text-gray-500 fas fa-code-branch"></i>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="gap-4 grid grid-cols-2 md:grid-cols-3 bg-gray-800/50 mb-8 p-4 border border-gray-700 rounded-lg">
        <div class="text-center">
          <div class="font-bold text-pink-400 text-3xl">{{ totalScripts }}</div>
          <div class="text-gray-400 text-sm uppercase tracking-wider">Scripts</div>
        </div>
        <div class="text-center">
          <div class="font-bold text-blue-400 text-3xl">{{ categories.length }}</div>
          <div class="text-gray-400 text-sm uppercase tracking-wider">Catégories</div>
        </div>
        <div class="text-center">
          <div class="font-bold text-green-400 text-3xl">{{ frameworks.length }}</div>
          <div class="text-gray-400 text-sm uppercase tracking-wider">Frameworks</div>
        </div>
      </div>

      <!-- Scripts Grid -->
      <div class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="script in filteredScripts"
          :key="script.id"
          class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:shadow-lg hover:shadow-pink-400/10 border border-gray-700 hover:border-pink-400/30 rounded-xl overflow-hidden transition-all duration-300"
        >
          <!-- Preview Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="script.preview"
              :alt="script.name"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div class="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black to-transparent p-4">
              <span
                class="inline-block px-2 py-1 rounded-full font-bold text-xs"
                :class="categoryColor(script.category)"
              >
                {{ script.category }}
              </span>
            </div>
          </div>

          <!-- Script Info -->
          <div class="p-5">
            <div class="flex justify-between items-start mb-2">
              <h2 class="font-bold text-white text-xl">{{ script.name }}</h2>
              <span class="bg-gray-700 px-2 py-1 rounded text-xs">
                {{ script.year }}
              </span>
            </div>

            <p class="mb-4 text-gray-300 text-sm">{{ script.description }}</p>

            <!-- Features -->
            <div class="mb-4">
              <div v-for="(feature, index) in script.features.slice(0, 3)" :key="index" class="flex items-start mb-2">
                <i class="mt-1 mr-2 text-pink-400 text-xs fas fa-check-circle"></i>
                <span class="text-gray-300 text-sm">{{ feature }}</span>
              </div>
              <span v-if="script.features.length > 3" class="text-gray-500 text-xs">
                +{{ script.features.length - 3 }} autres features...
              </span>
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, key) in script.technologies"
                :key="key"
                class="flex items-center bg-gray-800/80 px-2 py-1 rounded-full text-gray-300 text-xs"
              >
                <i :class="tech.icon" class="mr-1"></i>
                {{ tech.name }}
              </span>
            </div>

            <!-- Footer -->
            <div class="flex justify-between items-center pt-4 border-gray-700/50 border-t">
              <div class="flex space-x-2">
                <button class="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs transition-colors">
                  <i class="mr-1 fas fa-eye"></i> Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import scripts from '@assets/scripts.json';
import type colors from 'tailwindcss/colors';

const searchQuery = ref<string>('');

const selectedCategory = ref<string>('all');
const selectedFramework = ref<string>('all');

const categories = computed(() => {
  return [...new Set(scripts.map((s) => s.category))];
});
const frameworks = computed(() => {
  const allFrameworks = scripts.flatMap((s) => s.compatibility);
  return [...new Set(allFrameworks)];
});

const totalScripts = computed(() => {
  return scripts.length;
});

const filteredScripts = computed(() => {
  return scripts.filter((script) => {
    const matchesSearch =
      script.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      script.description.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategory = selectedCategory.value === 'all' || script.category === selectedCategory.value;
    const matchesFramework =
      selectedFramework.value === 'all' || script.compatibility.includes(selectedFramework.value);

    return matchesSearch && matchesCategory && matchesFramework;
  });
});

const categoryColor = (category: keyof typeof colors | string): string => {
  const colors = {
    Légal: 'bg-blue-900/50 text-blue-400',
    Illégal: 'bg-red-900/50 text-red-400',
    Métier: 'bg-green-900/50 text-green-400',
    Economie: 'bg-yellow-900/50 text-yellow-400',
    Activité: 'bg-purple-900/50 text-purple-400',
    Immersion: 'bg-pink-900/50 text-pink-400',
  };

  return colors[category as keyof typeof colors] || 'bg-gray-700 text-gray-300';
};
</script>

<style scoped>
/* Animation for cards */
.script-card {
  transition: all 0.3s ease;
}

.script-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 0, 255, 0.1);
}

/* Custom scrollbar for modal */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #ff00ff;
  border-radius: 4px;
}

/* Gradient text */
.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
