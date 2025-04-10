<script lang="ts" setup>
import Markdown from '@/components/Markdown.vue'

const yourMarkdownContent = `
# Titre

\`\`\`javascript
function hello() {
  return 'World' // Commentaire
}
\`\`\`

# Test
`
</script>

<template>
  <div class="flex bg-gradient-to-br from-black to-gray-900 min-h-screen text-white">
    <div class="hidden md:block bg-gray-900/50 p-4 border-pink-400/20 border-r w-64">
    </div>

    <div class="flex-1 p-8 overflow-auto">
      <Markdown
        :content="yourMarkdownContent"
        :line-numbers="true"
        :anchor-headings="true"
      />
    </div>
  </div>
</template>
