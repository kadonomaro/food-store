<script setup lang="ts">
    type Props = {
        card: {
            title: string;
            text: string;
            image: string;
        };
    };

    defineProps<Props>();
</script>

<template>
    <div class="home-about-card">
        <div class="home-about-card__image">
            <img :src="`/assets/home/about/${card.image}`" alt="" />
        </div>
        <div class="home-about-card__title">{{ card.title }}</div>
        <div class="home-about-card__text" v-html="card.text"></div>
    </div>
</template>

<style lang="scss">
    .home-about-card {
        height: 100%;
        padding: 10px;
        text-align: center;
        border-radius: var(--border-radius--md);
        background-color: #fff;
        @include media($bp-desktop-sm) {
            padding: 20px;
        }
    }

    .home-about-card__image {
        position: relative;
        max-width: 150px;
        margin: 0 auto;
        &::before {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
        img {
            @include center-absolute(0);
        }
        @include media($bp-desktop-sm) {
            max-width: 200px;
        }
    }

    .home-about-card__title {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        @include media($bp-desktop-sm) {
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 24px;
        }
    }

    .home-about-card__text {
        font-size: 12px;
        line-height: 20px;
        @include media($bp-desktop-sm) {
            font-size: 14px;
            line-height: 22px;
        }
    }
</style>
