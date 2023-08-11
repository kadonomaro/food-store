import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 70,
                behavior: "smooth",
            };
        }

        if (savedPosition) {
            return savedPosition;
        }

        return { top: 0 };
    },
};
