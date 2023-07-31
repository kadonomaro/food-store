<script setup lang="ts">
    import { IReview } from "~/api/services/reviews/types";

    type Props = {
        reviews: IReview[];
        isLoading: boolean;
    };

    defineProps<Props>();

    const swiperOptions = {
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                prevEl: ".js-reviews-slider-prev",
                nextEl: ".js-reviews-slider-next",
            },
        },
    };
</script>

<template>
    <div id="reviews" class="home-reviews">
        <div class="home-reviews__header">
            <h2 class="home-reviews__title page-title">Отзывы</h2>
            <div class="home-reviews__navigation">
                <button class="home-reviews__prev js-reviews-slider-prev">
                    <base-icon name="arrow"></base-icon>
                </button>
                <button class="home-reviews__next js-reviews-slider-next">
                    <base-icon name="arrow"></base-icon>
                </button>
            </div>
        </div>

        <swiper
            class="home-reviews__slider"
            :modules="[SwiperNavigation]"
            :slides-per-view="1.3"
            :space-between="10"
            :grab-cursor="true"
            :breakpoints="swiperOptions"
        >
            <swiper-slide v-for="review in reviews" :key="review.id">
                <div class="home-reviews__item">
                    <reviews-card :review="review"></reviews-card>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss">
    .home-reviews {
        padding: 20px 0 30px;
        @include media($bp-desktop-sm) {
            padding: 40px 0 60px;
        }
    }

    .home-reviews__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .home-reviews__title {
        margin-bottom: 15px;
        @include media($bp-desktop-sm) {
            margin-bottom: 30px;
        }
    }

    .home-reviews__slider {
        margin: 0 -10px 15px;
        padding: 0 10px;
        .swiper-slide {
            height: auto;
        }
        @include media($bp-desktop-sm) {
            margin: 0 0 30px;
            padding: 0;
        }
    }

    .home-reviews__item {
        height: 100%;
    }

    .home-reviews__navigation {
        display: none;
        @include media($bp-desktop-sm) {
            display: flex;
            margin: 0 -3px;
        }
    }

    .home-reviews__prev,
    .home-reviews__next {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin: 0 3px;
        background-color: var(--primary-background);
        border-radius: 8px;
        transition: opacity 0.2s ease-in;
        &:disabled {
            opacity: 0.5;
        }
        svg {
            width: 20px;
            height: 20px;
            fill: #25323f;
        }
    }

    .home-reviews__next {
        svg {
            transform: scale(-1);
        }
    }
</style>
