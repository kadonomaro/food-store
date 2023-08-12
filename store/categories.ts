import { defineStore } from "pinia";
import { api } from "~/api";
import { ICategory } from "~/api/services/categories/types";

type StoreType = {
    categories: ICategory[];
    activeCategoryId: string;
};

export const useCategoriesStore = defineStore("categories", {
    state: (): StoreType => ({
        categories: [],
        activeCategoryId: "",
    }),
    actions: {
        getCategoriesList(query?: object) {
            return api.categories.getAll(query).then((categories) => {
                this.categories = categories;
                return categories;
            });
        },
        setActiveCategory(id: string) {
            this.activeCategoryId = id;
        },
    },
});
