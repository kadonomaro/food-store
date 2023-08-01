import { mapObjectResponse, mapArrayResponse, IMapper } from "~/api/mapping/index";

const reviewMap = {
    id: "sys.id",
    author: "fields.author",
    date: "fields.date",
    text: "fields.text",
    rating: "fields.rating",
};

const mapReview = (response: any) => {
    return mapObjectResponse(response, reviewMap);
};

const mapReviewList = (response: any) => {
    return mapArrayResponse(response, reviewMap);
};

export const reviewsMapper: IMapper = {
    getOne: mapReview,
    getAll: mapReviewList,
    create: mapReview,
    update: mapReview,
};
