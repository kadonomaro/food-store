import { BaseService } from "~/api/services";
import { reviewsMapper } from "~/api/mapping/reviews";
import { IReview } from "~/api/services/reviews/types";

export class ReviewsService extends BaseService<IReview> {
    constructor() {
        super("reviews", reviewsMapper);
    }
}
