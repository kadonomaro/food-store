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
        getReviewsList() {
            return api.reviews.getAll().then((reviews) => {
                this.reviews = reviews;
                return reviews;
            });
        },
    },
});
