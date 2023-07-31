<script setup lang="ts">
    import BaseIcon from "~/components/BaseIcon.vue";

    type Props = {
        rating: number;
    };

    defineProps<Props>();
</script>

<template>
    <div class="reviews-rating">
        <base-icon
            v-for="index in 5"
            :key="index"
            class="reviews-rating__icon"
            :class="{ 'is-active': index <= rating }"
            name="star"
        ></base-icon>
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
