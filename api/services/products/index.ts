import { BaseService } from "~/api/services";
import { productsMapper } from "~/api/mapping/products";
import { Product } from "~/api/services/products/types";

export class ProductsService extends BaseService<Product> {
    constructor() {
        super("products", productsMapper);
    }
}
