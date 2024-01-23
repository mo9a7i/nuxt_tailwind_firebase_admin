// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/ui', '@nuxtjs/google-fonts'],
  
  googleFonts: {
    // Options
    display: 'swap',
    families: {
      Inter: '200..900',
    }
  },

  css: ['~/assets/css/main.scss'],
  imports: { dirs: ['stores'] },

  pinia: {},
  piniaPersistedstate: {
    storage: 'localStorage',
    debug: true,
  },

  colorMode: {
    preference: 'light',
  },
  tailwindcss: {
    viewer: false,
  },
})
