import { mapArrayResponse, IMapper } from "~/api/mapping/index";

const mapCategory = (response: any) => {
    return response;
};

const mapCategoriesList = (response: any) => {
    return mapArrayResponse(response, {
        id: "sys.id",
        name: "fields.name",
        code: "fields.code",
        sort: "fields.sort",
        // image: "fields.image.fields.file.url",
    });
};

export const categoriesMapper: IMapper = {
    getOne: mapCategory,
    getAll: mapCategoriesList,
    create: mapCategory,
    update: mapCategory,
};
