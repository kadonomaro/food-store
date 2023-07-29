export const getDeepObject = (obj: any, path: string) => {
    const segments = path.split(".");
    let result = obj;

    for (let i = 0; i < segments.length; ++i) {
        if (result.hasOwnProperty(segments[i])) {
            result = result[segments[i]];
        } else {
            result = "";
        }
    }
    return result;
};

export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};
