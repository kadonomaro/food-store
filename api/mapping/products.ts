import { mapObjectResponse, mapArrayResponse, IMapper } from "~/api/mapping/index";

const productMap = {
    id: "sys.id",
    slug: "fields.slug",
    name: "fields.name",
    text: "fields.text",
    price: "fields.price",
    type: "fields.type",
    imagePreview: "fields.image_preview.fields.file.url",
    imageDetail: "fields.image_detail.fields.file.url",
};

const mapProduct = (response: any) => {
    return mapObjectResponse(response, productMap);
};

const mapProductList = (response: any) => {
    return mapArrayResponse(response, productMap);
};

export const productsMapper: IMapper = {
    getOne: mapProduct,
    getAll: mapProductList,
    create: mapProduct,
    update: mapProduct,
};
