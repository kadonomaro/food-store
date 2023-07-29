export enum Page {
    home = "home",
    reviews = "reviews",
}

export const meta = {
    [Page.home]: {
        title: "Home page title",
        description: "Home page description",
    },
    [Page.reviews]: {
        title: "Reviews page title",
        description: "Reviews page description",
    },
};
