export const mapArrayResponse = (response: any) => {
    return response.items.map((item: any) => {
        return {
            id: item.sys.id,
            createdAt: item.sys.createdAt,
            ...item.fields,
        };
    });
};
