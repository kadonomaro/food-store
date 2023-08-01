import { getDeepObject } from "~/utils";

export interface IMapper {
    getOne: (response: any) => any;
    getAll: (response: any) => any;
    create: (response: any) => any;
    update: (response: any) => any;
}

export const mapObjectResponse = (response: any, map: any) => {
    const keys = Object.keys(map);
    let result: any = {};
    keys.forEach((key) => {
        result[key] = getDeepObject(response, map[key]);
    });
    return result;
};

export const mapArrayResponse = (response: any, map: any) => {
    const keys = Object.keys(map);

    return response.items.map((item: any) => {
        let result: any = {};
        keys.forEach((key) => {
            result[key] = getDeepObject(item, map[key]);
        });
        return result;
    });
};
