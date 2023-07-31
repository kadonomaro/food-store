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
    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.ico",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                },
                {
                    rel: "manifest",
                    href: "/site.webmanifest",
                },
            ],
        },
    },
});
