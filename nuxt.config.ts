// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        host: 'localhost'
      }
    },
    esbuild: {
      pure: ['console.log']
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@storyblok/nuxt', { accessToken: 'iarUkDWYS1dmYYOSEkMccAtt' }],
  ]
})
