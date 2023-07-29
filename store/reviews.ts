import { defineStore } from "pinia";
import { api } from "~/api";
import { IReview } from "~/api/services/reviews/types";

type StoreType = {
    reviews: IReview[];
};

export const useReviewsStore = defineStore("reviews", {
    state: (): StoreType => ({
        reviews: [],
    }),
    actions: {
        getReviewsList(query?: object) {
            return api.reviews.getAll(query).then((reviews) => {
                this.reviews = reviews;
                return reviews;
            });
        },
    },
});
