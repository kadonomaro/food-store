<script setup lang="ts">
    type Props = {
        rating: number;
    };

    defineProps<Props>();
</script>

<template>
    <div class="reviews-rating">
        <the-icon
            v-for="index in 5"
            :key="index"
            class="reviews-rating__icon"
            :class="{ 'is-active': index <= rating }"
            name="star"
        ></the-icon>
    </div>
</template>

<style lang="scss">
    .reviews-rating {
        display: flex;
        align-items: center;
    }

    .reviews-rating__icon {
        width: 20px;
        height: 20px;
        fill: var(--secondary-color);
        &.is-active {
            fill: #ffd600;
        }
    }
</style>
