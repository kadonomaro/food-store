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
        getCategoriesList() {
            return api.categories.getAll().then((categories) => {
                this.categories = categories;
                return categories;
            });
        },
    },
});
