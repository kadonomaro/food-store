import { mapArrayResponse, IMapper } from "~/api/mapping/index";

const mapReview = (response: any) => {
    return response;
};

const mapReviewList = (response: any) => {
    return mapArrayResponse(response, {
        id: "sys.id",
        createdAt: "sys.createdAt",
        author: "fields.author",
        date: "fields.date",
        text: "fields.text",
        rating: "fields.rating",
    });
};

export const reviewsMapper: IMapper = {
    getOne: mapReview,
    getAll: mapReviewList,
    create: mapReview,
    update: mapReview,
};
