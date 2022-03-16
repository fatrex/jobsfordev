import adapter from "@sveltejs/adapter-static"
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
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
