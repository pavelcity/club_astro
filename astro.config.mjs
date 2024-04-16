import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  integrations: [ tailwind(), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }), 
  react(), 
  robotsTxt({
    sitemap: true
  }), 
  sitemap({
    filter: (page) =>
      page !== 'https://venom24clubs.vercel.app/img/not.jpg' 
  })],
  site: 'https://venom24clubs.vercel.app/' 
});