<script setup lang="ts">
    import { IProduct } from "~/api/services/products/types";

    type Props = {
        product: IProduct;
    };

    const { product } = defineProps<Props>();

    const path = computed(() => {
        return { name: "products-slug", params: { slug: product.slug } };
    });
</script>

<template>
    <div class="product-card">
        <NuxtLink :to="path" class="product-card__image">
            <img :src="product.imagePreview" :alt="product.name" />
        </NuxtLink>

        <div class="product-card__body">
            <NuxtLink :to="path" class="product-card__name">
                {{ product.name }}
            </NuxtLink>
            <div class="product-card__text"></div>
        </div>

        <div class="product-card__footer">
            <div class="product-card__price">{{ product.price }}&nbsp;₽</div>
        </div>
    </div>
</template>

<style lang="scss">
    .product-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius: var(--border-radius--md);
        background-color: #fff;
        overflow: hidden;
        transition: box-shadow 0.2s ease-in;
        &:hover {
            box-shadow: 0 0 20px rgba(#000, 0.05);
            .product-card__image {
                img {
                    transform: scale(1.03);
                }
            }
        }
    }

    .product-card__image {
        position: relative;
        display: block;
        &::before {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
        img {
            @include center-absolute(0);
            width: 100%;
            transition: transform 0.2s ease-in;
            will-change: transform;
        }
    }

    .product-card__body {
        margin-bottom: auto;
        padding: 10px;
        @include media($bp-desktop-sm) {
            padding: 20px;
        }
    }

    .product-card__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px 10px;
        @include media($bp-desktop-sm) {
            padding: 0 20px 20px;
        }
    }

    .product-card__name {
        color: var(--primary-text);
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        text-decoration: none;
        @include media($bp-desktop-sm) {
            font-size: 18px;
            line-height: 24px;
        }
    }

    .product-card__price {
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: -0.03em;
        text-decoration: none;
        @include media($bp-desktop-sm) {
            font-size: 28px;
            line-height: 32px;
        }
    }
</style>
