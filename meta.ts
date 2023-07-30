interface Meta {
    [key: string]: any;
}

const description =
    "Food Store — это быстрая доставка готовой еды на дом. В нашем меню вы можете заказать: пиццу, вок, шаурму, питу, супы, хот-доги, десерты, закуски, напитки и другие блюда. Мы всегда рядом! С нами вы знаете где вкусно поесть.";

export const meta: Meta = {
    home: {
        title: "Food Store — доставка еды на дом 24/7 — заказать бесплатную доставку еды круглосуточно",
        description,
    },
    reviews: {
        title: "Food Store — отзывы наших клиентов",
        description,
    },
};
