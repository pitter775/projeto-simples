import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig(({ mode }) => ({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]',
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
            },
        },
        base: mode === 'production'
            ? 'https://projeto-simples-production.up.railway.app/build/' // Produção
            : '/', // Desenvolvimento local
    },
    server: {
        https: false, // HTTPS desativado no local
        host: '0.0.0.0',
        port: 8080,
    },
}));
