import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import { compilerOptions } from './tsconfig.json';
import { resolve } from 'path';

const alias = Object.entries(compilerOptions.paths).reduce((acc, [key, [value]]) => {
  const aliasKey = key.substring(0, key.length - 2);
  const path = value.substring(0, value.length - 2);
  return {
    ...acc,
    [aliasKey]: resolve(__dirname, path),
  };
}, {});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), tsconfigPaths({ root: '.' })],
    css: { modules: { localsConvention: 'camelCase' } },
    build: {
      minify: mode === 'production',
      sourcemap: mode !== 'production',
      chunkSizeWarningLimit: 2000,
      terserOptions: {
        compress: mode === 'production',
      },
    },
    resolve: {
      alias,
    },
  };
});
