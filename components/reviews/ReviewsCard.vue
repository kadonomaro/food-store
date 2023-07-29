<script setup lang="ts">
    import { formatDate } from "~/utils";
    import { IReview } from "~/api/services/reviews/types";

    type Props = {
        review: IReview;
    };

    defineProps<Props>();
</script>

<template>
    <div class="reviews-card">
        <div class="reviews-card__header">
            <div class="reviews-card__date">{{ formatDate(review.date) }}</div>
            <div class="reviews-card__rating">
                <reviews-rating :rating="review.rating"></reviews-rating>
            </div>
        </div>
        <div class="reviews-card__author">{{ review.author }}</div>
        <div class="reviews-card__text" v-html="review.text"></div>
    </div>
</template>

<style lang="scss">
    .reviews-card {
        height: 100%;
        padding: 10px;
        border-radius: var(--border-radius--md);
        background-color: var(--primary-background);
        @include media($bp-desktop-sm) {
            padding: 20px;
        }
    }

    .reviews-card__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        @include media($bp-desktop-sm) {
            margin-bottom: 20px;
        }
    }

    .reviews-card__date {
        color: var(--secondary-color);
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        @include media($bp-desktop-sm) {
            font-size: 14px;
            line-height: 20px;
        }
    }

    .reviews-card__author {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        @include media($bp-desktop-sm) {
            margin-bottom: 10px;
            font-size: 18px;
            line-height: 24px;
        }
    }

    .reviews-card__text {
        font-size: 14px;
        line-height: 20px;
        @include media($bp-desktop-sm) {
            font-size: 16px;
            line-height: 24px;
        }
    }
</style>
