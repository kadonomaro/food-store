import { BaseService } from "~/api/services";
import { reviewsMapper } from "~/api/mapping/reviews";
import { Review } from "~/api/services/reviews/types";

export class ReviewsService extends BaseService<Review> {
    constructor() {
        super("reviews", reviewsMapper);
    }
}
