import { BaseService } from "~/api/services";
import { Product } from "~/api/services/products/types";

export class ProductsService extends BaseService<Product> {
    constructor(type: string) {
        super(type);
    }
}
