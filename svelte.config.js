import adapter from "@sveltejs/adapter-vercel"
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#app",
    vite: () => ({
      resolve: {
        alias: {
          '@': path.join(process.cwd(), './src')
        }
      }
    }),
  },
};

export default config;
