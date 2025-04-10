<script lang="ts" setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import bash from 'highlight.js/lib/languages/bash'
import python from 'highlight.js/lib/languages/python'
import DOMPurify from 'dompurify'

// Configuration des langages supportés
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('html', html)
hljs.registerLanguage('css', css)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('python', python)

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  anchorHeadings: {
    type: Boolean,
    default: true
  },
  lineNumbers: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['rendered'])
const markdownRef = ref(null)

// Thème de coloration personnalisé
const applyCustomHighlight = (code, lang) => {
  const validLang = hljs.getLanguage(lang) ? lang : 'plaintext'
  const { value } = hljs.highlight(code, {
    language: validLang,
    ignoreIllegals: true
  })

  return `<pre class="hljs-pre" data-lang="${validLang}"><code class="hljs-code ${validLang}">${value}</code></pre>`
}

// Configuration de Marked
marked.setOptions({
  breaks: true,
  gfm: true,
  // Removed 'smartypants' as it is not a valid property in 'MarkedOptions'
})

marked.use({
  renderer: {
    code: function (code, lang) {
      return applyCustomHighlight(code, lang)
    }
  },
  smartypants: true // Configured separately using 'marked.use'
})

// Transformation Markdown → HTML sécurisé
const compiledMarkdown = computed(() => {
  let html = marked(props.content)

  // Ajout d'ancres aux titres
  if (props.anchorHeadings) {
    html = html.replace(/<h([1-6])(.*?)>(.*?)<\/h[1-6]>/g, (_, level, attrs, title) => {
      const slug = title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/^-+|-+$/g, '')
      return `<h${level}${attrs} id="${slug}">
        <a href="#${slug}" class="anchor">#</a>
        ${title}
      </h${level}>`
    })
  }

  // Nettoyage HTML
  return DOMPurify.sanitize(html, {
    ADD_ATTR: ['data-lang', 'data-line'],
    FORBID_TAGS: ['style', 'script', 'iframe']
  })
})

// Post-traitement après rendu
const postRenderOperations = async () => {
  await nextTick()

  if (!markdownRef.value) return

  // Gestion des liens externes
  for (const link of markdownRef.value.querySelectorAll('a')) {
    if (link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
    }
  }

  // Ajout des numéros de ligne
  if (props.lineNumbers) {
    for (const codeBlock of markdownRef.value.querySelectorAll('.hljs-code')) {
      if (!codeBlock.classList.contains('lined')) {
        const lines = codeBlock.innerHTML.split('\n')
        codeBlock.innerHTML = lines.map((line, i) =>
          `<span class="line" data-line="${i + 1}">${line || ' '}</span>`
        ).join('\n')
        codeBlock.classList.add('lined')
      }
    }
  }

  emit('rendered', markdownRef.value)
}

// Observateurs
watch(compiledMarkdown, postRenderOperations)
onMounted(postRenderOperations)
</script>

<template>
  <div class="markdown-renderer" ref="markdownRef" v-html="compiledMarkdown" />
</template>

<style>
/* Base styles */
.markdown-renderer {
  @apply text-gray-300;
}

/* Headings */
.markdown-renderer h1,
.markdown-renderer h2,
.markdown-renderer h3 {
  @apply text-pink-400 border-b border-pink-400/20 pb-2 mt-6 mb-4;
}

.markdown-renderer h1 { @apply text-3xl; }
.markdown-renderer h2 { @apply text-2xl; }
.markdown-renderer h3 { @apply text-xl; }

/* Code blocks */
.hljs-pre {
  @apply bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto border border-pink-400/20;
}

.hljs-code {
  @apply bg-transparent p-0 font-mono text-sm;
}

.hljs-code.lined {
  @apply block;
}

.hljs-code .line {
  @apply block min-h-[1em];
}

.hljs-code .line::before {
  @apply inline-block mr-4 pr-4 w-8 text-gray-500 text-right;
  content: attr(data-line);
}

/* Syntax highlighting */
.hljs-keyword { @apply text-pink-400; }
.hljs-built_in { @apply text-purple-400; }
.hljs-title { @apply text-blue-400; }
.hljs-string { @apply text-green-400; }
.hljs-number { @apply text-cyan-400; }
.hljs-comment { @apply text-gray-500 italic; }
.hljs-attr { @apply text-yellow-300; }
.hljs-tag { @apply text-pink-400; }

/* Langage-specific */
.javascript .hljs-property { @apply text-blue-300; }
.typescript .hljs-type { @apply text-purple-300; }
.html .hljs-name { @apply text-pink-400; }
.css .hljs-attribute { @apply text-green-300; }
.bash .hljs-built_in { @apply text-gray-300; }
.python .hljs-keyword { @apply text-pink-500; }
</style>
