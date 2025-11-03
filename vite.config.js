import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esta es la línea que añadimos para el despliegue
  base: "/Tablon-de-Tareas/" 
})