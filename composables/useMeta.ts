import { meta } from "~/meta";

export const useMeta = (page: string) => {
    return useSeoMeta({
        title: meta[page].title,
        ogTitle: meta[page].title,
        description: meta[page].description,
        ogDescription: meta[page].description,
    });
};
