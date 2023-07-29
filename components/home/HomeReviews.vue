<script setup lang="ts">
    import { IReview } from "~/api/services/reviews/types";

    type Props = {
        reviews: IReview[];
        isLoading: boolean;
    };

    defineProps<Props>();
</script>

<template>
    <div class="home-reviews">
        <h2 class="home-reviews__title page-title">Отзывы</h2>

        <div class="home-reviews__list">
            <div
                v-for="review in reviews.slice(0, 4)"
                :key="review.id"
                class="home-reviews__item"
            >
                <reviews-card :review="review"></reviews-card>
            </div>
        </div>

        <nuxt-link :to="{ name: 'reviews' }" class="home-reviews__link">Все отзывы</nuxt-link>
    </div>
</template>

<style lang="scss">
    .home-reviews {
        padding: 24px 0 30px;
        @include media($bp-desktop-sm) {
            padding: 48px 0 60px;
        }
    }

    .home-reviews__title {
        margin-bottom: 15px;
        @include media($bp-desktop-sm) {
            margin-bottom: 30px;
        }
    }

    .home-reviews__list {
        margin: 0 -5px;
        @include media($bp-desktop-sm) {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -10px;
        }
    }

    .home-reviews__item {
        padding: 0 5px 10px;
        @include media($bp-desktop-sm) {
            flex-basis: 25%;
            max-width: 25%;
            padding: 0 10px 20px;
        }
    }

    .home-reviews__link {
        display: block;
        max-width: 240px;
        margin: 0 auto;
        padding: 12px 20px;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0.03em;
        text-align: center;
        text-decoration: none;
        background-color: var(--primary-color--hover);
        border-radius: 12px;
        transition:
            color 0.2s ease-in,
            background-color 0.2s ease-in;
    }
</style>
