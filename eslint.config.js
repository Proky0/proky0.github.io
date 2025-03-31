import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  // Configuration des fichiers à lint
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'], // Applique ESLint à ces types de fichiers
  },

  // Configuration des fichiers à ignorer
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'], // Ignore ces dossiers
  },

  // Règles personnalisées
  {
    rules: {
      // Règles de base
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Avertit en production si `console` est utilisé
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Avertit en production si `debugger` est utilisé

      // Règles TypeScript
      '@typescript-eslint/interface-name-prefix': 'off', // Désactive le préfixe `I` pour les interfaces
      '@typescript-eslint/explicit-function-return-type': 'warn', // Avertit si le type de retour d'une fonction n'est pas explicite
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Désactive l'obligation de typage explicite pour les exports de modules
      '@typescript-eslint/no-non-null-assertion': 'off', // Autorise l'utilisation de l'opérateur `!` pour les assertions non-null
      '@typescript-eslint/no-explicit-any': 'warn', // Avertit si `any` est utilisé

      // Règles Vue
      'vue/multi-word-component-names': 'off', // Désactive l'obligation d'utiliser des noms de composants multi-mots
      'vue/no-side-effects-in-computed-properties': 'off', // Désactive la vérification des effets de bord dans les propriétés calculées
      'vue/require-v-for-key': 'off', // Désactive l'obligation d'utiliser `:key` avec `v-for`
      'vue/no-v-html': 'off', // Désactive l'interdiction d'utiliser `v-html`
      'vue/script-setup-uses-vars': 'warn', // Avertit si les variables définies dans `<script setup>` ne sont pas utilisées
      'vue/no-unused-properties': [
        'warn',
        {
          groups: ['props', 'setup'], // Vérifie les props et les propriétés définies dans `setup`
          deepData: true, // Vérifie les propriétés imbriquées
        },
      ],

      // Règles Prettier
      'prettier/prettier': [
        'error',
        {}, // Configuration Prettier (vide ici car elle est gérée par `.prettierrc`)
        { usePrettierrc: true }, // Utilise la configuration de `.prettierrc`
      ],

      // Règles ESLint
      'no-unused-vars': 'off', // Désactive la vérification des variables non utilisées (gérée par TypeScript)
      '@typescript-eslint/no-unused-vars': 'warn', // Avertit si des variables TypeScript ne sont pas utilisées
    },
  },

  // Configurations essentielles de Vue
  ...pluginVue.configs['flat/essential'],

  // Configuration TypeScript pour Vue
  ...vueTsEslintConfig(),

  // Ignorer le formatage Prettier
  skipFormatting,
];