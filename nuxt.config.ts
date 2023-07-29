// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ["@pinia/nuxt"],
    devtools: { enabled: true },
    typescript: {
        typeCheck: true,
    },
    css: ["~/assets/css/index.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "~/assets/css/_media.scss"; @import "~/assets/css/_mixins.scss";',
                },
            },
        },
    },
});
