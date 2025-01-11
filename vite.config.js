import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
            valetTls: true, // Forçar HTTPS nos assets
        }),
    ],
    server: {
        https: true,
        host: '0.0.0.0',
        port: 8080,
    },
});
