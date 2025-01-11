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
        base: mode === 'production'
            ? 'https://projeto-simples-production.up.railway.app/build/'
            : '/',
    },
    server: {
        https: true,
        host: '0.0.0.0',
        port: 8080,
    },
}));
