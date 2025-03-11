import { defineConfig } from 'vite'
import react from '@vitejs/pligin-react'
import tailwindcss from '@tailwindcss/vite'

//https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react()
    ],
})