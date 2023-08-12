type Name = "reviews" | "productSimilar";

export const useSwiper = (name: Name) => {
    const options = {
        reviews: {
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
                navigation: {
                    prevEl: ".js-reviews-slider-prev",
                    nextEl: ".js-reviews-slider-next",
                },
            },
        },
        productSimilar: {
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    };

    return { swiperOptions: options[name] };
};
