import { ProductsService } from "~/api/services/products";
import { ReviewsService } from "~/api/services/reviews";
import { CategoriesService } from "~/api/services/categories";

class ApiService {
    get products() {
        return new ProductsService();
    }
    get reviews() {
        return new ReviewsService();
    }
    get categories() {
        return new CategoriesService();
    }
}

export const api = new ApiService();
