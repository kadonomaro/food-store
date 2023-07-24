export interface IMapper {
    getOne: (response: any) => any;
    getAll: (response: any) => any;
    create: (response: any) => any;
    update: (response: any) => any;
}

export const mapArrayResponse = (response: any) => {
    return response.items.map((item: any) => {
        return {
            id: item.sys.id,
            createdAt: item.sys.createdAt,
            ...item.fields,
        };
    });
};
