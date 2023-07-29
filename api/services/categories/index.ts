import { BaseService } from "~/api/services";
import { categoriesMapper } from "~/api/mapping/categories";
import { ICategory } from "~/api/services/categories/types";

export class CategoriesService extends BaseService<ICategory> {
    constructor() {
        super("categories", categoriesMapper);
    }
}
