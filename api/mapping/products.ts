import { mapArrayResponse, IMapper } from "~/api/mapping/index";

const mapProduct = (response: any) => {
    return response;
};

const mapProductList = (response: any) => {
    return mapArrayResponse(response, {
        id: "sys.id",
        createdAt: "sys.createdAt",
        name: "fields.name",
        text: "fields.text",
        price: "fields.price",
        imagePreview: "fields.image_preview.fields.file.url",
        imageDetail: "fields.image_detail.fields.file.url",
    });
};

export const productsMapper: IMapper = {
    getOne: mapProduct,
    getAll: mapProductList,
    create: mapProduct,
    update: mapProduct,
};
