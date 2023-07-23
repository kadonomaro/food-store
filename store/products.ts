import { defineStore } from "pinia";
import { api } from "~/api";
import { Product } from "~/api/services/products/types";

type StoreType = {
    products: Product[];
};

export const useProductsStore = defineStore("products", {
    state: (): StoreType => ({
        products: [],
    }),
    actions: {
        getProductsList() {
            return api.products.getAll().then((products) => {
                this.products = products;
                return products;
            });
        },
    },
});
