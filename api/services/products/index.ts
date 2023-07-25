import { BaseService } from "~/api/services";
import { productsMapper } from "~/api/mapping/products";
import { IProduct } from "~/api/services/products/types";

export class ProductsService extends BaseService<IProduct> {
    constructor() {
        super("products", productsMapper);
    }
}
