import { ProductsService } from "~/api/services/products";
import { ReviewsService } from "~/api/services/reviews";

class ApiService {
    get products() {
        return new ProductsService();
    }
    get reviews() {
        return new ReviewsService();
    }
}

export const api = new ApiService();
