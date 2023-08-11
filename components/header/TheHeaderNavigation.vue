<script setup lang="ts">
    const navigationList = [
        { title: "Каталог", name: "index", hash: "#catalog" },
        { title: "Отзывы", name: "index", hash: "#reviews" },
    ];
</script>

<template>
    <nav class="the-header-navigation">
        <ul class="the-header-navigation__list">
            <li v-for="(navigation, index) in navigationList" :key="index" class="the-header-navigation__item">
                <nuxt-link :to="{ name: navigation.name, hash: navigation.hash }" class="the-header-navigation__link">
                    {{ navigation.title }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-header-navigation__list {
        @include media($bp-desktop-sm) {
            display: flex;
            align-items: center;
            margin: 0 -15px;
        }
    }

    .the-header-navigation__item {
        @include media($bp-desktop-sm) {
            margin: 0 15px;
        }
    }

    .the-header-navigation__link {
        @include media($bp-desktop-sm) {
            display: block;
            color: #3e5f8a;
            font-size: 18px;
            font-weight: 500;
            line-height: 20px;
            text-decoration: none;
        }
    }
</style>
