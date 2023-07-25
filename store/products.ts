import { defineStore } from "pinia";
import { api } from "~/api";
import { IProduct } from "~/api/services/products/types";

type StoreType = {
    products: IProduct[];
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
