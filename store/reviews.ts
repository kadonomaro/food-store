import { defineStore } from "pinia";
import { api } from "~/api";
import { Query } from "~/api/types";
import { IReview } from "~/api/services/reviews/types";

type StoreType = {
    reviews: IReview[];
};

export const useReviewsStore = defineStore("reviews", {
    state: (): StoreType => ({
        reviews: [],
    }),
    actions: {
        getReviewsList(query?: Query) {
            return api.reviews.getAll(query).then((reviews) => {
                this.reviews = reviews;
                return reviews;
            });
        },
    },
});
