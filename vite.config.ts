import tailwindcss from '@tailwindcss/vite'
import {defineConfig} from 'vite'
import solid from 'vite-plugin-solid'

// biome-ignore lint/style/noDefaultExport: required by vite
export default defineConfig({
	plugins: [solid(), tailwindcss()],
	build: {target: 'esnext'}
})
