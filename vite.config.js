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
        }),
    ],
    server: {
        https: true, // Forçar HTTPS no ambiente de desenvolvimento
        host: '0.0.0.0', // Garantir que o host seja acessível
        port: 8080, // Você pode ajustar para a porta usada no Railway
    },
    build: {
        manifest: true, // Gera o arquivo manifest para assets
        outDir: 'public/build', // Diretório onde os assets compilados serão salvos
    },
});

