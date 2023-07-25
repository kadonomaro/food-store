export const getDeepObject = (obj: any, path: string) => {
    const segments = path.split(".");
    let result = obj;

    for (let i = 0; i < segments.length; ++i) {
        result = result[segments[i]];
    }
    return result;
};
