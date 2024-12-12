import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './src/html/index.html',
                overlay: './src/html/overlay.html',
                projects: './src/html/projects.html',
            }
        }
    }
});
