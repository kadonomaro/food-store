import { defineStore } from "pinia";
import { api } from "~/api";
import { ICategory } from "~/api/services/categories/types";

type StoreType = {
    categories: ICategory[];
};

export const useCategoriesStore = defineStore("categories", {
    state: (): StoreType => ({
        categories: [],
    }),
    actions: {
        getCategoriesList(query?: object) {
            return api.categories.getAll(query).then((categories) => {
                this.categories = categories;
                return categories;
            });
        },
    },
});
