import { mapArrayResponse, IMapper } from "~/api/mapping/index";

const mapProduct = (response: any) => {
    return response;
};

const mapProductList = (response: any) => {
    return mapArrayResponse(response);
};

export const productsMapper: IMapper = {
    getOne: mapProduct,
    getAll: mapProductList,
    create: mapProduct,
    update: mapProduct,
};
