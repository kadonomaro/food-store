<script setup lang="ts">
    import { IProduct } from "~/api/services/products/types";

    type Props = {
        products: IProduct[];
        isLoading: boolean;
    };

    defineProps<Props>();
</script>

<template>
    <div class="product-catalog">
        <h1 class="product-catalog__title page-title">Каталог</h1>
        <div class="product-catalog__list">
            <template v-if="isLoading">
                <div v-for="index in 4" :key="index" class="product-catalog__loader"></div>
            </template>

            <template v-else>
                <div v-for="product in products" :key="product.id" class="product-catalog__item">
                    <product-card :product="product"></product-card>
                </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss">
    .product-catalog {
        padding-bottom: 30px;
        @include media($bp-desktop-sm) {
            padding-bottom: 60px;
        }
    }

    .product-catalog__title {
        margin-bottom: 15px;
        @include media($bp-desktop-sm) {
            margin-bottom: 30px;
        }
    }

    .product-catalog__list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -5px -10px;
        @include media($bp-desktop-sm) {
            margin: 0 -10px -20px;
        }
    }

    .product-catalog__item {
        flex-basis: 50%;
        max-width: 50%;
        padding: 0 5px 10px;
        @include media($bp-desktop-sm) {
            flex-basis: 25%;
            max-width: 25%;
            padding: 0 10px 20px;
        }
    }

    .product-catalog__loader {
        flex-basis: calc(50% - 10px);
        max-width: calc(50% - 10px);
        margin: 0 5px 10px;
        background-color: #fff;
        border-radius: var(--border-radius--md);
        &::before {
            content: "";
            display: block;
            padding-bottom: 138%;
        }
        @include media($bp-desktop-sm) {
            flex-basis: calc(25% - 20px);
            max-width: calc(25% - 20px);
            margin: 0 10px 20px;
        }
    }
</style>
