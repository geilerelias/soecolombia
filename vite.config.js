import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
    resolve: {
        alias: {
            '@': '/resources/js',
            '~': '/resources/images',
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        {
            name: 'ziggy',
            enforce: 'post',
            handleHotUpdate({server, file}) {
                if (file.includes('/routes/') && file.endsWith('.php')) {
                    exec('php artisan ziggy:generate', (error, stdout) => error === null && console.log(`  > Ziggy routes generated!`))
                }
            }
        },
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),

    ],
});
