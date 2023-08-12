<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useProductsStore } from "~/store";

    const route = useRoute();
    const slug = route.params.slug as string;

    const { productDetail } = storeToRefs(useProductsStore());
    const { getProduct, clearProduct } = useProductsStore();

    onServerPrefetch(() => {
        return getProduct(slug);
    });

    onMounted(() => {
        if (!productDetail.value) {
            getProduct(slug);
        }
    });

    onBeforeUnmount(() => {
        clearProduct();
    });
</script>

<template>
    <div v-if="productDetail" class="product-detail">
        <div class="container">
            <div class="product-detail__breadcrumbs">
                <product-breadcrumbs
                    :product-name="productDetail.name"
                    :product-category-id="productDetail.categoryId"
                ></product-breadcrumbs>
            </div>

            <div class="product-detail__inner">
                <div class="product-detail__gallery">
                    <div class="product-detail__image">
                        <img :src="productDetail.imageDetail" :alt="productDetail.name" />
                    </div>
                </div>

                <aside class="product-detail__side">
                    <h1 class="product-detail__title page-title">{{ productDetail.name }}</h1>
                    <div class="product-detail__text">{{ productDetail.text }}</div>
                </aside>
            </div>

            <div class="product-detail__similar">
                <product-similar
                    :product-id="productDetail.id"
                    :category-id="productDetail.categoryId"
                ></product-similar>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .product-detail {
        padding: 20px 0 30px;
        background-color: var(--primary-background);
        @include media($bp-desktop-sm) {
            padding: 40px 0 60px;
        }
    }

    .product-detail__breadcrumbs {
        margin-bottom: 20px;
        @include media($bp-desktop-sm) {
            margin-bottom: 20px;
        }
    }

    .product-detail__inner {
        margin-bottom: 50px;
        @include media($bp-desktop-sm) {
            display: flex;
            align-items: flex-start;
            margin-bottom: 100px;
        }
    }

    .product-detail__gallery {
        margin-bottom: 20px;
        padding: 10px;
        background-color: #fff;
        border-radius: var(--border-radius--md);
        overflow: hidden;
        @include media($bp-desktop-sm) {
            @include sticky(120px);
            flex-basis: 600px;
            max-width: 600px;
            flex-shrink: 0;
            margin-bottom: 0;
            margin-right: 40px;
        }
    }

    .product-detail__image {
        position: relative;
        img {
            @include center-absolute(0);
        }
        &::before {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
        @include media($bp-desktop-sm) {
        }
    }

    .product-detail__side {
        @include media($bp-desktop-sm) {
        }
    }

    .product-detail__title {
        margin-bottom: 15px;
        @include media($bp-desktop-sm) {
            margin-bottom: 30px;
        }
    }

    .product-detail__text {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        @include media($bp-desktop-sm) {
            max-width: 400px;
            font-size: 18px;
            line-height: 24px;
        }
    }
</style>
