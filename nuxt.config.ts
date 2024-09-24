export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-09-24",
  modules: ["@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
});
