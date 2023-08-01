import { mapObjectResponse, mapArrayResponse, IMapper } from "~/api/mapping/index";

const categoryMap = {
    id: "sys.id",
    name: "fields.name",
    code: "fields.code",
    sort: "fields.sort",
    image: "fields.image.fields.file.url",
};

const mapCategory = (response: any) => {
    return mapObjectResponse(response, categoryMap);
};

const mapCategoriesList = (response: any) => {
    return mapArrayResponse(response, categoryMap);
};

export const categoriesMapper: IMapper = {
    getOne: mapCategory,
    getAll: mapCategoriesList,
    create: mapCategory,
    update: mapCategory,
};
