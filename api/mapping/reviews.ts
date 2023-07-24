import { mapArrayResponse, IMapper } from "~/api/mapping/index";

const mapReview = (response: any) => {
    return response;
};

const mapReviewList = (response: any) => {
    return mapArrayResponse(response);
};

export const reviewsMapper: IMapper = {
    getOne: mapReview,
    getAll: mapReviewList,
    create: mapReview,
    update: mapReview,
};
