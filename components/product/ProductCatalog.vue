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
        <div class="product-catalog__list">
            <div v-if="isLoading" class="product-catalog__loader">Loading...</div>

            <div v-if="products.length === 0 && !isLoading" class="product-catalog__empty">
                Empty products
            </div>

            <template v-else>
                <div
                    v-for="product in products"
                    :key="product.id"
                    class="product-catalog__item"
                >
                    <product-card :product="product"></product-card>
                </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss">
    .product-catalog {
        @include media($bp-desktop-sm) {
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
</style>
