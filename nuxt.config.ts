// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    components: [{ path: "~/components", pathPrefix: false }],
    modules: ["@pinia/nuxt", "nuxt-swiper"],
    devtools: { enabled: true },
    typescript: {
        typeCheck: true,
    },
    css: ["~/assets/css/index.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/css/_media.scss"; @import "~/assets/css/_mixins.scss";',
                },
            },
        },
    },
});
