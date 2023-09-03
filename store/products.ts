import { defineStore } from "pinia";
import { api } from "~/api";
import { Query } from "~/api/types";
import { IProduct } from "~/api/services/products/types";

type StoreType = {
    products: IProduct[];
    productDetail: IProduct | null;
};

export const useProductsStore = defineStore("products", {
    state: (): StoreType => ({
        products: [],
        productDetail: null,
    }),
    actions: {
        getProduct(slug: string) {
            return api.products.getOne(slug).then((product) => {
                this.productDetail = product;
                return product;
            });
        },
        clearProduct() {
            this.productDetail = null;
        },
        getProductsList(query?: Query) {
            return api.products.getAll(query).then((products) => {
                this.products = products;
                return products;
            });
        },
    },
});
