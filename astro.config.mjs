import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      // workaround, see: https://github.com/radix-ui/themes/issues/13
      noExternal: ["@radix-ui/themes"]
    }
  },
});