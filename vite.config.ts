import { crx } from "@crxjs/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import manifest from "./manifest.json";
import { fileURLToPath, URL } from "node:url";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import path from "path";

export default defineConfig({
  plugins: [vue(), crx({ manifest }), vueI18n({
    include: path.resolve(__dirname, './src/locales/**')
  })],
  build: {
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
