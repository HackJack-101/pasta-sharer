import { fileURLToPath, URL } from 'node:url';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    build: {
        sourcemap: true,
    },
    plugins: [
        vue(),
        VitePWA({
            manifest: {
                background_color: '#24262c',
                display: 'standalone',
                lang: 'fr-FR',
                name: 'Pasta Sharer',
                orientation: 'portrait',
                short_name: 'Pasta Sharer',
                start_url: '/pasta-sharer',
            },
            manifestFilename: 'manifest.json',
            minify: true,
            mode: 'production',
            outDir: 'dist',
            registerType: 'autoUpdate',
            srcDir: 'src',
            strategies: 'generateSW',
            workbox: {
                cleanupOutdatedCaches: true,
                clientsClaim: true,
                globPatterns: ['**/*.*', '**.*'],
                maximumFileSizeToCacheInBytes: 5000000,
                skipWaiting: true,
            },
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
